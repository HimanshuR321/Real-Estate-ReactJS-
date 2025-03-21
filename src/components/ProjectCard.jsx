import React from 'react'
const ProjectCard = (props) => {
  return (
    <div style={props.style} className='flex flex-col items-center justify-center relative min-w-[350px] duration-500'>
      <div className='relative'>
        <img src={props.image} alt="" className='w-full object-cover rounded-xl'/>
      </div>
      <div className='bg-gray-200 flex flex-col items-center justify-center w-1/2 p-3 absolute bottom-[-35px] shadow-lg rounded-xl'>
        <p className='font-semibold text-[17px]'>{props.title}</p>
        <p className='text-[12px]'>{props.price} | {props.location}</p>
      </div>
    </div>
  )
}

export default ProjectCard
