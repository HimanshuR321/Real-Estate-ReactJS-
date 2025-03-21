import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import left_arrow from "../assets/left_arrow.svg"
import right_arrow from "../assets/right_arrow.svg"
import {projectsData} from "../assets/assets.js"

const Project = ({id}) => {
    const [count,setCount]=useState(0);
    const handleLeftClick=()=>{
        if(count>=1) setCount(count-1);
    }
    const handleRightClick=()=>{
        if(count<=5) setCount(count+1);
    }
  return (
    <div id={id} className='flex flex-col justify-center items-center gap-[30px] px-[125px] pt-[15px] pb-[100px]'>
      <div className='flex flex-col justify-center items-center'>
        <p className='flex gap-3 text-[50px]'><span className='font-bold'>Projects</span><span className='underline'>Completed</span></p>
        <p className='text-center'>Crafting Spaces, Building Legacies-Explore Our Portfolio</p>
      </div>
      <div className='flex justify-end w-full gap-2'>
        <button onClick={handleLeftClick} className={count!==0?'bg-gray-300 p-3':'bg-gray-600 p-3'}><img src={left_arrow} alt="" /></button>
        <button onClick={handleRightClick}  className={count!==6?'bg-gray-300 p-3':'bg-gray-600 p-3'}><img src={right_arrow} alt="" /></button>
      </div>
      <div className='flex gap-6 w-full pt-2 pb-10 overflow-hidden'>
        {projectsData.map((project,index)=>(
            <ProjectCard style={{transform:`translateX(-${50*count}%)`}} key={index} title={project.title} price={project.price} location={project.location} image={project.image}/>
        ))}
      </div>
    </div>
  )
}

export default Project
