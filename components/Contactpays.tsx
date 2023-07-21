import React from "react";
import Image from "next/image";
import Link from "next/link";

const Contactpays = () => {
  return (
<div className='w-screen h-auto bg-white pb-[300px]'>
           <div className=' mx-auto flex justify-center pt-2 text-slate-800'>
            <div className='pt-[100px]'>
                <div className='flex flex-col w-[700px]'>
                <p className='text-slate-800 text-[55px] font-semibold  mb-4 leading-[60px] text-center'>Come and visit one of our offices over the world</p>
                <p className='text-slate-500 text-[18px] font-semibold mb-4 text-center'>Lorem ipsum dolor sit amet consectetur adipiscing elit curabitur id neque malesuada sapien dictum lacinia sed tellus integer ante phasellus.</p>
                </div>
            </div>
        </div>

        <div className='w-8/12 mx-auto pt-12'>
            <div className="w-full h-[742px]  bg-[url('https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62ba2fd3c15a5048b5b1acfb_world-map-image-advertise-webflow-ecommerce-template.svg')]">
                <div className='flex item-center justify-center h-full space-x-6'>

                    <div className='rounded-[20px] shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] px-8 py-10 bg-white w-[350px] my-auto space-y-2'>
                    <Image width="70" height="70" className='' src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62ba33c7a7fd63237ac6c353_usa-flag-advertise-webflow-ecommerce-template.svg" alt="" />
                    <p className='text-[20px] font-bold text-slate-800'>San Francisco, USA</p>
                    <div className='flex'>
                    <Image width="30" height="30" className='' src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62ba353554440a4da88391b0_phone-offices-icon-advertise-webflow-ecommerce-template.svg" alt="" />
                        <p className='text-[16px] font-semibold text-slate-500 ml-4'>(415) 203-7468</p>
                    </div>
                    <div className='flex'>
                    <Image width="30" height="30" className='' src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62ba3535c9a5a25dc6870581_email-offices-icon-advertise-webflow-ecommerce-template.svg" alt="" />
                        <p className='text-[16px] font-semibold text-slate-500 ml-4'>sanfrancisco@advertise.com</p>
                    </div>
                    </div>

                    <div className='rounded-[20px] shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] px-8 py-10 bg-white w-[350px] my-auto space-y-2'>
                    <Image width="70" height="70" className='' src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62ba33c718e2ea1205e5051e_canada-flag-advertise-webflow-ecommerce-template.svg" alt="" />
                    <p className='text-[20px] font-bold text-slate-800'>Toronto, CA</p>
                    <div className='flex'>
                    <Image width="30" height="30" className='' src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62ba353554440a4da88391b0_phone-offices-icon-advertise-webflow-ecommerce-template.svg" alt="" />
                        <p className='text-[16px] font-semibold text-slate-500 ml-4'>(613) 555 0195</p>
                    </div>
                    <div className='flex'>
                    <Image width="30" height="30" className='' src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62ba3535c9a5a25dc6870581_email-offices-icon-advertise-webflow-ecommerce-template.svg" alt="" />
                        <p className='text-[16px] font-semibold text-slate-500 ml-4'>toronto@advertise.com</p>
                    </div>
                    </div>

                    <div className='rounded-[20px] shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] px-8 py-10 bg-white w-[350px] my-auto space-y-2'>
                    <Image width="70" height="70" className='' src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62ba33c6982dbf3e395a18d7_uk-flag-advertise-webflow-ecommerce-template.svg" alt="" />
                    <p className='text-[20px] font-bold text-slate-800'>London, UK</p>
                    <div className='flex'>
                    <Image width="30" height="30" className='' src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62ba353554440a4da88391b0_phone-offices-icon-advertise-webflow-ecommerce-template.svg" alt="" />
                        <p className='text-[16px] font-semibold text-slate-500 ml-4'>(078) 562 - 3705</p>
                    </div>
                    <div className='flex'>
                    <Image width="30" height="30" className='' src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62ba3535c9a5a25dc6870581_email-offices-icon-advertise-webflow-ecommerce-template.svg" alt="" />
                        <p className='text-[16px] font-semibold text-slate-500 ml-4'>london@advertise.com</p>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

  );
};

export default Contactpays;