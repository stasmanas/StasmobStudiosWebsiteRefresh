import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/site/site-layout";
import { Reveal } from "@/components/site/reveal";
import { categoryLabel, getProject, projects } from "@/data/projects";
import { studio } from "@/data/studio";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProject(slug);

  if (!project) {
    return (
      <SiteLayout>
        <section className="shell py-24">
          <p className="eyebrow">Not found</p>
          <h1 className="mt-4 display text-[clamp(2.4rem,5vw,4rem)] text-foreground">
            This project is not in the archive.
          </h1>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            It may have been renamed. Everything we have published is listed on the work page.
          </p>
          <Link
            to="/work"
            className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to work
          </Link>
        </section>
      </SiteLayout>
    );
  }

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];

  const meta = [
    project.client && { label: "Client", value: project.client },
    { label: "Date", value: project.date },
    { label: "Discipline", value: categoryLabel(project.category) },
    project.tags.length > 0 && { label: "Tags", value: project.tags.join(", ") },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <SiteLayout>
      <section className="shell pt-10 sm:pt-14">
        <Reveal>
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
            All work
          </Link>
        </Reveal>

        <Reveal delay={60} className="mt-8 grid gap-10 border-t border-border pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="eyebrow">
              {categoryLabel(project.category)} — {project.date}
            </p>
            <h1 className="mt-4 display text-[clamp(2.6rem,6vw,4.8rem)] text-foreground">
              {project.title}
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              {project.summary}
            </p>
          </div>
          <div className="overflow-hidden rounded-sm border border-border bg-surface">
            <img
              src={project.cover}
              alt={project.title}
              crossOrigin="anonymous"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section className="shell mt-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:gap-16">
          <Reveal className="space-y-5">
            {project.description.map((paragraph) => (
              <p key={paragraph} className="text-[15px] leading-[1.75] text-foreground/85 sm:text-base">
                {paragraph}
              </p>
            ))}
            {project.link && (
              <a
                href={project.link.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center gap-2 border-b border-accent/50 pb-1 font-mono text-[11px] uppercase tracking-[0.16em] text-accent transition-colors hover:border-accent"
              >
                Visit {project.link.label}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            )}
          </Reveal>

          <Reveal delay={80}>
            <dl className="border-t border-border">
              {meta.map((item) => (
                <div key={item.label} className="grid grid-cols-[92px_1fr] gap-4 border-b border-border py-4">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {item.label}
                  </dt>
                  <dd className="text-sm text-foreground">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {project.gallery.length > 1 && (
        <section className="shell mt-16">
          <Reveal>
            <p className="eyebrow border-t border-border pt-6">From the project</p>
          </Reveal>
          <div className="mt-6 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {project.gallery.map((image, index) => (
              <Reveal key={image} delay={index * 50} className="mb-5 break-inside-avoid">
                <figure className="overflow-hidden rounded-sm border border-border bg-surface">
                  <img
                    src={image}
                    alt={`${project.title} — view ${index + 1}`}
                    loading="lazy"
                    crossOrigin="anonymous"
                    className="w-full"
                  />
                </figure>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section className="shell mt-16">
        <Reveal>
          <Link
            to={`/work/${next.slug}`}
            className="group flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Next project
              </span>
              <h2 className="mt-2 font-display text-[clamp(1.9rem,3.4vw,2.8rem)] leading-tight text-foreground transition-colors group-hover:text-accent">
                {next.title}
              </h2>
            </div>
            <span className="inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground">
              {next.year}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
            </span>
          </Link>
        </Reveal>
      </section>

      <section className="shell mt-16">
        <Reveal>
          <div className="flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              Have a similar problem to solve? We answer every message.
            </p>
            <a
              href={`mailto:${studio.contacts.email}`}
              className="inline-flex w-fit items-center gap-2 rounded-sm bg-primary px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {studio.contacts.email}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
};

export default ProjectDetail;
