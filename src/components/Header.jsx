import { Link } from "react-router-dom";
import { profile } from '../assets/images';

const Header = () => {
  return (
    <header className='flex flex-col gap-10 items-center justify-around lg:flex-row lg:gap-10 w-full h-screen'>
      <img src={profile} alt="profile" className="h-[300px] sm:h-[400px] md:h-[500px] z-30" />
      <div className=" w-[350px] lg:w-[700px] flex flex-col gap-8 items-center justify-center">
        <h1 className="text-3xl lg:text-5xl font-bold "> Developing Seamless
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-dark-secondary to-dark-accent">
            {' '} Solutions, {' '}
          </span>
          From Front to Back.</h1>
        <p className="text-sm md:text-xl">Welcome to the intersection of functionality and creativity in my full-stack development journey. Here, you&apos;ll find a showcase of versatile projects, each a testament to my approach to building robust and aesthetically pleasing digital experiences.
        </p>
        <div className="flex gap-2 z-20">
          <Link to='/projects' className="p-4 rounded-lg ring-1 ring-dark-primary bg-dark-background text-white">View My Work</Link>
          <Link to='/contact' className="p-4 rounded-lg ring-1 ring-dark-primary">Contact Me</Link>
        </div>
      </div>
    </header>
  )
}

export default Header