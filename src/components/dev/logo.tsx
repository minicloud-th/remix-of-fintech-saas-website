import { cn } from "@/lib/utils";

const DevLogo = ({ className }: { className?: string }) => (
  <span className={cn("inline-flex items-center gap-2.5", className)}>
    <span className="relative grid h-8 w-8 place-items-center rounded-[10px] bg-dev-ink text-dev-bg">
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
        <path
          d="M5 5.5h6.2c4 0 6.8 2.6 6.8 6.5S15.2 18.5 11.2 18.5H5"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="19.2" cy="6.2" r="2.2" className="fill-dev-accent" />
      </svg>
    </span>
    <span className="text-[17px] font-semibold tracking-[-0.02em] text-dev-ink">DEV</span>
  </span>
);

export default DevLogo;
