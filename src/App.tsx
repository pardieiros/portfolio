import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import PrivacyPolicy from "./components/PrivacyPolicy";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t } = useTranslation();
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacypolice" element={<PrivacyPolicy />} />
        </Routes>
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


