import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className="w-full h-screen bg-[#83A1CD]">
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#0a192f]'>Hey, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Shane Hancock</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#3A3A5D] '>I'm a Full Stack Developer.</h2>
        <p className='text-[#3A3A5D] py-4 max-w-[700px]'>I'm a full-stack developer specializing in building exceptional digital experiences. Currently, I'm focused on building responsive full-stack web applications.</p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#3A3A5D] hover:border-[#3A3A5D]'>   <Link to='skills' smooth={true} duration={500}>View Work
          <span className='group-hover:rotate-90 duration-300'>
           
           </span>
           </Link>
           </button>

        </div>
      </div>

    </div>
  )
}

export default Home