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
      "<p>Excelled in CSE at Acarya Institute, scoring 9.8 GPA and exploring diverse technologies.</p>",
    institution: "Acharya Institute",
    time_period: "2020 - 2023",
  },
];

const tech = [
  { tech_name: "NextJS", tech_color: "#8CC84B" }, // green
  { tech_name: "AWS", tech_color: "#F7DF1E" }, // yellow
  { tech_name: "Git", tech_color: "#E34F26" }, // orange
  { tech_name: "Java", tech_color: "#264DE4" }, // blue
];

const blogs = [
  {
    id: "86754a4df4554",
    title: "Welcome! to my blog",
    description: "<h1>A Daily Dose of Tech</h1><p>Welcome to my blog! I'm excited to embark on this journey of sharing my daily learnings and insights from the world of technology.</p><p>As a B.Tech student specializing in <strong>cloud computing, networking, and web development</strong>, I'm constantly exploring new tools, techniques, and trends.</p><p>Through this blog, I'll be posting regular updates on:</p><ul><li><strong>Daily Tech Learnings:</strong> Discover what I'm learning each day, from programming languages to cloud platforms and networking concepts.</li><li><strong>Project Updates:</strong> Follow along as I work on personal projects and explore real-world applications of my technical skills.</li><li><strong>Tech News and Trends:</strong> Stay informed about the latest developments in the tech industry, from Cloud Computing, Programminng to tools and emerging technologies.</li></ul><p>Join me on this exciting adventure as I delve deeper into the fascinating world of technology. Let's learn, grow, and share our knowledge together!</p>",
    image: "https://images.pexels.com/photos/6168066/pexels-photo-6168066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "/blogs/86754a4df4554",
    tags: ["Getting Started"],
    created_date: "2023-10-10T00:00:00.000Z"
  }
]

const projects = [
  {
    id: "86754a4df456",
    title: "EnternFlix",
    description: "A Netflix clone with a twist",
    image: "https://xanderbilla.s3.ap-south-1.amazonaws.com/ORG_DATA/project_1__enterflix.png",
    url: "https://enternflix.xanderbilla.com",
    tags: ["NextJs", "OpenAPI"],
    created_date: "2023-09-15T00:00:00.000Z"
  },
  {
    id: "86754a3fe456",
    title: "My Shop",
    description: "An e-commerce platform",
    image: "https://xanderbilla.s3.ap-south-1.amazonaws.com/ORG_DATA/project_2__my-store.png",
    url: "https://shop.xanderbilla.com/",
    tags: ["NextJs", "TailwindCSS"],
    created_date: "2023-08-10T00:00:00.000Z"
  },
  {
    id: "86754a4df999",
    title: "Single Page Portfolio",
    description: "A simple portfolio website",
    image: "https://xanderbilla.s3.ap-south-1.amazonaws.com/ORG_DATA/project_4__portfolioSpa.png",
    url: "https://portfoliospa.xanderbilla.com/",
    tags: ["React JS", "SCSS"],
    created_date: "2023-07-05T00:00:00.000Z"
  },
  {
    id: "86754a4df888",
    title: "Fashion Store",
    description: "An online fashion store",
    image: "https://xanderbilla.s3.ap-south-1.amazonaws.com/ORG_DATA/project_3__fashionStore.png",
    url: "https://billastore.xanderbilla.com/",
    tags: ["React JS", "CSS"],
    created_date: "2023-06-01T00:00:00.000Z"
  }
]

const navLinks = [
  { link: '/about', label: 'About Me' },
  { link: '/blogs', label: 'Blogs' },
  { link: '/projects', label: 'Projects' },
]

const footerData = {
  name: "Vikas Singh",
  github_link: "https://github.com/xanderbilla",
  linkedin_link: "https://www.linkedin.com/in/xanderbilla",
};

export { slice, experience, tech, blogs, projects, navLinks, footerData };
