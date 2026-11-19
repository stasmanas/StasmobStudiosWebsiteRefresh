import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail, MapPin, Phone, Send } from "lucide-react";
import { SiteLayout } from "@/components/site/site-layout";
import { Reveal } from "@/components/site/reveal";
import { studio } from "@/data/studio";

const topics = ["A mobile app", "A website or e-shop", "A museum or exhibition", "Something else"];

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState(topics[0]);
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = `New project — ${topic} — from ${name || "website visitor"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `About: ${topic}`,
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
          <p className="eyebrow">Contact</p>
          <h1 className="mt-5 display text-[clamp(2.6rem,6.5vw,5.2rem)] text-foreground">
            Tell us what
            <br /> you are making<span className="text-accent">.</span>
          </h1>
        </Reveal>

        <div className="mt-12 grid gap-12 border-t border-border pt-8 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal className="space-y-9">
            <p className="max-w-md text-[15px] leading-relaxed text-muted-foreground">
              {studio.claim} Send us a line about your business and the mobile solution you have in
              mind — we will come back with an offer.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-4 w-4 text-accent" />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Email
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
                    Phone
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
                    Studio
                  </p>
                  <address className="mt-1 space-y-0.5 text-base not-italic text-foreground">
                    {studio.contacts.address.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Visits by arrangement — coffee included.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Working languages
              </p>
              <p className="mt-2 text-sm text-foreground">Lithuanian · English · Russian</p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <form onSubmit={handleSubmit} className="rounded-sm border border-border bg-card p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    Your name
                  </span>
                  <input
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="mt-2 w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent"
                    placeholder="Name"
                  />
                </label>
                <label className="block">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    Email
                  </span>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="mt-2 w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent"
                    placeholder="you@company.com"
                  />
                </label>
              </div>

              <div className="mt-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  What is it about
                </span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {topics.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setTopic(item)}
                      className={
                        topic === item
                          ? "rounded-sm border border-accent bg-accent px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-accent-foreground"
                          : "rounded-sm border border-border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
                      }
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <label className="mt-5 block">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  Message
                </span>
                <textarea
                  required
                  rows={6}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="mt-2 w-full resize-none rounded-sm border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent"
                  placeholder="A few lines about the product, the deadline and what success looks like."
                />
              </label>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
              >
                Open in mail app
                <Send className="h-3.5 w-3.5" />
              </button>

              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                This form does not send anything from the site. It opens your email app with the
                message ready to review and send to {studio.contacts.email}.
              </p>

              <a
                href={`mailto:${studio.contacts.email}`}
                className="mt-4 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-accent"
              >
                Or write directly
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
