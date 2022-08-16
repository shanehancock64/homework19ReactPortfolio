import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#83A1CD]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Shane, nice to meet you. Please feel free to take a look around.</p>
            </div>
            <div>
              <p>I recently graduated from University of Arizona's full-stack bootcamp and I am ready to use the skills I learned. I enjoy working both in the front and back end!</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;