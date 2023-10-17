import React from 'react';
import ProjectItems from './ProjectItems';
// import amazonImg from '../assets/dasd.JPG';

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>
        Projects
      </h1>
      <p className='text-center py-8'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi nesciunt quibusdam odio voluptatum porro quae quis labore quia temporibus dolorem?
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItems img='https://blog.hubspot.com/hs-fs/hubfs/ecommerce%20marketing.jpg?width=595&height=400&name=ecommerce%20marketing.jpg' title='Amazon App' />
        <ProjectItems img='https://blog.hubspot.com/hs-fs/hubfs/ecommerce%20marketing.jpg?width=595&height=400&name=ecommerce%20marketing.jpg' title='Amazon App' />
        <ProjectItems img='https://blog.hubspot.com/hs-fs/hubfs/ecommerce%20marketing.jpg?width=595&height=400&name=ecommerce%20marketing.jpg' title='Amazon App' />
        <ProjectItems img='https://blog.hubspot.com/hs-fs/hubfs/ecommerce%20marketing.jpg?width=595&height=400&name=ecommerce%20marketing.jpg' title='Amazon App' />
      </div>
    </div>
  )
}

export default Projects