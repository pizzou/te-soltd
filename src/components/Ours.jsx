import React from 'react'
import {BsArrowUpRight} from 'react-icons/bs'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants';
const ours = [
    {
        name:  '01',
        description:"How we can help your business?",
        link:"Learn more"
    },
    {
        name:  '02',
        description:"Why become our partner?",
        link:"Learn more"
    },
    {
        name:  '03',
        description:"What are the best of TE-SO?",
        link:"Learn more"
    },
]

const Ours = () => {
  return (
    <section className='section' id='service'>
        
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row gap-16'>

            
    <div className='flex-1 lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12'>
        <h3 className='h3 max-w-[455px] mb-16'>OUR COMPANY</h3>
        <h2 className='h2 text-grey-500 mb-6'>We’ve been thriving in <span className="text-cyan-600">5 years</span></h2>

        <p>TE-SO specializes in technological and IT-related services such as product engineering, warranty management, building cloud, infrastructure, network, etc. We put a strong focus on the needs of your business to figure out solutions that best fits your demand and nail it.</p>

        <button className='btn btn-sm text-black mb-6'>Join Us</button>



    </div>
    <div className='flex-1'>
        <div>
        {
            ours.map((ours, index)=>{
                const {name, description, link}= ours;
                return(
                    <div className='border-b border-white/20 h-[146px] mb[38px] flex ' key={index}>
                    <div className='max-w-[476px]'>
                        <h4 className='text-[20px] tracking-wider font-Poppins font-semibold mb-6'>{name}</h4 >
                        <p className='font-secondary leading-tight'>{description}</p>
                        </div>
                    <div className='flex flex-col flex-1 items-end'>
                        <a href='#'className='btn w-9 h-9 mb-[42px] flex'>
                            <BsArrowUpRight/>
                        </a>
                        <a href='#' className='text-gradient text-sm'>{link}</a>
                    </div>
                </div>
                ); 
                
                
            })
        }

</div>


    </div>
    </div>
        </div>
       

    </section>
  )
}

export default Ours