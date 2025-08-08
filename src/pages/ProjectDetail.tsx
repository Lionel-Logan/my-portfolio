
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Code, Lightbulb, Target } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();

  // Sample project data - you can replace this with your actual project details
  const projectData = {
    "devils-reckoning": {
      title: "Devils' Reckoning",
      category: "Video-Game",
      shortDescription: "A high-fidelity, story-driven, single-player video game",
      fullDescription: "Devils' Reckoning is an ambitious single-player video game that combines cutting-edge technology with compelling storytelling. The project utilizes AI-driven tools and industry-standard development practices to create an immersive gaming experience that meets professional quality standards.",
      technologies: ["Unreal Engine 5", "Blueprints", "Rokoko Studio", "Unreal LiveLink"],
      teamSize: 3,
      duration: "3 Months",
      myRole: "Game Designer, Gameplay Programmer, Game Engineer",
      status: "Testing",
      challenges: [
        "Implementing AI-driven character behaviors and interactions",
        "Achieving industry-standard visual quality with limited resources",
        "Integrating motion capture technology seamlessly into gameplay",
        "Optimizing performance while maintaining high-fidelity graphics"
      ],
      contributions: [
        "Designed and implemented core gameplay mechanics using Unreal Engine 5",
        "Integrated Rokoko Studio for motion capture and character animation",
        "Developed in-game mechanics, logic and core features",
        "Collaborated with team members on level design and storytelling elements"
      ],
      features: [
        "High-fidelity graphics powered by Unreal Engine 5",
        "AI-driven character interactions and behaviors",
        "Immersive storytelling",
        "Motion capture integration",
        "Optimized performance across different hardware configurations"
      ],
      githubUrl: null, // Replace with actual repo
      liveUrl: 'https://devilsreckoning.vercel.app', // Add if available
      images: [
        "/images/devils-reckoning/poster.jpg",
        "/images/devils-reckoning/ss1.png",
        "/images/devils-reckoning/ss4.png",
        "/images/devils-reckoning/ss6.png" 
      ]
    },
    "sync-trek": {
      title: "SyncTrek",
      category: "Mobile Application",
      shortDescription: "Personal AI-powered mobile application, that allows users to generate itineraries based on personal selections, with various hotel, food, and insight recommendations.",
      fullDescription: "SyncTrek is an AI-powered, personalized mobile application that, on given set of inputs by the user, generates a full, complete itinerary, with individual recommendations on Hotels, Places, Restaurants, Insights, Rules and Foods to explore. Currently in testing phase.",
      technologies: ["Flutter", "Dart", "Python", "FastAPI", "GenAI"],
      teamSize: 2,
      duration: "Ongoing",
      myRole: "Backend Developer, GenAI Engineer",
      status: "Ongoing",
      challenges: [
        "Implementing AI-driven multi-agenetic behaviors and interactions",
        "Achieving industry-standard responses with limited resources",
        "Integrating FastAPI seamlessly to ensure fast, and reliable responses",
        "Optimizing performance and multi-agent interactions"
      ],
      contributions: [
        "Designed and implemented core backend mechanics using Python FastAPI",
        "Integrated Gemini API for generative itinerary and individual agentic responses",
        "Developed multi-agent models for individual processing, logic and core features",
        "Created a self-implemented server-side architecture for enhanced responses and optimized performance"
      ],
      features: [
        "Multi-model agentic responses",
        "AI-driven character interactions and behaviors",
        "Interactive, and visually appealing UI",
        "Optimized itinerary generation and recommendations",
        "Optimized performance across different hardware configurations"
      ],
      githubUrl: null, // Replace with actual repo
      liveUrl: 'https://synctrek.vercel.app', // Add if available
      images: []
    },
    "zombie-decimation": {
      title: "Zombie: Decimation",
      category: "Video-Game",
      shortDescription: "A high-fidelity, story-driven, single-player video game",
      fullDescription: "Zombie: Decimation is a third-person shooter video-game, developed using Unreal Engine",
      technologies: ["Unreal Engine 4", "Blueprints"],
      teamSize: 1,
      duration: "3 Months",
      myRole: "Game Designer",
      status: "Open to Development",
      challenges: [
        "Implementing character behaviors and interactions",
        "Achieving industry-standard visual quality with limited resources",
        "Optimizing performance while maintaining high-fidelity graphics",
        "Developing a high-fidelity video-game in high school"
      ],
      contributions: [
        "Designed and implemented core gameplay mechanics using Unreal Engine 4",
        "Developed in-game mechanics, logic and core features",
        "Worked on level design and storytelling elements"
      ],
      features: [
        "High-fidelity graphics powered by Unreal Engine 4",
        "Character interactions and behaviors",
        "Immersive storytelling",
        "Optimized performance across different hardware configurations"
      ],
      githubUrl: 'https://github.com/Lionel-Logan/Zombie-Decimation', // Replace with actual repo
      liveUrl: 'https://zombiedecimation.vercel.app', // Add if available
      images: [
        "/images/zombie-decimation/ss3.png",
        "/images/zombie-decimation/ss7.png",
        "/images/zombie-decimation/ss4.png",
        "/images/zombie-decimation/ss2.png",
        "/images/zombie-decimation/ss5.png"
      ]
    },
    "trixie": {
      title: "Trixie - AI Coding Assistant",
      category: "Chrome Extension",
      shortDescription: "An AI-powered personal coding assistant",
      fullDescription: "Trixie is an innovative AI-powered coding assistant delivered through a Chrome extension. It provides real-time coding help, clarifies programming concepts, and offers intelligent suggestions to enhance developer productivity. Built during a hackathon, it demonstrates rapid prototyping and AI integration capabilities.",
      technologies: ["React", "Node.js", "HTML", "CSS", "Chrome Extensions API"],
      teamSize: 4,
      duration: "1 Day",
      myRole: "Backend Developer",
      status: "Completed",
      challenges: [
        "Developing a functional AI assistant within 24 hours",
        "Integrating AI capabilities into a Chrome extension",
        "Creating an intuitive user interface for coding assistance",
        "Ensuring real-time response and reliability"
      ],
      contributions: [
        "Developed the backend infrastructure for AI processing",
        "Implemented the Chrome extension architecture",
        "Collaborated Gemini APIs for real-time coding assistance",
        "Collaborated with teammates for efficiency and teamwork"
      ],
      features: [
        "Real-time coding assistance and suggestions",
        "Chrome extension for seamless integration",
        "AI-powered code explanation and debugging",
        "Intuitive user interface for developer workflow",
        "Support for multiple programming languages"
      ],
      githubUrl: "https://github.com/Lionel-Logan/Trixie---AI-Chatbot", // Replace with actual repo
      liveUrl: null, // Add Chrome Web Store link if available
      images: [
        "/images/trixie/ss5.jpg",
        "/images/trixie/ss3.jpg",
        "/images/trixie/ss2.png"
      ]
    },
    "heavy-duty": {
      title: "Heavy Duty",
      category: "Video-Game",
      shortDescription: "A horror/single-player video-game, designed using Unity Engine",
      fullDescription: "Heavy Duty is a first-person thriller/spooky horror video game. The game features a cinematic depiction of storytelling.",
      technologies: ["Unity Engine", "C#"],
      teamSize: 1,
      duration: "2 Months",
      myRole: "Game Designer",
      status: "Completed",
      challenges: [
        "Developing a video-game alone",
        "Using C# and complex math to achieve the desired gameplay features",
        "Creating an interactive gameplay experience",
        "Integrating cutscenes",
        "Developing a game at high school"
      ],
      contributions: [
        "Developed the entire game using Unity Engine and C#",
        "Implemented gameplay logic"
      ],
      features: [
        "First-person horror/walking simulator",
        "Powered by Unity Engine",
        "Branching storyline",
        "Cinematic depiction of main story"
      ],
      githubUrl: 'https://github.com/Lionel-Logan/HeavyDuty', // Replace with actual repo
      liveUrl: "https://swiftline-studios.itch.io/heavy-duty", // Add Chrome Web Store link if available
      images: [
        "/images/heavy-duty/ss1.png",
        "/images/heavy-duty/ss2.png",
      ]
    },
    "sleep-tight": {
      title: "Sleep Tight",
      category: "Video-Game",
      shortDescription: "A horror/single-player video-game, designed using Unity Engine",
      fullDescription: "Sleep Tight is a short horror/thriller video game developed and published by Swiftline Studios which can give you 10-15 mins of gameplay. This game is entirely developed on the Unity Engine and Blender.",
      technologies: ["Unity Engine", "C#"],
      teamSize: 1,
      duration: "1 Month",
      myRole: "Game Designer",
      status: "Completed",
      challenges: [
        "Developing a video-game in highschool",
        "Using C# and complex math to achieve the desired gameplay features",
        "Creating an interactive gameplay experience",
      ],
      contributions: [
        "Developed the entire game using Unity Engine and C#",
        "Implemented gameplay logic"
      ],
      features: [
        "First-person horror/walking simulator",
        "Powered by Unity Engine",
        "10-15 minutes of gameplay",
        "First ever video-game developed"
      ],
      githubUrl: 'https://github.com/Lionel-Logan/SleepTight', // Replace with actual repo
      liveUrl: "https://swiftline-studios.itch.io/sleep-tight", // Add Chrome Web Store link if available
      images: [
        "/images/sleep-tight/ss1.png",
        "/images/sleep-tight/ss2.png",
        "/images/sleep-tight/ss3.png",
        "/images/sleep-tight/ss4.png"
      ]
    },
    "autohub": {
      title: "AutoHub",
      category: "Desktop Application",
      shortDescription: "An all-purpose, car showroom management desktop application",
      fullDescription: "AutoHub is a comprehensive Car Showroom Management System designed to streamline operations for car dealerships and showrooms. The system provides a robust platform for managing vehicle inventory, showroom operations, employee management, and customer interactions across multiple locations.",
      technologies: ["Java", "MySQL", "JavaFX", "CSS"],
      teamSize: 4,
      duration: "2 Months",
      myRole: "Backend Developer",
      status: "Completed",
      challenges: [
        "Developing a fully-functional database management software",
        "Integrating MySQL for encryption, and CRUD operations",
        "Creating an intuitive user interface for ease of use",
        "Ensuring real-time response and reliability"
      ],
      contributions: [
        "Developed the backend infrastructure for processing and performing CRUD operations",
        "Implemented the desktop application architecture",
        "Collaborated MySQL and legacy Java, and JavaFX technologies to create a robust software",
        "Created and implemented various encryption and database functionalities"
      ],
      features: [
        "Separate interfaces for Admins and Users (Managers/Employees)",
        "Add, update, delete, and view car inventory across multiple showrooms",
        "Comprehensive staff management with role-based permissions",
        "Multi-location support with detailed showroom management",
        "Secure binary file system with automatic database synchronization",
        "Custom .dbm file system for seamless data portability"
      ],
      githubUrl: "https://github.com/Lionel-Logan/AutoHub", // Replace with actual repo
      liveUrl: null, // Add Chrome Web Store link if available
      images: [
        "/images/autohub/ss3.png",
        "/images/autohub/ss1.png",
      ]
    },

  };

  const project = projectData[id as keyof typeof projectData];

  if (!project) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-red-400 hover:text-red-300 transition-colors">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/projects"
            className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors duration-300 mb-8"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-4 py-2 bg-gradient-to-r from-red-600/20 to-red-700/20 text-red-300 rounded-full border border-red-500/30">
              {project.category}
            </span>
            <span className="text-green-400 font-semibold">{project.status}</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-red-100 to-red-300 bg-clip-text text-transparent">
            {project.title}
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Project Meta */}
          <div className="grid sm:grid-cols-3 gap-6 p-6 bg-gradient-to-br from-gray-900/50 to-red-900/10 rounded-xl border border-red-900/30">
            <div className="flex items-center">
              <Users className="text-red-400 mr-3" size={20} />
              <div>
                <p className="text-gray-400 text-sm">Team Size</p>
                <p className="text-white font-semibold">{project.teamSize} members</p>
              </div>
            </div>
            <div className="flex items-center">
              <Calendar className="text-red-400 mr-3" size={20} />
              <div>
                <p className="text-gray-400 text-sm">Duration</p>
                <p className="text-white font-semibold">{project.duration}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Code className="text-red-400 mr-3" size={20} />
              <div>
                <p className="text-gray-400 text-sm">My Role</p>
                <p className="text-white font-semibold">{project.myRole}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Images */}
        {project.images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="grid gap-6">
              {project.images.map((image, index) => (
                <div key={index} className="rounded-xl overflow-hidden border border-red-900/30">
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="p-8 bg-gradient-to-br from-gray-900/50 to-red-900/10 rounded-xl border border-red-900/30"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Target className="text-red-400 mr-3" size={24} />
                Project Overview
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {project.fullDescription}
              </p>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="p-8 bg-gradient-to-br from-gray-900/50 to-red-900/10 rounded-xl border border-red-900/30"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Lightbulb className="text-red-400 mr-3" size={24} />
                Key Features
              </h2>
              <div className="grid gap-3">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300">{feature}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Challenges & Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="p-8 bg-gradient-to-br from-gray-900/50 to-red-900/10 rounded-xl border border-red-900/30"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Challenges & Solutions</h2>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
                    <p className="text-gray-300">{challenge}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="p-6 bg-gradient-to-br from-gray-900/50 to-red-900/10 rounded-xl border border-red-900/30"
            >
              <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-2 bg-gradient-to-r from-gray-800 to-gray-700 text-gray-300 rounded-lg text-sm border border-gray-600/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* My Contributions */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="p-6 bg-gradient-to-br from-gray-900/50 to-red-900/10 rounded-xl border border-red-900/30"
            >
              <h3 className="text-xl font-bold text-white mb-4">My Contributions</h3>
              <div className="space-y-3">
                {project.contributions.map((contribution, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">{contribution}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="p-6 bg-gradient-to-br from-gray-900/50 to-red-900/10 rounded-xl border border-red-900/30"
            >
              <h3 className="text-xl font-bold text-white mb-4">Project Links</h3>
              <div className="space-y-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors duration-300 border border-gray-700/50 hover:border-red-500/30"
                  >
                    <Github size={20} className="text-gray-400 mr-3" />
                    <span className="text-gray-300">View on GitHub</span>
                    <ExternalLink size={16} className="text-gray-500 ml-auto" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-gradient-to-r from-red-600/20 to-red-700/20 hover:from-red-600/30 hover:to-red-700/30 rounded-lg transition-colors duration-300 border border-red-500/30"
                  >
                    <ExternalLink size={20} className="text-red-400 mr-3" />
                    <span className="text-red-300">View Live Project</span>
                  </a>
                )}
                {!project.liveUrl && !project.githubUrl && (
                  <p className="text-gray-400 text-sm italic">Links will be added soon</p>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
