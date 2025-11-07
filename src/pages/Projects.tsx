import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, Github, Calendar, Users } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: "devils-reckoning",
      title: "Devils' Reckoning",
      category: "Video-Game",
      description: "A high-fidelity, story-driven, single-player video game that achieves industry standard quality and finish, with zero budget.",
      technologies: ["Unreal Engine 5", "C++", "Blueprints", "Rokoko Studio", "Unreal LiveLink"],
      teamSize: 3,
      duration: "3 Months",
      status: "Testing",
      featured: true
    },
    {
      id: "sync-trek",
      title: "SyncTrek",
      category: "Mobile Application",
      description: "Personal AI-powered mobile application, that allows users to generate itineraries based on personal selections, with various hotel, food, and insight recommendations.",
      technologies: ["Flutter", "Dart", "Python", "FastAPI", "GenAI"],
      teamSize: 2,
      duration: "Ongoing",
      status: "Ongoing",
      featured: true
    },
    {
      id: "zombie-decimation",
      title: "Zombie: Decimation",
      category: "Video-Game",
      description: "A story-driven, single-player zombie/shooter video-game with zero budget.",
      technologies: ["Unreal Engine 4", "C++", "Blueprints"],
      teamSize: 1,
      duration: "3 Months",
      status: "Open to Development",
      featured: true
    },
    {
      id: "anomaly",
      title: "The Transcendence Project : Anomaly",
      category: "Video-Game",
      description: "A first person, single-player horror video-game.",
      technologies: ["Unreal Engine 4", "C++", "Blueprints"],
      teamSize: 1,
      duration: "2 Months",
      status: "Completed",
      featured: true
    },
    {
      id: "trixie",
      title: "Trixie - AI Coding Assistant",
      category: "Chrome Extension",
      description: "An AI-powered personal coding assistant that allows users to clarify doubts, seek help and ask for coding solutions through a Chrome extension.",
      technologies: ["React", "Node.js", "HTML", "CSS"],
      teamSize: 4,
      duration: "1 Day",
      status: "Completed",
      featured: false
    },
    {
      id: "autohub",
      title: "AutoHub",
      category: "Desktop Application",
      description: "A fully-functional car showroom management desktop application for admins and users to manage company staff, cars, and availability.",
      technologies: ["Java", "MySQL", "JavaFX", "CSS"],
      teamSize: 4,
      duration: "2 Months",
      status: "Completed",
      featured: false
    },
    {
      id: "heavy-duty",
      title: "Heavy Duty",
      category: "Video-Game",
      description: "A short horror video game designed using Unity Engine and C# featuring complex and interactive gameplay elements.",
      technologies: ["Unity Engine", "C#"],
      teamSize: 1,
      duration: "2 Months",
      status: "Completed",
      featured: false
    },
    {
      id: "sleep-tight",
      title: "Sleep Tight",
      category: "Video-Game",
      description: "A horror video game designed using Unity Engine, showcasing atmospheric gameplay and immersive design elements.",
      technologies: ["Unity Engine", "C#"],
      teamSize: 1,
      duration: "1 Month",
      status: "Completed",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-red-100 to-red-300 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of innovative solutions spanning game development, AI applications, and robust backend systems
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-700 rounded mr-3"></span>
            Featured Projects
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="group"
              >
                <Link to={`/project/${project.id}`}>
                  <div className="h-full p-8 bg-gradient-to-br from-gray-900/80 to-red-900/20 rounded-xl border border-red-900/30 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10">
                    <div className="flex justify-between items-start mb-4">
                      <span className="px-3 py-1 text-sm bg-gradient-to-r from-red-600/20 to-red-700/20 text-red-300 rounded-full border border-red-500/30">
                        {project.category}
                      </span>
                      <ExternalLink size={20} className="text-gray-400 group-hover:text-red-400 transition-colors duration-300" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-100 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-gray-800/50 text-gray-300 rounded-lg border border-gray-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Users size={16} className="mr-1" />
                          <span>Team: {project.teamSize}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-1" />
                          <span>{project.duration}</span>
                        </div>
                      </div>
                      <span className="text-green-400">{project.status}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-700 rounded mr-3"></span>
            Other Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to={`/project/${project.id}`}>
                  <div className="h-full p-6 bg-gradient-to-br from-gray-900/60 to-red-900/10 rounded-xl border border-gray-700/50 hover:border-red-500/30 transition-all duration-300 transform hover:scale-105">
                    <div className="flex justify-between items-start mb-3">
                      <span className="px-2 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full">
                        {project.category}
                      </span>
                      <ExternalLink size={16} className="text-gray-500 group-hover:text-red-400 transition-colors duration-300" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-100 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 2).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-gray-800/30 text-gray-400 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 2 && (
                        <span className="px-2 py-1 text-xs text-gray-500">
                          +{project.technologies.length - 2} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{project.duration}</span>
                      <span className="text-green-400">{project.status}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
