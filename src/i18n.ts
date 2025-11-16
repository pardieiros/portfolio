import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        portfolio: "Portfolio",
        about: "About",
        testimonials: "Testimonials",
        contact: "Contact"
      },
      hero: {
        title: "Crafting clean, modern web experiences.",
        subtitle:
          "I build fast, accessible and beautiful interfaces with React, TypeScript and Tailwind CSS.",
        cta: "View Work"
      },
      portfolio: {
        title: "Selected Work",
        subtitle: "A snapshot of projects and visuals I’ve worked on."
      },
      about: {
        title: "About Me",
        content:
          "I am a frontend engineer focused on scalable design systems, delightful UX and maintainable codebases. I love motion micro-interactions and performance."
      },
      testimonials: {
        title: "What Clients Say",
        quote1:
          "Delivered above expectations and ahead of schedule. Great attention to detail.",
        quote2: "Seamless collaboration and outstanding UI quality.",
        quote3: "A true professional. Will work together again."
      },
      contact: {
        title: "Let’s work together",
        subtitle: "Have a project in mind? I’d love to hear about it.",
        emailCta: "Email Me"
      },
      footer: {
        rights: "All rights reserved."
      }
    }
  },
  pt: {
    translation: {
      nav: {
        portfolio: "Portfólio",
        about: "Sobre",
        testimonials: "Testemunhos",
        contact: "Contacto"
      },
      hero: {
        title: "Crio experiências web modernas e limpas.",
        subtitle:
          "Construo interfaces rápidas, acessíveis e bonitas com React, TypeScript e Tailwind CSS.",
        cta: "Ver Trabalhos"
      },
      portfolio: {
        title: "Trabalhos Selecionados",
        subtitle: "Uma amostra de projetos e visuais em que trabalhei."
      },
      about: {
        title: "Sobre Mim",
        content:
          "Sou engenheiro frontend focado em design systems escaláveis, UX de excelência e código sustentável. Adoro micro-interações e performance."
      },
      testimonials: {
        title: "O que dizem os clientes",
        quote1:
          "Entregou acima do esperado e antes do prazo. Grande atenção ao detalhe.",
        quote2: "Colaboração perfeita e UI de excelente qualidade.",
        quote3: "Um verdadeiro profissional. Voltaremos a trabalhar juntos."
      },
      contact: {
        title: "Vamos trabalhar juntos",
        subtitle: "Tem um projeto em mente? Gostava de saber mais.",
        emailCta: "Enviar Email"
      },
      footer: {
        rights: "Todos os direitos reservados."
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pt",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;


