import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { SiteLayout } from "@/components/site/site-layout";
import { ProjectCard } from "@/components/site/project-card";
import { Reveal } from "@/components/site/reveal";
import { categoryIds, projects, type CategoryId } from "@/data/projects";
import { useCategoryNames } from "@/i18n/project-copy";
import { cn } from "@/lib/utils";

type Filter = "all" | CategoryId;

const Work = () => {
  const { t } = useTranslation();
  const categoryNames = useCategoryNames();
  const [filter, setFilter] = useState<Filter>("all");

  const counts = useMemo(
    () =>
      categoryIds.reduce<Record<string, number>>((acc, category) => {
        acc[category] = projects.filter((project) => project.category === category).length;
        return acc;
      }, {}),
    [],
  );

  const visible = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <SiteLayout>
      <section className="shell pt-14 sm:pt-20">
        <Reveal>
          <p className="eyebrow">{t("work.eyebrow", { count: projects.length })}</p>
          <h1 className="mt-5 display text-[clamp(2.6rem,6vw,5rem)] text-foreground">
            {t("work.title1")}
            <br /> {t("work.title2")}
            <span className="text-accent">.</span>
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            {t("work.desc")}
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
            {t("work.filterAll")} · {projects.length}
          </button>
          {categoryIds.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              className={cn(
                "rounded-sm border px-3.5 py-2 font-mono text-[10.5px] uppercase tracking-[0.16em] transition-colors",
                filter === category
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground",
              )}
            >
              {categoryNames[category]} · {counts[category]}
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
            {t("work.empty")}
          </p>
        )}
      </section>
    </SiteLayout>
  );
};

export default Work;
