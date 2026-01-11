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
      year: "July 2025",
      title: "Active Member of Codera",
      description:
        "Joined Codera, a freelance development team specializing in mobile app and web development as a full-stack developer. Collaborating on various projects under the supervision of Mr. CHUN Thavorac, lecturer at the Institute of Technology of Cambodia, to deliver high-quality software solutions.",
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
      year: "November 2025",
      title: "Volunteer at Wing Bank Career",
      description:
        "Assisted in distributing job opportunity letters for various positions at Wing Bank Company. Gained valuable experience learning about different job roles, recruitment processes, and understanding the professional requirements and responsibilities of positions within the banking sector.",
      side: "right",
    },
  ];

  return (
    <section
      id="experience"
      className="py-12 sm:py-16 lg:py-20 bg-slate-50 dark:bg-slate-800"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-primary-600 mx-auto"></div>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 px-4">
            My journey and professional background
          </p>
        </div>

        <div className="relative">
          {/* Timeline line - hidden on mobile, visible on lg+ */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300 dark:bg-gray-600"></div>

          {/* Mobile timeline line - visible on mobile, hidden on lg+ */}
          <div className="lg:hidden absolute left-4 sm:left-6 top-0 h-full w-0.5 bg-gray-300 dark:bg-gray-600"></div>

          {/* Timeline items */}
          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-center ${
                  exp.side === "left" ? "lg:justify-start" : "lg:justify-end"
                }`}
              >
                {/* Timeline dot - desktop (center) */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-slate-50 dark:bg-slate-800 rounded-full z-10 items-center justify-center border-2 border-gray-300 dark:border-gray-600">
                  <div className="w-[14px] h-[14px] bg-gray-900 dark:bg-white rounded-full"></div>
                </div>

                {/* Timeline dot - mobile (left side) */}
                <div className="lg:hidden absolute left-4 sm:left-6 transform -translate-x-1/2 w-5 h-5 sm:w-6 sm:h-6 bg-slate-50 dark:bg-slate-800 rounded-full z-10 flex items-center justify-center border-2 border-gray-300 dark:border-gray-600">
                  <div className="w-[10px] h-[10px] sm:w-[14px] sm:h-[14px] bg-gray-900 dark:bg-white rounded-full"></div>
                </div>

                {/* Content card */}
                <div
                  className={`w-full lg:w-[45%] pl-10 sm:pl-14 lg:pl-0 ${
                    exp.side === "left" ? "lg:pr-12" : "lg:pl-12"
                  }`}
                >
                  {/* Year badge */}
                  <div
                    className={`mb-2 text-left ${
                      exp.side === "left" ? "lg:text-right" : "lg:text-left"
                    }`}
                  >
                    <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 rounded-full">
                      {exp.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 text-left ${
                      exp.side === "left" ? "lg:text-right" : "lg:text-left"
                    }`}
                  >
                    {exp.title}
                  </h3>

                  {/* Card */}
                  <div className="bg-white dark:bg-slate-900 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
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
