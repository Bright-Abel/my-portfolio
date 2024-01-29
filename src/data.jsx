import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { IoHome } from 'react-icons/io5';
import { GiSkills } from 'react-icons/gi';
import { GrProjects, GrContactInfo } from 'react-icons/gr';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const sideBar = [
  {
    id: nanoid(),
    href: '#home',
    text: 'home',
    icon: (
      <IoHome className="text-2xl text-slate-500 hover:text-zinc-600 mx-6 ease-in-out duration-300" />
    ),
  },
  {
    id: nanoid(),
    href: '#skills',
    text: 'skills',
    icon: (
      <GiSkills className="text-2xl text-slate-500 hover:text-zinc-600 mx-6 ease-in-out duration-300" />
    ),
  },
  {
    id: nanoid(),
    href: '#about',
    text: 'about',
    icon: (
      <GrContactInfo className="text-2xl text-slate-500 hover:text-zinc-600 mx-6 ease-in-out duration-300" />
    ),
  },
  {
    id: nanoid(),
    href: '#projects',
    text: 'projects',
    icon: (
      <GrProjects className="text-2xl text-slate-500 hover:text-zinc-600 mx-6 ease-in-out duration-300" />
    ),
  },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className="h-16 w-16 text-teal-500" />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className="h-16 w-16 text-teal-500" />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className="h-16 w-16 text-teal-500" />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
];
