import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/site/site-layout";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { studio, team } from "@/data/studio";
import { useCapabilities, useCompetencies, useHistory, useTeamTexts } from "@/i18n/studio-copy";

const Studio = () => {
  const { t } = useTranslation();
  const capabilities = useCapabilities();
  const teamTexts = useTeamTexts();
  const history = useHistory();
  const competencies = useCompetencies();

  return (
    <SiteLayout>
      <section className="shell pt-14 sm:pt-20">
        <Reveal>
          <p className="eyebrow">{t("studio.eyebrow", { city: t("home.location") })}</p>
          <h1 className="mt-5 display text-[clamp(2.6rem,6.5vw,5.2rem)] text-foreground">
            {t("studio.title1")}
            <br /> {t("studio.title2")}
            <br /> {t("studio.title3")}
          </h1>
        </Reveal>

        <Reveal
          delay={80}
          className="mt-10 grid gap-8 border-t border-border pt-8 lg:grid-cols-[1.1fr_1fr] lg:gap-16"
        >
          <p className="max-w-lg text-[15px] leading-relaxed text-muted-foreground">
            {t("studio.intro")}
          </p>
          <div className="space-y-4">
            <p className="text-[15px] leading-relaxed text-muted-foreground">{t("studio.about1")}</p>
            <p className="text-[15px] leading-relaxed text-muted-foreground">{t("studio.about2")}</p>
            <p className="text-[15px] leading-relaxed text-muted-foreground">{t("studio.about3")}</p>
          </div>
        </Reveal>
      </section>

      <section className="shell pt-20">
        <Reveal>
          <SectionHeading
            index="01"
            title={t("studio.history.title")}
            description={t("studio.history.desc")}
          />
        </Reveal>
        <div className="mt-10 grid gap-x-10 gap-y-0 md:grid-cols-2">
          {history.map((entry, index) => (
            <Reveal key={entry.year} delay={index * 50}>
              <div className="grid grid-cols-[72px_1fr] gap-6 border-t border-border py-6">
                <span className="font-mono text-[11px] tracking-[0.16em] text-accent">{entry.year}</span>
                <div>
                  <h3 className="font-display text-xl leading-tight text-foreground">{entry.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{entry.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="shell pt-20">
        <Reveal>
          <SectionHeading
            index="02"
            title={t("studio.capabilities.title")}
            description={t("studio.capabilities.desc")}
          />
        </Reveal>
        <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, index) => (
            <Reveal key={capability.id} delay={index * 40}>
              <div className="border-t border-border pt-5">
                <h3 className="font-display text-2xl leading-tight text-foreground">
                  {capability.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {capability.description}
                </p>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground/80">
                  {capability.items}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={60} className="mt-14 border-t border-border pt-6">
          <p className="eyebrow">{t("studio.competencies.label")}</p>
          <div className="mt-5 grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {competencies.map((item) => (
              <p key={item} className="text-sm text-muted-foreground">
                <span className="mr-2 text-accent">/</span>
                {item}
              </p>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="shell pt-20">
        <Reveal>
          <SectionHeading
            index="03"
            title={t("studio.team.title")}
            description={t("studio.team.desc")}
          />
        </Reveal>

        <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <Reveal key={member.key} delay={(index % 3) * 50}>
              <div className="group">
                <div className="relative aspect-square overflow-hidden rounded-sm border border-border bg-surface">
                  <img
                    src={member.photo}
                    alt={member.name}
                    loading="lazy"
                    crossOrigin="anonymous"
                    className="h-full w-full object-cover opacity-85 grayscale transition-all duration-700 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>
                <h3 className="mt-3 text-sm font-medium text-foreground">{member.name}</h3>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                  {teamTexts[member.key].role}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {teamTexts[member.key].skills}
                </p>
                {teamTexts[member.key].note && (
                  <p className="mt-2 font-display text-base italic text-muted-foreground">
                    {teamTexts[member.key].note}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="shell pt-20">
        <Reveal>
          <div className="grain relative overflow-hidden rounded-sm border border-border bg-surface p-8 sm:p-12">
            <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">{t("studio.cta.label")}</p>
                <h2 className="mt-3 display text-[clamp(2rem,4.4vw,3.4rem)] text-foreground">
                  {t("studio.cta.title1")}
                  <br /> {t("studio.cta.title2")}
                </h2>
              </div>
              <div className="flex flex-col gap-3">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  {t("studio.cta.button")}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <a
                  href={`mailto:${studio.contacts.email}`}
                  className="inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {studio.contacts.email}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
};

export default Studio;
