import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer'
import Explore from './components/Explore'
import Updates from './components/Updates'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <ToastContainer/>
            <Home id="home"/>
            <About id="about"/>
            <Project id="projects"/>
            <Testimonials id="testimonials"/>
            <Contact id="contact"/>
            <Footer/>
          </>
        }/>
        <Route path="/explore" element={<Explore/>} />
        <Route path="/updates" element={<Updates/>} />
        <Route path="/sign-up" element={<SignUp/>} />
      </Routes>
    </Router>
  )
}

export default App
