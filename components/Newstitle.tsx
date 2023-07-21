import React from "react";
import Image from "next/image";
import Link from "next/link";

const Newstitle = () => {
  return (
<div className=' mx-auto flex justify-center  flex-col pt-24 w-8/12'>
                <div className='mx-auto flex justify-center  flex-col mb-8'>
                    <p className='text-slate-800 text-[85px] font-bold  mb-4 mx-auto'>Articles & News</p>
                    <p className='text-slate-500 text-[18px] font-semibold mb-4 w-[700px] mx-auto text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    <label className="relative block w-[400px] mx-auto mt-12 ">
                        <input className="h-[70px] rounded-[15px] shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] placeholder:font-semibold placeholder:text-slate-400 block bg-white w-full border border-slate-300 py-2 pl-5 pr-3 focus:outline-none" placeholder="Search for article..." type="text" name="search"/>
                        <span className="absolute inset-y-0 right-3 flex items-center pl-2">
                        <button className="bg-red-500 hover:bg-blue-500 text-white font-bold text-[18px] py-3 px-6 rounded-[20px] hover:scale-105 ease-in-out duration-300">Search</button>
                        </span>
                    </label>

                </div>        
            </div>

  );
};

export default Newstitle;