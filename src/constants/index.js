import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const MAIN_CONTENT = `I'm a software developer and data scientist. With a Master's in Computer Science from Syracuse University, I've exceled my skills in Python, Machine Learning, Data Analytics, and System Design. My academic and professional journey has been a rich mix of theory and practical application. This portfolio showcases the projects and experiences that have shaped my tech career.`;

export const ABOUT_TEXT_1 = `I am a dedicated and versatile software engineer and data scientiest with a passion for solving complex problems and delivering impactful solutions. I have honed my expertise in data analytics, machine learning, and advanced database management, working extensively with technologies such as Python, Django, TensorFlow, AWS, and PostgreSQL.`;
export const ABOUT_TEXT_2 = `My journey in technology began with a deep curiosity for innovation, which has evolved into a career focused on creating scalable systems, optimizing workflows, and leveraging cloud computing to drive efficiency. I thrive in collaborative environments where I can tackle challenges and continuously learn new skills.`
export const ABOUT_TEXT_3 = `Outside of work, I enjoy exploring emerging technologies, automating processes, and contributing to impactful projects that combine data-driven insights with cutting-edge technology.`

export const EXPERIENCES = [
  {
    year: "Nov 2024 - Present",
    role: "Software Engineer",
    company: " iConsult Syracuse",
    description: `Developed and deployed scalable RESTful APIs with Node.js and Express, integrated them into AWS infrastructure, and achieved a 40% reduction in dashboard latency during high-traffic periods. Automated CI/CD pipelines using Docker, GitHub Actions, and AWS ECS, which streamlined the build–deploy process and decreased overall release-cycle duration by 30%. Enhanced overall system scalability by 35%, as demonstrated during simulated and real traffic spikes, through the integration of a React-based frontend with cloud-optimized backend services and AWS CloudWatch insights. Collaborated with a municipal agency to design and launch a real-time traffic-monitoring dashboard, improved data visualization, and contributed to a 25% boost in client-satisfaction scores through greater accuracy and usability.`,
    technologies: ["Python", "Data Processing", "ETL", "Data mining", "Data Analysis"],
  },
  {
    year: "Aug 2024 - Present",
    role: "Graduate Assistant",
    company: "Syracuse University",
    description: `Leveraged expertise in Automata and Computing Theory to guide 50+ students, emphasizing algorithmic thinking and data analysis. Developed a performance analysis model identifying trends and providing actionable educational insights.`,
    technologies: ["Automata", "Computing Theory", "Data Analysis", "problem-solving", "Agile Methodology"],
  },
  {
    year: "Jan 2023 - Jul 2023",
    role: "Software Engineer Intern",
    company: "Oracle",
    description: `Streamlined testing for Jira/Confluence plug-ins using Python, REST APIs, and data analysis libraries like Pandas and Matplotlib. Reduced manual workload by 80% while validating 100+ Confluence pages and 70+ Jira tickets.`,
    technologies: ["SDLE", "Python", "Jira", "Confluence", "REST APIs", "Pandas", "Numpy" ,"Matplotlib", "Jupyter"],
  },
  {
    year: "Jan 2022 - Dec 2022",
    role: "Research Assistant",
    company: "Nirma University",
    description: `Built an Eye Gaze Estimation model using TensorFlow, Keras, and deep learning techniques, achieving 88% precision and reducing angular error to 3 degrees through model optimization.`,
    technologies: ["Python", "TensorFlow", "Keras", "Deep Learning", "JavaScript"],
  },
];

export const PROJECTS = [
  {
    title: "Finbot",
    image: project1,
    description:
      "A financial assistant enabling investment management of over 100 stocks and mutual funds, featuring price tracking, sentiment analysis, and stock recommendations via a chatbot.",
    technologies: ["Python", "Django", "NLP", "LSTM", "ETL", "Docker", "JavaScript"],
  },
  {
    title: "Detect Farm Intrusion Using Thermal Images",
    image: project2,
    description:
      "A real-time intrusion detection model achieving 78% accuracy in identifying nocturnal threats using YOLOv4-tiny-3l and a curated dataset of 7,000 thermal images.",
    technologies: ["Python", "Data Mining", "Data Analysis"],
  },
  {
    title: "Spendwise",
    image: project3,
    description:
      "Spendwise is an application designed for secure authentication and multi-currency transactions, with a focus on creating user-friendly dashboards to track over 100 transactions monthly. The finance management app supports real-time currency conversion and transactions in over 100 currencies. By utilizing object-oriented design principles and UML diagrams, the project enhanced code modularity and maintainability.",
    technologies: ["Python", "Django", "Git", "Microservices", "SDLC", "Scrum", "OOP"],
  },
  {
    title: "Blood Bank Management System",
    image: project4,
    description:
      "A robust Blood Bank Management System designed to streamline inventory and reduce errors, ensuring efficient and error-free management of blood supplies",
    technologies: [ "Java", "File-Handling", "I/O", "System-Design", "OOP"],
  },
];

export const CONTACT = {
  address: "214 Bassett Street, Syracuse, NY 13210 ",
  phoneNo: "+1 848 234 4310 ",
  email: "vpatel26@syr.edu",
};
