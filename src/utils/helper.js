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
  FreshJuiceUI,
  ImageSharing,
  PixabayClone,
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
    uri: "",
    color: "#0072b1",
  },
  {
    id: `github-${Date.now()}`,
    Icon: FaGithub,
    uri: "",
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
    uri: "",
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
    id: `chatapp-${Date.now()}`,
    name: "Money Tracker App",
    imgSrc: MoneyTracker,
    gitURL: "https://github.com/ankittkamal/Money-Tracker",
  },
  {
    id: `imageSharing-${Date.now()}`,
    name: "Image Sharing App",
    imgSrc: ImageSharing,
    gitURL: "https://github.com/Vetrivel-VP",
  },
  {
    id: `pixabayclone-${Date.now()}`,
    name: "CinemixGlobal",
    imgSrc: PixabayClone,
    gitURL: "https://github.com/ankittkamal/CinemixGlobal",
  },
  {
    id: `freshjuiceui-${Date.now()}`,
    name: "Fresh Juice UI Build",
    imgSrc: FreshJuiceUI,
    gitURL: "https://github.com/Vetrivel-VP",
  },
  {
    id: `FlightServiceService-${Date.now()}`,
    name: "Flight Booking Service Service - Backend Project",
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
