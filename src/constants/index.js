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
    description: `Developed a microservices-based fraud detection system using Java, Spring Boot, and MySQL, building RESTful APIs to handle transaction logging and reconciliation, improving data integrity by 40% across monthly releases.
                  Integrated LLMs with RAG (Retrieval-Augmented Generation) and built event-driven processing using Apache Kafka to analyze transactional patterns in real-time, improving fraud detection precision and reducing false positives by 22%.
                  Orchestrated CI/CD pipelines using Docker to deploy microservices on AWS EC2, S3, Lambda, API Gateway, and RDS, enabling blue-green deployments, reducing downtime-related revenue loss, and decreasing query latency by 30%.
                  Implemented Redis caching in Spring Boot services to reduce load on MySQL, offloading 70% of repetitive database queries and improving system scalability by lowering average response times by 35% during peak traffic.
                  Directed test automation using JUnit, Mockito, and Jenkins pipelines, reducing production bugs by 35% and improving release stability through consistent integration and quality assurance.`,
    technologies: ["Spring Boot", "Java", "AWS", "LLM", "RAG", "Apache kafka", "Redis"],
  },
  {
    year: "Jan 2023 - Jul 2023",
    role: "Software Engineer Intern",
    company: "Oracle",
    description: `Engineered a microservices-based transaction management module using Java, Spring Boot, and Hibernate ORM, enabling automated validation of transactional records and reducing manual reconciliation effort by 40%.
                  Created RESTful APIs for transaction processing workflows, integrating Spring Security and JWT authentication to ensure secure access, supporting seamless user experiences across internal platforms.
                  Optimized data access layers using Hibernate ORM, JPA criteria queries, and Redis caching, reducing query execution time from 7 seconds down to 3 seconds in high-volume transaction reporting modules.
                  Deployed backend services on AWS EC2 with RDS for PostgreSQL, configuring monitoring and alerting via CloudWatch, resulting in a 15% improvement in system availability and reduced downtime for production transaction systems.
                  Developed a centralized payment processing module with transaction retry and status tracking mechanisms, integrating with internal services via REST APIs, which improved reliability and reduced failed transactions by 30%.`,
    technologies: ["Spring Boot", "Java", "Jira", "Confluence", "REST APIs", "SDLC", "Hibernate"],
  },
  {
    year: "Jan 2021 - Dec 2022",
    role: "Software Engineer",
    company: "Mindtree",
    description: `Designed a microservices-based retail system using the MERN stack (MongoDB, Express.js, React, Node.js), containerized with Docker and deployed on AWS ECS, achieving 99.9% uptime and enabling seamless scalability for production workloads.
                  Crafted UI components for a retail operations dashboard using React and Angular, optimizing rendering with efficient data structures to streamline interactions, increasing customer retention and engagement by 25%.
                  Built asynchronous data pipelines within the inventory engine using Apache Kafka and RabbitMQ, improving message throughput by 40% and reducing system response time by 30%.
                  Implemented event-driven workflows using AWS Lambda and SQS to handle inventory and order events, decouple microservices, and enhance maintainability and responsiveness during peak loads.
                  Collaborated with 5+ cross-functional teams across the SDLC, utilizing JIRA for Agile sprint management to deliver product features ahead of schedule.`,
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
