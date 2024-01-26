import heroImg from '../assets/hero.svg';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
const Hero = () => {
  return (
    <div className="bg-teal-100 py-24">
      <div className="align-element flex md:justify-between">
        {/* MY INFO ARTICLE */}
        <article>
          {/* md:grid-cols-2 items-center gap-8 */}
          <h1 className="text-7xl font-bold tracking-wider">
            I'm Br<span className="text-teal-600">i</span>ght
          </h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Front-End Developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            I like to code things from scratch, <br />
            and enjoy turning ideas into interactive reality in the browser.
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="#">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-zinc-600 duration-300" />
            </a>
            <a href="#">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-zinc-600 duration-300" />
            </a>
            <a href="#">
              <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-zinc-600 duration-300" />
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
