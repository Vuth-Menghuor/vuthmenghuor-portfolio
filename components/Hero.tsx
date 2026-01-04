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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="animate-fade-in text-center lg:text-left order-2 lg:order-1">
            {/* Greeting */}
            <p className="text-primary-600 dark:text-primary-500 font-semibold text-base sm:text-lg mb-3 sm:mb-4">
              Greetings, my name is
            </p>

            {/* Name */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 break-words">
              VUTH MENGHUOR
            </h1>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 dark:text-gray-300 mb-4 sm:mb-6">
              Full-Stack{" "}
              <span className="text-primary-600 dark:text-primary-500">
                Developer
              </span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 px-2 sm:px-0">
              I'm a full-stack developer specializing in building exceptional
              digital experiences. Currently, I'm focused on building
              accessible, human-centered products.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center lg:items-start mb-6 sm:mb-8">
              <a
                href="#projects"
                className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300 font-medium text-center text-sm sm:text-base"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-primary-600 text-primary-600 dark:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-300 font-medium text-center text-sm sm:text-base"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 sm:space-x-6 mb-6 sm:mb-8 justify-center lg:justify-start">
              <a
                href="https://github.com/Vuth-Menghuor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
              >
                <FaGithub className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
              <a
                href="https://linkedin.com/in/vuth-menghuor-2298a8306"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
              >
                <FaLinkedin className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
              <a
                href="https://www.facebook.com/share/1CjHCuYTqK/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
              >
                <FaFacebook className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
              <a
                href="https://t.me/Vuth_Menghuor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
              >
                <FaTelegram className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
              <a
                href="https://www.instagram.com/_m.hour?igsh=NnU3dDZ3Nzd1MDh6&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
              >
                <FaInstagram className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in order-1 lg:order-2">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[26rem] lg:h-[26rem] xl:w-[28rem] xl:h-[28rem] rounded-full overflow-hidden border-4 border-primary-600 shadow-2xl">
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
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-primary-600 rounded-full animate-pulse"></div>
              <div
                className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-5 h-5 sm:w-6 sm:h-6 bg-primary-400 rounded-full animate-pulse"
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
