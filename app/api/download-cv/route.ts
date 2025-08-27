import { NextResponse } from "next/server"

export async function GET() {
  // In a real application, you would generate a PDF or serve an existing CV file
  // For this demo, we'll create a simple text-based CV content
  const cvContent = `
ANIKET SONKER
Full Stack Developer & MERN Stack Specialist

CONTACT INFORMATION
Email: Aniketsonkerr@gmail.com
Phone: +91 9599746559
GitHub: github.com/Aniketsonkerr
Portfolio: https://aniketsonkerr.github.io/myportfolio/
Location: Ghaziabad, India

CAREER OBJECTIVE
To obtain a Full Stack Developer role where I can leverage my expertise in MERN stack 
(MongoDB, Express.js, React.js, Node.js) to build scalable, high-performance applications.

EDUCATION
B.Tech, Electrical and Electronics Engineering
Guru Gobind Singh Indraprastha University | 2021 - 2025
CGPA: 7.40/10

Senior Secondary (XII), Science
Adhaarsheela Global School (CBSE board) | 2020
Percentage: 78.00%

Secondary (X)
Indirapuram Public School (CBSE board) | 2018
Percentage: 75.00%

TECHNICAL SKILLS
Programming Languages: JavaScript, Python, C++, Java, TypeScript, PHP, HTML, CSS
Frontend Technologies: React.js, Next.js, AngularJS, Bootstrap, UI & UX Design
Backend Technologies: Node.js, Express.js, REST API, APIs
Databases: MongoDB, MySQL, PostgreSQL
Cloud & DevOps: Amazon Web Services (AWS), Amazon EC2, Docker, Linux, Git, GitHub
AI & Machine Learning: AI Image Generation, Generative AI Tools, Machine Learning
Additional Skills: WordPress, Data Structures, Algorithms, English Proficiency

PROFESSIONAL EXPERIENCE

Full Stack Developer | TechGSInterns | Dec 2024 - Present (Virtual)
• Currently developing scalable web applications using modern technologies
• Responsible for both frontend and backend development
• Implementing best practices in code quality and user experience design

Front End Developer | IndoWebAgency, Greater Noida | Oct 2024 - Dec 2024
• Developed responsive and interactive user interfaces using React.js
• Collaborated with design teams to implement pixel-perfect designs
• Optimized user experience across multiple web applications

Teaching Assistant | Coding Ninjas | Jun 2024 - Jul 2024 (Virtual)
• Mentored students in solving data structures and algorithms (DSA) problems using C++
• Provided guidance on problem-solving techniques and code optimization
• Helped students understand complex algorithmic concepts through practical examples

Machine Learning Intern | CodSoft | Jul 2023 - Aug 2023 (Virtual)
• Gained exposure to cutting-edge ML tools and frameworks
• Worked on coding, testing, and problem-solving projects
• Enhanced technical skills in machine learning and data analysis

FEATURED PROJECTS

YouTube-Inspired Platform | Dec 2024 - Jan 2025
• Built a comprehensive YouTube clone using the MERN stack
• Implemented video uploads, user authentication, and JWT-based sessions
• Features responsive UI design and secure user management
Technologies: React, Node.js, MongoDB, Express.js, JWT

Library Management System | Nov 2024 - Dec 2024
• Online library system with dynamic routing and Redux state management
• Implemented form validation and seamless book browsing experience
• GitHub: https://github.com/Aniketsonkerr/onlineLibrarySystem.git
Technologies: React, Redux, JavaScript, CSS

ShoppyGlobal E-Commerce Platform | Nov 2024 - Dec 2024
• Full-stack e-commerce platform with React frontend
• Developed Node.js/Express.js backend with MongoDB integration
• Implemented user authentication and comprehensive API endpoints
• GitHub: https://github.com/Aniketsonkerr/ShoppyGlobal.git
Technologies: MERN Stack, REST API

Weather Application | Jul 2024 - Aug 2024
• Interactive weather app with current weather and 5-day forecast
• Location-based weather detection and recently searched cities functionality
• GitHub: https://github.com/Aniketsonkerr/weatherApp.git
Technologies: JavaScript, HTML/CSS, Weather API, Geolocation

Student Registration System | Jul 2024
• Web application for managing student information
• Features registration forms, data validation, and dynamic table management
• GitHub: https://github.com/Aniketsonkerr/StudentRegistration.git
Technologies: JavaScript, HTML, CSS, Form Validation

Personal Portfolio | Nov 2023 - Dec 2023
• Professional portfolio website showcasing projects and skills
• Responsive design with modern web development practices
• Live: https://aniketsonkerr.github.io/myportfolio/
Technologies: HTML, CSS, JavaScript

TRAINING & CERTIFICATIONS

Full Stack Development Placement Guarantee Course | Internshala Trainings | May 2024 - Jan 2025
Build Your Own Capstone Project | Internshala Trainings | Dec 2024 - Jan 2025
Mastering Node.js, Express.js And MongoDB | Internshala Trainings | Dec 2024
Building Modern Web Applications Using React | Internshala Trainings | Oct 2024 - Nov 2024
Cracking The Code: Data Structures And Algorithms (DSA) In JavaScript | Internshala Trainings | Aug 2024 - Sep 2024
Developing Interactive Websites With JavaScript | Internshala Trainings | Jun 2024 - Aug 2024
Git And GitHub: Mastering Version Control | Internshala Trainings | Jun 2024
Designing Web Pages Using HTML And CSS | Internshala Trainings | May 2024 - Jun 2024
C++ Data Structure & Algorithms | Coding Ninjas | Sep 2023 - Present
THE COMPLETE 2023 WEB DEVELOPMENT BOOT CAMP | Udemy | Jul 2023 - Oct 2023

ACHIEVEMENTS & HIGHLIGHTS
• Successfully completed multiple full-stack projects with modern technologies
• Experienced in teaching and mentoring students in programming concepts
• Strong foundation in data structures and algorithms
• Proficient in both frontend and backend development
• Experience with AI integration and modern development tools
• Active contributor to open-source projects on GitHub
`

  // Create a blob with the CV content
  const blob = new Blob([cvContent], { type: "text/plain" })

  // Convert to buffer for the response
  const buffer = await blob.arrayBuffer()

  return new NextResponse(buffer, {
    headers: {
      "Content-Type": "application/octet-stream",
      "Content-Disposition": 'attachment; filename="Aniket_Sonker_CV.txt"',
      "Content-Length": buffer.byteLength.toString(),
    },
  })
}
