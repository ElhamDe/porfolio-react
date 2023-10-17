import React from 'react';
import WorkItem from './WorkItem';

const data = [
  {
    year: 2023,
    title: 'Fullstack Developer',
    duration: '3 Months',
    details:
    'Lorem ipsun, dasiojd asiojdo iasiod oasj asiojd ioasjdo ijasiojd asiojd ioasjido ajsiod jasiojdio asjioasjdioasd'
  },
  {
    year: 2024,
    title: 'Fullstack Developer',
    duration: '3 Months',
    details:
    'Lorem ipsun, dasiojd asiojdo iasiod oasj asiojd ioasjdo ijasiojd asiojd ioasjido ajsiod jasiojdio asjioasjdioasd'
  },
];

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
      {data.map((item, idx) => (
        <WorkItem 
          key={idx} 
          year={item.year} 
          title={item.title} 
          duration={item.duration} 
          details={item.details}
        />
      ))}
    </div>
  )
};

export default Work;