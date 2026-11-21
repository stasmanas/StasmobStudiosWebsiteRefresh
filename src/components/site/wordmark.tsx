import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface WordmarkProps {
  className?: string;
  compact?: boolean;
}

export const Wordmark = ({ className, compact = false }: WordmarkProps) => (
  <Link
    to="/"
    aria-label="StasMobStudios (SMS) — home"
    className={cn("group flex items-center gap-2.5", className)}
  >
    <span
      aria-hidden="true"
      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[3px] border border-accent/45 bg-accent/10 font-mono text-[8px] font-medium uppercase leading-none tracking-[0.04em] text-accent transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground"
    >
      SMS
    </span>
    <span className="flex items-baseline gap-2.5">
      <span className="font-display text-[22px] leading-none tracking-[-0.01em] text-foreground">
        StasMob
        <span className="text-accent">.</span>
      </span>
      {!compact && (
        <span className="hidden font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground transition-colors group-hover:text-foreground sm:inline">
          Studios
        </span>
      )}
    </span>
  </Link>
);
