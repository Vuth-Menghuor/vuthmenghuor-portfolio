import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTelegram,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/Vuth-Menghuor",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/vuth-menghuor-2298a8306",
      label: "LinkedIn",
    },
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/share/1CjHCuYTqK/?mibextid=wwXIfr",
      label: "Facebook",
    },
    { icon: FaTelegram, href: "https://t.me/Vuth_Menghuor", label: "Telegram" },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/_m.hour?igsh=NnU3dDZ3Nzd1MDh6&utm_source=qr",
      label: "Instagram",
    },
    { icon: FaEnvelope, href: "mailto:vuthmenghuor@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; {currentYear} Your Name. All rights reserved.</p>
            <p className="mt-1">Built with Next.js & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
