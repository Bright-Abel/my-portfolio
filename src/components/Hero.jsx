import heroImg from '../assets/hero.svg';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
const Hero = () => {
  return (
    <div className="bg-teal-100 py-40 sm:pb-24 sm:pt-60">
      <div className="align-element flex md:justify-between">
        {/* MY INFO ARTICLE */}
        <article>
          {/* md:grid-cols-2 items-center gap-8 */}
          <h1 className="text-5xl sm:text-7xl font-bold text-zinc-800 tracking-wider">
            I'm Br<span className="text-teal-600 animate-pulse">i</span>ght
          </h1>
          <p className="mt-4 sm:text-3xl text-2xl text-slate-700 capitalize tracking-wide">
            Front-End Developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            I like to code and design from scratch, <br />
            and enjoy turning ideas into interactive reality in the browser.
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/Bright-Abel" target="_blank">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-zinc-600 duration-300 hover:animate-[spin_0.5s_linear_1]" />
            </a>
            <a
              href="http://linkedin.com/in/barnabas-oluwasegun"
              target="_blank"
            >
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-zinc-600 duration-300 hover:animate-[spin_0.5s_linear_1]" />
            </a>
            <a href="https://twitter.com/Abelbright168" target="_blank">
              <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-zinc-600 duration-300 hover:animate-[spin_0.5s_linear_1]" />
            </a>
          </div>
        </article>

        {/* SVG ARTICLE */}
        <article className="hidden md:block">
          <img src={heroImg} alt="some svg" className="h-80 w-110" />
        </article>
      </div>
    </div>
  );
};
export default Hero;
