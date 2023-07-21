import React from "react";
import Image from "next/image";
import Link from "next/link";

const ButtonMedia = () => {
  return (
<div className='flex space-x-6 justify-center items-center  mx-auto mt-12'>
          <button className="text-[21px] bg-red-500 hover:bg-blue-500 text-white font-semibold py-6 px-12 rounded-[12px] hover:scale-105 ease-in-out duration-300">Get in touch</button>
          <button className="text-[21px] bg-white hover:bg-red-500 text-slate-800 hover:text-white font-semibold py-6 px-12 rounded-[12px] hover:scale-105 ease-in-out duration-300 shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)]">Browse all case studies</button>
          </div>

  );
};

export default ButtonMedia;