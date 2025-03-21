import React from 'react'
import { testimonialsData } from '../assets/assets'
import TestimonialCard from './TestimonialCard'

const Testimonials = ({id}) => {
  return (
    <div id={id} className='flex flex-col justify-center items-center gap-[50px] px-[125px] pt-[50px] pb-[100px]'>
      <div className='flex flex-col justify-center items-center'>
        <p className='flex gap-3 text-[50px]'><span className='font-bold'>Customer</span><span className='underline'>Testimonials</span></p>
        <p className='text-center'>Real stories from those who found Home with us</p>
      </div>
      <div className='flex justify-center items-center gap-6 w-full pt-2 pb-10 overflow-hidden'>
        {testimonialsData.map((testimonial,index)=>(
            <TestimonialCard key={index} name={testimonial.name} title={testimonial.title} image={testimonial.image} rating={testimonial.rating} text={testimonial.text}/>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
