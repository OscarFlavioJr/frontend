"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";
import ProjectCard from "./components/ProjectCard";

const projects = [a
  {
    id: 1,
    title: "Chatbot conversacional com IA 100% autoral",
    description:
      "IA que coleta dados da empresa contratante e é capaz de se comunicar com o usuário final com perfeição e sem alucinação ou resultados indesejados",
    language: "Python",
  },
  {
    id: 2,
    title: "Saas",
    description:
      "Sistema que gerencia conteúdos, pesquisas e outras métricas em tempo real, usando login, criação de usuários baseado em acts_as_tenant, servindo múltiplas empresas ao mesmo tempo.",
    language: "Rails, Next",
  },
  {
    id: 3,
    title: "Análise de votações complexas",
    description:
      "Sistema capaz de analisar milhares de votos e contabilizar com 100% de acurácia",
    language: "TypeScript",
  },
  {
    id: 4,
    title: "Scraper de vagas de emprego",
    description:
      "Solução capaz de procurar TODAS as vagas de emprego de todos ATS e gerar filtragem por setor e localidade.",
    language: "Python",
  },
  {
    id: 5,
    title: "Alerta",
    description:
      "Você insere a informação que busca e o sistema de scraping realiza esta busca e através da extensão de navegador, notifica você sobre a chegada da informação que você queria!",
    language: "JavaScript",
  },
  {
    id: 6,
    title: "Alerta de queda de servidor",
    description:
      "Sistema que realiza testes de GET em domínios e notifica em caso de queda.",
    language: "C#",
  },
];

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const containerClasses = `
    relative min-h-screen overflow-y-auto
    ${isDarkMode ? "bg-black text-white dark" : "bg-white text-black"}
    transition-colors duration-500 ease-in-out 
  `;

  return (
    <div className={containerClasses}>
      <button
        onClick={toggleDarkMode}
        className=" absolute top-4 right-4 p-3 rounded-full 
          z-50
          bg-gray-200 dark:bg-gray-800
          text-gray-800 dark:text-gray-200
          shadow-lg
          transition-colors duration-300
        "
        aria-label={
          isDarkMode ? "Mudar para modo claro" : "Mudar para modo escuro"
        }
      >
        <motion.div
          key={isDarkMode ? "moon" : "sun"}
          initial={{ rotate: 0, scale: 0.8 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </motion.div>
      </button>

      <div
        className="
          absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          text-center font-sans 
          min-h-screen w-full flex flex-col justify-center items-center
        "
      >
        <motion.h1
          className="text-5xl font-extrabold"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Oscar Flávio Jr
        </motion.h1>

        <motion.h2
          className="text-2xl mt-2 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Engenheiro de Software
        </motion.h2>
      </div>

      <div className="pt-[80vh] w-full">
        <div className="text-center font-sans mb-16">
          <motion.h1
            className="text-2xl font-extrabold mt-12 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            PROJETOS:
          </motion.h1>
        </div>

        <div className="flex flex-wrap justify-center max-w-7xl mx-auto pb-24">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              language={project.language}
              delay={1.0 + index * 0.2}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
