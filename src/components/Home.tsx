import Hero from "./Hero";
import PortfolioGrid from "./PortfolioGrid";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Hero />

      <section id="portfolio" className="relative z-10 mx-auto mt-16 max-w-6xl px-4 sm:mt-20 sm:px-6">
        <header className="mb-6 sm:mb-8">
          <h2 className="text-xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-2xl md:text-3xl">
            {t("portfolio.title")}
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-[var(--text-secondary)]">{t("portfolio.subtitle")}</p>
        </header>
        <PortfolioGrid />
      </section>

      <section id="about" className="relative z-10 mx-auto mt-16 max-w-6xl px-4 sm:mt-20 sm:px-6">
        <div className="card grid gap-6 p-4 sm:p-6 md:grid-cols-2 md:items-center">
          <img
            src="/img/about.jpg"
            alt="About"
            className="h-56 w-full rounded-xl object-cover sm:h-64 md:h-80"
          />
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-[var(--text-primary)] sm:text-xl">{t("about.title")}</h3>
            <p className="mt-3 text-sm text-[var(--text-secondary)] sm:text-base">{t("about.content")}</p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
              {["React", "TypeScript", "Tailwind", "i18n"].map((tech) => (
                <div key={tech} className="card p-3 text-center text-[var(--text-secondary)]">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 mx-auto mt-16 max-w-6xl px-4 pb-8 sm:mt-20 sm:px-6 sm:pb-12">
        <div className="card p-4 text-center sm:p-6">
          <h3 className="text-lg font-semibold tracking-tight text-[var(--text-primary)] sm:text-xl">{t("contact.title")}</h3>
          <p className="mt-2 text-sm text-[var(--text-secondary)] sm:text-base">{t("contact.subtitle")}</p>
          <a
            href="mailto:hello@example.com"
            className="mt-6 inline-flex items-center justify-center rounded-xl border border-clawdao-cyan/50 bg-clawdao-cyan/10 px-5 py-3 text-sm font-medium text-clawdao-cyan transition-all hover:bg-clawdao-cyan/20"
          >
            {t("contact.emailCta")}
          </a>
        </div>
      </section>
    </>
  );
}
