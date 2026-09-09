import { motion } from "framer-motion";
import { BarChart3, BookOpen, Code2, Languages, ShieldCheck, Zap } from "lucide-react";
import { useMotionSafe, viewportOnce } from "./motion";

const features = [
  {
    icon: Zap,
    title: "Answers in a breath",
    body: "Streaming responses that start the moment you hit send, so you never watch a spinner.",
  },
  {
    icon: BookOpen,
    title: "Grounded in sources",
    body: "Every answer can cite where it came from, so you can verify instead of guess.",
  },
  {
    icon: Code2,
    title: "Built for builders",
    body: "Explain a stack trace, refactor a function, or draft a migration without leaving the chat.",
  },
  {
    icon: BarChart3,
    title: "Reads your data",
    body: "Drop in a CSV or a log file and ask what actually changed — DEV does the analysis.",
  },
  {
    icon: Languages,
    title: "Speaks your language",
    body: "Fluent across dozens of languages, with tone that adapts to how you write.",
  },
  {
    icon: ShieldCheck,
    title: "Private by default",
    body: "Your conversations stay yours. No training on your chats, ever.",
  },
];

const DevFeatures = () => {
  const { fadeUp, stagger } = useMotionSafe();

  return (
    <section id="features" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-2xl"
        >
          <motion.h2
            variants={fadeUp(0)}
            className="text-[28px] font-semibold tracking-[-0.03em] text-dev-ink sm:text-[38px]"
          >
            Everything you'd ask a very good colleague.
          </motion.h2>
          <motion.p variants={fadeUp(0.08)} className="mt-4 text-[16px] leading-relaxed text-dev-ink-soft">
            One assistant for research, analysis, writing and code — without a drawer full of tabs.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger(0.09, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-dev-line bg-dev-line sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map(({ icon: Icon, title, body }) => (
            <motion.article
              key={title}
              variants={fadeUp(0)}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-dev-surface p-7 transition-colors duration-300 hover:bg-dev-elevated"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-dev-accent-soft text-dev-accent transition-transform duration-300 group-hover:scale-105">
                <Icon className="h-[18px] w-[18px]" />
              </span>
              <h3 className="mt-5 text-[17px] font-semibold tracking-[-0.01em] text-dev-ink">{title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-dev-ink-soft">{body}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DevFeatures;
