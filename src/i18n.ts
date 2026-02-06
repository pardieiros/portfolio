import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        portfolio: "Portfolio",
        about: "About",
        contact: "Contact"
      },
      hero: {
        title: "ClawDao — Full-stack development",
        subtitle:
          "End-to-end solutions: from responsive web apps and mobile applications to scalable backends and APIs. React, Django, Laravel, Flutter — with Docker, Nginx and Proxmox for deployment and infrastructure.",
        cta: "View Work"
      },
      portfolio: {
        title: "Featured Projects",
        subtitle:
          "A collection of applications, automations and digital solutions I’ve engineered."
      },
      about: {
        title: "About Me",
        content:
          "I'm a multi-disciplinary developer skilled in frontend, backend and mobile development. I work with React, Django, Flask, Laravel, Flutter and TypeScript, and I frequently build full ecosystems including APIs, authentication, cloud infrastructure, automation scripts, containerized environments and scalable architectures. I enjoy creating efficient solutions, designing clean interfaces and optimizing performance."
      },
      contact: {
        title: "Let’s work together",
        subtitle:
          "Need a website, an app, a backend system or automations? I’d love to help.",
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
        contact: "Contacto"
      },
      hero: {
        title: "ClawDao — Desenvolvimento full-stack",
        subtitle:
          "Soluções de ponta a ponta: desde web e mobile até backends e APIs escaláveis. React, Django, Laravel, Flutter — com Docker, Nginx e Proxmox para deploy e infraestrutura.",
        cta: "Ver Projetos"
      },
      portfolio: {
        title: "Projetos em Destaque",
        subtitle:
          "Uma seleção de aplicações, automações e sistemas digitais que desenvolvi."
      },
      about: {
        title: "Sobre Mim",
        content:
          "Sou um programador versátil com experiência em múltiplas linguagens e frameworks. Domino React, Django, Python, TypeScript, Laravel, Flutter e também desenvolvo APIs, sistemas de autenticação, integrações complexas, automações, soluções empresariais e plataformas completas. Trabalho frequentemente com Docker, Nginx, Proxmox, servidores próprios e pipelines otimizadas. Gosto de criar interfaces eficientes, código limpo e soluções escaláveis."
      },
      contact: {
        title: "Vamos trabalhar juntos",
        subtitle:
          "Precisa de um website, app, backend ou automações? Posso ajudar.",
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


