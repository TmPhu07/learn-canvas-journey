import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Folder,
  Search,
  Wand2,
  Users,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  X,
  Target,
  ListChecks,
  Trophy,
  Lightbulb,
  FileText,
  type LucideIcon,
} from "lucide-react";
import { assignments, type Assignment } from "@/data/portfolioData";

const iconMap: Record<string, LucideIcon> = {
  Folder,
  Search,
  Wand2,
  Users,
  Sparkles,
  ShieldCheck,
};

const ease = [0.22, 1, 0.36, 1] as const;

export function JourneySection() {
  const [active, setActive] = useState<Assignment | null>(null);

  return (
    <section id="hanh-trinh" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-primary">
            Learning Journey
          </span>
          <h2 className="mt-5 text-4xl font-extrabold sm:text-5xl">Hành trình học tập</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Mỗi bài tập là một trạm dừng trong hành trình khám phá công nghệ số và trí tuệ nhân tạo.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {assignments.map((a, i) => {
            const Icon = iconMap[a.icon] ?? Sparkles;
            return (
              <motion.article
                key={a.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease, delay: (i % 3) * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-soft"
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full gradient-ocean opacity-10 blur-2xl transition-opacity group-hover:opacity-25" />

                <div className="flex items-center justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl gradient-ocean text-white shadow-soft">
                    <Icon className="h-7 w-7" />
                  </span>
                  <span className="font-display text-5xl font-extrabold text-secondary">
                    {String(a.id).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold leading-snug">{a.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {a.shortDescription}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    {a.status === "completed" ? "Hoàn thành" : "Đang thực hiện"}
                  </span>
                  <button
                    onClick={() => setActive(a)}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-colors hover:text-secondary-foreground"
                  >
                    Xem chi tiết
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <AssignmentModal assignment={active} onClose={() => setActive(null)} />
    </section>
  );
}

function DetailBlock({
  icon: Icon,
  label,
  text,
}: {
  icon: LucideIcon;
  label: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-secondary/40 p-4">
      <div className="flex items-center gap-2 text-sm font-bold text-primary">
        <Icon className="h-4 w-4" />
        {label}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}

function AssignmentModal({
  assignment,
  onClose,
}: {
  assignment: Assignment | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {assignment && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[60] flex items-end justify-center bg-foreground/40 p-4 backdrop-blur-sm sm:items-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ duration: 0.35, ease }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-3xl glass p-7 shadow-glow sm:p-9"
          >
            <button
              onClick={onClose}
              className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-2xl bg-card text-foreground shadow-soft transition-transform hover:rotate-90"
              aria-label="Đóng"
            >
              <X className="h-5 w-5" />
            </button>

            <span className="font-display text-sm font-bold uppercase tracking-widest text-primary">
              Bài {String(assignment.id).padStart(2, "0")} · Nhật ký học tập
            </span>
            <h3 className="mt-2 pr-12 text-2xl font-extrabold sm:text-3xl">{assignment.title}</h3>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <DetailBlock icon={Target} label="Mục tiêu" text={assignment.goal} />
              <DetailBlock icon={ListChecks} label="Quá trình thực hiện" text={assignment.process} />
              <DetailBlock icon={Trophy} label="Kết quả đạt được" text={assignment.result} />
              <DetailBlock icon={Lightbulb} label="Bài học rút ra" text={assignment.lesson} />
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {assignment.driveLink && assignment.driveLink !== "#" && (
                <a
                  href={assignment.driveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl gradient-ocean px-5 py-3 text-sm font-bold text-white shadow-soft transition-transform hover:-translate-y-0.5"
                >
                  <FileText className="h-4 w-4" />
                  Xem file
                </a>
              )}
            </div>


          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
