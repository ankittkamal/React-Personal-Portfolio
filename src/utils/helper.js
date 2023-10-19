import {
  FaDiagramProject,
  FaEnvelope,
  // FaFacebookF,
  FaGithub,
  FaHouse,
  FaLinkedinIn,
  FaRenren,
  FaUser,
  // FaYoutube,
  FaTwitter,
} from "react-icons/fa6";
import {
  MoneyTracker,
  NetflixGPT,
  FoodExplorer,
  ReactRestaurant,
  PortfolioFirebase,
  SocialMedia,
} from "../assets";

export const Socials = [
  // {
  //   id: `facebook-${Date.now()}`,
  //   Icon: FaFacebookF,
  //   uri: "",
  //   color: "#1877F2",
  // },
  {
    id: `linkedin-${Date.now()}`,
    Icon: FaLinkedinIn,
    uri: "https://www.linkedin.com/in/ankit-kamal-57786419b/",
    color: "#0072b1",
  },
  {
    id: `github-${Date.now()}`,
    Icon: FaGithub,
    uri: "https://github.com/ankittkamal",
    color: "#fff",
  },
  // {
  //   id: `youtube-${Date.now()}`,
  //   Icon: FaYoutube,
  //   uri: "",
  //   color: "#ff0000",
  // },
  {
    id: `twitter-${Date.now()}`,
    Icon: FaTwitter,
    uri: "https://twitter.com/ankittkamall",
    color: "#00acee",
  },
];

export const Menus = [
  {
    id: `home-${Date.now()}`,
    Icon: FaHouse,
    uri: "#home",
    name: "Home",
  },
  {
    id: `projects-${Date.now()}`,
    Icon: FaDiagramProject,
    uri: "#projects",
    name: "My Projects",
  },
  {
    id: `skills-${Date.now()}`,
    Icon: FaRenren,
    uri: "#skills",
    name: "Skills",
  },
  {
    id: `about-${Date.now()}`,
    Icon: FaUser,
    uri: "#about",
    name: "About Me",
  },
  {
    id: `contact-${Date.now()}`,
    Icon: FaEnvelope,
    uri: "#contact",
    name: "Contact Me",
  },
];

export const ProjectsData = [
  {
    id: `FoodExplorer-${Date.now()}`,
    name: "Food Explorer ",
    imgSrc: FoodExplorer,
    gitURL: "https://github.com/ankittkamal/Food-Explorer",
  },
  {
    id: `NetflixGPT-${Date.now()}`,
    name: "NetflixGPT ",
    imgSrc: NetflixGPT,
    gitURL: "https://github.com/ankittkamal/NetflixGPT",
  },
  {
    id: `ReactRestaurant-${Date.now()}`,
    name: "Pizza Restaurant Food WebApp",
    imgSrc: ReactRestaurant,
    gitURL: "https://github.com/ankittkamal/react-pizza-restaurant",
  },
  {
    id: `moneyTracker-${Date.now()}`,
    name: "Money Tracker App",
    imgSrc: MoneyTracker,
    gitURL: "https://github.com/ankittkamal/Money-Tracker",
  },
  {
    id: `FlightServiceService-${Date.now()}`,
    name: " Flight Booking Service",
    imgSrc: SocialMedia,
    gitURL: "https://github.com/ankittkamal/Flight-Booking-Service-System",
  },
  {
    id: `portfoliofirebase-${Date.now()}`,
    name: "Portfolio UI Fireabse",
    imgSrc: PortfolioFirebase,
    gitURL: "https://github.com/ankittkamal/React-Personal-Portfolio",
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Material UI",
  "React",
  "Git",
  "Tailwind CSS",
  "Docker",
  "MongoDB",
  "Redux",
  "Github",
  "Firebase",
  "Rest API",
  "Node.js",
  "Express",
  "MySQL",
  "Github",
  "Postman",
  "Framer Motion",
];
