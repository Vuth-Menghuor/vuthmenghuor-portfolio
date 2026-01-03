"use client";

import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    setStatus("Thanks for reaching out! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus(""), 5000);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "vuthmenghuor@gmail.com",
      link: "mailto:vuthmenghuor@gmail.com",
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "069 552 601",
      link: "tel:+855069552601",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Chroy Chongva, OCIC, Phnom Penh",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Have a project in mind? Let's work together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Let's talk about everything!
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Don't like forms? Send me an email or reach out on social media.
                👋
              </p>
            </div>

            {contactInfo.map((info) => {
              const Icon = info.icon;
              const content = (
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                      <Icon className="text-primary-600 dark:text-primary-400 text-xl" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {info.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {info.value}
                    </p>
                  </div>
                </div>
              );

              return info.link ? (
                <a
                  key={info.title}
                  href={info.link}
                  className="block hover:transform hover:translate-x-2 transition-transform duration-300"
                >
                  {content}
                </a>
              ) : (
                <div key={info.title}>{content}</div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-primary-300 dark:border-primary-600 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-primary-300 dark:border-primary-600 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-primary-300 dark:border-primary-600 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-primary-300 dark:border-primary-600 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-white resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300 font-medium flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span>Send Message</span>
                <FaPaperPlane />
              </button>

              {status && (
                <p className="text-green-600 dark:text-green-400 text-center font-medium">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
