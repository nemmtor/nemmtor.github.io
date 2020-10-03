import {
  babel,
  gimp,
  git,
  html,
  javascript,
  material,
  npm,
  react,
  sass,
  styled,
  trello,
  typescript,
  webpack,
} from 'assets/tech-icons';

const skillsData = [
  {
    title: 'I feel confident with',
    skills: [
      { name: 'html5', icon: html },
      { name: 'css3/scss', icon: sass },
      { name: 'javascript', icon: javascript },
      { name: 'react', icon: react },
      { name: 'git', icon: git },
      { name: 'styled components', icon: styled },
      { name: 'material ui', icon: material },
      { name: 'typescript', icon: typescript },
    ],
  },

  {
    title: 'Tools that I use',
    skills: [
      { name: 'babel', icon: babel },
      { name: 'gimp', icon: gimp },
      { name: 'npm & yarn', icon: npm },
      { name: 'webpack', icon: webpack },
      { name: 'trello', icon: trello },
    ],
  },
];

export default skillsData;
