import { useMemo, useState } from "react";
import { SiteLayout } from "@/components/site/site-layout";
import { ProjectCard } from "@/components/site/project-card";
import { Reveal } from "@/components/site/reveal";
import { categories, projects, type CategoryId } from "@/data/projects";
import { cn } from "@/lib/utils";

type Filter = "all" | CategoryId;

const Work = () => {
  const [filter, setFilter] = useState<Filter>("all");

  const counts = useMemo(
    () =>
      categories.reduce<Record<string, number>>((acc, category) => {
        acc[category.id] = projects.filter((project) => project.category === category.id).length;
        return acc;
      }, {}),
    [],
  );

  const visible = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <SiteLayout>
      <section className="shell pt-14 sm:pt-20">
        <Reveal>
          <p className="eyebrow">Work — {projects.length} projects</p>
          <h1 className="mt-5 display text-[clamp(2.6rem,6vw,5rem)] text-foreground">
            Fifteen years of
            <br /> shipped work<span className="text-accent">.</span>
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            Mobile apps, web platforms, museum terminals and the occasional sound installation.
            Some of these are still running in production; a few are open source.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-10 flex flex-wrap gap-2 border-t border-border pt-6">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={cn(
              "rounded-sm border px-3.5 py-2 font-mono text-[10.5px] uppercase tracking-[0.16em] transition-colors",
              filter === "all"
                ? "border-accent bg-accent text-accent-foreground"
                : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground",
            )}
          >
            All · {projects.length}
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setFilter(category.id)}
              className={cn(
                "rounded-sm border px-3.5 py-2 font-mono text-[10.5px] uppercase tracking-[0.16em] transition-colors",
                filter === category.id
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground",
              )}
            >
              {category.label} · {counts[category.id]}
            </button>
          ))}
        </Reveal>
      </section>

      <section className="shell pb-4 pt-10">
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, index) => (
            <Reveal key={project.slug} delay={(index % 3) * 60}>
              <ProjectCard project={project} showIndex index={projects.indexOf(project)} />
            </Reveal>
          ))}
        </div>
        {visible.length === 0 && (
          <p className="border-t border-border py-16 text-sm text-muted-foreground">
            Nothing in this category yet.
          </p>
        )}
      </section>
    </SiteLayout>
  );
};

export default Work;
