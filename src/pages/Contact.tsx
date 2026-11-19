import { useState, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { ArrowUpRight, Mail, MapPin, Phone, Send } from "lucide-react";
import { SiteLayout } from "@/components/site/site-layout";
import { Reveal } from "@/components/site/reveal";
import { studio } from "@/data/studio";

type TopicKey = "app" | "web" | "museum" | "other";

const Contact = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState<TopicKey>("app");
  const [message, setMessage] = useState("");

  const topics: { key: TopicKey; label: string }[] = [
    { key: "app", label: t("contact.topic.app") },
    { key: "web", label: t("contact.topic.web") },
    { key: "museum", label: t("contact.topic.museum") },
    { key: "other", label: t("contact.topic.other") },
  ];

  const selectedTopic = topics.find((item) => item.key === topic)?.label ?? "";

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = t("contact.mailSubject", {
      topic: selectedTopic,
      name: name || t("contact.form.name"),
    });
    const body = [
      `${t("contact.form.name")}: ${name}`,
      `${t("contact.form.email")}: ${email}`,
      `${t("contact.form.topic")}: ${selectedTopic}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${studio.contacts.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <SiteLayout>
      <section className="shell pt-14 sm:pt-20">
        <Reveal>
          <p className="eyebrow">{t("contact.eyebrow")}</p>
          <h1 className="mt-5 display text-[clamp(2.6rem,6.5vw,5.2rem)] text-foreground">
            {t("contact.title1")}
            <br /> {t("contact.title2")}
          </h1>
        </Reveal>

        <div className="mt-12 grid gap-12 border-t border-border pt-8 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal className="space-y-9">
            <p className="max-w-md text-[15px] leading-relaxed text-muted-foreground">
              {t("contact.intro", { claim: t("brand.claim") })}
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-4 w-4 text-accent" />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {t("contact.emailLabel")}
                  </p>
                  <a
                    href={`mailto:${studio.contacts.email}`}
                    className="mt-1 inline-block font-display text-2xl text-foreground transition-colors hover:text-accent"
                  >
                    {studio.contacts.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-4 w-4 text-accent" />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {t("contact.phoneLabel")}
                  </p>
                  <a
                    href={`tel:${studio.contacts.phoneHref}`}
                    className="mt-1 inline-block text-base text-foreground transition-colors hover:text-accent"
                  >
                    {studio.contacts.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-4 w-4 text-accent" />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {t("contact.studioLabel")}
                  </p>
                  <address className="mt-1 space-y-0.5 text-base not-italic text-foreground">
                    {studio.contacts.address.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                  <p className="mt-1 text-sm text-muted-foreground">{t("contact.visits")}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {t("contact.languagesLabel")}
              </p>
              <p className="mt-2 text-sm text-foreground">{t("contact.languagesValue")}</p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <form onSubmit={handleSubmit} className="rounded-sm border border-border bg-card p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {t("contact.form.name")}
                  </span>
                  <input
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="mt-2 w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent"
                    placeholder={t("contact.form.namePlaceholder")}
                  />
                </label>
                <label className="block">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {t("contact.form.email")}
                  </span>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="mt-2 w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent"
                    placeholder={t("contact.form.emailPlaceholder")}
                  />
                </label>
              </div>

              <div className="mt-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  {t("contact.form.topic")}
                </span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {topics.map((item) => (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => setTopic(item.key)}
                      className={
                        topic === item.key
                          ? "rounded-sm border border-accent bg-accent px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-accent-foreground"
                          : "rounded-sm border border-border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
                      }
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <label className="mt-5 block">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  {t("contact.form.message")}
                </span>
                <textarea
                  required
                  rows={6}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="mt-2 w-full resize-none rounded-sm border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent"
                  placeholder={t("contact.form.messagePlaceholder")}
                />
              </label>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
              >
                {t("contact.form.submit")}
                <Send className="h-3.5 w-3.5" />
              </button>

              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                {t("contact.form.note", { email: studio.contacts.email })}
              </p>

              <a
                href={`mailto:${studio.contacts.email}`}
                className="mt-4 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-accent"
              >
                {t("contact.form.direct")}
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </form>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Contact;
