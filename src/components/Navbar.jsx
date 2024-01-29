import { links } from '../data';
import { FaBars } from 'react-icons/fa';
import './FetchData';
import { openSideBar } from '../portfolio_features/sidebarSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
const Navbar = () => {
  const { isSidebarOpen } = useSelector((store) => store.sidebar);
  const dispatch = useDispatch();
  const [isNavbarTransparent, setNavbarTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isTransparent = scrollTop === 0;

      setNavbarTransparent(isTransparent);
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    // padding: '10px',
    backgroundColor: isNavbarTransparent ? 'transparent' : '#99f6e3d8',
    transition: 'background-color 0.3s ease-in-out',
  };

  const navLinks = {
    color: isNavbarTransparent ? '#1e293b' : '#0f172a',
  };

  return (
    <nav className="bg-teal-100 z-10" style={navbarStyle}>
      <div className="align-element py-4 flex flex-col gap-y-2  sm:flex-row sm:justify-between sm:gap-x-16 sm:items-center sm:py-8">
        <div className="flex items-center justify-between p-4 sm:p-0">
          <h2 className="text-3xl font-bold">
            Oluwa
            <span className="text-teal-600">Segun</span>
          </h2>
          {isSidebarOpen ? (
            ' '
          ) : (
            <button
              className="text-4xl  text-teal-500 bg-transparent animate-pulse border-transparent cursor-pointer sm:hidden"
              onClick={() => {
                dispatch(openSideBar());
              }}
            >
              <FaBars />
            </button>
          )}
        </div>
        <div className="sm:gap-x-3 hidden sm:flex">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg tracking-wide text-slate-800 sm:px-3 hover:text-teal-600 duration-300 myunderline"
                style={navLinks}
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
