import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Code, 
  Database, 
  Cloud, 
  Brain,
  GraduationCap,
  Briefcase,
  User,
  Menu,
  X,
  ChevronDown,
  Sparkles
} from 'lucide-react';
import userPhoto from '../B423035-removebg-preview.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const skills = {
    languages: ['C', 'C++', 'Java', 'Python', 'HTML', 'CSS', 'JavaScript'],
    frameworks: ['Flask', 'FastAPI', 'Firebase', 'Git', 'Docker', 'Kubernetes'],
    cloud: ['AWS', 'Azure', 'GCP'],
    databases: ['MySQL', 'SQLite', 'Firebase'],
    aiml: ['ML', 'DL', 'CV', 'NLP', 'Speech/Face Recognition', 'GenAI']
  };

  const projects = [
    {
      title: "Fill It – Smart Container Fulfillment",
      year: "2025",
      tech: "FastAPI, Firebase, Firestore, Tailwind CSS, JavaScript",
      description: "Engineered a ride-sharing–inspired platform where customers request to fill partially empty tankers, and drivers accept requests based on real-time geolocation and tanker capacity.",
      highlights: [
        "Developed RESTful backend using FastAPI with Firebase authentication",
        "Built responsive frontend with real-time status updates and animations",
        "Implemented geolocation-based booking system using Haversine formula",
        "Reduced manual tanker assignments by 80%"
      ],
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "ISMS – Institute Student Management System",
      year: "2025",
      tech: "HTML, CSS, JavaScript, AWS (EC2, S3, CloudFront), SSL/TLS",
      description: "Developed a web platform used by 3500+ students and faculty to manage academic records and announcements.",
      highlights: [
        "Built interactive frontend for multiple user roles",
        "Implemented modules for academic records, attendance, and fee management",
        "Hosted on AWS EC2 with static files on S3",
        "Secured with SSL/TLS encryption"
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "ParkEasy – Parking Management Platform",
      year: "2025",
      tech: "Flask, SQLAlchemy, SQLite, Bootstrap",
      description: "Developed a reservation system where users can view, book, and cancel parking slots for specific time ranges.",
      highlights: [
        "Built complete reservation system with admin management",
        "Used SQLAlchemy for ORM with conflict checking",
        "Implemented overlapping booking prevention",
        "Created comprehensive admin dashboard"
      ],
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  const education = [
    {
      institution: "International Institute of Information Technology, Bhubaneswar",
      degree: "B.Tech in Information Technology",
      period: "2023 – 2027"
    },
    {
      institution: "Indian Institute of Technology, Madras",
      degree: "B.S. in Data Science and Applications",
      period: "2023 – 2027"
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Floating particles component
  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`
          }}
        />
      ))}
    </div>
  );

  // Animated geometric shapes
  const GeometricShapes = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-32 h-32 border border-cyan-500/20 rounded-full animate-spin-slow"></div>
      <div className="absolute top-40 right-20 w-24 h-24 border border-purple-500/20 rotate-45 animate-pulse-slow"></div>
      <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg animate-float"></div>
      <div className="absolute bottom-20 right-40 w-16 h-16 border-2 border-blue-500/20 animate-bounce-slow"></div>
    </div>
  );

  // Custom cursor component
  const CustomCursor = () => (
    <div className="fixed inset-0 pointer-events-none z-50">
      <div
        className="absolute w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-80 transition-transform duration-100 ease-out mix-blend-difference"
        style={{
          left: cursorPosition.x - 12,
          top: cursorPosition.y - 12,
          transform: 'scale(1)',
        }}
      />
      <div
        className="absolute w-1 h-1 bg-white rounded-full"
        style={{
          left: cursorPosition.x - 2,
          top: cursorPosition.y - 2,
        }}
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden cursor-none">
      <CustomCursor />
      
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-cyan-900/20 animate-gradient-shift"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-900/10 to-purple-900/10 animate-gradient-shift-reverse"></div>
        <FloatingParticles />
        <GeometricShapes />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-gray-900/80 backdrop-blur-xl border-b border-gray-800/50' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              MN
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())} 
                  className="text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
              <a
                href="https://drive.google.com/file/d/1DHvjrHaMS4bIEgqnDUhT0DlOw9BHAXzC/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-400 text-white rounded-full font-semibold shadow hover:from-cyan-500 hover:to-blue-500 transition-all duration-300"
              >
                View Resume
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50">
            <div className="px-4 py-2 space-y-2">
              {['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())} 
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors"
                >
                  {item}
                </button>
              ))}
              <a
                href="https://drive.google.com/file/d/1DHvjrHaMS4bIEgqnDUhT0DlOw9BHAXzC/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-3 py-2 mt-2 bg-gradient-to-r from-cyan-400 to-blue-400 text-white rounded-lg font-semibold shadow hover:from-cyan-500 hover:to-blue-500 transition-all duration-300"
              >
                View CV
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="mb-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700/50 mb-6">
                <Sparkles size={16} className="text-cyan-400" />
                <span className="text-sm text-gray-300">Available for opportunities</span>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                Mahaprasad Nanda
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up-delay">
              Aspiring Software Engineer with dual degrees from{' '}
              <span className="text-cyan-400 font-semibold">IIIT Bhubaneswar</span> and{' '}
              <span className="text-blue-400 font-semibold">IIT Madras</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8 animate-slide-up-delay-2">
              <a href="mailto:mailtomahaprasad@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors group">
                <Mail size={20} className="group-hover:scale-110 transition-transform" />
                mailtomahaprasad@gmail.com
              </a>
              <a href="tel:+91-8658996694" className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors group">
                <Phone size={20} className="group-hover:scale-110 transition-transform" />
                +91-8658996694
              </a>
            </div>
            
            <div className="flex gap-6 justify-center lg:justify-start mb-12 animate-slide-up-delay-3">
              <a href="https://github.com/Mahaprasadnanda" target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700/50 hover:border-cyan-400/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-110 group">
                <Github size={24} className="text-gray-300 group-hover:text-cyan-400 transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/mahaprasad-nanda-707528285/" target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700/50 hover:border-blue-400/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-110 group">
                <Linkedin size={24} className="text-gray-300 group-hover:text-blue-400 transition-colors" />
              </a>
            </div>

            <div className="flex justify-center lg:justify-start">
              <button 
              onClick={() => scrollToSection('about')}
              className="animate-bounce"
            >
              <ChevronDown size={32} className="text-gray-400 hover:text-cyan-400 transition-colors" />
            </button>
            </div>
            </div>
            
            {/* Right side - Professional Photo */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2 animate-slide-up">
              <div className="relative group">
                <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[24rem] lg:h-[24rem] bg-gray-800/50 backdrop-blur-xl rounded-full border-4 border-cyan-400/40 hover:border-cyan-400/80 shadow-2xl transition-all duration-500 group-hover:scale-105 overflow-hidden flex items-center justify-center">
                  <img 
                    src={userPhoto} 
                    alt="Mahaprasad Nanda" 
                    className="w-full h-full object-cover object-center rounded-full bg-white/10" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/30 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-500 group">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <User size={40} className="text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400">Professional Summary</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Experienced in full-stack development, RESTful API design, and deploying scalable cloud-native systems. 
                    Built real-world apps in logistics, citizen services, and education with a focus on performance and usability. 
                    Strong foundation in Machine Learning,Deep Learning,Computer Vision and Gen-AI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 group hover:scale-105">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Code size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-cyan-400">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium border border-cyan-500/30 hover:bg-cyan-500/30 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-purple-400/50 transition-all duration-500 group hover:scale-105">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Database size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-purple-400">Frameworks & Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30 hover:bg-purple-500/30 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-emerald-400/50 transition-all duration-500 group hover:scale-105">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Cloud size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-emerald-400">Cloud & Databases</h3>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {skills.cloud.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-600/30 text-gray-300 rounded-full text-sm font-medium border border-gray-600/50 hover:bg-gray-600/50 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-orange-400/50 transition-all duration-500 group hover:scale-105 md:col-span-2 lg:col-span-3">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Brain size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-orange-400">AI/ML</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.aiml.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium border border-orange-500/30 hover:bg-orange-500/30 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 group hover:scale-105 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm font-medium text-cyan-400 bg-cyan-400/20 px-3 py-1 rounded-full border border-cyan-400/30">
                      {project.year}
                    </span>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-sm text-gray-400 font-medium mb-2">Tech Stack:</p>
                    <p className="text-cyan-300 font-medium">{project.tech}</p>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-cyan-400">Key Highlights:</p>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-gray-800/30 backdrop-blur-xl rounded-3xl p-8 border-2 border-dashed border-gray-600/50 hover:border-cyan-400/50 transition-all duration-500 group">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Sparkles size={24} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-cyan-400">More Projects Coming Soon!</h3>
              </div>
              <p className="text-gray-400">This section will be updated with additional projects and contributions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/30 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-blue-400/50 transition-all duration-500 group hover:scale-105">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Briefcase size={40} className="text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-xl font-bold text-blue-400">Public Relations Member</h3>
                    <span className="text-sm font-medium text-purple-400 bg-purple-400/20 px-3 py-1 rounded-full border border-purple-400/30 mt-2 sm:mt-0">
                      2024 – Present
                    </span>
                  </div>
                  <p className="text-lg font-medium text-gray-300 mb-3">Veritas Oratory Society, IIT Madras</p>
                  <p className="text-gray-400 leading-relaxed">
                    Managed outreach campaigns and collaborated with tech bodies to grow student participation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-green-400/50 transition-all duration-500 group hover:scale-105">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap size={40} className="text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-green-400 mb-2">{edu.institution}</h3>
                    <p className="text-lg text-gray-300 mb-3">{edu.degree}</p>
                    <span className="text-sm font-medium text-blue-400 bg-blue-400/20 px-3 py-1 rounded-full border border-blue-400/30">
                      {edu.period}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 backdrop-blur-xl rounded-3xl p-8 sm:p-12 text-center border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500">
              <h3 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Let's Work Together
              </h3>
              <p className="text-lg sm:text-xl mb-8 text-gray-300">
                I'm always open to discussing new opportunities and interesting projects.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                <a 
                  href="mailto:mailtomahaprasad@gmail.com" 
                  className="flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:scale-105 group"
                >
                  <Mail size={20} className="group-hover:scale-110 transition-transform" />
                  Send Email
                </a>
                <a 
                  href="tel:+91-8658996694" 
                  className="flex items-center gap-3 border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-full font-medium hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-105 group"
                >
                  <Phone size={20} className="group-hover:scale-110 transition-transform" />
                  Call Me
                </a>
              </div>
              
              <div className="flex gap-6 justify-center">
                <a href="https://github.com/Mahaprasadnanda" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-125">
                  <Github size={32} />
                </a>
                <a href="https://www.linkedin.com/in/mahaprasad-nanda-707528285/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-125">
                  <Linkedin size={32} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gray-900/50 backdrop-blur-xl border-t border-gray-800/50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Mahaprasad Nanda. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;