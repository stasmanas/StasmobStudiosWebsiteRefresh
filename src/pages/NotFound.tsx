import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { SiteLayout } from "@/components/site/site-layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <SiteLayout>
      <section className="shell flex min-h-[62vh] flex-col justify-center py-20">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-4 display text-[clamp(2.6rem,7vw,5.4rem)] text-foreground">
          This page is not
          <br /> in the archive<span className="text-accent">.</span>
        </h1>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
          The address {location.pathname} does not exist on this site. The work we have published is
          one click away.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
            Back home
          </Link>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            See the work
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
};

export default NotFound;
