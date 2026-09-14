const Education = () => {
  const education = [
    {
      school: "Institute of Technology of Cambodia",
      period: "2021 – 2026",
      qualification: "Bachelor of Information and Communication Engineering",
    },
    {
      school: "Koh Kong High School",
      period: "2019 – 2021",
      qualification: "High School Diploma (Grade 12)",
    },
  ];

  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {education.map((item) => (
            <article
              key={item.school}
              className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm"
            >
              <span className="inline-block px-3 py-1 text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 rounded-full mb-4">
                {item.period}
              </span>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {item.school}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {item.qualification}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
