const Experience = () => {
  const experiences = [
    {
      id: 1,
      year: "May 2023",
      title: "Sea Game Volunteer",
      description:
        "Volunteered for the SEA Games Cambodia on the badminton team. Gained real-world experience communicating with athletes from other Asian countries and developed strong teamwork and responsibility skills while supporting international sporting events in a fast-paced environment.",
      side: "left",
    },
    {
      id: 2,
      year: "November 2025",
      title: "Volunteer at Wing Bank Career",
      description:
        "Assisted in distributing job opportunity letters for various positions at Wing Bank Company. Gained valuable experience learning about different job roles, recruitment processes, and understanding the professional requirements and responsibilities of positions within the banking sector.",
      side: "right",
    },
    {
      id: 3,
      year: "November 2025",
      title: "Participant at Spring Internship Program",
      description:
        "Participated in the Spring Education Center internship program. Collaborated in random group team assignments, distributed informational letters about the school, and maintained daily and weekly reports. Gained valuable insights into marketing strategies and sales performance analysis throughout the internship.",
      side: "left",
    },
    {
      id: 4,
      year: "July 2025",
      title: "Active Member of Codera",
      description:
        "Joined Codera, a freelance development team specializing in mobile app and web development as a full-stack developer. Collaborating on various projects under the supervision of Mr. CHUN Thavorac, lecturer at the Institute of Technology of Cambodia, to deliver high-quality software solutions.",
      side: "right",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            My journey and professional background
          </p>
        </div>

        <div className="relative">
          {/* Timeline line - will be behind the circles */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300 dark:bg-gray-600"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-center ${
                  exp.side === "left" ? "justify-start" : "justify-end"
                }`}
              >
                {/* Timeline dot - outer gray circle with inner black circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-slate-50 dark:bg-slate-800 rounded-full z-10 flex items-center justify-center border-2 border-gray-300 dark:border-gray-600">
                  <div className="w-[14px] h-[14px] bg-gray-900 dark:bg-white rounded-full"></div>
                </div>

                {/* Content card */}
                <div
                  className={`w-full lg:w-[45%] ${
                    exp.side === "left" ? "lg:pr-12" : "lg:pl-12"
                  }`}
                >
                  {/* Year badge above title */}
                  <div
                    className={`mb-2 ${
                      exp.side === "left" ? "text-right" : "text-left"
                    }`}
                  >
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      {exp.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-xl font-bold text-gray-900 dark:text-white mb-3 ${
                      exp.side === "left" ? "text-right" : "text-left"
                    }`}
                  >
                    {exp.title}
                  </h3>

                  {/* Card */}
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
