type Item = {
  small: string;
  large: string;
  title: string;
};

const portfolioItems: Item[] = [
  { small: "/img/portfolio/01-small.jpg", large: "/img/portfolio/01-large.jpg", title: "Portal do Trabalhador" },
  { small: "/img/portfolio/02-small.jpg", large: "/img/portfolio/02-large.jpg", title: "SaaS" },
  { small: "/img/portfolio/03-small.jpg", large: "/img/portfolio/03-large.jpg", title: "Projectos com IA e RAG" },
  { small: "/img/portfolio/04-small.jpg", large: "/img/portfolio/04-large.jpg", title: "Koala Club" },
  { small: "/img/portfolio/05-small.jpg", large: "/img/portfolio/05-large.jpg", title: "Djelo" },
  { small: "/img/portfolio/06-small.jpg", large: "/img/portfolio/06-large.jpg", title: "WorkTrace" }
];

export default function PortfolioGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {portfolioItems.map((item) => (
        <a
          key={item.large}
          href={item.large}
          className="card card-hover group block overflow-hidden"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={item.small}
            alt={item.title}
            className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <div className="flex items-center justify-between px-4 py-3">
            <span className="text-sm text-neutral-200">{item.title}</span>
            <span className="text-xs text-neutral-400 group-hover:text-neutral-200">Open</span>
          </div>
        </a>
      ))}
    </div>
  );
}


