import { useTranslation } from "react-i18next";

const people = [
  { name: "Ana Silva", role: "Product Manager", img: "/img/testimonials/01.jpg", key: "quote1" },
  { name: "João Costa", role: "Founder", img: "/img/testimonials/02.jpg", key: "quote2" },
  { name: "Maria Santos", role: "CTO", img: "/img/testimonials/03.jpg", key: "quote3" }
];

export default function Testimonials() {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"></div>
  );
}


