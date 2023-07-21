import React from "react";
import Image from "next/image";
import Link from "next/link";

const Contactmedia = () => {
  return (
<div className='w-screen h-auto bg-slate-100 pb-[300px] pt-[300px]'>
        <div className=' mx-auto w-8/12 flex justify-center pt-2 text-slate-800 '>
            <div className='w-1/2'>
                <div className='flex flex-col w-[460px]'>
                <p className='text-slate-800 text-[50px] font-bold  mb-4 leading-[60px]'>Follow us for great content on growth marketing</p>
                <p className='text-slate-500 text-[18px] font-semibold mb-4'>Lorem ipsum dolor sit amet consectetur adipiscing elit curabitur id neque malesuada sapien dictum lacinia sed tellus integer ante phasellus.</p>
                </div>
            </div>
            <div className='w-1/2'>
                <div className='grid grid-cols-2 gap-x-8 gap-y-4'>

                    <div className='rounded-[20px] shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] w-[300px] h-[100px] hover:scale-[1.1] ease-in-out duration-200 hover:text-red-500'>
                        <button className='text-slate-800 text-[25px] font-bold flex items-center  w-full h-full duration-200 hover:text-red-500'>
                            <Image width="50" height="50" className='mx-6' src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62bb2a02fa61b83fe16a5e53_facebook-square-icon-large-advertise-webflow-ecommerce-template.svg" alt="" />
                            Facebook
                            </button>
                    </div>

                    <div className='rounded-[20px] shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] w-[300px] h-[100px] hover:scale-[1.1] ease-in-out duration-200 hover:text-red-500'>
                        <button className='text-slate-800 text-[25px] font-bold flex items-center  w-full h-full duration-200 hover:text-red-500'>
                            <Image width="50" height="50" className='mx-6' src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62bb2a03a84a2f25026531b4_twitter-square-icon-large-advertise-webflow-ecommerce-template.svg" alt="" />
                            Twitter
                            </button>
                    </div>

                    <div className='rounded-[20px] shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] w-[300px] h-[100px] hover:scale-[1.1] ease-in-out duration-200 hover:text-red-500'>
                        <button className='text-slate-800 text-[25px] font-bold flex items-center  w-full h-full duration-200 hover:text-red-500'>
                            <Image width="50" height="50" className='mx-6' src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62bb2a03a84a2fe1dc6531b5_instagram-square-icon-large-advertise-webflow-ecommerce-template.svg" alt="" />
                            Instagram
                            </button>
                    </div>

                    <div className='rounded-[20px] shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] w-[300px] h-[100px] hover:scale-[1.1] ease-in-out duration-200 hover:text-red-500'>
                        <button className='text-slate-800 text-[25px] font-bold flex items-center  w-full h-full duration-200 hover:text-red-500'>
                            <Image width="50" height="50" className='mx-6' src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62bb2a026a308b93080ad8d6_linkedin-square-icon-large-advertise-webflow-ecommerce-template.svg" alt="" />
                            Linkedin
                            </button>
                    </div>

                    <div className='rounded-[20px] shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] w-[300px] h-[100px] hover:scale-[1.1] ease-in-out duration-200 hover:text-red-500'>
                        <button className='text-slate-800 text-[25px] font-bold flex items-center  w-full h-full duration-200 hover:text-red-500'>
                            <Image width="50" height="50" className='mx-6' src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62bb2a02cb7efb2e983be657_youtube-square-icon-large-advertise-webflow-ecommerce-template.svg" alt="" />
                            Youtube
                            </button>
                    </div>

                    <div className='rounded-[20px] shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] w-[300px] h-[100px] hover:scale-[1.1] ease-in-out duration-200 hover:text-red-500'>
                        <button className='text-slate-800 text-[25px] font-bold flex items-center  w-full h-full duration-200 hover:text-red-500'>
                            <Image width="50" height="50" className='mx-6' src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62bb2a02ea410d717d264051_whatsapp-square-icon-large-advertise-webflow-ecommerce-template.svg" alt="" />
                            Whatsapp
                            </button>
                    </div>


                </div>
            </div>
        </div>
    </div>

  );
};

export default Contactmedia;