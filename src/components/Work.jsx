import React from 'react';
import WorkItem from './WorkItem';

const data = [
  {
    year: 2023,
    title: 'Fullstack Developer Intern',
    duration: '3 Months',
    language: 'React JS & Node JS',
    details:
    'I was in an internship at Starlabs - Prishtine, Kosovë from 01.06.2023 – 01.09.2023. Collaborated with a cross-functional team to design and develop responsive web applications using mainly React.js for Frontend Node.js Backend and for Database MongoDB. Integrated dynamic features and user interfaces to enhance user experience. Conducted thorough testing and debugging to ensure smooth functionality and optimal performance. Engaged in code reviews, offering valuable feedback to improve code quality.'
  },
  {
    year: 2020,
    title: 'Bachelor of Computer Science and Engineering at UBT',
    duration:
    'Expected Graduation 2024'
  },
];

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work Experience</h1>
      {data.map((item, idx) => (
        <WorkItem 
          key={idx} 
          year={item.year} 
          title={item.title} 
          duration={item.duration} 
          language={item.language}
          details={item.details}
        />
      ))}
    </div>
  )
};

export default Work;