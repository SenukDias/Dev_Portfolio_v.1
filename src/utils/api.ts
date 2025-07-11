import axios from 'axios';
import config from '../../config.json';

export const getProjects = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${config.social.github}/repos`,
  );
  return data;
};

export const getReadme = async () => {
  const { data } = await axios.get(config.readmeUrl);
  return data;
};

export const getWeather = async (city: string) => {
  try {
    const { data } = await axios.get(`https://wttr.in/${city}?ATm`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getQuote = async () => {
  const { data } = await axios.get('https://api.quotable.io/random');
  return {
    quote: `“${data.content}” — ${data.author}`,
  };
};
// AI Assistant API functions
export const getAIResponse = async (message: string) => {
  // Intelligent mock AI responses based on portfolio context
  const lowerMessage = message.toLowerCase();

  // Personal information responses
  if (
    lowerMessage.includes('who') &&
    (lowerMessage.includes('senuk') || lowerMessage.includes('you'))
  ) {
    return `Hi! I'm Senuk Dias, a passionate software developer. I specialize in full-stack development and love creating innovative solutions. You can learn more about me using commands like 'about', 'resume', or 'projects'.`;
  }

  if (
    lowerMessage.includes('skill') ||
    lowerMessage.includes('technolog') ||
    lowerMessage.includes('language')
  ) {
    return `My primary technologies include JavaScript, TypeScript, React, Next.js, Node.js, and Python. I'm also experienced with cloud technologies and DevOps practices. Use 'projects' to see my work or 'skills' for a detailed analysis.`;
  }

  if (
    lowerMessage.includes('project') ||
    lowerMessage.includes('work') ||
    lowerMessage.includes('build')
  ) {
    return `I've worked on various projects ranging from web applications to terminal-based portfolios like this one! Use the 'projects' command to see my GitHub repositories, or try 'analyze [project-name]' for AI-powered project insights.`;
  }

  if (
    lowerMessage.includes('contact') ||
    lowerMessage.includes('hire') ||
    lowerMessage.includes('email')
  ) {
    return `You can reach me at senukdias1@hotmail.com or connect with me on LinkedIn and GitHub. Use 'email', 'linkedin', or 'github' commands to open the respective links directly.`;
  }

  if (lowerMessage.includes('resume') || lowerMessage.includes('cv')) {
    return `You can view my resume using the 'resume' command, or try 'insights' for an AI-powered analysis of my experience and career path.`;
  }

  if (lowerMessage.includes('help') || lowerMessage.includes('command')) {
    return `I can help you navigate this portfolio! Try these AI-powered commands:
    • 'ai [question]' - Ask me anything about Senuk's work
    • 'skills' - Get AI analysis of technical skills
    • 'analyze [project]' - Deep dive into specific projects
    • 'insights' - AI career insights and recommendations
    • 'help' - See all available commands`;
  }

  if (
    lowerMessage.includes('hello') ||
    lowerMessage.includes('hi') ||
    lowerMessage.includes('hey')
  ) {
    return `Hello! I'm Senuk's AI assistant. I can help you learn about his skills, projects, and experience. What would you like to know?`;
  }

  // Default intelligent response
  return `That's an interesting question! I'm here to help you learn about Senuk Dias and his work. Try asking about his skills, projects, experience, or use specific commands like 'projects', 'resume', or 'about' for detailed information.`;
};

export const getSkillsAnalysis = async () => {
  return `🤖 AI Skills Analysis for Senuk Dias:

📊 **Technical Proficiency:**
• Frontend: React, Next.js, TypeScript - Advanced Level
• Backend: Node.js, Express, APIs - Intermediate-Advanced
• Languages: JavaScript, TypeScript, Python - Proficient
• Tools: Git, Docker, Terminal/CLI - Experienced
• Cloud: Deployment and DevOps practices - Growing expertise

🎯 **Strengths Identified:**
• Full-stack development capabilities
• Modern framework expertise (React/Next.js)
• Terminal and CLI tool development
• Clean, maintainable code practices
• Portfolio and personal branding

🚀 **Recommended Growth Areas:**
• Cloud architecture (AWS/Azure/GCP)
• Database optimization and scaling
• Mobile development (React Native)
• Machine Learning integration
• Advanced DevOps and CI/CD

💡 **Career Insights:**
Based on the portfolio analysis, Senuk shows strong foundation in modern web development with potential for growth in cloud technologies and AI integration.`;
};

export const getProjectAnalysis = async (projectName?: string) => {
  if (!projectName) {
    return `🔍 AI Project Analysis Available:

Use 'analyze [project-name]' to get detailed insights about specific projects.

📈 **Portfolio Overview:**
• Terminal-based portfolio showcasing creativity
• Modern tech stack (Next.js, TypeScript, React)
• Clean architecture and component organization
• Integration with GitHub API for dynamic content
• Responsive design and accessibility considerations

Try 'projects' to see all repositories, then use 'analyze [repo-name]' for deep insights!`;
  }

  // Mock analysis for specific projects
  return `🤖 AI Analysis for "${projectName}":

📊 **Technical Assessment:**
• Architecture: Well-structured component-based design
• Code Quality: Clean, maintainable, and documented
• Innovation: Creative terminal interface for portfolio
• Scalability: Good foundation for future enhancements

🔧 **Technologies Detected:**
• Next.js for server-side rendering
• TypeScript for type safety
• Tailwind CSS for styling
• Axios for API integration

💡 **Insights & Recommendations:**
• Strong implementation of modern React patterns
• Good separation of concerns
• Opportunity for PWA features
• Consider adding more interactive elements

⭐ **Uniqueness Factor:** 
This terminal-style portfolio demonstrates creativity and technical skills while providing an engaging user experience.`;
};

export const getCareerInsights = async () => {
  return `🎯 AI Career Insights for Senuk Dias:

📈 **Current Position Analysis:**
• Emerging full-stack developer with strong foundation
• Demonstrates creativity through unique portfolio approach
• Shows commitment to modern development practices
• Active on GitHub with public project contributions

🚀 **Potential Career Paths:**
1. **Frontend Specialist**: Focus on React/Next.js expertise
2. **Full-Stack Developer**: Expand backend and database skills
3. **DevOps Engineer**: Leverage terminal/CLI experience
4. **Creative Developer**: Combine technical skills with design

💼 **Industry Recommendations:**
• Startups: Perfect for rapid development and innovation
• Tech Companies: Strong foundation for growth
• Agencies: Creative approach suits client work
• Open Source: Contributing to community projects

🎓 **Skill Development Priority:**
1. Cloud platforms (AWS/Azure)
2. Database management
3. Testing and QA practices
4. System design and architecture

💡 **Unique Selling Points:**
• Creative problem-solving approach
• Terminal and CLI expertise
• Modern JavaScript ecosystem knowledge
• Personal branding and portfolio presentation`;
};
