import React from 'react'

const Contact = () => {
  return (
    <div className='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form action="" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='font-bold inline border-b-4 border-[#83A1CD] text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4 '>// Submit the form below or shoot me an email - shanehancock64@live.com</p>
        </div>
        <input className='p-2'type='text' placeholder='Name' name='name' />
        <input className='my-4 p-2' type='email' placeholder='Email' name='email' />
        <textarea className='p-2' name='message'rows='10' placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-[#3A3A5D] hover:border-[#3A3A5D] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contact