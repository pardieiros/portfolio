import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
// Logo bundled so it works in production
import logoSrc from "../../img/ClawDao/clawdao.svg";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const switchLang = () => {
    const next = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(next);
  };

  const navLinkClass =
    "text-[var(--text-secondary)] hover:text-clawdao-cyan transition-colors duration-200";

  return (
    <header
      className="fixed top-0 z-50 w-full border-b backdrop-blur-md"
      style={{ borderColor: "var(--border)", background: "var(--bg-primary)" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          to="/"
          className="flex items-center gap-2 font-semibold tracking-tight"
          aria-label="ClawDao Home"
        >
          <img
            src={logoSrc}
            alt="ClawDao"
            className="h-8 w-auto sm:h-9"
          />
          <span className="hidden text-clawdao-cyan sm:inline">ClawDao</span>
        </Link>
        <nav className="hidden gap-6 text-sm md:flex lg:gap-8">
          <a href="#portfolio" className={navLinkClass}>
            {t("nav.portfolio")}
          </a>
          <a href="#about" className={navLinkClass}>
            {t("nav.about")}
          </a>
          <a href="#contact" className={navLinkClass}>
            {t("nav.contact")}
          </a>
          <Link to="/privacypolice" className={navLinkClass}>
            Privacy Policy
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="rounded-lg p-2 text-[var(--text-secondary)] transition-colors hover:bg-clawdao-graphite/50 hover:text-[var(--text-primary)] dark:hover:bg-clawdao-graphite"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 sm:h-6 sm:w-6">
                <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 sm:h-6 sm:w-6">
                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
              </svg>
            )}
          </button>
          <button
            onClick={switchLang}
            className="rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors"
            style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
            aria-label="Switch language"
          >
            {i18n.language.toUpperCase()}
          </button>
          <button
            className="rounded-lg p-2 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            style={{ color: "var(--text-primary)" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div
          className="border-t md:hidden"
          style={{ borderColor: "var(--border)", background: "var(--bg-primary)" }}
        >
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 text-sm">
            <a href="#portfolio" onClick={() => setOpen(false)} className={navLinkClass + " py-2"}>{t("nav.portfolio")}</a>
            <a href="#about" onClick={() => setOpen(false)} className={navLinkClass + " py-2"}>{t("nav.about")}</a>
            <a href="#contact" onClick={() => setOpen(false)} className={navLinkClass + " py-2"}>{t("nav.contact")}</a>
            <Link to="/privacypolice" onClick={() => setOpen(false)} className={navLinkClass + " py-2"}>Privacy Policy</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
