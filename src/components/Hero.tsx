import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="spotlight"></div>
      <div className="beams"></div>
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">
              {t("hero.title")}
            </span>
          </h1>
          <p className="mt-6 text-balance text-neutral-300 md:text-lg">
            {t("hero.subtitle")}
          </p>
          <a
            href="#portfolio"
            className="mt-8 inline-flex items-center justify-center rounded-xl border border-white/10 bg-neutral-900/60 px-5 py-3 text-sm text-white shadow-[0_0_40px_-20px_rgba(255,255,255,0.3)] transition hover:bg-neutral-800/60"
          >
            {t("hero.cta")}
          </a>
        </div>
        <div className="pointer-events-none relative mx-auto mt-14 max-w-5xl rounded-2xl border border-white/10 bg-neutral-900/40 p-1 backdrop-blur">
          <img
            src="/img/intro-bg.jpg"
            alt="Intro"
            className="h-[360px] w-full rounded-2xl object-cover opacity-90"
          />
          <div className="pointer-events-auto absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10"></div>
        </div>
      </div>
    </section>
  );
}


