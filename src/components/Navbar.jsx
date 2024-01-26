import { links } from '../data';
import './FetchData';
const Navbar = () => {
  return (
    <nav className="bg-teal-100">
      <div className="align-element py-4 flex flex-col gap-y-2  sm:flex-row sm:justify-between sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-3xl font-bold">
          Oluwa
          <span className="text-teal-600">Segun</span>
        </h2>
        <div className="flex gap-x-3">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg tracking-wide text-slate-800 sm:px-3 hover:text-teal-600 duration-300 myunderline"
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
