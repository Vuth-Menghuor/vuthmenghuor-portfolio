"use client";

import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaJava,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiDocker,
  SiFigma,
  SiVuedotjs,
  SiNuxtdotjs,
  SiLaravel,
  SiNestjs,
  SiFlutter,
  SiDart,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: FaReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Vue", icon: SiVuedotjs },
        { name: "Nuxt", icon: SiNuxtdotjs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "JavaScript", icon: FaJs },
        { name: "HTML5", icon: FaHtml5 },
        { name: "CSS3", icon: FaCss3Alt },
        { name: "Tailwind CSS", icon: SiTailwindcss },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: FaNodeJs },
        { name: "Express", icon: SiExpress },
        { name: "NestJS", icon: SiNestjs },
        { name: "Laravel", icon: SiLaravel },
        { name: "Python", icon: FaPython },
        { name: "Java", icon: FaJava },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "REST APIs", icon: FaDatabase },
      ],
    },
    {
      title: "Mobile Development",
      skills: [
        { name: "Flutter", icon: SiFlutter },
        { name: "Dart", icon: SiDart },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: FaGitAlt },
        { name: "Docker", icon: SiDocker },
        { name: "Figma", icon: SiFigma },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Technologies I work with
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="group flex flex-col items-center p-6 bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-primary-600 dark:hover:border-primary-500 hover:bg-primary-500 dark:hover:bg-primary-500 transition-all duration-300 w-[calc(50%-0.75rem)] sm:w-[calc(33.333%-1rem)] md:w-[calc(25%-1.125rem)]"
                    >
                      <Icon className="text-5xl text-gray-800 dark:text-white group-hover:text-white mb-3 transition-colors duration-300" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-white text-center transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
