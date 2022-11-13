import { ImGithub, ImLinkedin } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";

interface LinksType {
  title: string;
  icon: any;
  link: string;
}

export const LinksData: LinksType[] = [
  {
    title: "GitHub",
    icon: <ImGithub color='#000000dc' />,
    link: "https://github.com/erfjs",
  },
  {
    title: "LinkedIn",
    icon: <ImLinkedin color='#000000dc' />,
    link: "https://www.linkedin.com/in/erfan-granmayeh",
  },
  {
    title: "Twitter",
    icon: <FaTwitter color='#000000dc' />,
    link: "https://twitter.com/erfan_grr",
  },
  {
    title: "Instagram",
    icon: <SiInstagram color='#000000dc' />,
    link: "https://www.instagram.com/erfan_grr",
  },
];
