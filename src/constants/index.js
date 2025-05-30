import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const MAIN_CONTENT = `I'm Viraj Patel, a Software Engineer with a Master's in Computer Science from Syracuse University. With 3+ years of industry experience, I've built scalable, full-stack applications using Java, Python, Angular, and React. From crafting microservices to deploying cloud-native systems on AWS, my work blends clean code, performance, and reliability. This portfolio showcases the key projects and experiences that define my engineering journey.`;

export const ABOUT_TEXT_1 = `I am a dedicated and versatile software engineer with a passion for solving complex problems and delivering impactful solutions. My expertise lies in data analytics, machine learning, and advanced database management, with hands-on experience in technologies like Java, Python, React, TensorFlow, AWS, and PostgreSQL.`
export const ABOUT_TEXT_2 = `My journey in technology began with a deep curiosity for innovation, evolving into a career focused on building scalable systems, optimizing workflows, and leveraging cloud computing to enhance efficiency. I thrive in collaborative, fast-paced environments where continuous learning and problem-solving are at the core.`
export const ABOUT_TEXT_3 = `Outside of work, I enjoy exploring emerging technologies, automating everyday tasks, and contributing to projects that bridge data-driven insights with real-world impact.`

export const EXPERIENCES = [
  {
    year: "Aug 2024 - Present",
    role: "Software Engineer",
    company: " HCL Tech",
    description: `Achieved 99.9% uptime and seamless cloud scalability by architecting a modular Node.js microservices stack and containerizing services for automated deployments on AWS.
                  Engineered responsive, real-time user interfaces using Angular and React.js, optimizing component performance and usability, resulting in a 25% increase in user engagement.
                  Implemented asynchronous data pipelines and service communication using Apache Kafka and RabbitMQ, increasing message throughput by 40% and reducing system response time by 30% for real-time operations.
                  Integrated event-driven architectures using AWS Lambda and SQS, enhancing system responsiveness and decoupling microservices for improved maintainability.
                  Collaborated with 5+ cross-functional teams throughout the end-to-end Software Development Life Cycle (SDLC), utilizing JIRA for Agile sprint management to deliver features ahead of schedule.`,
    technologies: ["Node.js", "Express.js", "React", "Apache Kafka", "RabbitMQ", "AWS Lambda", "AWS SQS"],
  },
  {
    year: "Jan 2023 - Jul 2023",
    role: "Software Engineer Intern",
    company: "Oracle",
    description: `Built Python automation scripts to configure and test 30+ Jira/Confluence plugins, reducing repetitive manual tasks and increasing operational efficiency by 35%.
                  Created and maintained 100+ Jira macros using custom JQL queries and version-controlled scripts, improving sprint planning accuracy and decreasing latency by 20%.
                  Designed diagnostic scripts to audit plugin configurations and monitor system health, enabling early detection of misconfigurations and reducing QA manual checks by 30%.
                  Implemented validation checks for 20 plugin features and embedded them in CI pipelines, identifying bugs pre-release and improving plugin uptime across production.`,
    technologies: ["SDLE", "Python", "Jira", "Confluence", "REST APIs", "Pandas", "Numpy" ,"Matplotlib", "Jupyter"],
  },
  {
    year: "Jan 2021 - Dec 2022",
    role: "Software Engineer",
    company: "Mindtree",
    description: `Delivered audit logging, inventory updating, and financial reconciliation features, evidenced by zero data-consistency issues across monthly releases, by building Spring Boot REST APIs with full ACID compliance.
                  Reduced API latency by 30 % by optimizing asynchronous processing and query handling in Spring Boot, improving overall user-perceived performance during peak loads.
                  Ensured high availability for cloud-native workloads by orchestrating AWS EC2, S3, Lambda, API Gateway, and DynamoDB, eliminating single points of failure and enabling blue-green deployments.
                  Streamlined backend logic with Servlet-based request handling and effective use of JSTL to separate business logic from view layers, improving maintainability and MVC compliance.
                  Directed code review and test automation with JUnit, Mockito, and Jenkins pipelines, reducing bugs by 35% and ensuring production-readiness through consistent integration checks.`,
    technologies: ["Java", "StringBoot", "AWS", "AWS s3", "AWS Dynamodb", "AWS EC2", "AWS API Gateway"],
  }
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
