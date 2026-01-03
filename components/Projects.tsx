import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Stripe"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
      technologies: ["React", "Node.js", "Socket.io", "PostgreSQL"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for tracking social media metrics across multiple platforms with data visualization and reporting.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      technologies: ["React", "Chart.js", "Express", "MongoDB"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 4,
      title: "Weather Forecast App",
      description:
        "A responsive weather application that provides real-time weather information and 7-day forecasts for any location.",
      image: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=800",
      technologies: ["Next.js", "Tailwind CSS", "OpenWeather API"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 5,
      title: "Blog Platform",
      description:
        "A modern blog platform with markdown support, syntax highlighting, and SEO optimization for technical content.",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800",
      technologies: ["Next.js", "MDX", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description:
        "Mobile-responsive fitness tracking app with workout logging, progress charts, and personalized recommendations.",
      image:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
      github: "https://github.com",
      demo: "https://example.com",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent from-10% via-slate-900/50 via-50% to-slate-900/95"></div>
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
