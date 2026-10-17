import * as topojson from "topojson-client";
import { geoEquirectangular, geoPath, geoGraticule10, geoInterpolate } from "d3-geo";
import worldData from "world-atlas/countries-110m.json";

export const MAP_WIDTH = 800;
export const MAP_HEIGHT = 400;

// Equirectangular projection calibrated for 800x400 (aspect ratio 2:1)
export const projection = geoEquirectangular()
  .scale(MAP_WIDTH / (2 * Math.PI))
  .translate([MAP_WIDTH / 2, MAP_HEIGHT / 2]);

export const pathGenerator = geoPath(projection);

// Extract TopoJSON geometry
// Type casting needed because worldData is imported raw JSON
const topoLand = topojson.feature(worldData as any, (worldData as any).objects.land as any);
const topoBorders = topojson.mesh(
  worldData as any,
  (worldData as any).objects.countries as any,
  (a: any, b: any) => a !== b
);
const topoCountries = topojson.feature(worldData as any, (worldData as any).objects.countries as any) as any;

// Pre-computed primary paths
export const WORLD_LAND_PATH = pathGenerator(topoLand as any) || "";
export const WORLD_BORDERS_PATH = pathGenerator(topoBorders as any) || "";
export const WORLD_GRATICULE_PATH = pathGenerator(geoGraticule10() as any) || "";

export interface CountryPathItem {
  id: string;
  name: string;
  path: string;
}

export const COUNTRIES_LIST: CountryPathItem[] = (topoCountries.features || [])
  .map((feature: any) => ({
    id: String(feature.id || ""),
    name: String(feature.properties?.name || "Territorio Sconosciuto"),
    path: pathGenerator(feature) || ""
  }))
  .filter((c: CountryPathItem) => c.path.length > 0);

// Helper to convert longitude & latitude to SVG [x, y] coordinates
export function projectCoordinates(lon: number, lat: number): [number, number] {
  const coords = projection([lon, lat]);
  return coords ? [coords[0], coords[1]] : [MAP_WIDTH / 2, MAP_HEIGHT / 2];
}

// Helper to invert SVG [x, y] back to [lon, lat]
export function invertCoordinates(x: number, y: number): [number, number] {
  const coords = projection.invert ? projection.invert([x, y]) : [0, 0];
  return coords ? [coords[0], coords[1]] : [0, 0];
}

// Format coordinates to military/aviation style string: 48°51' N, 02°21' E
export function formatCoordinates(lon: number, lat: number): { latStr: string; lonStr: string } {
  const latDir = lat >= 0 ? "N" : "S";
  const lonDir = lon >= 0 ? "E" : "W";
  const absLat = Math.abs(lat);
  const absLon = Math.abs(lon);

  const latDeg = Math.floor(absLat);
  const latMin = Math.floor((absLat - latDeg) * 60);

  const lonDeg = Math.floor(absLon);
  const lonMin = Math.floor((absLon - lonDeg) * 60);

  return {
    latStr: `${latDeg.toString().padStart(2, "0")}°${latMin.toString().padStart(2, "0")}' ${latDir}`,
    lonStr: `${lonDeg.toString().padStart(3, "0")}°${lonMin.toString().padStart(2, "0")}' ${lonDir}`
  };
}

// Generate smooth flight curve path between two locations
export function createFlightArc(startLon: number, startLat: number, endLon: number, endLat: number): string {
  // If points are very close, return straight line
  const [x1, y1] = projectCoordinates(startLon, startLat);
  const [x2, y2] = projectCoordinates(endLon, endLat);

  // If longitude span crosses the antimeridian, break or return straight
  if (Math.abs(startLon - endLon) > 180) {
    return `M ${x1},${y1} L ${x2},${y2}`;
  }

  try {
    const interpolator = geoInterpolate([startLon, startLat], [endLon, endLat]);
    const numSteps = 16;
    const points: [number, number][] = [];
    for (let i = 0; i <= numSteps; i++) {
      const t = i / numSteps;
      const [lon, lat] = interpolator(t);
      points.push(projectCoordinates(lon, lat));
    }
    return points.reduce((acc, [x, y], idx) => {
      return idx === 0 ? `M ${x.toFixed(1)},${y.toFixed(1)}` : `${acc} L ${x.toFixed(1)},${y.toFixed(1)}`;
    }, "");
  } catch {
    // Fallback quadratic curve
    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2 - Math.min(60, Math.hypot(x2 - x1, y2 - y1) * 0.2);
    return `M ${x1},${y1} Q ${midX},${midY} ${x2},${y2}`;
  }
}
