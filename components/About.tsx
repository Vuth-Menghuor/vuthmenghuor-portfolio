import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"
              alt="About Me"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            {/* Personal Profile */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Personal Profile
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                I&apos;m a full-stack developer with over 2 years of experience
                specializing in web applications and enterprise solutions. My
                passion lies in creating user-friendly experiences that combine
                elegant design with robust functionality.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mt-3">
                Currently expanding my expertise in modern full-stack
                technologies and actively seeking opportunities to contribute to
                innovative projects and collaborative teams.
              </p>
            </div>

            {/* Hobbies */}
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Hobbies & Interests
              </h3>
              <ul className="grid grid-cols-2 gap-3">
                {[
                  "Coding & Problem Solving",
                  "Learning New Technologies",
                  "Badminton",
                  "Photography",
                  "Music",
                  "Travel",
                ].map((hobby) => (
                  <li
                    key={hobby}
                    className="flex items-center text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-primary-600 mr-2">▹</span>
                    {hobby}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
