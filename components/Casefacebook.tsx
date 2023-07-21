import React from "react";
import Image from "next/image";
import Link from "next/link";

const Casefacebook = () => {
  return (
<div className='flex p-10 bg-white shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)]  rounded-[30px] hover:scale-105 ease-in-out duration-300'>
                            <div className='mb-4 w-1/2'>
                            <Image width="800" height="800" className='rounded-[22px]' src="https://assets.website-files.com/62b20e89c8f2df5c8a4b715d/62b48aa6712a9e05d14eb1e0_how-we-increased-sign-up-creators-program-thumbnail-image-advertise-webflow-ecommerce-template.png" alt="" />
                            </div>
                            <div className='w-1/2 pl-12 pt-10'>
                            <Image width="200" height="200" className='mb-5' src="https://assets.website-files.com/62b20e89c8f2df5c8a4b715d/62deb6912baf3e198431b5f5_facebook-case-study-logo-advertise-webflow-ecommerce-template.svg" alt="" />
                            <p className='text-slate-800 text-[26px] font-semibold mb-2'>How we increased sign up rate by 56% on Creators Program</p>
                            <p className='text-slate-500 text-[18px] font-semibold mb-8'>Lorem ipsum consectetur amet sit comeneer ilremsolme dolce issilmolil olme diment solem ipum adolem.</p>
                            <hr className="my-8 border-slate-400 rounded-[20px] " />
                            <div className='flex mt-12 justify-between items-center'>
                                <div>
                                <p className='text-blue-500 text-[25px] font-semibold'>56%</p>
                                <p className='text-slate-800 text-[20px] font-semibold'>Organic Traffic</p>
                                </div>
                                
                                <div className='text-slate-800 hover:text-white bg-white hover:bg-red-500 text-[18px] font-semibold shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] px-6 py-4 rounded-[20px] duration-200 ease-in-out hover:scale-105'>Learn more</div>
                            </div>
                            </div>
                            </div>  

  );
};

export default Casefacebook;