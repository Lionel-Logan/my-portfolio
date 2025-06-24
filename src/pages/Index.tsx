
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown, Code, Gamepad2, Brain } from "lucide-react";

const Index = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-red-900 opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.1),transparent_70%)]" />
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-red-100 to-red-300 bg-clip-text text-transparent">
                Navneet Ranjish
              </span>
              <br />
              <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
                Pillai
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed"
          >
            Game Developer • Backend Engineer • AI Enthusiast
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Crafting immersive digital experiences through innovative game development, 
            robust backend solutions, and cutting-edge AI implementations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/projects"
              className="group px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
            >
              View My Work
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              to="/about"
              className="px-8 py-3 border-2 border-red-600 text-red-400 hover:bg-red-600 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              About Me
            </Link>
          </motion.div>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-red-400 transition-colors duration-300"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.button>
      </section>

      {/* Skills Preview Section */}
      <section className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-red-300 bg-clip-text text-transparent">
              What I Do
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Specialized in creating innovative solutions across multiple domains
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="group p-8 bg-gradient-to-br from-gray-900/50 to-red-900/20 rounded-xl border border-red-900/30 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="mb-6 p-3 bg-gradient-to-br from-red-600 to-red-700 rounded-lg w-fit">
                <Gamepad2 size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Game Development</h3>
              <p className="text-gray-300 leading-relaxed">
                Creating immersive gaming experiences using Unity Engine and C#, 
                with expertise in gameplay programming and AI-driven mechanics.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="group p-8 bg-gradient-to-br from-gray-900/50 to-red-900/20 rounded-xl border border-red-900/30 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="mb-6 p-3 bg-gradient-to-br from-red-600 to-red-700 rounded-lg w-fit">
                <Code size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Backend Development</h3>
              <p className="text-gray-300 leading-relaxed">
                Building scalable backend solutions with Java, Node.js, and modern frameworks, 
                ensuring robust and efficient server-side architecture.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="group p-8 bg-gradient-to-br from-gray-900/50 to-red-900/20 rounded-xl border border-red-900/30 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="mb-6 p-3 bg-gradient-to-br from-red-600 to-red-700 rounded-lg w-fit">
                <Brain size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Development</h3>
              <p className="text-gray-300 leading-relaxed">
                Developing intelligent systems and AI-powered applications, 
                with experience in machine learning and automated problem-solving.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
