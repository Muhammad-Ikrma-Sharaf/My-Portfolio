import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  nextjs,
  tailwind,
  nodejs,
  expressjs,
  mongodb,
  interns,
  upwork,
  nextalgo,
  weathersnap,
  linearvision,
  hairday,
  threejs,
  mitch,
  kevin,
  tracy,
} from "../src/assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Python Script Writing",
    icon: web,
  },
  {
    title: "Artificial Intelligence",
    icon: mobile,
  },
  {
    title: "Computer Vision",
    icon: backend,
  },
  {
    title: "Natural Language Processing",
    icon: creator,
  },
  {
    title: "Large Language Models",
    icon: web,
  },
  {
    title: "GANS",
    icon: mobile,
  },
  {
    title: "Transformers",
    icon: backend,
  },
  {
    title: "Tableau",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: expressjs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "ML Engineer",
    company_name: "Kyaas Solutions",
    icon: interns,
    iconBg: "#E6DEDD",
    date: "Ongoing",
    points: [
      "Assist in data collection, cleaning, and preprocessing under senior ML engineers' guidance.",
      "Support feature engineering initiatives following established guidelines.",
      "Develop and implement machine learning models with a focus on generative tasks such as stable diffusion in computer vision.",
      "Collaborate closely with the ML team for model testing and evaluation.",
      "Demonstrate proactive and enthusiastic attitude by actively learning and conducting research on ML techniques.",
      "Contribute effectively to ML projects in a software house environment.",
      "Interact with international clients to understand their requirements and expectations.",
    ],
  },
  {
    title: "Computer vision Expert",
    company_name: "Fiverr",
    icon: upwork,
    iconBg: "#15A800",
    date: "Aug 2021 - Present",
    points: [
      "Freelancing on Fiverr as a Computer Vision specialist, providing services to clients worldwide.",
      "Perform diverse computer vision tasks for various projects, demonstrating expertise in the field.",
      "Utilize advanced computer vision techniques to solve complex problems and deliver high-quality results.",
      "Collaborate closely with clients to understand project requirements and ensure client satisfaction.",
      "Offer professional and reliable freelance services, meeting deadlines and project milestones.",
      "Receive positive feedback from clients, indicating a track record of delivering successful computer vision solutions.",
    ],
  },
  {
    title: "Python Script Writer",
    company_name: "Upwork",
    icon: nextalgo,
    iconBg: "#15A800",
    date: "Apr 2023 - Present",
    points: [
      "Actively engaged on Upwork as a Python Script Writer, catering to a global clientele.",
      "Create customized Python scripts to meet the specific needs and objectives of each project.",
      "Employ proficient coding skills to develop efficient and reliable Python solutions for various tasks.",
      "Collaborate closely with clients to understand their requirements and deliver tailored scripts accordingly.",
      "Deliver high-quality and well-documented Python scripts within agreed-upon timelines.",
      "Earn positive reviews and feedback from satisfied clients, reflecting the effectiveness and value of provided services.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Sharjeel has been nothing short of amazing. He is prepared, proactive, and knowledgeable.",
    name: "Mitch Schneider",
    designation: "CEO",
    company: "Infinium Designs",
    image: mitch,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their client's success as Sharjeel does.",
    name: "Kevin Dunne",
    designation: "COS",
    company: "Industry Dive",
    image: kevin,
  },
  {
    testimonial:
      "After Sharjeel revamped & optimized our website, our traffic increased by 50%. Such a good experience!",
    name: "Tracy Dinh",
    designation: "CTO",
    company: "Bits",
    image: tracy,
  },
];

const projects = [
  {
    name: "Tee Shirt Design Generator",
    description:
      "Web-based weather app that everages the power of OpenWeatherMap and RapidAPI to provide accurate and up-to-date weather information for any location around the world.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "framer",
        color: "pink-text-gradient",
      },
    ],
    image: weathersnap,
    source_code_link: "https://github.com/Sharjeel-Riaz/Weather-Snap",
    project_link: "https://weather-snap.vercel.app/",
  },
  {
    name: "Brain Tumor Segmentation YOLOv8",
    description:
      "Web application that enables users with the power of DALL-E 2's API integration & an image editor resulting in a sleek and minimalist user interface to edit your images creatively.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: linearvision,
    source_code_link: "https://github.com/Sharjeel-Riaz/Linear-Vision",
    project_link: "https://sharjeel-riaz.github.io/Linear-Vision/",
  },
  {
    name: "Movie Recommendation System",
    description:
      "Web application that enables users with the power of DALL-E 2's API integration & an image editor resulting in a sleek and minimalist user interface to edit your images creatively.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: linearvision,
    source_code_link: "https://github.com/Sharjeel-Riaz/Linear-Vision",
    project_link: "https://sharjeel-riaz.github.io/Linear-Vision/",
  },
  {
    name: "Vision Transformer for Flower Classification",
    description:
      "An all-inclusive salon experience platform that empowers users to book a wide range of haircare and beauty services, and provides personalized recommendations for their unique needs.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: hairday,
    source_code_link: "https://github.com/Sharjeel-Riaz/Hair-Day-Website",
    project_link: "https://sharjeel-riaz.github.io/Hair-Day-Website/",
  },
  {
    name: "Text to Image using Stable Diffusion",
    description:
      "An all-inclusive salon experience platform that empowers users to book a wide range of haircare and beauty services, and provides personalized recommendations for their unique needs.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: hairday,
    source_code_link: "https://github.com/Sharjeel-Riaz/Hair-Day-Website",
    project_link: "https://sharjeel-riaz.github.io/Hair-Day-Website/",
  },
];

export { services, technologies, experiences, testimonials, projects };
