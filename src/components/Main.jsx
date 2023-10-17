import React from 'react';
import {TypeAnimation} from 'react-type-animation';
import {FaTwitter, FaFacebook, FaLinkedinIn, FaGithub} from 'react-icons/fa';

const Main = () => {
  return (
    <div id='main'>
      <img 
        className='w-full h-screen object-cover object-left scale-x-[-1]' 
        src="https://images.unsplash.com/photo-1502325966718-85a90488dc29?ixlib=rb-4.0.3&ixid=MrwxMjA3fDB8NHxwaG9by1wYWdlfHx8fGVufDBBfHx8&auto=format&fit=crop&w=26706q=80" 
        alt="/" 
      />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
      <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-center items-center'>
        <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Elham Dërmaku</h1>
        <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
          I'm a
          <TypeAnimation
            sequence={[
              'Software Developer',
              2000, 
              'Coder',
              2000,
              'Tech Enthusiast',
              2000,
            ]}
            wrapper="div"
            cursor={true}
            speed={50}
            style={{ fontSize: '1em', paddingLeft: '5px' }}
            repeat={Infinity}
          />
        </h2>
        <div className='flex justify-between pt-6 max-w-[200px] w-full'>
          <FaTwitter className='cursor-pointer' size={20} />
          <FaFacebook className='cursor-pointer' size={20}/>
          <a href="https://github.com/ElhamDe">
            <FaGithub className='cursor-pointer' size={20}/>
          </a>
          <a href="https://www.linkedin.com/in/elham-dermaku/">
            <FaLinkedinIn className='cursor-pointer' size={20}/>
          </a>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Main