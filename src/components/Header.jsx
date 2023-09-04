import React from "react";

import HeroImg from "../assets/header.jpg";
import ButtonFill from "./ButtonFill";
import ButtonOutline from "./ButtonOutline";
import Icon1 from "../assets/leader.jpg";
import Icon2 from "../assets/icons.jpg";
import Icon3 from "../assets/dev.png";
import {motion} from 'framer-motion'
import { fadeIn } from '../variants';
import Design from "./Design";
import About from "./About";
import Review from "./Review";
import Footer from "./Footer/Footer";

import Features from './Features'
import Ours from "./Ours";

import Projects from "./Projects";
import Hire from "./Hire";
import Video from "./Video";
import Explain from "./Explain";
import Contact from "./Contact";
import Leadership from "./Leadership"
import { Link } from 'react-router-dom';

import Navbars from './Navbars/Navbar'

const Header = () => {
  
  const Info = [
    {
      icon: Icon1,
      title: "Rising CEOs",
      des: "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.",
    },
    {
      icon: Icon2,
      title: "Design",
      des: "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.",
    },
    {
      icon: Icon3,
      title: "Professional Developers",
      des: "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.",
    },
  ];
  return (

    <>

    <section className="bg-Hero bg-cover bg-center  py-4 md:px-24 px-4">
      
      <Navbars/>
      
      <Design/>
      <About />
      <div className="flex md:flex-row flex-col gap-5 pt-20 absolute top-0 ">
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial ='hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.3}}
        className="flex-1">
          <h1
            className="md:text-5xl text-4xl font-semibold tracking-wide md:leading-tight
          leading-snug"
          >
            ​Innovative Technology Solutions from TE-SO.
          </h1>
          <p className="text-gray-600 md:w-2/3 md:py-4 py-2 leading-relaxed">
          ​Expert Software Development, IT Consulting, and Cloud Solutions for Forward-Thinking Businesses!
          </p>
          <br />
          <div className="flex md:gap-4 gap-2 flex-wrap">

          <a
                href="mailto:teso.solutions@outlook.com"
                target="__blank"
                rel="noreferrer noopener"
              >
          <ButtonFill>Contact Us</ButtonFill>
      </a>

            
            <ButtonOutline />
          </div>
        </motion.div>
        <motion.div 
    variants={fadeIn('left', 0.5)}
    initial ='hidden'
    whileInView={'show'}
    viewport={{once:false, amount:0.3}}
        className="flex-1  flex justify-center">
          <img src={HeroImg} alt="hero" className="w-full rounded-full h-98 " />
        </motion.div>
      </div>

      

      <div className=" flex md:flex-row flex-col md:-mt-98  gap-10 md:p-14 p-10 -mt-16 rounded-md h-98 -top-0">
        {Info.map((info, i) => (
          <div key={i}>
            <img src={info.icon} alt="icon" className="h-16 mt-48 rounded-full" />
            <h1 className="font-semibold text-lg my-3">{info.title}</h1>
            <p className="text-gray-600 text-sm leading-relaxed">{info.des}</p>
            <button className="text-blue-800 font-medium text-sm my-1">
              Read More
            </button>
          </div>
        ))}
      </div>
      <p className="py-10 md:text-sm text-xs block text-gray-600 text-center">
        Don’t hesitate to contact us to get better Information.
        <span className="text-blue-800 font-semibold italic px-1">
          EXPLORE ALL OUR SERVICES.
        </span>
      </p>
     
    </section>
    <section>
    <Projects/>
    </section>
    <section>
      
    <Hire/>
    </section>
    <section>
    <Leadership/>
    </section>
    
    <section>
    <Features/>
    </section>
    <section>
    <Ours/>
    </section>
    <section>
    <Video/>
    </section>

    <section>
    <Explain/>
    </section>

    
    
    
    {/* <Blog content={contents[1]} alternative={true} />
    <Blog content={contents[2]} /> */}
    <Review />
    <Contact/>
    <Footer />

    </>

    
  );
};

export default Header;
