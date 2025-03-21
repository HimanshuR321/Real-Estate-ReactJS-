import React from 'react'
import logo from "../assets/logo.svg"
import Button from "./Button"
import { Link } from 'react-router-dom';
const Home = ({ id }) => {
  const lists = ["Home", "About", "Projects", "Testimonials", "Explore", "Updates"];
  const routeItems = ["Explore", "Updates"];

  return (
    <div id={id} className='min-h-screen bg-cover bg-center w-full flex flex-col' style={{backgroundImage: "url('/header_img.png')" }}>
      <nav className='flex justify-between items-center px-[55px] pt-[25px]'>
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <ul className='flex gap-5 text-white font-bold'>
          {lists.map((option, index) => (
              <li 
                key={index} 
                className='hover:text-gray-500 cursor-pointer'
              >
                {routeItems.includes(option) ? (
                  <Link to={`/${option.toLowerCase()}`}>
                    {option}
                    {option === "Updates" && <sup className='text-yellow-200'> New</sup>}
                  </Link>
                ) : (
                  <div
                    onClick={() => {
                      const sectionId = option.toLowerCase();
                      const section = document.getElementById(sectionId);
                      section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                  >
                    {option}
                    {option === "Updates" && <sup className='text-yellow-200'> New</sup>}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Link to="/sign-up"><Button text="Sign Up" className='text-black font-bold bg-white rounded-full flex justify-end items-center py-2 px-10'/></Link>
        </div>
      </nav>
      <div className='flex flex-col flex-grow justify-center items-center'>
        <p className='text-white text-[80px] font-semibold max-w-3xl text-center leading-[80px]'>Explore homes that fit your dreams</p>
        <div className='flex gap-5'>
          <Button 
            text="Projects" 
            onClick={() => {
              const projectsSection = document.getElementById('projects');
              projectsSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className='text-white border-2 border-white py-2 px-8 rounded-md'
          />
          <Button 
            text="Contact Us" 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className='text-white bg-blue-500 py-2 px-8 rounded-md'
          />
        </div>
      </div>
    </div>
  )
}

export default Home
