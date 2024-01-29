import { useDispatch, useSelector } from 'react-redux';
import { sideBar } from '../data';
import { FaTimes } from 'react-icons/fa';
import { openSideBar, closeSideBar } from '../portfolio_features/sidebarSlice';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { CgMail } from 'react-icons/cg';
import { useEffect, useState } from 'react';

const SideBar = () => {
  const { isSidebarOpen } = useSelector((store) => store.sidebar);
  //   console.log(isSidebarOpen);
  const dispatch = useDispatch();

  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className="flex items-center justify-between py-4 px-6">
        <h2 className="text-xl font-bold">
          Oluwa
          <span className="text-teal-600">Segun</span>
        </h2>
        <button
          className="text-3xl bg-transparent border-transparent cursor-pointer text-slate-500"
          onClick={() => {
            dispatch(closeSideBar());
          }}
        >
          <FaTimes />
        </button>
      </div>

      <ul className="py-8">
        {sideBar.map((link) => {
          const { id, href, text, icon } = link;
          return (
            <li key={id}>
              <a
                href={href}
                className="flex items-center capitalize text-lg tracking-wide text-slate-800 sm:px-3 hover:text-teal-600 duration-300 py-4 px-8 ease-in-out duration-400"
                onClick={() => {
                  dispatch(closeSideBar());
                }}
              >
                {icon} {text}
              </a>
            </li>
          );
        })}
      </ul>

      <div className="flex gap-8 mx-auto pb-4">
        <a href="https://github.com/Bright-Abel" target="_blank">
          <FaGithubSquare className="h-8 w-8 text-teal-600 hover:text-teal-400 duration-300 hover:animate-[spin_0.5s_linear_1]" />
        </a>
        <a href="http://linkedin.com/in/barnabas-oluwasegun" target="_blank">
          <FaLinkedin className="h-8 w-8 text-teal-600 hover:text-teal-400 duration-300 hover:animate-[spin_0.5s_linear_1]" />
        </a>
        <a href="https://twitter.com/Abelbright168" target="_blank">
          <FaTwitterSquare className="h-8 w-8 text-teal-600 hover:text-teal-400 duration-300 hover:animate-[spin_0.5s_linear_1]" />
        </a>
        <a
          href="mailto:oluwasegunbarnabas@gmail.com?subject=Contact%20From%20Website&body=Hello%20there,"
          target="_blank"
        >
          <CgMail className="h-9 w-9 text-teal-600 text-7xl hover:text-teal-400 duration-300 hover:animate-[spin_0.5s_linear_1]" />
        </a>
      </div>
    </aside>
  );
};
export default SideBar;
