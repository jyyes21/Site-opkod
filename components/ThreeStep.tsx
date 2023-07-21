import React from "react";
import Image from "next/image";
import Link from "next/link";

const Step = () => {
  return (

<div className='flex mt-20 '>
          <div className='w-1/2 mx-2 '>
            <div className='mb-12'>
            <p className='text-slate-800 text-[55px] font-semibold leading-[60px]'>A simple, yet effective three step process</p>
            <p className='text-slate-500 text-[18px] font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, sequi.</p>
            </div>
            <div className=' rounded-[20px] w-[600px] h-[250px] flex justify-between  items-center p-5 shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] space-x-6'>
              <div className=''>
              <Image width="400" height="400" className='rounded-[22px]' src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62b4e55829a9a87385b3b29a_execution-process-image-advertise-webflow-ecommerce-template.svg" alt="" />
              </div>
              <div>
              <p className='text-slate-800 text-[25px] font-semibold'>2. Execution</p>
              <p className='text-slate-500 text-[18px] font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, sequi.</p>
              </div>
            </div>
          </div>
          <div className='w-1/2 mx-2 space-y-6'>

          <div className=' rounded-[20px] w-[600px] h-[250px] flex justify-between  items-center p-5 shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] space-x-6'>
              <div className=''>
              <Image width="400" height="400" className='rounded-[22px]' src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62b4e55855d004912d5c553d_marketing-plan-process-image-advertise-webflow-ecommerce-template.svg" alt="" />
              </div>
              <div>
              <p className='text-slate-800 text-[25px] font-semibold'>1. Marketing plan</p>
              <p className='text-slate-500 text-[18px] font-semibold'>Egestas mauris morbi ut nam dolor porta malesuada egestas vivamus dignissim.</p>
              </div>
            </div>

            <div className=' rounded-[20px] w-[600px] h-[250px] flex justify-between  items-center p-5 shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] space-x-6'>
              <div className=''>
              <Image width="400" height="400" className='rounded-[22px]' src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62b4e558feeafe17671b61a6_growth-and-scale-process-image-advertise-webflow-ecommerce-template.svg" alt="" />
              </div>
              <div>
              <p className='text-slate-800 text-[25px] font-semibold'>3. Growth & Scale</p>
              <p className='text-slate-500 text-[18px] font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, sequi.</p>
              </div>
            </div>
          </div>
        </div>

  );
};

export default Step;