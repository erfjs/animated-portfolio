
interface ProjectsType {
  title: string
  description: string
  image: string
  GitHub: string
  hosted: string
}

export const ProjectsData: ProjectsType[] = [
  {
    title: 'Portfolio | Private Project',
    description: `Fastest Landing page built with React, Next Js and Styled Components. modern monorepo architecture. Minimal design`,
    image: 'https://erfjs.com/images/protfolio/my_portfolio/img-1.png',
    GitHub: '',
    hosted: 'https://erfjs.com',
  },
  {
    title: 'Animated Portfolio',
    description: `Portfolio website built with React v18.2, Typescript,  react-router-dom v6, framer-motion, react-icons, Scss`,
    image: 'https://raw.githubusercontent.com/erfjs/animated-portfolio/main/src/assets/example.png',
    GitHub: 'https://github.com/erfjs/animated-portfolio',
    hosted: 'https://animated-portfolio.erfjs.com/',
  },
  {
    title: 'Personalized Card | Ejbank',
    description: `You can personalize your bank card as you want. A very interesting program using only HTML, CSS and JavaScript, with which you can change the card name, color and model`,
    image: 'https://raw.githubusercontent.com/erfjs/ejbank/main/img/example.png',
    GitHub: 'https://github.com/erfjs/ejbank',
    hosted: `https://ejbank.erfjs.com`,
  },
  {
    title: 'React Todo List',
    description: `A simple to-do list app powered by React, Chakra UI, React icons. Save in Local Storage`,
    image: 'https://raw.githubusercontent.com/erfjs/Todo-list/main/readme/example.png',
    GitHub: 'https://github.com/erfjs/Todo-list',
    hosted: 'https://todo-app.erfjs.com',
  },
  {
    title: 'React weather checker',
    description: `A weather checker app powered by React, Vite, TailWind, Swr, PropType, Dark mode`,
    image: 'https://raw.githubusercontent.com/erfjs/weather-checker/main/readme/example.png',
    GitHub: 'https://github.com/erfjs/weather-checker',
    hosted: `https://weather-checker.erfjs.com`,
  },
  {
    title: 'Foodstuffs Store',
    description: `Store Website, built with: React v18.2,react-router-dom v6.3.0, React Icon`,
    image: 'https://raw.githubusercontent.com/erfjs/foodstuffs_store/main/readme/example2.png',
    GitHub: 'https://github.com/erfjs/foodstuffs_store',
    hosted: `https://foodstuffs-store.erfjs.com`,
  }
];
