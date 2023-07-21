import React from "react";
import Image from "next/image";
import Link from "next/link";

const Newssub = () => {
  return (
<div className='w-1/3 ml-12'>
                    <div className='w-full mx-auto'>

                    <div className='rounded-[20px] bg-red-500 flex flex-col justify-center items-center px-8 py-14'>
                    <Image width="90" height="90" className='' src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62bdc826633894bb464811d8_newsletter-sticky-card-illustration-advertise-webflow-ecommerce-template.svg" alt="" />
                        <p className='text-center text-[30px] font-bold text-white-800 w-[200px] my-6'>Subscribe to our newsletter</p>
                        <form className='w-full'>
                            <label className="w-full">
                                <input type="email" placeholder="Enter your Email"  className=" w-full bg-red-400 border border-white placeholder:pl-6 placeholder:font-semibold placeholder:text-[18px] rounded-[25px] h-[70px] focus:border-white hover:border-slate-400 duration-300 ease-in-out placeholder-white mb-4 focus:outline-none "/>
                            </label>
                        </form>
                        <button className='rounded-[20px] h-[80px] bg-white hover:bg-slate-800 text-[20px] text-slate-800 font-bold hover:text-white duration-200 ease-in-out w-full hover:scale-[1.1]'>Subscribe</button>
                    </div>

                    </div>
                </div>

  );
};

export default Newssub;