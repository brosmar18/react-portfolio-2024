import { navLinks } from '../constants/index';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { logo } from '../assets/images';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255, 255, 255)"
    }
  };


  const centerVariants = {
    closed: {
      opacity: 1
    },
    opened: {
      opacity: 0
    }
  };

  const bottomVariants = {
    closed: {
      rotate: 0
    },
    opened: {
      rotate: -45,
      backgroundColor: 'rgb(255, 255, 255)'
    }
  };

  const listVariants = {
    closed: {
      opacity: 0,
      transition: {
        when: "afterChildren"
      }
    },
    opened: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
  };

  const listItemVariants = {
    closed: {
      y: 20,
      opacity: 0,
      transition: {
        duration: 0.2
      }
    },
    opened: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };


  return (
    <nav className='h-24 flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-lg'>
      <div className='hidden md:flex gap-4 w-1/3 z-30'>
        {navLinks.map(link => (
          <NavLink to={link.route} key={`nav-link${link.route}`} className={({ isActive }) => isActive ? 'rounded p-1 bg-dark-accent text-black' : ''}>
            {link.label}
          </NavLink>
        ))}
      </div>
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center items-center">
        <NavLink to='/' className="rounded-full p-1 flex items-center justify-center">
          <img src={logo} alt='logo' className='h-[60px] w-[60px]' />
        </NavLink>
      </div>
      <div className='hidden md:flex items-center justify-center gap-4 w-1/3'>
        <NavLink to='/'>
          <FaGithub size={30}  className='text-dark-accent'/>
        </NavLink>
        <NavLink to='/'>
          <FaLinkedinIn size={30} className='text-dark-accent' />
        </NavLink>
      </div>
      <div className='md:hidden'>
        <button className='w-10 h-8 flex flex-col justify-between z-50 relative' onClick={() => setOpen(!open)}>
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-[3px] bg-white rounded origin-left"></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-[3px] bg-white rounded"></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-[3px] bg-white rounded origin-left"></motion.div>
        </button>
        {/* NAV LINKS */}
        {open && (
          <motion.div
            variants={listVariants}
            initial='closed'
            animate='opened'
            className="absolute top-0 left-0 w-screen h-screen bg-dark-background text-dark-text flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {navLinks.map(link => (
              <motion.div
                key={`link-${link.label}`}
                variants={listItemVariants}
              >
                <NavLink to={link.route} onClick={() => setOpen(false)}>
                  {link.label}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar