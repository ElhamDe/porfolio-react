import React from 'react';
import ProjectItems from './ProjectItems';
import inventory from '../assets/React App.png';
import home from '../assets/House.png';
import ecom from '../assets/ecom.png';
import hr from '../assets/Hrr.png';
import ai from '../assets/ai.png';
import fitness from '../assets/fitness.png';
import car from "../assets/Car-Hub.png";

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>
        Projects
      </h1>
      <p className='text-center py-8'>
      Welcome to my portfolio! I'm Elham, a passionate <b>Software Developer</b> with a keen interest in Web Development.
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItems 
          img={car}
          title='CarHub Website' 
          link='https://carhub-ed.netlify.app/'
          github='https://github.com/ElhamDe/car_showcase'
          technology='Next JS & API '
        />
        <ProjectItems 
          img={fitness}
          title='Fitness Website' 
          link='https://fitness-ed.netlify.app'
          github='https://github.com/ElhamDe/fitness-react'
          technology='React JS & API'
        />
        <ProjectItems 
          img={home}
          title='Rent Property Website' 
          link='https://elham-rent-a-home.netlify.app'
          github='https://github.com/ElhamDe/rent-home-react'
          technology='React JS'
        />
        <ProjectItems 
          img={ecom}
          title='E-Commer Website'
          link='https://e-commerce-elham.netlify.app/'
          github='https://github.com/ElhamDe/js-amazon-clone'
          technology='React JS'
        />
        <ProjectItems 
          img={hr} 
          title='HR Website' 
          link='https://hr-website-elham.netlify.app/'
          github='https://github.com/ElhamDe/HR-Website'
          technology='HTML, CSS, JS'
        />
        <ProjectItems 
          img={ai}
          title='Summarize Article AI Website' 
          link='https://summarize-article-ai.netlify.app/'
          github='https://github.com/ElhamDe/AI-Website'
          technology='React JS & API'
        />
      </div>
    </div>
  )
}

export default Projects;