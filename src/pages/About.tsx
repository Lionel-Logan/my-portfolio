
import { motion } from "framer-motion";
import { Download, Mail, MapPin, Calendar, Award, Code, Gamepad2, Brain } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-red-100 to-red-300 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get to know me better - my journey, skills, and what drives my passion for technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-8 bg-gradient-to-br from-gray-900/50 to-red-900/10 rounded-xl border border-red-900/30"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Who I Am</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm Navneet Ranjish Pillai, a passionate developer specializing in game development, 
                  backend engineering, and AI applications. Born on December 22, 2004, I bring a fresh 
                  perspective and innovative thinking to every project I undertake.
                </p>
                <p>
                  My journey in technology began with a fascination for how games are built and has evolved 
                  into a comprehensive skill set spanning multiple domains. I believe in creating solutions 
                  that not only meet technical requirements but also provide exceptional user experiences.
                </p>
                <p>
                  Currently pursuing my B.Tech in Computer Science Engineering at KTU, I combine academic 
                  knowledge with practical experience to deliver industry-standard solutions. My work ranges 
                  from immersive game experiences to robust backend systems and intelligent AI applications.
                </p>
              </div>
            </motion.div>

            {/* Skills & Expertise */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="p-8 bg-gradient-to-br from-gray-900/50 to-red-900/10 rounded-xl border border-red-900/30"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Skills & Expertise</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-gray-800/30 rounded-lg border border-gray-700/50">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-gradient-to-br from-red-600 to-red-700 rounded-lg mr-3">
                      <Code size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Technical Skills</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-2">
                      {["Java", "C", "C#", "Python", "C++", "MySQL", "Unreal Engine 5"].map((skill) => (
                        <span key={skill} className="px-2 py-1 text-sm bg-gray-700/50 text-gray-300 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gray-800/30 rounded-lg border border-gray-700/50">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-gradient-to-br from-red-600 to-red-700 rounded-lg mr-3">
                      <Brain size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Soft Skills</h3>
                  </div>
                  <div className="space-y-2 text-gray-300">
                    <p className="text-sm">Communication & Problem Solving</p>
                    <p className="text-sm">Leadership & Teamwork</p>
                    <p className="text-sm">Critical Thinking</p>
                    <p className="text-sm">Creativity & Innovation</p>
                  </div>
                </div>

                <div className="p-6 bg-gray-800/30 rounded-lg border border-gray-700/50">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-gradient-to-br from-red-600 to-red-700 rounded-lg mr-3">
                      <Gamepad2 size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Interests</h3>
                  </div>
                  <div className="space-y-2 text-gray-300">
                    <p className="text-sm">Game Development</p>
                    <p className="text-sm">Computer Architecture</p>
                    <p className="text-sm">Artificial Intelligence</p>
                    <p className="text-sm">Web Development</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="p-8 bg-gradient-to-br from-gray-900/50 to-red-900/10 rounded-xl border border-red-900/30"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Education</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-red-500 pl-6">
                  <div className="flex items-center mb-2">
                    <Calendar className="text-red-400 mr-2" size={16} />
                    <span className="text-red-300 font-semibold">2026</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">B.Tech in Computer Science Engineering</h3>
                  <p className="text-gray-300">Govt. Model Engineering College, KTU</p>
                  <p className="text-gray-400">CGPA: 9.2</p>
                </div>

                <div className="border-l-4 border-gray-500 pl-6">
                  <div className="flex items-center mb-2">
                    <Calendar className="text-gray-400 mr-2" size={16} />
                    <span className="text-gray-400 font-semibold">2022</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">12th Grade</h3>
                  <p className="text-gray-300">Toc-H Public School, CBSE</p>
                  <p className="text-gray-400">Percentage: 86%</p>
                </div>

                <div className="border-l-4 border-gray-500 pl-6">
                  <div className="flex items-center mb-2">
                    <Calendar className="text-gray-400 mr-2" size={16} />
                    <span className="text-gray-400 font-semibold">2020</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">10th Grade</h3>
                  <p className="text-gray-300">Toc-H Public School, CBSE</p>
                  <p className="text-gray-400">Percentage: 92%</p>
                </div>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="p-8 bg-gradient-to-br from-gray-900/50 to-red-900/10 rounded-xl border border-red-900/30"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Achievements & Activities</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-2 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg mr-4 flex-shrink-0">
                    <Award size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">TinkHack 2.0 Finalist</h3>
                    <p className="text-gray-300 mb-2">
                      Finalist in Kerala's largest Gen AI hackathon for the project Trixie, 
                      an AI-powered coding assistant, organized by TinkerHub (2025)
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg mr-4 flex-shrink-0">
                    <Code size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Certification in Programming</h3>
                    <p className="text-gray-300 mb-2">
                      Obtained certification in Programming in C++ certified by NPTEL 
                      in association with IIT Kharagpur
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2 bg-gradient-to-br from-green-500 to-green-600 rounded-lg mr-4 flex-shrink-0">
                    <Gamepad2 size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Campus Leadership</h3>
                    <p className="text-gray-300 mb-2">
                      Campus Lead at GDC MEC 2025, organizing technical workshops, 
                      events and managing various teams for collaborative work
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="p-6 bg-gradient-to-br from-gray-900/50 to-red-900/10 rounded-xl border border-red-900/30"
            >
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="text-red-400 mr-3" size={20} />
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a 
                      href="mailto:navneetranjishshpillai.mec@gmail.com"
                      className="text-white hover:text-red-300 transition-colors"
                    >
                      navneetranjishshpillai.mec@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-red-400 mr-3" size={20} />
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white">+91 8078992511</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Why Hire Me */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="p-6 bg-gradient-to-br from-gray-900/50 to-red-900/10 rounded-xl border border-red-900/30"
            >
              <h3 className="text-xl font-bold text-white mb-6">Why Work With Me?</h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-sm">
                    <strong className="text-white">Innovative Problem Solver:</strong> I bring creative solutions 
                    to complex technical challenges, always seeking the most efficient and elegant approaches.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-sm">
                    <strong className="text-white">Cross-Domain Expertise:</strong> My experience spans game 
                    development, backend systems, and AI, offering versatile solutions for diverse projects.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-sm">
                    <strong className="text-white">Team Leadership:</strong> Proven experience in organizing 
                    technical events and managing collaborative teams effectively.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-sm">
                    <strong className="text-white">Continuous Learning:</strong> I stay updated with the latest 
                    technologies and industry trends, ensuring cutting-edge solutions.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Download Resume */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="p-6 bg-gradient-to-br from-red-900/20 to-red-800/20 rounded-xl border border-red-500/30"
            >
              <h3 className="text-xl font-bold text-white mb-4">Resume</h3>
              <button className="w-full flex items-center justify-center p-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                <Download size={20} className="mr-2" />
                Download Resume
              </button>
              <p className="text-gray-400 text-sm mt-2 text-center">
                Get a detailed overview of my experience and skills
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
