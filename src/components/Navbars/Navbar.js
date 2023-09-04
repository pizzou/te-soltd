import React, { useEffect, useState } from "react";
import { Button } from './Button';
import { Link } from 'react-router-dom';
// import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <>
      <nav className={`fixed w-full left-0 top-0 z-[999] ${
        sticky ? "bg-white/60  text-gray-900" : "text-white "
      }`}>
        <div className="flex items-center justify-between ">
        <div className="mx-7">
          <h4 className="text-4xl uppercase font-semibold animate-bounce">
            TE<span className="text-cyan-600">-S</span>O
          </h4>
        </div>
        <div
          className={` ${
            sticky ? "md:bg-white/0 bg-white" : "bg-blue-100"
          } text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`}
        >
        <ul className="flex items-center gap-1 py-2 text-lg">
          <li className="px-6 hover:text-cyan-600">
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
            Home
            </Link>
          </li>
          <li
            className="px-6 hover:text-cyan-600"
            
          >
            <Link
              to='/about'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About Us <i className='fas fa-caret-down bg-black' />
            </Link>
            
          </li>
          <li
            className="px-6 hover:text-cyan-600"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/about'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Services <i className='fas fa-caret-down bg-black' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
         
          <li className="px-6 hover:text-cyan-600">
            <Link
              to='/careers'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Careers
            </Link>
          </li>
          {/* <li className="px-6 hover:text-cyan-600">
            <Link
              to='/about'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Featured Insights
            </Link>
          </li> */}
          <li className="px-6 hover:text-cyan-600">
            <Link
              to='/blogs'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              TE-SO Blog
            </Link>
          </li>
        </ul>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className={`z-[999]  ${
            open ? "text-gray-900" : "text-gray-900"
          } text-3xl md:hidden m-5`}
        >
          <ion-icon name="menu" className='bg-b'></ion-icon>
        </div>
        <div
          className={`md:hidden text-gray-900 absolute w-2/3 h-screen
      px-7 py-2 font-medium bg-white top-0 duration-300 ${
        open ? "right-0" : "right-[-100%]"
      }`}
        >

<ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">  
          <li className="px-6 hover:text-cyan-600">
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
            Industries
            </Link>
          </li>
          <li
            className="px-6 hover:text-cyan-600"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/company'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Company <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="px-6 hover:text-cyan-600">
            <Link
              to='/insights'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Featured Insights
            </Link>
          </li>
          <li className="px-6 hover:text-cyan-600">
            <Link
              to='/careers'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Careers
            </Link>
          </li>
          <li className="px-6 hover:text-cyan-600">
            <Link
              to='/about'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
          </li>
          <li className="px-6 hover:text-cyan-600">
            <Link
              to='/blogs'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              TE-SO Blog
            </Link>
          </li>
        </ul>
        </div>

        
        </div>
        
      </nav>
    </>
  );
}

export default Navbar;
