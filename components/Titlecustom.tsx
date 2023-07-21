import React from "react";
import Image from "next/image";
import Link from "next/link";

const Titlecustom = () => {
  return (
<div className='flex justify-between items-center px-4 py-8 mt-[200px]'>
          <div className='text-slate-800 text-[40px] font-semibold mt-12 w-[500px]'>
          Hear what our amazing customers say
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

  );
};

export default Titlecustom;