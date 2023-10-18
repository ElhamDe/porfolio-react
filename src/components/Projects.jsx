import React from 'react';
import ProjectItems from './ProjectItems';
import inventory from '../assets/React App.png';
import home from '../assets/House.png';
import ecom from '../assets/ecom.png';
import hr from '../assets/Hrr.png';
import ai from '../assets/ai.png';

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
        <ProjectItems 
          img={inventory}
          title='Inventory Management Website' 
          link='https://inventory-internship.netlify.app/'
          technology='React JS, Node JS'
        />
        <ProjectItems 
          img={home}
          title='Rent Property Website' 
          link='https://elham-rent-a-home.netlify.app'
          technology='React JS'
        />
        <ProjectItems 
          img={ecom}
          title='E-Commer Website'
          link='https://e-commerce-elham.netlify.app/'
          technology='React JS'
        />
        <ProjectItems 
          img={hr} 
          title='HR Website' 
          link='https://hr-website-elham.netlify.app/'
          technology='HTML, CSS, JS'
        />
        <ProjectItems 
          img={ai}
          title='Summarize Article AI Website' 
          link='https://summarize-article-ai.netlify.app/'
          technology='React JS API'
        />
      </div>
    </div>
  )
}

export default Projects