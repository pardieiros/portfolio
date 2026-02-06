import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import PrivacyPolicy from "./components/PrivacyPolicy";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacypolice" element={<PrivacyPolicy />} />
        </Routes>
      </main>
      <footer className="mt-24 border-t py-8" style={{ borderColor: "var(--border)" }}>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 text-xs sm:flex-row sm:gap-0">
          <span className="text-[var(--text-secondary)]">© {new Date().getFullYear()} ClawDao</span>
          <span className="text-[var(--text-secondary)]">{t("footer.rights")}</span>
        </div>
      </footer>
    </div>
  );
}


