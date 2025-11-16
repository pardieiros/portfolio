import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const switchLang = () => {
    const next = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(next);
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-neutral-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#" className="font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
            Portfolio
          </span>
        </a>
        <nav className="hidden gap-6 text-sm text-neutral-300 md:flex">
          <a href="#portfolio" className="hover:text-white">
            {t("nav.portfolio")}
          </a>
          <a href="#about" className="hover:text-white">
            {t("nav.about")}
          </a>
          <a href="#testimonials" className="hover:text-white">
            {t("nav.testimonials")}
          </a>
          <a href="#contact" className="hover:text-white">
            {t("nav.contact")}
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={switchLang}
            className="rounded-md border border-white/10 px-3 py-1.5 text-xs text-neutral-200 hover:border-white/20 hover:text-white"
            aria-label="Switch language"
          >
            {i18n.language.toUpperCase()}
          </button>
          <button
            className="md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6 text-neutral-200"
            >
              <path
                fillRule="evenodd"
                d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-neutral-950/95 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 text-sm">
            <a href="#portfolio" onClick={() => setOpen(false)}>
              {t("nav.portfolio")}
            </a>
            <a href="#about" onClick={() => setOpen(false)}>
              {t("nav.about")}
            </a>
            <a href="#testimonials" onClick={() => setOpen(false)}>
              {t("nav.testimonials")}
            </a>
            <a href="#contact" onClick={() => setOpen(false)}>
              {t("nav.contact")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}


