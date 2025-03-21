import React from 'react'
import Button from './Button'
import about from "../assets/brand_img.png"

const About = ({id}) => {
  return (
    <div id={id} className='flex flex-col justify-center items-center gap-[50px] px-[125px] pt-[50px] pb-[100px]'>
      <div className='flex flex-col justify-center items-center'>
        <p className='flex gap-3 text-[50px]'><span className='font-bold'>About</span><span className='underline'>Our Brand</span></p>
        <p className='text-center'>Passionate about properties, dedicated to your vision</p>
      </div>
      <div className='flex gap-[60px] w-full justify-center'>
        <div className='w-1/2 max-w-[600px]'>
            <img src={about} alt="" className='w-4/5 h-[500px]'/>
        </div>
        <div className='w-1/2 flex flex-col justify-center items-start gap-5'>
            <div className='grid grid-cols-2 grid-rows-2 gap-10'>
                <div>
                    <p className='font-bold text-[40px]'>10+</p>
                    <p>Years of Excellence</p>
                </div>
                <div>
                    <p className='font-bold text-[40px]'>12+</p>
                    <p>Projects Completed</p>
                </div>
                <div>
                    <p className='font-bold text-[40px]'>20+</p>
                    <p>Properties Delivered</p>
                </div>
                <div>
                    <p className='font-bold text-[40px]'>25+</p>
                    <p>Ongoing Projects</p>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nam neque maxime! Suscipit ipsam explicabo fuga dignissimos deserunt mollitia, officia reiciendis tenetur perferendis quas nobis? Eveniet neque voluptatum veritatis voluptates!</p>
            <Button text="Learn more" className='text-white bg-blue-500 py-2 px-8 rounded-md'/>
        </div>
      </div>
    </div>
  )
}

export default About
