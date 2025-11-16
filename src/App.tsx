import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PortfolioGrid from "./components/PortfolioGrid";
import Testimonials from "./components/Testimonials";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t } = useTranslation();
  return (
    <div>
      <Navbar />
      <main>
        <Hero />

        <section id="portfolio" className="relative z-10 mx-auto mt-20 max-w-6xl px-4">
          <header className="mb-8">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {t("portfolio.title")}
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-neutral-400">{t("portfolio.subtitle")}</p>
          </header>
          <PortfolioGrid />
        </section>

        <section id="about" className="relative z-10 mx-auto mt-20 max-w-6xl px-4">
          <div className="card grid gap-6 p-6 md:grid-cols-2 md:items-center">
            <img
              src="/img/about.jpg"
              alt="About"
              className="h-64 w-full rounded-xl object-cover md:h-80"
            />
            <div>
              <h3 className="text-xl font-semibold tracking-tight">{t("about.title")}</h3>
              <p className="mt-3 text-neutral-300">{t("about.content")}</p>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-neutral-300 sm:grid-cols-4">
                <div className="card p-3 text-center">React</div>
                <div className="card p-3 text-center">TypeScript</div>
                <div className="card p-3 text-center">Tailwind</div>
                <div className="card p-3 text-center">i18n</div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="relative z-10 mx-auto mt-20 max-w-6xl px-4">
          <header className="mb-8">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {t("testimonials.title")}
            </h2>
          </header>
          <Testimonials />
        </section>

        <section id="contact" className="relative z-10 mx-auto mt-20 max-w-6xl px-4">
          <div className="card p-6 text-center">
            <h3 className="text-xl font-semibold tracking-tight">{t("contact.title")}</h3>
            <p className="mt-2 text-neutral-300">{t("contact.subtitle")}</p>
            <a
              href="mailto:hello@example.com"
              className="mt-6 inline-flex items-center justify-center rounded-xl border border-white/10 bg-neutral-900/60 px-5 py-3 text-sm text-white transition hover:bg-neutral-800/60"
            >
              {t("contact.emailCta")}
            </a>
          </div>
        </section>
      </main>
      <footer className="mt-24 border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 text-xs text-neutral-400">
          <span>© {new Date().getFullYear()} Portfolio</span>
          <span>{t("footer.rights")}</span>
        </div>
      </footer>
    </div>
  );
}


