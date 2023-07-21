import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hometop = () => {
  return (
<div>

<div className='w-screen h-[885px] bg-slate-100 justify-center flex content-center items-center'>
        <div className='w-4/6 flex'>
          <div className='mr-20 mt-[150px]'>
          <div>
            <p className='text-[72px] font-bold text-slate-800 mb-4 leading-[70px]'>We are a digital marrketing agency</p>
            <p className='text-[16px] font-semibold text-slate-500 mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iure, ratione perspiciatis praesentium voluptatem fugit molestiae odio voluptas, quis id laudantium. Assumenda laborum ipsam minima?</p>
          </div>
          <div className='flex space-x-6'>
          <button className="text-[21px] bg-red-500 hover:bg-blue-500 text-white font-bold py-6 px-12 rounded-[12px] hover:scale-105 ease-in-out duration-300">Get in touch</button>
          <button className="text-[21px] bg-red-500 hover:bg-blue-500 text-white font-bold py-6 px-12 rounded-[12px] hover:scale-105 ease-in-out duration-300">Get in touch</button>
          </div>
          </div>
          <div>
          <Image width="600" height="600" src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62b4a639093112510e2f3c4b_home-hero-v2-top-section-advertise-webflow-ecommerce-template.svg" alt="" className="relative overflow-visible h-[600px] object-none inset-y-0 -right-[200px]" />
          </div>
        </div>
      </div> 

</div>

  );
};

export default Hometop;