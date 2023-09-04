import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import com1 from "../assets/teso.jpg";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Projects = () => {
  const projects = [
    {
      img: com1,
      
    },
    {
      img: com1,
     
    },
    {
      img: com1,
     
    },
    {
      img: com1,
      
    },
    {
      img: com1,
      
    },
    
  ];
  return (
    <section id="projects" className="py-10 text-white bg-slate-200">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          <span className="text-cyan-600">Trusted by Big Companies</span>
        </h3>
        
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative justify-center ">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={4}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 4,
              },
            }}
            loop={true}
            autoplay={{
              delay: 1000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4  rounded-xl gap-x-10">
                  <img src={project_info.img} alt="" className="rounded-lg gap-x-10" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
       
      </div>
    </section>
  );
};

export default Projects;
