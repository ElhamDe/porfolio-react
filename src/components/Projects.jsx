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
        <ProjectItems 
          img='https://awesomescreenshot.s3.amazonaws.com/image/4673379/43654441-bb8418e214c348555458475d44f10a8a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20231018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231018T122255Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=74ad94f58016249b08aa7e3bad1b3b9162b881d01f2fa4886e497b6ab768d103' 
          title='Inventory Management Website' 
          link='https://inventory-internship.netlify.app/'
          technology='React JS, Node JS'
        />
        <ProjectItems 
          img='https://awesomescreenshot.s3.amazonaws.com/image/4673379/43654066-c3f9fbad7e9fe3727d06ca37cd4fbec9.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20231018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231018T120655Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=6468c6b69d55f47234df6bacdc1d48dce8490de948808810f94934d478e74176' 
          title='Rent Property Website' 
          link='https://elham-rent-a-home.netlify.app'
          technology='React JS'
        />
        <ProjectItems 
          img='https://awesomescreenshot.s3.amazonaws.com/image/4673379/43653964-95efef247a52bf35b0ca3f5719f0d531.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20231018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231018T120204Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=37bd65b8224833a3352881765a6bab126932c22c3bd5cd9a6a2070fd01b8e1ad' 
          title='E-Commer Website'
          link='https://e-commerce-elham.netlify.app/'
          technology='React JS'
        />
        <ProjectItems 
          img='https://awesomescreenshot.s3.amazonaws.com/image/4673379/43654013-7a058cb2574b4746ecdc0f1fda05f90d.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20231018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231018T120451Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=c03bf999210a725e002685b4a04948fae7ec6a69c025df97c4bc61f41c9ae53b' 
          title='HR Website' 
          link='https://hr-website-elham.netlify.app/'
          technology='HTML, CSS, JS'
        />
        <ProjectItems 
          img='https://awesomescreenshot.s3.amazonaws.com/image/4673379/43654509-6e56ad482a46db240e0ef4a69124ea1d.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20231018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231018T122557Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=063de40c900813493ae16fb270b5a1a220cea92a2081c0a628623af9701d92b2' 
          title='Summarize Article AI Website' 
          link='https://summarize-article-ai.netlify.app/'
          technology='React JS API'
        />
      </div>
    </div>
  )
}

export default Projects