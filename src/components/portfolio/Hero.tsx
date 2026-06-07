import { motion } from "framer-motion";
import { ArrowDown, Cpu, Brain, Gamepad2, Wrench } from "lucide-react";
import { profile } from "@/data/portfolioData";

const tagIcons: Record<string, typeof Cpu> = {
  "Công nghệ": Cpu,
  AI: Brain,
  Pokémon: Gamepad2,
  "Digital Tools": Wrench,
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  return (
    <section
      id="gioi-thieu"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-28 pb-16"
    >
      {/* nền trang trí */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 -top-24 h-96 w-96 rounded-full gradient-ocean opacity-20 blur-3xl" />
        <div className="absolute -bottom-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-accent opacity-25 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.slate.200)_1px,transparent_0)] [background-size:28px_28px] opacity-50" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-5xl text-center"
      >
        <motion.div
          variants={item}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-semibold text-primary shadow-soft"
        >
          <span className="h-2 w-2 animate-pulse rounded-full gradient-ocean" />
          Digital Learning Journal · Học kỳ 2025
        </motion.div>

        <motion.p
          variants={item}
          className="text-sm font-bold uppercase tracking-[0.3em] text-secondary-foreground/70"
        >
          {profile.courseTitle}
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-4 text-6xl font-extrabold leading-[0.95] sm:text-7xl md:text-8xl"
        >
          <span className="gradient-ocean-text">{profile.name}</span>
        </motion.h1>

        <motion.div
          variants={item}
          className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-muted-foreground"
        >
          <span className="rounded-full bg-secondary px-4 py-1.5">MSSV: {profile.studentId}</span>
          <span className="rounded-full bg-secondary px-4 py-1.5">Ngành: {profile.major}</span>
        </motion.div>

        <motion.p
          variants={item}
          className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground"
        >
          {profile.intro}
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-wrap justify-center gap-3">
          {profile.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-2xl border border-border bg-card px-5 py-2.5 text-sm font-bold text-foreground shadow-soft transition-transform hover:-translate-y-1"
            >
              {tag}
            </span>
          ))}
        </motion.div>


        <motion.div variants={item} className="mt-10">
          <button
            onClick={() =>
              document.getElementById("hanh-trinh")?.scrollIntoView({ behavior: "smooth" })
            }
            className="group inline-flex items-center gap-2 rounded-2xl gradient-ocean px-7 py-4 text-base font-bold text-white shadow-glow transition-transform hover:-translate-y-1 active:translate-y-0"
          >
            Khám phá hành trình học tập
            <ArrowDown className="h-5 w-5 transition-transform group-hover:translate-y-1" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
