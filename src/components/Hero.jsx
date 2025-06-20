

import React, { useEffect, useState } from 'react';
import { Download, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";



const coloredCode = [
  { text: 'const', className: 'text-[#ff3399]' },
  { text: ' coder ', className: 'text-white' },
  { text: '= ', className: 'text-[#ff3399]' },
  { text: '{\n  ', className: 'text-white' },
  { text: 'name', className: 'text-[#00eaff]' },
  { text: ': ', className: 'text-white' },
  { text: `'Homasvi Kaneria'`, className: 'text-yellow-300' },
  { text: ',\n  ', className: 'text-white' },
  { text: 'skills', className: 'text-[#00eaff]' },
  { text: ': ', className: 'text-white' },
  { text: '[', className: 'text-white' },
  { text: `'React',  'Express',  'MySql', 'MongoDB', 'Docker'`, className: 'text-yellow-300' },
  { text: '],\n  ', className: 'text-white' },
  { text: 'hardWorker', className: 'text-[#00eaff]' },
  { text: ': ', className: 'text-white' },
  { text: 'true', className: 'text-[#ff3399]' },
  { text: ',\n  ', className: 'text-white' },
  { text: 'quickLearner', className: 'text-[#00eaff]' },
  { text: ': ', className: 'text-white' },
  { text: 'true', className: 'text-[#ff3399]' },
  { text: ',\n  ', className: 'text-white' },
  { text: 'problemSolver', className: 'text-[#00eaff]' },
  { text: ': ', className: 'text-white' },
  { text: 'true', className: 'text-[#ff3399]' },
  { text: ',\n  ', className: 'text-white' },
  { text: 'hireable', className: 'text-[#00eaff]' },
  { text: ': ', className: 'text-white' },
  { text: 'function', className: 'text-[#ff3399]' },
  { text: '() {\n    ', className: 'text-white' },
  { text: 'return', className: 'text-[#ff3399]' },
  { text: ' (\n      ', className: 'text-white' },
  { text: 'this', className: 'text-[#00eaff]' },
  { text: '.hardWorker &&\n      ', className: 'text-white' },
  { text: 'this', className: 'text-[#00eaff]' },
  { text: '.problemSolver &&\n      ', className: 'text-white' },
  { text: 'this', className: 'text-[#00eaff]' },
  { text: '.skills.length >= ', className: 'text-white' },
  { text: '5', className: 'text-[#ff3399]' },
  { text: '\n    );\n  }\n', className: 'text-white' },
  { text: '};', className: 'text-white' },
];

const TypingCode = () => {
  const [visibleChars, setVisibleChars] = useState(0);
  const flatText = coloredCode.map((c) => c.text).join('');

  useEffect(() => {
    if (visibleChars >= flatText.length) return;
    const timeout = setTimeout(() => {
      setVisibleChars((prev) => prev + 1);
    }, 8);
    return () => clearTimeout(timeout);
  }, [visibleChars]);

  let charCount = 0;
  return (
    <div className="p-6 font-mono text-sm whitespace-pre-wrap">
      {coloredCode.map(({ text, className }, idx) => {
        const remaining = visibleChars - charCount;
        const visibleText = remaining > 0 ? text.slice(0, remaining) : '';
        charCount += text.length;
        return (
          <span key={idx} className={className}>
            {visibleText}
          </span>
        );
      })}
    </div>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0e0e10] via-[#1f0b33] to-[#130124] flex items-center">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                Hi, I'm <span className="text-[#ff3399]">Homasvi Kaneria</span>
              </h1>
              <p className="text-lg md:text-xl text-[#00eaff] mb-8">
                Developing modern web applications with React, and MERN stack technologies.
                Building responsive, user-friendly digital experiences.
              </p>
            </motion.div>

            {/* Social Media Links */}
            <div className="flex gap-6">
              {[
                { href: "https://github.com", icon: <Github /> },
                { href: "https://linkedin.com", icon: <Linkedin /> },
                { href: "https://twitter.com", icon: <Twitter /> },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ff3399] hover:text-white transition-all duration-300 transform hover:scale-110 hover:drop-shadow-[0_0_8px_#ff3399]"
                >
                  <div className="w-8 h-8">{social.icon}</div>
                </a>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap">
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                <button className="px-6 py-3 rounded-full bg-transparent border-2 border-[#ff3399] text-white hover:bg-[#ff3399] transition-colors flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  CONTACT ME
                </button>
              </ScrollLink>

<a
  href="https://drive.google.com/drive/folders/1IW9gQsDwsCuzSJWTvHVlXKJtsyGa3bxR?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="px-6 py-3 rounded-full bg-[#ff3399] text-white hover:bg-[#ff3399]/90 transition-colors flex items-center gap-2">
    <Download className="w-5 h-5" />
    GET RESUME
  </button>
</a>




            </div>
          </div>

          {/* Right Column - Typing Code */}
          <div className="bg-[#1a1a2e] rounded-lg overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#151525]">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <TypingCode />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
