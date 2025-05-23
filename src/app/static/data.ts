const slice = {
  first_name: "Vikas",
  last_name: "Singh",
  profession: "Creative Developer",
};

const experience = [
  {
    title: "Bachelor of Technology, Computer Science",
    description: "<p>Ongoing journey...</p>",
    institution: "Lovely Professional University",
    time_period: "2023 - Present",
  },
  {
    title: "Diploma in Computer Science",
    description:
      "<p>Excelled in CSE at Acarya Institute, scoring 9.9 GPA and exploring diverse technologies.</p>",
    institution: "Acharya Institute",
    time_period: "2020 - 2023",
  },
];

const tech = [
  { tech_name: "AWS", tech_color: "#F7DF1E" }, // yellow
  { tech_name: "NextJs", tech_color: "#8CC84B" }, // green
  { tech_name: "DevOps", tech_color: "#E34F26" }, // orange
  { tech_name: "Springboot", tech_color: "#264DE4" }, // blue
];

const blogs = [
  {
    id: "86754a4df4554",
    title: "Welcome! to my blog",
    description:
      "<h1>A Daily Dose of Tech</h1><p>Welcome to my blog! I'm excited to embark on this journey of sharing my daily learnings and insights from the world of technology.</p><p>As a B.Tech student specializing in <strong>cloud computing, networking, and web development</strong>, I'm constantly exploring new tools, techniques, and trends.</p><p>Through this blog, I'll be posting regular updates on:</p><ul><li><strong>Daily Tech Learnings:</strong> Discover what I'm learning each day, from programming languages to cloud platforms and networking concepts.</li><li><strong>Project Updates:</strong> Follow along as I work on personal projects and explore real-world applications of my technical skills.</li><li><strong>Tech News and Trends:</strong> Stay informed about the latest developments in the tech industry, from Cloud Computing, Programminng to tools and emerging technologies.</li></ul><p>Join me on this exciting adventure as I delve deeper into the fascinating world of technology. Let's learn, grow, and share our knowledge together!</p>",
    image:
      "https://static.vecteezy.com/system/resources/previews/010/925/820/non_2x/colorful-welcome-design-template-free-vector.jpg",
    url: "/blogs/86754a4df4554",
    tags: ["Getting Started"],
    created_date: "2023-10-10T00:00:00.000Z",
  },
  {
    id: "b6789c1e34567",
    title: "Getting Started with Spring Boot",
    description:
      "<h1>My Journey into Spring Boot</h1><p>Spring Boot has been a game-changer for me in my journey as a backend developer. Starting with a curiosity to build robust and scalable backend applications, I decided to dive into the world of Spring Boot.</p><p>At first, I explored the fundamentals of the Spring Framework, learning about dependency injection, annotations, and the core concepts of Java-based application development. With a solid foundation, transitioning to Spring Boot felt seamless.</p><p>Spring Boot's simplicity and power amazed me. Its built-in features like auto-configuration, embedded servers, and production-ready tools significantly accelerated my development process. I started by creating small REST APIs to understand the framework's workings and eventually progressed to developing fully functional backend applications.</p><p>My journey began with two basic projects: <strong>Daily Diary</strong> and <strong>E-Commerce App</strong>. In <strong><a href='https://mydiary.xanderbilla.com' target='_blank'>My Diary</a></strong>, I built a personal diary application with CRUD functionality, user authentication, and MongoDB for data storage. In <strong><a href='https://shop.xanderbilla.com' target='_blank'>E-Commerce Apps</a></strong>, I implemented a scalable backend with user authentication (Basic Auth and OAuth), product management, and order processing.</p><p>Along the way, I integrated Spring Security to implement both Basic Authentication and OAuth for secure access control. For data persistence, I used MongoDB, which allowed me to handle unstructured and semi-structured data efficiently. In the future, I plan to expand my expertise by working with SQL databases, enabling me to handle relational data and advanced queries seamlessly.</p><p>Spring Boot has opened up endless possibilities, and I'm excited to continue exploring its capabilities as I work on more challenging backend development projects.</p>",
    image:
      "https://miro.medium.com/v2/resize:fit:1358/1*9LpURd6x_QgHlsQM29Myew.png",
    url: "/blogs/b6789c1e34567",
    tags: ["Spring Boot", "Backend Development", "Spring Security", "MongoDB"],
    created_date: "2024-12-28T00:00:00.000Z",
  },
  {
    id: "c7890d2f45678",
    title: "Building Better Cloud Workflows",
    description:
      "<h1>Building Better Cloud Workflows</h1><p>Cloud storage has changed the game for developers and teams. But let's be honest — there are still a few pain points we've just learned to live with.</p><blockquote><p>What if interacting with cloud storage didn't have to feel so… clunky?</p></blockquote><p>Over the past few weeks, I've been building a SaaS platform that tackles some of those everyday inefficiencies. While I'm not ready to reveal the full concept just yet, the goal is simple — <strong>make cloud storage smarter, faster, and more intuitive</strong> for the people who rely on it most.</p><h2>What We're Building</h2><p>This platform is all about <strong>eliminating friction</strong> and giving users <strong>more control</strong> without adding complexity. It's about rethinking the \"normal\" cloud workflow and creating something that just works better.</p><p>We're not replacing the wheel — just making it roll smoother.</p><h2>Tech Stack at a Glance</h2><ul><li><strong>AWS</strong> for scalable, secure cloud infrastructure</li><li><strong>Spring Boot</strong> for a solid and efficient backend</li><li><strong>Docker & Kubernetes</strong> for smooth deployment and scalability</li><li>DevOps tools to automate and streamline the process</li></ul><h2>Looking Ahead</h2><p>We're still in stealth mode — building, testing, and refining — but I'm genuinely excited about where this is going. If you're into SaaS, backend systems, or just love geeking out over better workflows, I'd love to connect.</p><p><em>Thanks for reading! Always open to conversations, feedback, or future collaborations.</em></p><p>#SaaS #CloudTech #SpringBoot #AWS #DevOps #Innovation #StartupJourney</p>",
    image:
      "https://miro.medium.com/v2/resize:fit:1358/1*9LpURd6x_QgHlsQM29Myew.png",
    url: "/blogs/c7890d2f45678",
    tags: ["Spring Boot", "AWS S3", "SaaS", "AWS STS"],
    created_date: "2025-04-15T00:10:36.468Z",
  },
];

const projects = [
  {
    id: "86754a4df456",
    title: "EnternFlix",
    description: "A Netflix clone with a twist",
    image:
      "https://xanderbilla.s3.ap-south-1.amazonaws.com/ORG_DATA/project_1__enterflix.png",
    url: "https://enternflix.xanderbilla.com",
    tags: ["NextJs", "OpenAPI"],
    created_date: "2023-09-15T00:00:00.000Z",
  },
  {
    id: "86754a3fe456",
    title: "My Shop",
    description: "An e-commerce platform",
    image:
      "https://xanderbilla.s3.ap-south-1.amazonaws.com/ORG_DATA/project_2__my-store.png",
    url: "https://shop.xanderbilla.com/",
    tags: ["NextJs", "TailwindCSS"],
    created_date: "2023-08-10T00:00:00.000Z",
  },
  {
    id: "86754a4df999",
    title: "Single Page Portfolio",
    description: "A simple portfolio website",
    image:
      "https://xanderbilla.s3.ap-south-1.amazonaws.com/ORG_DATA/project_4__portfolioSpa.png",
    url: "https://portfoliospa.xanderbilla.com/",
    tags: ["React JS", "SCSS"],
    created_date: "2023-07-05T00:00:00.000Z",
  },
  {
    id: "86754a4df888",
    title: "Fashion Store",
    description: "An online fashion store",
    image:
      "https://xanderbilla.s3.ap-south-1.amazonaws.com/ORG_DATA/project_3__fashionStore.png",
    url: "https://billastore.xanderbilla.com/",
    tags: ["React JS", "CSS"],
    created_date: "2023-06-01T00:00:00.000Z",
  },
];

const navLinks = [
  { link: "/about", label: "About Me" },
  { link: "/blogs", label: "Blogs" },
  { link: "/projects", label: "Projects" },
  { link: "/contact", label: "Contact" },
];

const footerData = {
  name: "Vikas Singh",
  github_link: "https://github.com/xanderbilla",
  linkedin_link: "https://www.linkedin.com/in/xanderbilla",
};

export { slice, experience, tech, blogs, projects, navLinks, footerData };
