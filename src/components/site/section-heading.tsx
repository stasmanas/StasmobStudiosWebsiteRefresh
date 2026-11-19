import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  index: string;
  title: string;
  description?: string;
  link?: { to: string; label: string };
  action?: ReactNode;
  className?: string;
}

export const SectionHeading = ({
  index,
  title,
  description,
  link,
  action,
  className,
}: SectionHeadingProps) => (
  <div className={cn("flex flex-col gap-6 border-t border-border pt-6 md:flex-row md:items-start md:justify-between", className)}>
    <div className="flex gap-6">
      <span className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-accent">{index}</span>
      <div className="max-w-xl">
        <h2 className="font-display text-[clamp(2rem,3.6vw,3rem)] leading-[1.02] text-foreground">{title}</h2>
        {description && (
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
    {link ? (
      <Link
        to={link.to}
        className="group inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
      >
        {link.label}
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    ) : (
      action
    )}
  </div>
);
