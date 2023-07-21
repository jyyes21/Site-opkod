import React from "react";
import Image from "next/image";
import Link from "next/link";

const CardEmail = () => {
  return (

<div className='mb-[50px] w-4/6 '>
        <div className='flex justify-between items-center px-4 py-8'>
          <div className='text-slate-800 text-[50px] font-semibold mt-12 w-[800px]'>
            High-impact marketing services to grow your startup
          </div>
          <div className='flex space-x-6'>
          <div className='p-5 rounded-[20px] bg-red-500 hover:bg-blue-500 shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] hover:scale-105 ease-in-out duration-300'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-slate-800 w-8 h-8 ">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
        </svg>
          </div>
          <div className='p-5 rounded-[20px] hover:bg-red-500 bg-white-500 shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] hover:scale-105 ease-in-out duration-300'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-slate-800 w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
        </svg>
        </div>
          </div>
          </div>
          <div className='bg-white w-full [h-500px] p-6 rounded-[20px] hover:scale-105 ease-in-out duration-300'>
            <div className='flex '>
            <div>
              <Image width="500" height="500" className='rounded-[20px] hover:rotate-[2deg] ease-in-out duration-300' src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62b4c0bebd044260bac86cd0_email-marketing-service-thumbnail-image-v2-advertise-webflow-ecommerce-template.svg" alt="" />
            </div>
            <div className='ml-16 mt-12'>
            <div className='mb-6  w-[600px] '>
                  <p className='text-[30px] font-bold text-slate-800 mb-4 leading-[70px]'>Email Marketing</p>
                  <p className='text-[16px] font-semibold text-slate-500 mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iure, ratione perspiciatis praesentium voluptatem fugit?</p>
            </div>
            <div className='flex mb-12'>
            <div className='mr-8 space-y-6'>
            <div className='flex'>
            <Image width="30" height="30" className=' mr-5' src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62b4d78b910aad5d5a8e46d8_checkmark-square-color-primary-1-advertise-webflow-ecommerce-template.svg" alt="" />
            <p className='text-[18px] font-bold text-slate-800'>Email newsletter</p>
            </div>
            <div className='flex'>
            <Image width="30" height="30" className=' mr-5' src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62b4d78b910aad5d5a8e46d8_checkmark-square-color-primary-1-advertise-webflow-ecommerce-template.svg" alt="" />
            <p className='text-[18px] font-bold text-slate-800'>Email sequences</p>
            </div>
          </div>
          <div className='space-y-6'>
            <div className='flex'>
            <Image width="30" height="30" className=' mr-5' src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62b4d78b910aad5d5a8e46d8_checkmark-square-color-primary-1-advertise-webflow-ecommerce-template.svg" alt="" />
            <p className='text-[18px] font-bold text-slate-800'>Email monetization</p>
            </div>
            <div className='flex'>
            <Image width="30" height="30" className=' mr-5' src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62b4d78b910aad5d5a8e46d8_checkmark-square-color-primary-1-advertise-webflow-ecommerce-template.svg" alt="" />
            <p className='text-[18px] font-bold text-slate-800'>Email growth</p>
            </div>
          </div>
          </div>
          <button className="shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] text-[21px] bg-white-500 hover:bg-red-500 text-slate-800 font-semibold py-6 px-12 rounded-[12px] hover:scale-105 ease-in-out duration-300">Get in touch</button>
            </div>
            </div>
          </div>
          </div>


  );
};

export default CardEmail;