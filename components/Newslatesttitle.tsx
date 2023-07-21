import React from "react";
import Image from "next/image";
import Link from "next/link";

const Newslatesttitle = () => {
  return (
<div className='mx-auto flex justify-center  flex-col mb-8'>
                    <div className='flex justify-between items-center'>
                        <div className='text-slate-800 text-[50px] font-semibold w-[800px]'>
                        Latest Articles
                        </div>
                        <div className='flex space-x-6'>
                            <div className='flex items-center py-3 px-7 text-[23px] font-semibold rounded-[20px] bg-red-500 hover:bg-blue-500 text-white hover:text-white shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] hover:scale-105 ease-in-out duration-300'>
                                <p>All</p>
                            </div>
                            

                            <div className='flex items-center py-3 px-7 text-[23px] font-semibold rounded-[20px] border-2 border-slate-200 bg-white hover:bg-red-500 text-slate-800 hover:text-white shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] hover:scale-105 ease-in-out duration-300'>
                                <p>All</p>
                            </div>
                            

                            <div className='flex items-center py-3 px-7 text-[23px] font-semibold rounded-[20px] border-2 border-slate-200 bg-white hover:bg-red-500 text-slate-800 hover:text-white shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] hover:scale-105 ease-in-out duration-300'>
                                <p>Growth</p>
                            </div>
                            

                            <div className='flex items-center py-3 px-7 text-[23px] font-semibold rounded-[20px] border-2 border-slate-200 bg-white hover:bg-red-500 text-slate-800 hover:text-white shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] hover:scale-105 ease-in-out duration-300'>
                                <p>SocialMedia</p>
                            </div>
                            
                        </div>

                    </div>
                </div>

  );
};

export default Newslatesttitle;