import { FatherInfo } from "../data/hitmanDataset";
import { Award, Compass, HeartPulse, UserCheck, Trash2 } from "lucide-react";
import { motion } from "motion/react";

interface FathersViewProps {
  fathers: FatherInfo[];
}

export default function FathersView({ fathers }: FathersViewProps) {
  // Container wrapper animation
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <div className="space-y-6">
      {/* Top conceptual brief explainer */}
      <div className="bg-white/5 p-5 rounded-sm border-t border-white/10">
        <h3 className="font-display font-bold text-sm tracking-wide text-white uppercase mb-2 flex items-center gap-2">
          <HeartPulse className="w-5 h-5 text-red-500 animate-pulse" />
          I Cinque Padri ("Blood and Muscle Project")
        </h3>
        <p className="text-xs text-slate-400 leading-relaxed">
          Il Progetto Ort-Meyer si fonda su un'alleanza esecrabile stretta negli anni '50 tra cinque ex commilitoni della Legione Straniera Francese. 
          Ognuno di loro ha donato il proprio capitale genetico e finanziamenti massicci in cambio di un prolungamento innaturale della vecchiaia, 
          ottenuto tramite organi compatibili prelevati dai cloni falliti del Satu Mare Asylum. Finiranno tutti giustiziati dal loro stesso "figlio perfetto", l'Agente 47.
        </p>
      </div>

      {/* Grid List of the Five Fathers */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4"
      >
        {fathers.map((father, i) => (
          <motion.div
            key={father.name}
            variants={item}
            className="bg-black/40 backdrop-blur-md rounded-sm border border-white/5 p-5 flex flex-col justify-between group hover:border-red-650/40 transition-colors duration-350"
          >
            <div className="space-y-4">
              {/* Card visual badge header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <span className="font-mono text-[9px] text-slate-500 font-bold uppercase tracking-wider">
                  PADRE #{String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-[9px] uppercase font-mono tracking-widest bg-red-950/20 text-red-500 px-2 py-0.5 rounded-sm border border-red-900/40 font-bold">
                  GENETIC_DONOR
                </span>
              </div>

              {/* Title & Role */}
              <div>
                <h4 className="font-display font-bold text-[15px] tracking-wide text-white uppercase leading-tight group-hover:text-red-500 transition-colors duration-200">
                  {father.name}
                </h4>
                <p className="text-[10px] text-slate-500 font-mono font-semibold uppercase tracking-wider mt-1">
                  ROLE // {father.role}
                </p>
              </div>

              {/* Genetic / Financial Contribution details */}
              <div className="space-y-1">
                <span className="text-[9px] uppercase font-mono tracking-widest text-[#94a3b8]/60 block flex items-center gap-1 font-bold">
                  <UserCheck className="w-3 h-3 text-red-500" />
                  CONTRIBUTO
                </span>
                <p className="text-slate-300 text-xs leading-relaxed font-serif italic">
                  {father.contribution}
                </p>
              </div>
            </div>

            {/* Simulated ironic fate section */}
            <div className="mt-5 pt-3 border-t border-white/5 space-y-1.5">
              <span className="text-[9px] uppercase font-mono tracking-widest text-red-500 block flex items-center gap-1 font-semibold">
                <Trash2 className="w-3 h-3 text-red-500" />
                DESTINO FINALE
              </span>
              <p className="text-slate-400 text-[11px] leading-snug italic font-mono">
                "{father.fate}"
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
