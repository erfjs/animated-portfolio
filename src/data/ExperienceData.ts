interface ExperienceDataType {
  title: string;
  date: string;
  details: string[];
}

export const ExperienceData: ExperienceDataType[] = [
  {
    title: 'Frontend Developer | Freelancer.com',
    date: ' May 2019 _ Jul 2022',
    details: [
      'Developed web applications using React, Redux, Next.js', 'Building a landing page with high speed and high scores in speed test gtmetrix and lighthouse, etc', 'Creating a web application (Windows, Android and iOS)', 'Create website with modern monorepo architecture', 'Collaborated closely with other developers on projects that require multiple people to complete tasks',
    ],
  },
  {
    title: 'Frontend Developer | Upwork',
    date: 'Sep 2019 - Jan 2022',
    details: [
      'Worked with a team of 5 developers to create an e-commerce website using React and NodeJS',
      'Built a dashboard for monitoring server performance using NodeJS, React, Material-ui',
      'Created reusable components that were easily maintainable, reducing the time spent on future development by 50%',
    ],
  },
];
