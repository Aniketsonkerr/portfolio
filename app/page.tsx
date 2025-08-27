"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Zap,
  Star,
  Menu,
  Download,
  Code,
  Database,
  Brain,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ShoppingCart,
  MapPin,
  Award,
  Phone,
  Clock,
  Video,
  BookOpen,
  Cloud,
  Users,
  User,
  Globe,
} from "lucide-react"
import Link from "next/link"
import { ContactForm } from "@/components/contact-form"
import { PythonChatbot } from "@/components/python-chatbot"

const handleDownloadCV = () => {
  window.open("/api/download-cv", "_blank")
}

const scrollToContact = () => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
}

export default function DeveloperPortfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-heading font-black text-primary">Aniket Sonker</h1>
              </div>
            </div>
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="#about" className="text-foreground hover:text-primary transition-colors">
                  About
                </Link>
                <Link href="#projects" className="text-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
                <Link href="#experience" className="text-foreground hover:text-primary transition-colors">
                  Experience
                </Link>
                <Link href="#skills" className="text-foreground hover:text-primary transition-colors">
                  Skills
                </Link>
                <Link href="#contact" className="text-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </div>
            </nav>
            <div className="hidden md:block">
              <Button variant="outline" className="mr-2 bg-transparent" onClick={handleDownloadCV}>
                <Download className="h-4 w-4 mr-2" />
                Download CV
              </Button>
              <Button onClick={scrollToContact}>
                <Mail className="h-4 w-4 mr-2" />
                Get In Touch
              </Button>
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
                Full Stack Developer
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-black mb-6 leading-tight">
              Building the Future with
              <span className="block text-accent"> AI-Powered Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
              Experienced Full Stack Developer specializing in Python and JavaScript, with expertise in AI integration.
              I create innovative web applications that leverage cutting-edge AI technologies to solve real-world
              problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4" onClick={() => window.open("https://github.com/Aniketsonkerr", "_blank")}>
                <Github className="h-5 w-5 mr-2" />
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                onClick={handleDownloadCV}
              >
                <Download className="h-5 w-5 mr-2" />
                Download CV
              </Button>
            </div>
            <div className="flex justify-center space-x-6 text-primary-foreground/80">
              <div className="flex items-center">
                <Code className="h-5 w-5 mr-2" />
                <span>1+ Years Experience</span>
              </div>
              <div className="flex items-center">
                <Database className="h-5 w-5 mr-2" />
                <span>10+ Projects Completed</span>
              </div>
              <div className="flex items-center">
                <Brain className="h-5 w-5 mr-2" />
                <span>AI Integration Expert</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-black mb-4">About Me</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Passionate about creating intelligent solutions that make a difference
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-heading font-bold mb-4">Hello, I'm Aniket Sonker</h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  I'm a passionate Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React.js,
                  Node.js). Currently pursuing B.Tech in Electrical and Electronics Engineering at Guru Gobind Singh
                  Indraprastha University, I bring both academic knowledge and practical experience to build scalable,
                  high-performance web applications.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  With expertise in modern web technologies including React, Node.js, JavaScript, Python, and AI
                  integration tools, I create innovative solutions that bridge the gap between complex backend systems
                  and intuitive user experiences. My experience spans from teaching DSA concepts to developing
                  full-stack applications with advanced features like authentication, real-time data processing, and
                  AI-powered functionalities.
                </p>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" onClick={() => window.open("https://github.com/Aniketsonkerr", "_blank")}>
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => window.open("https://www.linkedin.com/in/aniket-sonker-a6a654273/", "_blank")}>
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm" onClick={()=>window.open("mailto:aniketsonkerr@gmail.com")}>
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 text-center">
                  <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Code className="h-16 w-16 text-primary" />
                  </div>
                  <h4 className="font-heading font-bold text-lg mb-2">AI Integration Specialist</h4>
                  <p className="text-muted-foreground text-sm">
                    Bringing intelligence to web applications through innovative AI solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase Section */}
      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-black mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects showcasing my expertise in full-stack development and AI integration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Video className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">YouTube-Inspired Platform</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Built a comprehensive YouTube clone using the MERN stack with video uploads, user authentication,
                  JWT-based sessions, and responsive UI design.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    React
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Node.js
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    MongoDB
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    JWT
                  </Badge>
                </div>
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Demo
                  </Button>
                  <Button size="sm" variant="ghost" onClick={() => window.open("https://github.com/Aniketsonkerr/youtubeClone", "_blank")}>
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <BookOpen className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">Library Management System</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Online library system built with React featuring dynamic routing, Redux state management, form
                  validation, and seamless book browsing experience.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    React
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Redux
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    JavaScript
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    CSS
                  </Badge>
                </div>
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Demo
                  </Button>
                  <Button size="sm" variant="ghost" asChild>
                    <a
                      href="https://github.com/Aniketsonkerr/onlineLibrarySystem.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <ShoppingCart className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">ShoppyGlobal E-Commerce</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Full-stack e-commerce platform with React frontend and Node.js/Express.js backend, featuring MongoDB
                  integration, user authentication, and API endpoints.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    MERN Stack
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    MongoDB
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Express.js
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    REST API
                  </Badge>
                </div>
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Demo
                  </Button>
                  <Button size="sm" variant="ghost" asChild>
                    <a
                      href="https://github.com/Aniketsonkerr/ShoppyGlobal.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Cloud className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">Weather Application</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Interactive weather app with current weather and 5-day forecast, location-based weather detection, and
                  recently searched cities functionality.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    JavaScript
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    HTML/CSS
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Weather API
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Geolocation
                  </Badge>
                </div>
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Demo
                  </Button>
                  <Button size="sm" variant="ghost" asChild>
                    <a href="https://github.com/Aniketsonkerr/weatherApp.git" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">Student Registration System</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Web application for managing student information with registration forms, data validation, and dynamic
                  table management for educational institutions.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    JavaScript
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    HTML
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    CSS
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Form Validation
                  </Badge>
                </div>
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Demo
                  </Button>
                  <Button size="sm" variant="ghost" asChild>
                    <a
                      href="https://github.com/Aniketsonkerr/StudentRegistration.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <User className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">Personal Portfolio</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Professional portfolio website showcasing projects, skills, and experience with responsive design and
                  modern web development practices.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    HTML
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    CSS
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    JavaScript
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Responsive
                  </Badge>
                </div>
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                    <a href="https://aniketsonkerr.github.io/myportfolio/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-black mb-4">Professional Experience</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A journey through innovative projects and technical leadership
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Experience Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

              {/* Experience Items */}
              <div className="space-y-12">
                {/* Senior Full Stack Developer */}
                {/* Experience Section */}
                <section id="experience" className="py-20">
                  <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                      <h2 className="text-4xl font-heading font-black mb-4">Professional Experience</h2>
                      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        My journey in software development and teaching
                      </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                      <div className="space-y-8">
                        <Card className="border-l-4 border-l-primary bg-card/50 backdrop-blur">
                          <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                              <div>
                                <h3 className="text-xl font-heading font-bold text-primary">Full Stack Developer</h3>
                                <p className="text-lg font-medium text-muted-foreground">TechGSInterns</p>
                              </div>
                              <div className="text-sm text-muted-foreground mt-2 md:mt-0">
                                <Badge variant="outline">Dec 2024 - Present</Badge>
                              </div>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                              Currently working as a Full Stack Developer in a virtual environment, developing scalable
                              web applications using modern technologies. Responsible for both frontend and backend
                              development, implementing best practices in code quality and user experience design.
                            </p>
                          </CardContent>
                        </Card>

                        <Card className="border-l-4 border-l-accent bg-card/50 backdrop-blur">
                          <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                              <div>
                                <h3 className="text-xl font-heading font-bold text-accent">Front End Developer</h3>
                                <p className="text-lg font-medium text-muted-foreground">
                                  IndoWebAgency, Greater Noida
                                </p>
                              </div>
                              <div className="text-sm text-muted-foreground mt-2 md:mt-0">
                                <Badge variant="outline">Oct 2024 - Dec 2024</Badge>
                              </div>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                              Developed responsive and interactive user interfaces using React.js and modern CSS
                              frameworks. Collaborated with design teams to implement pixel-perfect designs and optimize
                              user experience across multiple web applications.
                            </p>
                          </CardContent>
                        </Card>

                        <Card className="border-l-4 border-l-secondary bg-card/50 backdrop-blur">
                          <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                              <div>
                                <h3 className="text-xl font-heading font-bold text-secondary">Teaching Assistant</h3>
                                <p className="text-lg font-medium text-muted-foreground">Coding Ninjas</p>
                              </div>
                              <div className="text-sm text-muted-foreground mt-2 md:mt-0">
                                <Badge variant="outline">Jun 2024 - Jul 2024</Badge>
                              </div>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                              Mentored students in solving data structures and algorithms (DSA) problems using C++.
                              Provided guidance on problem-solving techniques, code optimization, and helped students
                              understand complex algorithmic concepts through practical examples.
                            </p>
                          </CardContent>
                        </Card>

                        <Card className="border-l-4 border-l-primary bg-card/50 backdrop-blur">
                          <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                              <div>
                                <h3 className="text-xl font-heading font-bold text-primary">Machine Learning Intern</h3>
                                <p className="text-lg font-medium text-muted-foreground">CodSoft</p>
                              </div>
                              <div className="text-sm text-muted-foreground mt-2 md:mt-0">
                                <Badge variant="outline">Jul 2023 - Aug 2023</Badge>
                              </div>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                              Gained exposure to cutting-edge ML tools and frameworks commonly used in the industry.
                              Worked on coding, testing, and problem-solving projects that enhanced technical skills in
                              machine learning and data analysis.
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                </section>

               
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Skills Section */}
      <section id="skills" className="py-20 bg-muted/30">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-heading font-extrabold mb-4">Technical Skills</h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
        Comprehensive expertise across modern web technologies and AI integration
      </p>
    </div>

    {/* Programming Languages & Core Technologies */}
    <div className="mb-16">
      <h3 className="text-2xl font-heading font-semibold mb-8 text-center border-b border-muted pb-4 max-w-xl mx-auto">
        Programming Languages & Core Technologies
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {/* Left Column */}
        <div className="space-y-6">
          {[
            { name: "JavaScript", level: "Advanced", width: "90%", color: "bg-primary" },
            { name: "React.js", level: "Advanced", width: "85%", color: "bg-primary" },
            { name: "Node.js", level: "Advanced", width: "80%", color: "bg-accent" },
            { name: "Python", level: "Intermediate", width: "75%", color: "bg-secondary" },
          ].map(({ name, level, width, color }) => (
            <div key={name}>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-lg">{name}</span>
                <span className="text-sm text-muted-foreground">{level}</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div className={`${color} h-3 rounded-full`} style={{ width }} />
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {[
            { name: "C++", level: "Advanced", width: "85%", color: "bg-primary" },
            { name: "Java", level: "Intermediate", width: "70%", color: "bg-accent" },
            { name: "TypeScript", level: "Intermediate", width: "75%", color: "bg-secondary" },
            { name: "PHP", level: "Intermediate", width: "65%", color: "bg-primary" },
          ].map(({ name, level, width, color }) => (
            <div key={name}>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-lg">{name}</span>
                <span className="text-sm text-muted-foreground">{level}</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div className={`${color} h-3 rounded-full`} style={{ width }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Skill Cards Grid */}
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
      <Card className="bg-card/60 backdrop-blur rounded-lg border border-muted p-6 hover:shadow-lg transition-shadow duration-300">
        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
          <Code className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-heading font-semibold mb-4">Frontend Technologies</h3>
        <div className="flex flex-wrap gap-3">
          {["HTML5", "CSS3", "Bootstrap", "Next.js", "AngularJS", "UI/UX Design"].map((tech) => (
            <Badge variant="secondary" key={tech} className="px-3 py-1 rounded-lg shadow-sm">{tech}</Badge>
          ))}
        </div>
      </Card>

      <Card className="bg-card/60 backdrop-blur rounded-lg border border-muted p-6 hover:shadow-lg transition-shadow duration-300">
        <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
          <Database className="h-6 w-6 text-accent" />
        </div>
        <h3 className="text-xl font-heading font-semibold mb-4">Backend & Database</h3>
        <div className="flex flex-wrap gap-3">
          {["Express.js", "MongoDB", "MySQL", "PostgreSQL", "REST API", "APIs"].map((tech) => (
            <Badge variant="secondary" key={tech} className="px-3 py-1 rounded-lg shadow-sm">{tech}</Badge>
          ))}
        </div>
      </Card>

      <Card className="bg-card/60 backdrop-blur rounded-lg border border-muted p-6 hover:shadow-lg transition-shadow duration-300">
        <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
          <Cloud className="h-6 w-6 text-secondary" />
        </div>
        <h3 className="text-xl font-heading font-semibold mb-4">DevOps & Cloud</h3>
        <div className="flex flex-wrap gap-3">
          {["Git", "GitHub", "Docker", "AWS EC2", "Linux", "WordPress"].map((tech) => (
            <Badge variant="secondary" key={tech} className="px-3 py-1 rounded-lg shadow-sm">{tech}</Badge>
          ))}
        </div>
      </Card>
    </div>
  </div>
</section>

      {/* Features Section - Now Skills Preview */}
      <section id="skills-preview" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-black mb-4">Technical Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized skills in modern web development and AI integration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="font-heading">Full Stack Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Expert in Python (Django, FastAPI) and JavaScript (React, Node.js) for end-to-end web solutions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="font-heading">AI Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Implementing ChatGPT, Gemini, and custom AI models to enhance user experiences and automate processes.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="font-heading">Database Design</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Proficient in PostgreSQL, MongoDB, and Redis for scalable data architecture and optimization.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="font-heading">Performance Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Optimizing applications for speed and scalability using modern deployment and monitoring tools.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section - Now Services */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-black mb-4">Services & Expertise</h2>
            <p className="text-xl text-muted-foreground">How I can help bring your ideas to life</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="font-heading">Web Development</CardTitle>
                <CardDescription>Full-stack applications</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-heading font-black">Custom</span>
                  <span className="text-muted-foreground"> Quote</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-2" />
                    React/Next.js Frontend
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-2" />
                    Python/Node.js Backend
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-2" />
                    Database Design
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-2" />
                    API Development
                  </li>
                </ul>
                <Button className="w-full bg-transparent" variant="outline">
                  Get Quote
                </Button>
              </CardContent>
            </Card>

            <Card className="border-primary shadow-lg relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
                Most Popular
              </Badge>
              <CardHeader>
                <CardTitle className="font-heading">AI Integration</CardTitle>
                <CardDescription>Intelligent features</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-heading font-black">Premium</span>
                  <span className="text-muted-foreground"> Service</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-2" />
                    ChatGPT Integration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-2" />
                    Gemini AI Features
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-2" />
                    Custom AI Models
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-2" />
                    Automation Workflows
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-2" />
                    Performance Optimization
                  </li>
                </ul>
                <Button className="w-full">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="font-heading">Consulting</CardTitle>
                <CardDescription>Technical guidance</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-heading font-black">Hourly</span>
                  <span className="text-muted-foreground"> Rate</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-2" />
                    Architecture Review
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-2" />
                    Code Optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-2" />
                    AI Strategy Planning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-2" />
                    Technical Mentoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-2" />
                    Best Practices Guide
                  </li>
                </ul>
                <Button className="w-full bg-transparent" variant="outline">
                  Book Session
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-black mb-4">Let's Work Together</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-heading font-bold mb-6">Get In Touch</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. Whether you're a startup looking to
                  build your MVP or an established company wanting to integrate AI into your existing systems, I'd love
                  to help.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">Aniketsonkerr@gmail.com</p>
                    <p className="text-sm text-muted-foreground">I typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-muted-foreground">+91 9599746559</p>
                    <p className="text-sm text-muted-foreground">Available for calls Mon-Fri, 9 AM - 6 PM IST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Response Time</h4>
                    <p className="text-muted-foreground">Within 24 hours</p>
                    <p className="text-sm text-muted-foreground">Usually much faster during business hours</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <h4 className="font-semibold mb-4">Connect on Social</h4>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" onClick={() => window.open('https://github.com/Aniketsonkerr', '_blank')}>
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => window.open('https://www.linkedin.com/in/aniket-sonker-123456789/', '_blank')} >
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => window.location.href = 'mailto:aniketsonker@gmail.com'}>
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>

          {/* Additional Contact Info */}
          <div className="mt-16 text-center">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="border-border">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Project Consultation</h4>
                  <p className="text-sm text-muted-foreground">
                    Free 30-minute consultation to discuss your project requirements and technical approach.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Brain className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="font-semibold mb-2">AI Integration</h4>
                  <p className="text-sm text-muted-foreground">
                    Specialized consulting on implementing ChatGPT, Gemini, and other AI technologies.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-6 w-6 text-secondary" />
                  </div>
                  <h4 className="font-semibold mb-2">Quick Turnaround</h4>
                  <p className="text-sm text-muted-foreground">
                    Fast project delivery without compromising on quality. Most projects completed within 2-8 weeks.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-black mb-4">Ready to Build Something Amazing?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss your project and explore how AI integration can take your application to the next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4" onClick={scrollToContact}>
              <Mail className="h-5 w-5 mr-2" />
              Start a Conversation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent bg-transparent"
              onClick={handleDownloadCV}
            >
              <Download className="h-5 w-5 mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sidebar text-sidebar-foreground py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-heading font-black mb-4">Aniket Sonker</h3>
              <p className="text-sidebar-foreground/80 mb-4">Full Stack Developer & MERN Stack Specialist</p>
              <div className="flex space-x-4">
                <Link href="#" className="text-sidebar-foreground/60 hover:text-sidebar-foreground transition-colors">
                  <span className="sr-only">GitHub</span>
                  <Github className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-sidebar-foreground/60 hover:text-sidebar-foreground transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-sidebar-foreground/60 hover:text-sidebar-foreground transition-colors">
                  <span className="sr-only">Email</span>
                  <Mail className="h-6 w-6" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sidebar-foreground/80 hover:text-sidebar-foreground transition-colors">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sidebar-foreground/80 hover:text-sidebar-foreground transition-colors">
                    AI Integration
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sidebar-foreground/80 hover:text-sidebar-foreground transition-colors">
                    Consulting
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sidebar-foreground/80 hover:text-sidebar-foreground transition-colors">
                    Code Review
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Technologies</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sidebar-foreground/80 hover:text-sidebar-foreground transition-colors">
                    Python & Django
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sidebar-foreground/80 hover:text-sidebar-foreground transition-colors">
                    JavaScript & React
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sidebar-foreground/80 hover:text-sidebar-foreground transition-colors">
                    AI & Machine Learning
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sidebar-foreground/80 hover:text-sidebar-foreground transition-colors">
                    Database Design
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sidebar-foreground/80 hover:text-sidebar-foreground transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sidebar-foreground/80 hover:text-sidebar-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-sidebar-foreground/80 hover:text-sidebar-foreground transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleDownloadCV}
                    className="text-sidebar-foreground/80 hover:text-sidebar-foreground transition-colors text-left"
                  >
                    Download CV
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-sidebar-border mt-8 pt-8 text-center">
            <p className="text-sidebar-foreground/60">© 2024 Aniket Sonker. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <PythonChatbot />
    </div>
  )
}
