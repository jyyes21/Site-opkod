import React from "react";
import Image from "next/image";
import Link from "next/link";

const Teambot = () => {
  return (
<div className='mx-auto flex justify-center items-center mt-[200px]'>
          <div className=' bg-white shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] w-7/12 rounded-[30px]'>
                        <div className='flex p-20 items-center justify-between'>
                            <div className='flex'>
                            <div>
                            <Image width="70" height="70" className='rounded-[22px]' src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62be1c0af4e23e65b9315e3d_join-our-agency-icon-advertise-webflow-ecommerce-template.svg" alt="" /> 
                            </div>
                            <div className='w-[500px] ml-5'>
                                <p className='text-slate-800 text-[30px] font-semibold mb-2'>We&apos;re looking for more great talent, join our agency today!</p>
                                <p className='text-slate-500 text-[18px] font-semibold mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elitolem accumsan convallis.</p>
                            </div>
                            </div>
                            <div>
                            <button className="bg-red-500 hover:bg-blue-500 text-white font-bold p-7 rounded-[20px] hover:scale-105 ease-in-out duration-300">Browse careers</button>
                            </div>
                        </div>
                    </div>
                </div>

  );
};

export default Teambot;