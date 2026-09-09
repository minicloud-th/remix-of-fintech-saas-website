import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useMotionSafe, viewportOnce } from "./motion";

const faqs = [
  {
    q: "Is DEV free to use?",
    a: "Yes. The Android app is free, with generous daily usage. Heavier workloads can move to a paid tier later.",
  },
  {
    q: "Why an APK instead of the Play Store?",
    a: "The store listing is in review. The APK is the same signed build, so early users don't have to wait.",
  },
  {
    q: "Do you train on my conversations?",
    a: "No. Your chats are never used to train models, and you can delete any thread permanently at any time.",
  },
  {
    q: "Can DEV read files?",
    a: "Documents, spreadsheets, logs and images can be attached to any message, and DEV answers with the file in context.",
  },
  {
    q: "Will there be an iOS app?",
    a: "It's in progress. The web app works on iOS today and syncs with your Android threads.",
  },
];

const DevFaq = () => {
  const { fadeUp, stagger } = useMotionSafe();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 border-t border-dev-line py-24 sm:py-32">
      <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
        <motion.h2
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-[28px] font-semibold tracking-[-0.03em] text-dev-ink sm:text-[38px]"
        >
          Questions, answered.
        </motion.h2>

        <motion.div
          variants={stagger(0.07, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 divide-y divide-dev-line border-y border-dev-line"
        >
          {faqs.map((item, index) => {
            const isOpen = open === index;
            return (
              <motion.div key={item.q} variants={fadeUp(0)}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="text-[16px] font-medium text-dev-ink">{item.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-dev-line text-dev-ink-soft"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 pr-10 text-[14.5px] leading-relaxed text-dev-ink-soft">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default DevFaq;
