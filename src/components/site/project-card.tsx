import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { categoryLabel, type Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
  showIndex?: boolean;
  className?: string;
}

export const ProjectCard = ({ project, index, showIndex = false, className }: ProjectCardProps) => (
  <Link
    to={`/work/${project.slug}`}
    className={cn("group relative block focus-visible:outline-none", className)}
    aria-label={`${project.title} — ${project.tagline}`}
  >
    <div className="hover-zoom relative aspect-[4/3] overflow-hidden rounded-sm border border-border bg-surface">
      <img
        src={project.cover}
        alt={project.title}
        loading="lazy"
        crossOrigin="anonymous"
        className="h-full w-full object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 sm:p-5">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/70">
            {categoryLabel(project.category)} · {project.year}
          </p>
          <h3 className="mt-1.5 font-display text-2xl leading-tight text-foreground sm:text-[26px]">
            {project.title}
          </h3>
        </div>
        <span className="mb-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-foreground/25 text-foreground transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      {showIndex && index !== undefined && (
        <span className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/60 sm:left-5 sm:top-5">
          {String(index + 1).padStart(2, "0")}
        </span>
      )}
    </div>

    <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground/90">
      {project.tagline}
    </p>
  </Link>
);
