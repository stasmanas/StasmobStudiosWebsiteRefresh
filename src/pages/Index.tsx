import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { SiteLayout } from "@/components/site/site-layout";
import { ProjectCard } from "@/components/site/project-card";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { featuredProjects, projects } from "@/data/projects";
import { capabilities, studio, team } from "@/data/studio";

const clients = [
  "AMVesta",
  "Zenitech",
  "Airbox Aero",
  "Gluk Media",
  "TeleSoftas",
  "Dagos",
  "Tarp festival",
  "EPMC",
  "DotStory",
  "Medinė raidė",
  "Whispers",
  "TrashSignal",
];

const stats = [
  { value: String(projects.length), label: "Projects shipped" },
  { value: "7", label: "People in the studio" },
  { value: "2011", label: "Working since" },
  { value: "Vilnius", label: "Based in" },
];

const Home = () => {
  const heroWork = featuredProjects.slice(0, 6);
  const recent = projects.filter((project) => Number(project.year) >= 2023);
  const heroPlates = ["pickerlight", "dotstory", "elka"]
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is (typeof projects)[number] => Boolean(project));

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="shell pb-14 pt-14 sm:pt-20">
          <Reveal className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10.5px] uppercase tracking-[0.22em] text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3 w-3 text-accent" />
              {studio.city}
            </span>
            <span className="hidden h-3 w-px bg-border sm:block" />
            <span>Since {studio.founded}</span>
            <span className="hidden h-3 w-px bg-border sm:block" />
            <span>Mobile · Web · Culture</span>
          </Reveal>

          <Reveal delay={80} className="mt-8">
            <h1 className="display text-[clamp(2.7rem,7.2vw,6.1rem)] text-foreground">
              We build mobile products,
              <br className="hidden sm:block" /> web platforms and{" "}
              <em className="text-accent">cultural experiences</em>.
            </h1>
          </Reveal>

          <Reveal delay={160} className="mt-10 flex flex-col gap-8 border-t border-border pt-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-lg text-[15px] leading-relaxed text-muted-foreground">
              {studio.name} is an innovative development studio from Vilnius. {studio.claim} We take
              enterprise experience, cultural work and start-up pace, and build things that hold up.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/work"
                className="group inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-primary/90"
              >
                See the work
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Start a project
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={220} className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
            {heroPlates.map((project, index) => (
              <Link
                key={project.slug}
                to={`/work/${project.slug}`}
                className={cn(
                  "group block overflow-hidden rounded-sm border border-border bg-surface",
                  index === 1 && "sm:mt-10",
                  index === 2 && "hidden sm:block sm:mt-20",
                )}
              >
                <img
                  src={project.cover}
                  alt={project.title}
                  crossOrigin="anonymous"
                  className="aspect-[4/3] w-full object-cover opacity-85 transition-all duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
                />
              </Link>
            ))}
          </Reveal>
        </div>

        {/* Client marquee */}
        <div className="relative overflow-hidden border-y border-border bg-surface py-4">
          <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
            {[...clients, ...clients].map((client, index) => (
              <span
                key={`${client}-${index}`}
                className="flex items-center gap-10 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
              >
                {client}
                <span className="h-1 w-1 rounded-full bg-accent/70" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="shell pt-20">
        <Reveal>
          <SectionHeading
            index="01"
            title="Selected work"
            description="A curated selection from fifteen years of products, exhibitions and small strange commissions."
            link={{ to: "/work", label: `All ${projects.length} projects` }}
          />
        </Reveal>

        <div className="mt-12 grid gap-x-6 gap-y-12 md:grid-cols-2">
          {heroWork.map((project, index) => (
            <Reveal key={project.slug} delay={(index % 2) * 60}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Recent */}
      <section className="shell pt-20">
        <Reveal>
          <SectionHeading
            index="02"
            title="Recent"
            description="What we are building now — and the newest additions to the archive."
          />
        </Reveal>
        <div className="mt-8 border-t border-border">
          {recent.map((project, index) => (
            <Reveal key={project.slug} delay={index * 50}>
              <Link
                to={`/work/${project.slug}`}
                className="group grid grid-cols-[1fr_auto] items-baseline gap-4 border-b border-border py-6 sm:grid-cols-[90px_1fr_auto]"
              >
                <span className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:block">
                  {project.year}
                </span>
                <span className="flex flex-col gap-1">
                  <span className="font-display text-[clamp(1.6rem,2.6vw,2.2rem)] leading-tight text-foreground transition-colors group-hover:text-accent">
                    {project.title}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {project.tagline}{" "}
                    <span className="sm:hidden">· {project.year}</span>
                  </span>
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="shell pt-20">
        <Reveal>
          <SectionHeading
            index="03"
            title="What we do"
            description="We keep the team small enough that the people who scope the work are the people who build it."
          />
        </Reveal>

        <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, index) => (
            <Reveal key={capability.title} delay={index * 50}>
              <div className="group border-t border-border pt-5 transition-colors hover:border-accent/60">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-2xl leading-tight text-foreground">
                  {capability.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {capability.description}
                </p>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground/80">
                  {capability.items.join(" · ")}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Studio */}
      <section className="shell pt-24">
        <div className="grid gap-12 border-t border-border pt-8 lg:grid-cols-[1fr_1.15fr]">
          <Reveal>
            <p className="eyebrow">04 — Studio</p>
            <h2 className="mt-4 font-display text-[clamp(2.1rem,4vw,3.4rem)] leading-[1.02] text-foreground">
              A collaboration incubator,
              <br /> not an agency pipeline.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              {studio.intro}
            </p>
            <Link
              to="/studio"
              className="group mt-7 inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-foreground transition-colors hover:text-accent"
            >
              Meet the studio
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <Reveal delay={100} className="space-y-5">
            {studio.about.map((paragraph) => (
              <p key={paragraph} className="text-[15px] leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
            <div className="grid grid-cols-2 gap-x-6 gap-y-7 border-t border-border pt-7 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-[26px] leading-none text-foreground">{stat.value}</p>
                  <p className="mt-2 font-mono text-[9.5px] uppercase leading-tight tracking-[0.16em] text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Team */}
      <section className="shell pt-20">
        <Reveal>
          <SectionHeading
            index="05"
            title="The people"
            description="Developers, designers and one composer. Everybody works on the same thing at the same time."
            link={{ to: "/studio", label: "All seven" }}
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
          {team.slice(0, 4).map((member, index) => (
            <Reveal key={member.name} delay={index * 60}>
              <div className="group">
                <div className="relative aspect-square overflow-hidden rounded-sm border border-border bg-surface">
                  <img
                    src={member.photo}
                    alt={member.name}
                    loading="lazy"
                    crossOrigin="anonymous"
                    className="h-full w-full object-cover opacity-80 grayscale transition-all duration-700 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>
                <h3 className="mt-3 text-sm font-medium text-foreground">{member.name}</h3>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  {member.role}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="shell pt-24">
        <Reveal>
          <div className="grain relative overflow-hidden rounded-sm border border-border bg-surface">
            <div className="relative z-10 grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.3fr_1fr] lg:p-16">
              <div>
                <p className="eyebrow">06 — Contact</p>
                <h2 className="mt-4 display text-[clamp(2.2rem,5vw,4rem)] text-foreground">
                  Have something
                  <br /> worth building?
                </h2>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
                  Tell us about the product, the exhibition or the idea you cannot stop thinking
                  about. We will write back with an offer.
                </p>
              </div>
              <div className="flex flex-col justify-end gap-5">
                <a
                  href={`mailto:${studio.contacts.email}`}
                  className="group inline-flex items-center justify-between gap-4 border-b border-border pb-3 font-display text-2xl text-foreground transition-colors hover:text-accent sm:text-3xl"
                >
                  {studio.contacts.email}
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href={`tel:${studio.contacts.phoneHref}`}
                  className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {studio.contacts.phone}
                </a>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  {studio.contacts.address.join(" · ")}
                </p>
                <Link
                  to="/contact"
                  className="mt-2 inline-flex w-fit items-center gap-2 rounded-sm bg-primary px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Write to us
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
};

export default Home;
