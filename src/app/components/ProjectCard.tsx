// components/ProjectCard.jsx
import { motion } from "framer-motion";
import { FaLink, FaCode } from "react-icons/fa"; // Adicionei FaCode para a tag de linguagem

export default function ProjectCard({
  title,
  description,
  liveUrl,
  language,
  delay,
}) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: delay },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="
        p-6 m-4 w-full md:w-80 lg:w-96 
        bg-white dark:bg-gray-800 
        rounded-xl 
        shadow-xl hover:shadow-2xl 
        shadow-indigo-100/50 dark:shadow-indigo-900/50 // 👈 Sombra adaptável e colorida
        transition-all duration-300 ease-in-out 
        transform hover:scale-[1.05] // 👈 Hover mais impactante
        border border-gray-200 dark:border-gray-700
      "
    >
      {/* Título com Borda de Destaque */}
      <h3
        className="
        text-2xl font-extrabold pb-3 mb-4 
        text-gray-900 dark:text-white 
        border-b-2 border-indigo-400 dark:border-indigo-600 // 👈 Borda para destacar
      "
      >
        {title}
      </h3>

      {/* Descrição */}
      <p className="text-gray-700 dark:text-gray-300 mb-6 min-h-[5rem]">
        {description}
      </p>

      {/* Rodapé: Linguagem e Links */}
      <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
        {/* Tag de Linguagem */}
        {language && (
          <div className="flex items-center space-x-2">
            <FaCode
              className="text-indigo-600 dark:text-indigo-400"
              size={16}
            />
            <span
              className="
                    text-xs font-bold uppercase tracking-wider 
                    bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300 
                    px-3 py-1 rounded-full
                "
            >
              {language}
            </span>
          </div>
        )}

        {/* Link para o Projeto Online */}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center space-x-2 p-2 rounded-lg
              bg-indigo-600 text-white 
              hover:bg-indigo-700 
              transition-colors duration-200 
              shadow-md
            "
          >
            <FaLink size={16} />
            <span className="font-semibold text-sm">Ver Projeto</span>
          </a>
        )}
      </div>
    </motion.div>
  );
}
