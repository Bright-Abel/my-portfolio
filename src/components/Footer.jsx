import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { CgMail } from 'react-icons/cg';
import { PiCopyrightFill } from 'react-icons/pi';
import { useEffect, useState } from 'react';
const Footer = () => {
  const [year, setYear] = useState();

  const dateNew = () => {
    let currentDate = new Date();
    let newYear = currentDate.getFullYear();
    setYear(newYear);
  };

  useEffect(() => {
    dateNew();
  }, []);
  //   mx-auto w-10

  return (
    <footer className="bg-teal-100 py-14 ">
      <div className="py-8  justify-items-center grid gap-x-8 gap-y-1.5 md:grid-cols-2 lg:grid-cols-3 md:align-element">
        <div className="flex gap-4">
          <a href="https://github.com/Bright-Abel" target="_blank">
            <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-zinc-600 duration-300 hover:animate-[spin_0.5s_linear_1]" />
          </a>
          <a href="http://linkedin.com/in/barnabas-oluwasegun" target="_blank">
            <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-zinc-600 duration-300 hover:animate-[spin_0.5s_linear_1]" />
          </a>
          <a href="https://twitter.com/Abelbright168" target="_blank">
            <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-zinc-600 duration-300 hover:animate-[spin_0.5s_linear_1]" />
          </a>
          <a
            href="mailto:oluwasegunbarnabas@gmail.com?subject=Contact%20From%20Website&body=Hello%20there,"
            target="_blank"
          >
            <CgMail className="h-9 w-9 text-slate-500 text-7xl hover:text-zinc-600 duration-300 hover:animate-[spin_0.5s_linear_1]" />
          </a>
        </div>

        <div>
          <h2 className="capitalize text-lg text-slate-600 font-medium">
            copyright &copy; {year}
          </h2>
        </div>

        <div>
          <h2 className="text-lg text-slate-600 font-medium">
            All right reserved.
          </h2>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
