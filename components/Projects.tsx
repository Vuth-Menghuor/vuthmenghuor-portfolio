import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Carbodia E-Commerce Platform",
      description:
        "A full-stack e-commerce platform for vehicles, featuring user authentication, browsing pages, detailed engine information views, reservation capabilities, and wishlist functionality. Built with modern responsive design and intuitive UX for an enhanced user experience. A showcase project for school.",
      image: "/images/projects-images/carbodia-ecommerce-platform.png",
      technologies: [
        "Vue.js",
        "Vite",
        "Pinia",
        "Vue Router",
        "GSAP",
        "PocketBase",
        "CSS",
      ],
      github: "https://github.com/Vuth-Menghuor/carbodia",
      demo: "https://carbodia.pages.dev/",
    },
    {
      id: 2,
      title: "GPS Tracking System",

      description:
        "Developed a Django backend for a GPS tracking system with real-time data retrieval and API endpoints for device monitoring. Improved database operations and data processing, integrated with Nuxt.js, and prepared technical documentation for smooth deployment.",
      image: "/images/projects-images/gps-tracking-system.png",
      technologies: ["Django", "Nuxt.js", "PostgreSQL"],
      github: "https://github.com/Vuth-Menghuor/GPS-Tracking-System.git",
      demo: "https://gps-tracking-system.pages.dev/",
    },
    {
      id: 3,
      title: "Motion Cycles E-Commerce",
      description:
        "Developed a full-stack e-commerce platform for bike sales using Laravel backend and Vue.js frontend, with user authentication, product catalog, and order processing. Implemented features like shopping cart, favorites, product reviews, discounts, and secure KHQR payments via Bakong API, and an admin panel to manage products, order, users, and payment. Improved backend operations, structured RESTful API, and applied modern design with Tailwind CSS for smooth management and user experience. Institute of Technology of Cambodia.",
      image: "/images/projects-images/motion-cycle-ecommerce-plateform.png",
      technologies: ["Laravel", "Vue.js", "Tailwind CSS", "Bakong API"],
      github: "https://github.com/Vuth-Menghuor/motion-cycles-platform.git",
      demo: "https://a57bb3a9.motion-cycles-platform.pages.dev/authentication/sign_in",
    },
    {
      id: 4,
      title: "LED Textboard",
      description:
        "Developed an interactive LED text display web app using HTML5 Canvas with real-time rendering, customizable colors, fonts, and sizes, and a theme system with 12+ styles. Implemented text animations (scroll, float), effects (wobble, 3D, flame, blink), background animations (rectangles, flow field, fireworks), and responsive UI controls for seamless user customization.",
      image: "/images/projects-images/led-textboard.png",
      technologies: ["HTML5 Canvas", "JavaScript", "CSS"],
      github: "https://github.com/Vuth-Menghuor/LED-Textboard.git",
      demo: "https://led-textboard.pages.dev",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Some of the projects I've worked on
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-2 border border-gray-300 dark:border-white/10 rounded-2xl bg-white dark:bg-transparent"
            >
              <div className="group relative overflow-hidden border border-gray-200 dark:border-white/10 rounded-2xl min-h-[500px]">
                {/* Background Image for entire card */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent from-30% via-slate-900/50 via-50% to-slate-900/95"></div>
                  {/* Blur effect with SOFT gradient transition - starts at 30% and gradually increases to bottom */}
                  <div
                    className="absolute inset-0 backdrop-blur-[14px]"
                    style={{
                      maskImage:
                        "linear-gradient(to bottom, transparent 40%, transparent 30%, black 60%)",
                    }}
                  ></div>
                </div>

                {/* Project Content */}
                <div className="relative p-6 pt-56 min-h-[500px] flex flex-col justify-end">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-medium backdrop-blur-md border border-white/20 transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                      >
                        <FaGithub size={20} />
                        <span className="text-sm font-medium">Code</span>
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                      >
                        <FaExternalLinkAlt size={18} />
                        <span className="text-sm font-medium">Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
