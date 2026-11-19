import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface WordmarkProps {
  className?: string;
  compact?: boolean;
}

export const Wordmark = ({ className, compact = false }: WordmarkProps) => (
  <Link
    to="/"
    aria-label="StasMobStudios — home"
    className={cn("group flex items-baseline gap-2.5", className)}
  >
    <span className="font-display text-[22px] leading-none tracking-[-0.01em] text-foreground">
      StasMob
      <span className="text-accent">.</span>
    </span>
    {!compact && (
      <span className="hidden font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground transition-colors group-hover:text-foreground sm:inline">
        Studios
      </span>
    )}
  </Link>
);
