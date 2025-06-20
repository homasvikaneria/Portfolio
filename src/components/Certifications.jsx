// Homasvi_Portfolio/src/components/Certifications.jsx

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import jsCertificateSL from "../images/JS certificate JPG.png";
import htmlCertificateSL from "../images/HTML CertificateSL.png";
import aiCertificate from "../images/SheKunj Generative AI.png"; 
import oddoCertificate from "../images/Oddo Hackathon.png"; 
import jsCertificateHR from "../images/JS Basic HR.png";
import cCertificateSL from "../images/C CertificateSL.png";
import cssbasicHR from "../images/CSS Basic HR.png";
import githubmicrosoft from "../images/GithubCopilotFundamentals.png";
import azureFundamentals from "../images/AzureFundamentals.png";
import AzureBasicServices from "../images/AzureBasicServices.png";
import { Link } from "react-router-dom";
import { Calendar, GraduationCap } from "lucide-react";

const CertificationSection = () => {
  
   const certificates = [
  {
    id: 0,
    title: "GitHub Copilot Fundamentals",
    issuer: "GitHub / Microsoft",
    date: "June 2025",
    image: githubmicrosoft, // You can replace with a local image if you have one
    viewLink: "https://example.com/github-copilot-cert", // Replace with actual cert link
    description:
      "Learned how to leverage GitHub Copilot for AI-powered code suggestions and improved development workflows.",
  },
  {
    id: -1,
    title: "Azure Services Basics",
    issuer: "Microsoft",
    date: "June 2025",
    image:AzureBasicServices , // Replace with your image if available
    viewLink: "https://example.com/azure-services-cert", // Replace with actual cert link
    description:
      "Covered common Azure services and their real-world applications in enterprise environments.",
  },
  {
    id: -2,
    title: "Azure Basics",
    issuer: "Microsoft",
    date: "May 2025",
    image: azureFundamentals, // Replace if needed
    viewLink: "https://example.com/azure-basics-cert", // Replace with actual cert link
    description:
      "Introduction to Microsoft Azure cloud computing fundamentals, core concepts, and platform benefits.",
  },
  // Existing certificates...
  {
    id: 1,
    title: "Oddo X Gujarat Vidyapith Hackathon ’25",
    issuer: "Oddo",
    date: "March 2025",
    image: oddoCertificate,
    viewLink:
      "https://drive.google.com/file/d/1ZooMDABFcDa1cWjSJQuybgkNogv8pRsg/view",
    description:
      "Selected among top 7 teams in a 24-hour national-level hackathon focused on social impact solutions.",
  },
  {
    id: 2,
    title: "JavaScript (Basic) ",
    issuer: "HackerRank",
    date: "May 2025",
    image: jsCertificateHR,
    viewLink: "https://www.hackerrank.com/certificates/243d8558ba1c",
    description:
      "Verified understanding of basic JavaScript concepts such as variables, control structures, and DOM manipulation.",
  },
  {
    id: 3,
    title: "CSS (Basic)",
    issuer: "HackerRank",
    date: "May 2025",
    image: cssbasicHR,
    viewLink: "https://www.hackerrank.com/certificates/5cabe215c772",
    description:
      "Certificate for demonstrating fundamental CSS knowledge, including selectors, layouts, and styling practices.",
  },
  {
    id: 4,
    title: "Generative AI Course",
    issuer: "SheKunj",
    date: "March 2025",
    image: aiCertificate,
    viewLink: "https://www.sololearn.com/certificates/CC-1M6PEEML",
    description:
      "Introductory course focused on Generative AI concepts, applications, and responsible usage.",
  },
  {
    id: 5,
    title: "Introduction to JavaScript",
    issuer: "SoloLearn",
    date: "January 2025",
    image: jsCertificateSL,
    viewLink: "https://www.sololearn.com/certificates/CC-GU7XD5XE",
    description:
      "Covers foundational JavaScript programming including functions, loops, events, and more.",
  },
  {
    id: 6,
    title: "Introduction to HTML",
    issuer: "SoloLearn",
    date: "February 2025",
    image: htmlCertificateSL,
    viewLink: "https://www.sololearn.com/certificates/CC-1M6PEEML",
    description:
      "Basic HTML course covering semantic tags, structure, and practical web markup essentials.",
  },
  {
    id: 7,
    title: "Introduction to C ",
    issuer: "SoloLearn",
    date: "Decembar 2024",
    image: cCertificateSL,
    viewLink: "https://www.sololearn.com/certificates/CC-GQZGDRXP",
    description:
      "Demonstrates understanding of fundamental C programming concepts like variables, control flow, functions, and pointers.",
  },
];
  

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-16 bg-[#0e0517]">
      <div className="container mx-auto px-4 mt-5px">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff4ecd] to-[#6a5af9] mb-12"
        >
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="relative bg-[#1c102f]/70 backdrop-blur-md p-3 rounded-lg border border-[#ffffff14] overflow-hidden group"
            >
              <div className="absolute top-0 left-0 h-full w-0.5 bg-gradient-to-b from-[#a78bfa] to-[#6ee7b7] rounded-l-md" />

              <div className="h-20 overflow-hidden mb-2 rounded-md">
                <img
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-400"
                />
              </div>

              <div className="flex items-center gap-2 mb-2">
                <div className="p-1 rounded-full bg-[#27153f] text-[#6ee7b7]">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white group-hover:-translate-y-1 transition duration-150">
                    {certificate.title}
                  </h3>
                  <p className="text-gray-400 text-xs">{certificate.issuer}</p>
                </div>
              </div>

              <div className="flex items-center gap-1 text-gray-400 text-xs mb-2">
                <Calendar className="w-3 h-3" />
                <span>{certificate.date}</span>
              </div>

              <p
                className="text-gray-300 text-xs mb-3 group-hover:text-gray-200 transition-colors duration-200 line-clamp-3"
                style={{ overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}
              >
                {certificate.description}
              </p>

              <a
                href={certificate.viewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden w-full text-center bg-[#ff3399] hover:bg-pink-900 text-white text-xs font-medium py-1 px-2.5 rounded-md transition focus:outline-none"
              >
                <span className="relative z-10">View</span>
                <span className="absolute inset-0 scale-0 group-hover:scale-100 bg-white/10 transition-transform origin-center rounded-md"></span>
              </a>
            </motion.div>

          ))}

        </div>
        <div className="mt-8 flex justify-end max-w-7xl mx-auto px-4">
          <a
            href="/all-projects"
            className="inline-block px-6 py-2 text-sm font-semibold text-white border border-[#ff3399] rounded-full hover:bg-[#ff3399] hover:text-black transition-colors duration-300"
          >
            View All Certificates →
          </a>
        </div>


      </div>
    </section>
  );
};

export default CertificationSection;
