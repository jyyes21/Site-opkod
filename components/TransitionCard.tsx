import React from "react";
import Image from "next/image";
import Link from "next/link";

const TransitionCard = () => {
  return (
<div>
<div className='flex justify-between  items-center'>
          <div className='bg-red-500 h-[550px] w-[1200px] -top-[250px] relative overflow-visible object-none flex rounded-[20px]'>
          <div className='justify-center  flex-col flex'>
          <div className='w-[650px]'>
            <p className='ml-12 text-[52px] font-bold text-white mb-4 leading-[70px]'>We are a digital marrketing agency</p>
            </div>
          <div className='flex space-x-6 ml-12'>
          <button className="text-[21px] bg-white hover:bg-slate-800 text-slate-800 hover:text-white font-bold py-6 px-12 rounded-[12px] hover:scale-105 ease-in-out duration-300">Get in touch</button>
          <button className="text-[21px] bg-red-500 hover:bg-white hover:text-slate-800 text-white font-bold py-6 px-12 rounded-[12px] hover:scale-105 ease-in-out duration-300 border-solid border-2 border-white">Get in touch</button>
          </div>
          </div>
            <div className='justify-center flex-col flex items-center'>
        <Image width="500" height="500" className='relative overflow-visible object-none inset-y-0 -right-[20px] mr-5' src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62c6f08d6f7e28d88373a08f_cta-image-right-illustration-advertise-webflow-ecommerce-template.svg" alt="" />
        </div>
        </div>
         </div>
      </div>

  );
};

export default TransitionCard;