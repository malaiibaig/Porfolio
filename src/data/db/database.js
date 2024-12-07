import Mock from "../mock";

const database = {
  information: {
    name: "Malaika",
    aboutContent:
      "Complex problem-solver with analytical and driven mindset. Dedicated to achieving demanding development objectives according to tight schedules while producing impeccable code. To seek and maintain full-time position that offers professional challenges utilizing interpersonal skills, excellent time management and problem-solving skills. Organized and dependable candidate successful at managing multiple priorities with a positive attitude. Willingness to take on added responsibilities to meet team goals. Detail-oriented, organized and meticulous employee. ",
    age: 25,
    phone: "+923089161909",
    nationality: "Pakistani",
    language: "English, Urdu",
    email: "malaikabaig@gmail.com",
    address: "Haripur, Pakistan",
    freelanceStatus: "Available",
    socialLinks: {
      facebook: "",
      twitter: "",
      pinterest: "",
      behance: "",
      linkedin: "https://www.linkedin.com/in/malaiibaig/",
      dribbble: "",
      github: "https://github.com/malaiibaig",
    },
    brandImage: "/images/image.jpg",
    aboutImage: "/images/image.jpg",
    aboutImageLg: "/images/image.jpg",
    cvfile: "/files/Cv.pdf",
  },
  services: [
    {
      title: "Responsive Web Design",
      icon: "layout",
      details:
        "Design and develop websites that look stunning and function seamlessly across all devices, ensuring an optimal user experience.",
    },
    {
      title: "Web Development",
      icon: "code",
      details:
        "Build fast, scalable, and maintainable web applications using modern technologies like React, Redux, and TypeScript.",
    },
    {
      title: "Animated UI/UX Design",
      icon: "code",
      details:
        "Create engaging user interfaces with animations and transitions using libraries like Framer Motion and React Spring.",
    },
    {
      title: "Performance Optimization",
      icon: "code",
      details:
        "Optimize your web apps for blazing-fast performance and smooth animations, leveraging tools like Lighthouse and React Profiler.",
    },
    {
      title: "E-commerce Development",
      icon: "code",
      details:
        "Build robust and secure e-commerce platforms with payment gateway integration, product management, and responsive designs.",
    },
    {
      title: "SEO & Accessibility",
      icon: "search",
      details:
        "Implement SEO best practices and accessible designs to ensure your web applications are search-engine friendly and usable for everyone.",
    },
    {
      title: "Google Maps Integration",
      icon: "code",
      details:
        "Add dynamic, interactive maps to your applications with the Google Maps API, including geolocation and route planning.",
    },
    {
      title: "Custom API Integration",
      icon: "cloud",
      details:
        "Seamlessly integrate REST and GraphQL APIs for interactive and data-driven web applications.",
    },
  ],
  reviews: [
    {
      id: 1,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.",
      author: {
        name: "Burdette Turner",
        designation: "Web Developer, Abc Company",
      },
    },
    {
      id: 2,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
      author: {
        name: "Susan Yost",
        designation: "Client",
      },
    },
    {
      id: 3,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      author: {
        name: "Irving Feeney",
        designation: "Fiverr Client",
      },
    },
  ],
  skills: [
    {
      title: "HTML5",
      value: 95,
    },
    {
      title: "CSS3",
      value: 90,
    },
    {
      title: "JavaScript",
      value: 80, // Updated to reflect more proficiency with JavaScript overall
    },
    {
      title: "jQuery",
      value: 85,
    },
    {
      title: "ReactJS",
      value: 80,
    },
    {
      title: "Bootstrap",
      value: 85, // High proficiency as a front-end framework
    },
    {
      title: "Sass",
      value: 80, // Familiarity with modern CSS preprocessor
    },
    {
      title: "TailwindCSS",
      value: 70, // Moderate familiarity with utility-first CSS framework
    },
    {
      title: "API Integration",
      value: 75, // Proficiency with integrating third-party APIs
    },
    {
      title: "SQL",
      value: 70, // Understanding of database querying
    },
    {
      title: "PHP",
      value: 65, // Moderate proficiency with server-side scripting
    },
    {
      title: "Laravel",
      value: 60, // Experience in building web applications with PHP framework
    },
    {
      title: "Git",
      value: 90, // High proficiency in version control
    },
    {
      title: "Vue.js",
      value: 70, // Moderate proficiency with the Vue.js JavaScript framework
    },
  ],
  portfolios: [
    {
      id: 1,
      title: "Air Quality Index",
      // subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/portfolio/aqi1.png",
      largeImageUrl: [
        "/images/portfolio/aqi1.png",
        "/images/portfolio/aqi2.png",
        "/images/portfolio/aqi3.png",
        "/images/portfolio/aqi4.png",
        "/images/portfolio/aqi5.png",
      ],
      // url: "https://dribbble.com",
    },
    {
      id: 2,
      title: "Career Assessment",
      // subtitle: "Awesome coffee mug design.",
      imageUrl: "/images/portfolio/career1.png",
      largeImageUrl: [
        "/images/portfolio/career1.png",
        "/images/portfolio/career2.png",
        "/images/portfolio/career3.png",
        "/images/portfolio/career4.png",
        "/images/portfolio/career5.png",
        "/images/portfolio/career6.png",
        "/images/portfolio/career7.png",
      ],
      // url: "https://facebook.com",
    },
    {
      id: 3,
      title: "Education System",
      // subtitle: "Beautiful mug with logo.",
      imageUrl: "/images/portfolio/cef1.png",
      largeImageUrl: [
        "/images/portfolio/cef1.png",
        "/images/portfolio/cef2.png",
        "/images/portfolio/cef3.png",
        "/images/portfolio/cef4.png",
      ],
      // url: "https://pinterest.com",
    },
    {
      id: 4,
      title: "Food Ordering System",
      // subtitle: "A pen holder with beautiful design.",
      imageUrl: "/images/portfolio/comey1.png",
      largeImageUrl: [
        "/images/portfolio/comey1.png",
      ],
      // url: "#",
    },
    {
      id: 5,
      title: "Ecommerce Website",
      // subtitle: "Mug with awesome style",
      imageUrl: "/images/portfolio/ecom1.png",
      largeImageUrl: [
        "/images/portfolio/ecom1.png",
        "/images/portfolio/ecom2.png",
        "/images/portfolio/ecom3.png",
        "/images/portfolio/ecom4.png",
      ],
    },
    {
      id: 6,
      title: "Inventory Management System",
      // subtitle: "Free pendrive mockup design.",
      imageUrl: "/images/portfolio/inv1.png",
      largeImageUrl: [
        "/images/portfolio/inv1.png",
        "/images/portfolio/inv2.png",
      ],
    },
    {
      id: 7,
      title: "Iqbal Website",
      // subtitle: "Pendrive with great design & flexible.",
      imageUrl: "/images/portfolio/iq1.png",
      largeImageUrl: [
        "/images/portfolio/iq1.png",
        "/images/portfolio/iq2.png",
        "/images/portfolio/iq3.png",
        "/images/portfolio/iq4.png",
      ],
      // url: "https://twitter.com",
    },
    {
      id: 8,
      title: "Playlist Website",
      // subtitle: "Clip sticker mockup design.",
      imageUrl: "/images/portfolio/play1.png",
      largeImageUrl: [
        "/images/portfolio/play1.png",
        "/images/portfolio/play2.png",
        "/images/portfolio/play3.png",
        "/images/portfolio/play4.png",
        "/images/portfolio/play5.png",
      ],
    },
    {
      id: 9,
      title: "Real Estate Website",
      // subtitle: "Beautiful packet & product design.",
      imageUrl: "/images/portfolio/real1.png",
      largeImageUrl: [
        "/images/portfolio/real1.png",
        "/images/portfolio/real2.png",
        "/images/portfolio/real3.png",
        "/images/portfolio/real4.png",
        "/images/portfolio/real5.png",
        "/images/portfolio/real6.png",
        "/images/portfolio/real7.png",
        "/images/portfolio/real8.png",
      ],
    },
    {
      id: 10,
      title: "Space Twin",
      // subtitle: "A pen holder with beautiful design.",
      imageUrl: "/images/portfolio/sp1.png",
      largeImageUrl: [
        "/images/portfolio/sp1.png",
        "/images/portfolio/sp2.png",
        "/images/portfolio/sp3.png",
        "/images/portfolio/sp4.png",
      ],
      // url: "#",
    },
    {
      id: 11,
      title: "Xoto",
      // subtitle: "Awesome coffee mug design.",
      imageUrl: "/images/portfolio/xoto1.png",
      largeImageUrl: [
        "/images/portfolio/xoto1.png",
        "/images/portfolio/xoto2.png",
        "/images/portfolio/xoto3.png",
      ],
      // url: "https://facebook.com",
    },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "20 September 2023 to Current",
        position: "Remote React Developer",
        company: "Codiro Technologies, Taxila, Pakistan",
        details:
          "Developed and maintained front-end components using React.js, creating dynamic and responsive user interfaces for web applications. Demonstrated the ability to work independently, taking ownership of tasks and solving complex technical challenges in a remote setting. Managed and prioritized tasks effectively to meet project deadlines. Integrated RESTful APIs and third-party services into React applications to enhance functionality and data exchange. Ensured seamless communication between the front-end and back-end systems. Utilized Git for version control, ensuring a collaborative and organized development process.",
      },
      {
        id: 2,
        year: "14 Jun 2023 to 31st April 2024",
        position: "Full Stack Developer",
        company: "Minhal Grand City Enclave, Haripur, Pakistan",
        details:
          "Development of web applications(company’s official website), handling both front-end and back-end responsibilities. Implemented responsive and intuitive user interfaces using HTML5, CSS3, and JavaScript frameworks such as React.js. Designed and developed robust server-side logic, and database structures using technologies like Node.js, and Laravel. Implemented continuous integration and continuous deployment (CI/CD) pipelines to automate testing and deployment processes.",
      },
      {
        id: 3,
        year: "10 Jun 2022 to 11 Feb 2023",
        position: "Front End Developer",
        company: "Exytex Technologies, Taxila, Pakistan",
        details:
          "Led the front-end development of responsive and user-friendly web applications using HTML5, CSS3, and JavaScript. Ensured cross-browser compatibility and optimized performance for seamless user experiences. Proficient in utilizing front-end frameworks such as React.js and Angular.js to create dynamic and interactive user interfaces. Integrated third-party APIs to enhance functionality and data exchange. Utilized Git for version control, maintaining a clean and organized codebase with frequent commits and branches for feature development.",
      },
    ],
    educationExperience: [
      {
        id: 1,
        year: "2017 - 2021",
        graduation: "BS Software Engineering",
        university: "University of Haripur",
        // details:
        //   "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.",
      },
    ],
  },
  blogs: [
    {
      id: 1,
      title: "Markdown & Html supported blog.",
      featuredImage: "/images/blog-image-1.jpg",
      filesource: "../../blog/markdown-html-supported-blog.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 2,
      title: "Installing NodeJS on your device.",
      featuredImage: "/images/blog-image-2.jpg",
      filesource: "../../blog/installing-nodejs-on-your-device.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 3,
      title: "UI/UX design starter with Adobe XD.",
      featuredImage: "/images/blog-image-3.jpg",
      filesource: "../../blog/uiux-design-starter-with-adobe-xd.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 4,
      title: "Boost your post for increasing sales.",
      featuredImage: "/images/blog-image-4.jpg",
      filesource: "../../blog/boost-your-post-for-increasing-sales.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 5,
      title: "Difference between GatsbyJS & NextJS.",
      featuredImage: "/images/blog-image-5.jpg",
      filesource: "../../blog/difference-between-gatsbyjs-and-nextjs.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 6,
      title: "How to choose javascript framework for project.",
      featuredImage: "/images/blog-image-6.jpg",
      filesource:
        "../../blog/how-to-choose-javascript-framework-for-project.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 7,
      title: "Web automation with python language.",
      featuredImage: "/images/blog-image-7.jpg",
      filesource: "../../blog/web-automation-with-python-language.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 8,
      title: "Time to use latest technology for creating a website.",
      featuredImage: "/images/blog-image-8.jpg",
      filesource:
        "../../blog/time-to-use-latest-technology-for-creating-a-website.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 9,
      title: "Think out of the box.",
      featuredImage: "/images/blog-image-9.jpg",
      filesource: "../../blog/think-out-of-the-box.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 10,
      title: "Trending designs in 2020.",
      featuredImage: "/images/blog-image-1.jpg",
      filesource: "../../blog/trending-designs-in-2020.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 11,
      title: "How to get 10k instagram followers?",
      featuredImage: "/images/blog-image-2.jpg",
      filesource: "../../blog/how-to-get-10k-instagram-followers.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 12,
      title: "What NodeJS can do?",
      featuredImage: "/images/blog-image-3.jpg",
      filesource: "../../blog/what-nodejs-can-do.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 13,
      title: "Futures of javascript.",
      featuredImage: "/images/blog-image-4.jpg",
      filesource: "../../blog/future-of-javascript.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 14,
      title: "Popular javascript library in 2020.",
      featuredImage: "/images/blog-image-5.jpg",
      filesource: "../../blog/popular-javascript-library-in-2020.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 15,
      title: "Promrammers must read books.",
      featuredImage: "/images/blog-image-6.jpg",
      filesource: "../../blog/programmers-must-read-books.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
  ],
  contactInfo: {
    phoneNumbers: ["+012-3456-7891", "+012-3456-7892"],
    emailAddress: ["admin.sitename@example.com", "info.sitename@example.com"],
    address: "121 King Street, Melbourne, Victoria 3000, Australia",
  },
};

Mock.onGet("/api/information").reply((config) => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply((config) => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply((config) => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply((config) => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply((config) => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply((config) => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply((config) => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply((config) => {
  const response = database.contactInfo;
  return [200, response];
});
