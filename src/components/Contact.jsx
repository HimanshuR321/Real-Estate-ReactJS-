import React from 'react'
import Button from './Button'
import { toast } from 'react-toastify';

const Contact = ({id}) => {

  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8308397a-7ca2-4b5d-96ba-967c76287f82");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <div id={id} className='flex flex-col gap-[30px] pt-[20px] px-[125px] pb-[100px]'>
      <div className='flex flex-col justify-center items-center'>
        <p className='flex gap-3 text-[50px]'><span className='font-bold'>Contact</span><span className='underline'>With Us</span></p>
        <p className='text-center'>Ready to make a move? Let's build your future together   </p>
      </div>
        <form onSubmit={onSubmit} className='flex flex-col justify-center items-center ml-[175px] max-w-4xl text-gray-600 pt-8 gap-4'>
            <div className='flex w-full gap-4'> 
                <div className='w-1/2'>
                    <p>Your Name</p>
                    <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" name="name" placeholder='Your Name' required/>
                </div>
                <div className='w-1/2'>
                    <p>Your Email</p>
                    <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="email" name="email" placeholder='Your Email' required/>
                </div>
            </div>
            <div className='w-full mt-4'> 
                <p>Message</p>
                <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none' name="message" placeholder='Message' required></textarea>
            </div>
            <Button text={result?result:"Send Message"} className='text-white bg-blue-500 py-2 px-8 rounded-md'/>
        </form>
    </div>
  )
}

export default Contact
