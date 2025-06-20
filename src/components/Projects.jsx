
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import {
//   Github,
//   ExternalLink,
//   Code2,
//   Palette,
//   Server,
//   Database,
//   Layout,
// } from "lucide-react";
// import { Tilt } from "react-tilt";

// const Projects = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const categories = [
//     { id: "all", label: "All Projects", icon: <Code2 /> },
//     { id: "react", label: "React Projects", icon: <Code2 /> },
//     { id: "html", label: "HTML/CSS Projects", icon: <Layout /> },
//     { id: "figma", label: "Figma Projects", icon: <Palette /> },
//     { id: "mern", label: "MERN Projects", icon: <Database /> },
//     { id: "backend", label: "Backend API Projects", icon: <Server /> },
//   ];

//   const [activeCategory, setActiveCategory] = useState("all");

//   const projects = [
//     {
//       title: "JustHome",
//       description:
//         "A full-featured real estate platform where users can buy, rent, or sell properties. JustHome offers advanced property listings, search filters, and user dashboards for a seamless and intuitive property dealing experience.",
//       tech: ["React", "Node.js", "Express", "MongoDB"],
//       github: "https://github.com/homasvikaneria/just_home",
//       live: "https://project-9viq.onrender.com",
//       image:
//         "https://res.cloudinary.com/dmfjcttu9/image/upload/v1748409126/vzycvocvmuee3fe1yxx0.png", // Replace with your real screenshot if available
//       category: "mern",
//       video: "https://www.youtube.com/embed/qXq7HnzYWCc?autoplay=1&mute=1&loop=1&playlist=qXq7HnzYWCc"
//     }
//     ,


//     {
//       title: "Multi-API Hub",
//       description:
//         "A dynamic website that integrates four APIs to deliver real-time data with a modern, responsive UI, showcasing advanced front-end development and seamless user experience.",
//       tech: ["Node.js", "Express"],
//       github: "https://github.com/homasvikaneria",
//       live: "https://github.com/homasvikaneria",
//       image:
//         "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       category: "react",
//     },
//     {
//       title: "Multi-API Hub",
//       description:
//         "A dynamic website that integrates four APIs to deliver real-time data with a modern, responsive UI, showcasing advanced front-end development and seamless user experience.",
//       tech: ["Node.js", "Express"],
//       github: "https://github.com/homasvikaneria",
//       live: "https://github.com/homasvikaneria",
//       image:
//         "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       category: "html",
//     },

//     {
//       title: "Multi-API Hub",
//       description:
//         "A dynamic website that integrates four APIs to deliver real-time data with a modern, responsive UI, showcasing advanced front-end development and seamless user experience.",
//       tech: ["Node.js", "Express"],
//       github: "https://github.com/homasvikaneria",
//       live: "https://github.com/homasvikaneria",
//       image:
//         "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       category: "figma",
//     },

//     {
//       title: "Multi-API Hub",
//       description:
//         "A dynamic website that integrates four APIs to deliver real-time data with a modern, responsive UI, showcasing advanced front-end development and seamless user experience.",
//       tech: ["Node.js", "Express"],
//       github: "https://github.com/homasvikaneria/WizardFeast",
//       live: "https://wizardfeast.onrender.com/",
//       image:
//         "https://res.cloudinary.com/dmfjcttu9/image/upload/v1750415804/c2cxr2xdawhwxsnktcow.png",
//       category: "backend",
//     },


//   ];

//   const filteredProjects =
//     activeCategory === "all"
//       ? projects
//       : projects.filter((project) => project.category === activeCategory);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//     },
//   };

//   return (
//     <section ref={ref} className="py-24 bg-[#0e0517] min-h-screen">
//       <div className="container mx-auto px-4">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           className="text-center text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff4ecd] to-[#6a5af9] mb-12"
//         >
//           My Projects
//         </motion.h2>

//         {/* Category Filters */}
//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {categories.map((category) => (
//             <button
//               key={category.id}
//               onClick={() => setActiveCategory(category.id)}
//               className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300
//                 ${activeCategory === category.id
//                   ? "bg-gradient-to-r from-[#ff4ecd] to-[#6a5af9] text-white shadow-md shadow-[#ff4ecd]/40"
//                   : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"
//                 }`}
//             >
//               {category.icon}
//               {category.label}
//             </button>
//           ))}
//         </div>

//         {/* Projects Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
//         >
//           {filteredProjects.map((project, index) => (
//             <Tilt key={index} options={{ max: 15, scale: 1.05 }}>
//               <motion.div
//                 variants={itemVariants}
//                 className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 
//                    hover:neon-border transition-all duration-300 overflow-hidden h-full"
//               >
//                 {/* Project Image */}
//                 <div className="relative h-48 overflow-hidden">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
//                   />
//                 </div>

//                 {/* Project Details */}
//                 <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
//                   <h3 className="text-xl font-semibold text-white mb-2">
//                     {project.title}
//                   </h3>
//                   <p className="text-gray-300 mb-4 flex-grow">
//                     {project.description}
//                   </p>

//                   {/* Tech Stack */}
//                   <div className="space-y-4">


//                     {/* Video Preview (if available) */}
//                     {project.video && (
//                       <div className="relative h-48 overflow-hidden mt-4">
//                         <iframe
//                           src={project.video}
//                           className="w-full h-full"
//                           frameBorder="0"
//                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                           allowFullScreen
//                           title={`${project.title} video preview`}
//                         ></iframe>
//                       </div>
//                     )}

//                     {/* Links */}
//                     <div className="flex justify-between items-center pt-4 border-t border-gray-700/50">
//                       <a
//                         href={project.github}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center gap-2 text-gray-300 hover:text-[#ff3399] transition-colors"
//                       >
//                         <Github size={20} />
//                         <span>Code</span>
//                       </a>
//                       <a
//                         href={project.live}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center gap-2 text-gray-300 hover:text-[#ff3399] transition-colors"
//                       >
//                         <ExternalLink size={20} />
//                         <span>Live Demo</span>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </Tilt>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Projects;


// Homasvi_Portfolio/src/components/Projects.jsx

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, ExternalLink } from "lucide-react";
import { Tilt } from "react-tilt";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "JustHome",
      description:
        "A full-featured real estate platform where users can buy, rent, or sell properties. JustHome offers advanced property listings, search filters, and user dashboards for a seamless and intuitive property dealing experience.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/homasvikaneria/just_home",
      live: "https://project-9viq.onrender.com",
      image:
        "https://res.cloudinary.com/dmfjcttu9/image/upload/v1748409126/vzycvocvmuee3fe1yxx0.png",
      video: "https://www.youtube.com/embed/qXq7HnzYWCc?autoplay=1&mute=1&loop=1&playlist=qXq7HnzYWCc"
    },
    {
      title: "AgriAuthentic",
      description:
        "A blockchain-integrated marketplace connecting farmers and consumers with real-time crop insights. Features role-based dashboards, JWT authentication, verified reviews, and a smart market price prediction API to empower fair and efficient trading.",
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      github: "https://github.com/homasvikaneria/Team_35-AgriAuthentic",
      live: "https://agriauthenti-consumer.onrender.com/", 
      image:
        "https://res.cloudinary.com/dmfjcttu9/image/upload/v1750418541/hrwsxtiejdnwzagoqybj.png", // replace with actual image if needed
    },
        {
      title: "WizardFeast",
      description:
        "A dynamic food ordering web app with real-time backend and dashboard controls. Built with Node and MongoDB.",
      tech: ["Node.js", "Express"],
      github: "https://github.com/homasvikaneria/WizardFeast",
      live: "https://wizardfeast.onrender.com/",
      image:
        "https://res.cloudinary.com/dmfjcttu9/image/upload/v1750415804/c2cxr2xdawhwxsnktcow.png",
    },

    {
      title: "Multi-API Hub",
      description:
        "A dynamic website that integrates four APIs to deliver real-time data with a modern, responsive UI, showcasing advanced front-end development and seamless user experience.",
      tech: ["Node.js", "Express"],
      github: "https://github.com/homasvikaneria",
      live: "https://github.com/homasvikaneria",
      image:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Multi-API Hub",
      description:
        "A dynamic website that integrates four APIs to deliver real-time data with a modern, responsive UI, showcasing advanced front-end development and seamless user experience.",
      tech: ["Node.js", "Express"],
      github: "https://github.com/homasvikaneria",
      live: "https://github.com/homasvikaneria",
      image:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Multi-API Hub",
      description:
        "A dynamic website that integrates four APIs to deliver real-time data with a modern, responsive UI, showcasing advanced front-end development and seamless user experience.",
      tech: ["Node.js", "Express"],
      github: "https://github.com/homasvikaneria",
      live: "https://github.com/homasvikaneria",
      image:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section ref={ref} className="py-24 bg-[#0e0517] min-h-screen">
      <div className="container mx-auto px-4 mt-15px">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff4ecd] to-[#6a5af9] mb-12"
        >
          My Projects
        </motion.h2>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
{projects.slice(0, 3).map((project, index) => (
            <Tilt key={index} options={{ max: 15, scale: 1.05 }}>
              <motion.div
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 
                   hover:neon-border transition-all duration-300 overflow-hidden h-full"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>

                {/* Project Details */}
                <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Video Preview (if available) */}
                  {project.video && (
                    <div className="relative h-48 overflow-hidden mt-4">
                      <iframe
                        src={project.video}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={`${project.title} video preview`}
                      ></iframe>
                    </div>
                  )}

                  {/* Links */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-700/50">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-[#ff3399] transition-colors"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-[#ff3399] transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </motion.div>
<div className="mt-8 flex justify-end max-w-7xl mx-auto px-4">
  <a
    href="/all-projects"
    className="inline-block px-6 py-2 text-sm font-semibold text-white border border-[#ff3399] rounded-full hover:bg-[#ff3399] hover:text-black transition-colors duration-300"
  >
    View All Projects →
  </a>
</div>


      </div>
    </section>
  );
};

export default Projects;
