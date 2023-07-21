import React from "react";
import Image from "next/image";
import Link from "next/link";

const Cardcustom = () => {
  return (
<div className=" flex flex-nowrap overflow-x-scroll">
          <div className=' rounded-[20px] w-[750px] h-[400px] flex justify-between  items-center p-6 shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] space-x-6 m-6'>
            <div className=' w-1/2'>
              <Image width="350" height="350" className='rounded-[22px]' src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62b5ca2e9ef02b43e4ef606a_sophie-moore-testimonial-image-advertise-webflow-ecommerce-template.svg" alt="" />
              </div>
              <div className='ml-12 w-1/2'>
              <Image width="40" height="40" className='mb-4' src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62b35dd719ef268cff1b31f8_quotation-mark-color-primary-1-advertise-webflow-ecommerce-template.svg" alt="" />
              <p className='text-slate-800 text-[24px] font-semibold'>Advertise agency helped us to reach our ambitious marketing goals</p>
              <p className='text-slate-400 text-[18px] font-semibold'>Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus.</p>
              <p className='text-slate-800 text-[18px] font-semibold mt-12'>Sophie Moore</p>
              <p className='text-slate-500 text-[18px] font-semibold'>Head of Marketing</p>
              </div>
            </div>

            <div className=' rounded-[20px] w-[750px] h-[400px] flex justify-between  items-center p-6 shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] space-x-6 m-6'>
              <div className=' w-1/2'>
              <Image width="350" height="350" className='rounded-[22px]' src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62b5ca2eed3ca3d9a8338d6c_john-carter-testimonial-image-advertise-webflow-ecommerce-template.svg" alt="" />
              </div>
              <div className='ml-12 w-1/2'>
              <Image width="40" height="40" className='mb-4' src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62b35dd86ccc1022aa4a4b9a_quotation-mark-color-secondary-2-advertise-webflow-ecommerce-template.svg" alt="" />
              <p className='text-slate-800 text-[24px] font-semibold'>The team from Advertise are truly industry experts</p>
              <p className='text-slate-400 text-[18px] font-semibold'>Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus.</p>
              <p className='text-slate-800 text-[18px] font-semibold mt-12'>John Carter</p>
              <p className='text-slate-500 text-[18px] font-semibold'>VP of Marketing</p>
              </div>
            </div>

            <div className=' rounded-[20px] w-[750px] h-[400px] flex justify-between  items-center p-6 shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] space-x-6 m-6'>
              <div className=' w-1/2'>
              <Image width="350" height="350" className='rounded-[22px]' src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62b5ca2fe2e04e82f184d9aa_kelly-smith-testimonial-image-advertise-webflow-ecommerce-template.svg" alt="" />
              </div>
              <div className='ml-12 w-1/2'>
              <Image width="40" height="40" className='mb-4' src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62b35dd7e875276840e86c50_quotation-mark-color-secondary-4-advertise-webflow-ecommerce-template.svg" alt="" />
              <p className='text-slate-800 text-[24px] font-semibold'>Advertise helped us to increase our retention by 300%</p>
              <p className='text-slate-400 text-[18px] font-semibold'>Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus.</p>
              <p className='text-slate-800 text-[18px] font-semibold mt-12'>Kelly Smith</p>
              <p className='text-slate-500 text-[18px] font-semibold'>Growth marketer</p>
              </div>
            </div>
            </div>

  );
};

export default Cardcustom;