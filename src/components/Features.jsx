import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";

import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black bg-lightprimary"
    >
      <div>
      <h1 className="text-center mt-1">Our Awesome Service</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="IT Solutions"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<FaGlobe/>}
         
        />
        <Card
          title="Leadership"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<AiFillAppstore />}
        />
        <Card
          title="IT Consultancy"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<SiProgress />}
        />
        {/* <Card
          title="Mobile Development"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<FaMobile />}
        />
        <Card
          title="UX Design"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<FaGlobe />}
        /> */}
      </div>
    </section>
  );
}

export default Features