import { motion } from "framer-motion";
import {
  BookOpen,
  Trophy,
  Target,
  Wand2,
  Compass,
  Quote,
  type LucideIcon,
} from "lucide-react";
import { summary } from "@/data/portfolioData";

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Trophy,
  Target,
  Wand2,
  Compass,
};

const ease = [0.22, 1, 0.36, 1] as const;

export function SummarySection() {
  return (
    <section id="tong-ket" className="relative overflow-hidden px-4 py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-accent opacity-20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-primary">
            Tổng kết
          </span>
          <h2 className="mt-5 text-4xl font-extrabold sm:text-5xl">Tổng kết hành trình</h2>
          <p className="mt-4 text-lg text-muted-foreground">{summary.intro}</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-16 pl-4 sm:pl-0">
          <div className="absolute left-[27px] top-2 h-full w-0.5 bg-border sm:left-1/2 sm:-translate-x-1/2" />
          <div className="space-y-8">
            {summary.timeline.map((t, i) => {
              const Icon = iconMap[t.icon] ?? BookOpen;
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={t.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, ease, delay: 0.05 }}
                  className={`relative flex items-start gap-5 sm:w-1/2 ${
                    left ? "sm:pr-12" : "sm:ml-auto sm:flex-row-reverse sm:pl-12"
                  }`}
                >
                  <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl gradient-ocean text-white shadow-soft">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div
                    className={`flex-1 rounded-3xl border border-border bg-card p-5 shadow-soft ${
                      left ? "sm:text-right" : "sm:text-left"
                    }`}
                  >
                    <h3 className="text-lg font-bold">{t.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {t.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Quote nổi bật */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="relative mt-20 overflow-hidden rounded-[2rem] gradient-ocean p-1 shadow-glow"
        >
          <div className="rounded-[1.85rem] bg-card/10 p-8 backdrop-blur-md sm:p-14">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
                <Quote className="h-4 w-4" />
                {summary.highlightLabel}
              </span>
              <p className="mt-6 font-display text-2xl font-bold leading-snug text-white sm:text-3xl md:text-4xl">
                “{summary.highlightQuote}”
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
