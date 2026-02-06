type Item = {
  small: string;
  large: string;
  title: string;
  url?: string;
};

const portfolioItems: Item[] = [
  { small: "/img/portfolio/01-small.jpg", large: "/img/portfolio/01-large.jpg", title: "Portal do Trabalhador", url: "https://plasticemployers.duckcdns.org" },
  { small: "/img/portfolio/02-small.jpg", large: "/img/portfolio/02-large.jpg", title: "SaaS", url: "https://plastic.floow.pt" },
  { small: "/img/portfolio/03-small.jpg", large: "/img/portfolio/03-large.jpg", title: "Projectos com IA e RAG" },
  { small: "/img/portfolio/04-small.jpg", large: "/img/portfolio/04-large.jpg", title: "Koala Club", url: "https://koalaclub.pt" },
  { small: "/img/djelo-sem-fundo.png", large: "/img/djelo-sem-fundo.png", title: "Djelo", url: "https://pardieirosdeveloper.zapto.org/djelo/" },
  { small: "/img/worktrace_logo_128px.png", large: "/img/worktrace_logo_128px.png", title: "WorkTrace", url: "https://pardieirosdeveloper.zapto.org/worktrace/" }
];

export default function PortfolioGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {portfolioItems.map((item) => (
        <a
          key={item.large}
          href={item.url || item.large}
          className="card card-hover group block overflow-hidden"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={item.small}
            alt={item.title}
            className="h-48 w-full object-cover transition duration-300 group-hover:scale-105 sm:h-56"
            loading="lazy"
          />
          <div className="flex items-center justify-between px-4 py-3">
            <span className="text-sm text-[var(--text-primary)]">{item.title}</span>
            <span className="text-xs text-clawdao-cyan opacity-80 group-hover:opacity-100">Open</span>
          </div>
        </a>
      ))}
    </div>
  );
}
