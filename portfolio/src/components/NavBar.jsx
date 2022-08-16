import React, {useState}from 'react'
import logo from '../assets/logo.png'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'
import { Document} from 'react-pdf';
import {resume} from '../assets/resume.pdf'
function NavBar() {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#83A1CD] text-gray-300">
      <div>
        <img src={logo} alt="logo image" style={{width: '50px'}} /> 
      </div>

      {/* menu */}
      <div className="hidden md:flex ">
        <ul className="hidden md:flex">
          <li> 
            <Link to='home' smooth={true} duration={500}>
          Home</Link></li>
          <li><Link to='about' smooth={true} duration={500}>
          About</Link></li>
          <li><Link to='skills' smooth={true} duration={500}>
          Skills</Link></li>
          <li><Link to='projects' smooth={true} duration={500}>
          Projects</Link></li>
          <li><Link to='contact' smooth={true} duration={500}>
          Contact</Link></li>
        </ul>
      </div>

      {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10 ">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

      {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#83A1CD] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'><Link onClick={handleClick}to='home' smooth={true} duration={500}>
          Home</Link></li>
          <li className='py-6 text-4xl'><Link onClick={handleClick} to='about' smooth={true} duration={500}>
          About</Link></li>
          <li className='py-6 text-4xl'><Link onClick={handleClick}to='skills' smooth={true} duration={500}>
          Skills</Link></li>
          <li className='py-6 text-4xl'><Link onClick={handleClick}to='projects' smooth={true} duration={500}>
          Projects</Link></li>
          <li className='py-6 text-4xl'><Link onClick={handleClick}to='contact' smooth={true} duration={500}>
          Contact</Link></li>
        </ul>

      {/* Social Icons */}
        <div className="flex fixed flex-col top-[35%] left-0">
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0072b1]'>
              <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/michael-hancock-a2a323118/" target="_blank">
                Linkedin <FaLinkedin  size={30}/>
                
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
              <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/shanehancock64"target="_blank">
                Github <FaGithub  size={30}/>
                
              </a>
            </li>
          
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
              <a className='flex justify-between items-center w-full text-gray-300' href="">
                Resume <BsFillPersonLinesFill  size={30}/>
                
                
              </a>
            </li>
          </ul>

        </div>






    </div>
  )
}

export default NavBar