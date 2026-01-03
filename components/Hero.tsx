"use client";

import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTelegram,
  FaInstagram,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="animate-fade-in">
            {/* Greeting */}
            <p className="text-primary-600 dark:text-primary-500 font-semibold text-lg mb-4">
              Greetings, my name is
            </p>

            {/* Name */}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 whitespace-nowrap">
              VUTH MENGHUOR
            </h1>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-700 dark:text-gray-300 mb-6">
              Full-Stack{" "}
              <span className="text-primary-600 dark:text-primary-500">
                Developer
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              I'm a full-stack developer specializing in building exceptional
              digital experiences. Currently, I'm focused on building
              accessible, human-centered products.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-start mb-8">
              <a
                href="#projects"
                className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300 font-medium "
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-primary-600 text-primary-600 dark:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-300 font-medium"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 mb-8">
              <a
                href="https://github.com/Vuth-Menghuor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
              >
                <FaGithub size={28} />
              </a>
              <a
                href="https://linkedin.com/in/vuth-menghuor-2298a8306"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="https://www.facebook.com/share/1CjHCuYTqK/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
              >
                <FaFacebook size={28} />
              </a>
              <a
                href="https://t.me/Vuth_Menghuor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
              >
                <FaTelegram size={28} />
              </a>
              <a
                href="https://www.instagram.com/_m.hour?igsh=NnU3dDZ3Nzd1MDh6&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
              >
                <FaInstagram size={28} />
              </a>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-96 h-96 md:w-[28rem] md:h-[28rem] rounded-full overflow-hidden border-4 border-primary-600 shadow-2xl">
                <img
                  src="/images/cv-e20211532.png"
                  alt="Profile"
                  className="w-full h-full object-cover transform scale-125 translate-y-4 select-none"
                  draggable="false"
                  onDragStart={(e) => e.preventDefault()}
                  style={{
                    userSelect: "none",
                    WebkitTouchCallout: "none",
                    // @ts-ignore - WebkitUserDrag is not in CSSProperties
                    WebkitUserDrag: "none",
                  }}
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-600 rounded-full animate-pulse"></div>
              <div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-400 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
