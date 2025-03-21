import React from 'react'
import logo from "../assets/logo_dark.svg"
import Button from './Button'
import { toast } from 'react-toastify';

const Footer = () => {

  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Subscribing....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8308397a-7ca2-4b5d-96ba-967c76287f82");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Subscribed Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <div className='flex flex-col justify-center items-center bg-black pt-8 px-36 w-full gap-10 h-64'>
      <div className='flex w-full justify-center items-center'>
        <div className='w-1/3'>
            <img src={logo} alt="" />
            <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ab necessitatibus nobis molestias cumque ad est unde iste enim officiis odio placeat maiores amet expedita soluta repudiandae perferendis, ea modi?</p>
        </div>
        <div className='w-1/3 flex flex-col items-center justify-center'>
            <p className='text-white font-semibold'>Company</p>
            <ul className='text-gray-400 flex flex-col items-center justify-center'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className='flex flex-col w-1/3 gap-2'>
            <p className='text-white font-semibold'>Subscribe to our newsletter</p>
            <p className='text-gray-400'>The latest news, articles, and resources, sent to your inbox weekly</p>
            <form onSubmit={onSubmit} className='flex gap-2'>
                <input placeholder='Enter your email' type="email" name="email" className='text-gray-200 border border-gray-400 outline-none pl-4 rounded bg-transparent'/>
                <Button text={result?result:"Subscibe"} className='text-white bg-blue-500 py-2 px-8 rounded-md'/>
            </form>
        </div>
      </div>
      <p className='text-gray-400 w-full text-center border-t border-t-gray-700'>Copyright 2025©MeraHai.All Rights Reserved.</p>
    </div>
  )
}

export default Footer
