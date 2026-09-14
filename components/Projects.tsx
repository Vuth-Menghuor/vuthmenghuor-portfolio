import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      id: 5,
      title: "Customs Artificial Intelligent Assistant",
      organization: "General Department of Customs and Excise of Cambodia",
      period: "February 2026 – September 2026",
      description:
        "A responsive AI chatbot platform for Cambodian customs, supporting HS-code lookup, duty calculation, trade-data queries, streamed responses, rich renderers, English/Khmer UI, shared chats, and feedback.",
      image: "/images/projects-images/customs-ai-assistant-desktop.png",
      technologies: ["Nuxt 4", "Vue 3", "TypeScript", "Pinia", "Vuetify", "Tailwind CSS"],
      github: "https://github.com/Vuth-Menghuor/chatbot_review",
      demo: "https://customs-artificial-intelligence.vercel.app/login",
    },
    {
      id: 3,
      title: "Motion Cycles E-Commerce",
      organization: "Institute of Technology of Cambodia",
      period: "July 2025 – October 2025",
      description:
        "A full-stack bike e-commerce platform using Laravel and Vue.js, with authentication, product catalog, order processing, cart, favorites, reviews, discounts, KHQR payments, and an admin panel.",
      image: "/images/projects-images/motion-cycle-ecommerce-plateform.png",
      technologies: ["Laravel", "Vue.js", "Tailwind CSS", "Bakong API"],
      github: "https://github.com/Vuth-Menghuor/motion-cycles-platform.git",
      demo: "https://a57bb3a9.motion-cycles-platform.pages.dev/authentication/sign_in",
    },
    {
      id: 2,
      title: "GPS Tracking System",
      organization: "Mango Finance PLC",
      period: "July 2025 – October 2025",
      description:
        "Developed a Django backend for a GPS tracking system with real-time data retrieval and API endpoints for device monitoring. Improved database operations and data processing, integrated with Nuxt.js, and prepared technical documentation for smooth deployment.",
      image: "/images/projects-images/gps-tracking-system.png",
      technologies: ["Django", "Nuxt.js", "PostgreSQL"],
      github: "https://github.com/Vuth-Menghuor/GPS-Tracking-System.git",
      demo: "https://gps-tracking-dashboard-jgqq.onrender.com/",
    },
    {
      id: 1,
      title: "Carbodia E-Commerce Platform",
      organization: "Institute of Technology of Cambodia",
      period: "January 2025 – June 2025",
      description:
        "A full-stack car e-commerce platform with authentication, car browsing, detailed engine information, reservations, wishlist functionality, and a modern responsive user experience.",
      image: "/images/projects-images/carbodia-ecommerce-platform.png",
      technologies: ["Vue.js", "Vite", "Pinia", "Vue Router", "GSAP", "PocketBase"],
      github: "https://github.com/Vuth-Menghuor/carbodia",
      demo: "https://carbodia.pages.dev/",
    },
    {
      id: 4,
      title: "LED Textboard",
      organization: "Institute of Technology of Cambodia",
      period: "May 2024 – June 2024",
      description:
        "An interactive HTML5 Canvas LED text display with real-time rendering, customizable colors, fonts, sizes, themes, animations, effects, and responsive controls.",
      image: "/images/projects-images/led-textboard.png",
      technologies: ["HTML5 Canvas", "JavaScript", "CSS"],
      github: "https://github.com/Vuth-Menghuor/LED-Textboard.git",
      demo: "https://led-textboard.pages.dev",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-[1500px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto" />
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Projects ordered from most recent to earliest
          </p>
        </div>

        <div className="relative max-w-[52rem] mx-auto">
          <div className="absolute left-4 sm:left-6 top-0 h-full w-0.5 bg-gray-300 dark:bg-gray-600" />
          <div className="space-y-8 sm:space-y-10">
            {projects.map((project) => (
              <article
              key={project.id}
              className="relative pl-10 sm:pl-14"
              >
                <div className="absolute left-4 sm:left-6 top-28 -translate-x-1/2 w-6 h-6 bg-white dark:bg-slate-900 rounded-full z-10 flex items-center justify-center border-2 border-gray-300 dark:border-gray-600">
                  <div className="w-3 h-3 bg-primary-600 rounded-full" />
                </div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 mb-2 text-xs font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 rounded-full">
                    {project.period}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-primary-600 dark:text-primary-400">
                    {project.organization}
                  </p>
                </div>
                <div className="p-2 border border-gray-300 dark:border-white/10 rounded-2xl bg-white dark:bg-transparent">
                  <div className="group relative overflow-hidden border border-gray-200 dark:border-white/10 rounded-2xl min-h-[500px]">
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  {project.id === 5 ? (
                    <div className="absolute inset-0 bg-white">
                      <div className="absolute left-[3%] top-2 h-[72%] w-[78%] transition-transform duration-500 group-hover:scale-105">
                        <Image src={project.image} alt={`${project.title} desktop view`} fill className="object-contain object-left-top" />
                      </div>
                      <div className="absolute right-[6%] top-2 h-[58%] w-[34%] transition-transform duration-500 group-hover:scale-105">
                        <Image src="/images/projects-images/customs-ai-assistant-mobile.png" alt={`${project.title} mobile view`} fill className="object-contain object-right-top" />
                      </div>
                    </div>
                  ) : (
                    <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent from-30% via-slate-900/50 via-50% to-slate-900/95" />
                  <div
                    className="absolute inset-0 backdrop-blur-[14px]"
                    style={{ maskImage: "linear-gradient(to bottom, transparent 40%, transparent 30%, black 60%)" }}
                  />
                </div>

                <div className="relative p-6 pt-52 min-h-[500px] flex flex-col justify-end">
                  <div>
                    <p className="text-gray-300 mb-4 line-clamp-3 text-sm leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-medium backdrop-blur-md border border-white/20 transition-all duration-200">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                        <FaGithub size={20} />
                        <span className="text-sm font-medium">Code</span>
                      </a>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                        <FaExternalLinkAlt size={18} />
                        <span className="text-sm font-medium">Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
