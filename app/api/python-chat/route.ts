import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { message, history } = await request.json()

    // In a real implementation, you would integrate with OpenAI's ChatGPT API
    // For this demo, we'll simulate responses based on Aniket's Python expertise

    const pythonKnowledge = {
      skills: [
        "Python programming with 3+ years experience",
        "Django framework for web development",
        "FastAPI for modern API development",
        "Machine Learning with TensorFlow and PyTorch",
        "Data analysis and processing",
        "Backend development and API design",
        "Database integration with PostgreSQL and MongoDB",
        "RESTful API development",
        "Python automation and scripting",
      ],
      projects: [
        "Built scalable web applications using Django",
        "Developed machine learning models for data analysis",
        "Created automated scripts for data processing",
        "Implemented backend APIs for full-stack applications",
        "Worked on AI integration projects during internship at CodSoft",
      ],
      experience: [
        "Machine Learning Intern at CodSoft (Jul 2023 - Aug 2023)",
        "Teaching Assistant at Coding Ninjas for C++ and algorithms",
        "Full Stack Developer at TechGSInterns (current)",
        "Completed comprehensive Python training courses",
      ],
    }

    // Simple response logic based on keywords
    const lowerMessage = message.toLowerCase()
    let response = ""

    if (lowerMessage.includes("django") || lowerMessage.includes("web framework")) {
      response =
        "Aniket has extensive experience with Django! He's built scalable web applications using Django framework, implementing features like user authentication, database models, and RESTful APIs. His Django projects include full-stack applications with complex backend logic and database integrations. He's particularly skilled in Django's ORM, middleware, and template system."
    } else if (
      lowerMessage.includes("machine learning") ||
      lowerMessage.includes("ml") ||
      lowerMessage.includes("ai")
    ) {
      response =
        "Aniket has hands-on machine learning experience from his internship at CodSoft! He's worked with cutting-edge ML tools and frameworks, including TensorFlow and PyTorch. His ML experience includes data analysis, model training, and implementing AI solutions. He's also integrated AI features into web applications and has experience with generative AI tools."
    } else if (lowerMessage.includes("backend") || lowerMessage.includes("api") || lowerMessage.includes("server")) {
      response =
        "Aniket excels in backend development with Python! He's proficient in creating robust APIs using Django and FastAPI, handling database operations with PostgreSQL and MongoDB, and implementing secure authentication systems. His backend skills include RESTful API design, database optimization, and server-side logic for complex applications."
    } else if (lowerMessage.includes("experience") || lowerMessage.includes("projects")) {
      response =
        "Aniket has diverse Python experience! He's currently working as a Full Stack Developer at TechGSInterns, completed a Machine Learning internship at CodSoft, and served as a Teaching Assistant at Coding Ninjas. His projects include YouTube-inspired platforms, e-commerce applications, and various automation scripts. He's built scalable applications serving multiple users with complex backend requirements."
    } else if (lowerMessage.includes("skills") || lowerMessage.includes("technologies")) {
      response =
        "Aniket's Python tech stack includes: Django & FastAPI for web development, TensorFlow & PyTorch for ML, PostgreSQL & MongoDB for databases, RESTful API development, Python automation & scripting, data analysis & processing, and AI integration. He's also experienced with version control (Git), cloud deployment, and modern development practices."
    } else if (lowerMessage.includes("teaching") || lowerMessage.includes("mentor")) {
      response =
        "Aniket has teaching experience as a Teaching Assistant at Coding Ninjas! He mentored students in data structures and algorithms using C++, provided guidance on problem-solving techniques, and helped students understand complex algorithmic concepts. This experience demonstrates his ability to explain technical concepts clearly and help others learn programming."
    } else {
      response =
        "Aniket is a skilled Python developer with experience in Django, machine learning, and backend development. He's worked on various projects including web applications, ML models, and automation scripts. His Python expertise spans web frameworks, databases, APIs, and AI integration. What specific aspect of his Python skills would you like to know more about?"
    }

    return NextResponse.json({ message: response })
  } catch (error) {
    console.error("Python chat error:", error)
    return NextResponse.json({ error: "Failed to process message" }, { status: 500 })
  }
}
