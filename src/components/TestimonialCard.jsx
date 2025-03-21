import React from 'react'
import star from "../assets/star_icon.svg"

const TestimonialCard = (props) => {
  return (
    <div className='flex flex-col justify-center items-center gap-3 border border-gray-200 p-10 shadow-md'>
      <div><img src={props.image} alt="" /></div>
      <div className='flex flex-col justify-center items-center leading-[20px]'>
        <p className='text-[20px] font-semibold'>{props.name}</p>
        <p className='text-gray-600'>{props.title}</p>
      </div>
      <div className='flex'>
        {[...Array(props.rating)].map((_, index) => (
          <img key={index} src={star} alt="star" />
        ))}
      </div>
      <p className='text-center text-[15px]'>{props.text}</p>
    </div>
  )
}

export default TestimonialCard
