import { useTranslation } from "react-i18next";
import heroLogoSrc from "../../img/ClawDao/semfundocomletras.png";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden pt-24 sm:pt-28 md:pt-32">
      <div className="spotlight" aria-hidden />
      <div className="beams" aria-hidden />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="flex justify-center">
            <img
              src={heroLogoSrc}
              alt={t("hero.title")}
              className="h-20 w-auto sm:h-24 md:h-28 lg:h-32"
            />
          </h1>
          <p className="mt-4 text-balance text-[var(--text-secondary)] sm:mt-6 sm:text-base md:text-lg">
            {t("hero.subtitle")}
          </p>
          <a
            href="#portfolio"
            className="mt-6 inline-flex items-center justify-center rounded-xl border border-clawdao-cyan/50 bg-clawdao-cyan/10 px-5 py-3 text-sm font-medium text-clawdao-cyan transition-all hover:bg-clawdao-cyan/20 hover:border-clawdao-cyan sm:mt-8"
          >
            {t("hero.cta")}
          </a>
        </div>
        <div className="pointer-events-none relative mx-auto mt-10 max-w-5xl rounded-2xl border p-1 backdrop-blur sm:mt-14" style={{ borderColor: "var(--border)", background: "var(--bg-secondary)" }}>
          <img
            src="/img/intro-bg.jpg"
            alt="Intro"
            className="h-56 w-full rounded-2xl object-cover opacity-90 sm:h-72 md:h-[360px]"
          />
          <div className="pointer-events-auto absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 dark:ring-white/10" aria-hidden />
        </div>
      </div>
    </section>
  );
}
