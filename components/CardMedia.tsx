import React from "react";
import Image from "next/image";
import Link from "next/link";

const CardMedia = () => {
  return (
<div className='flex mx-auto justify-center items-center space-x-12'>
          <div className='p-10 bg-white shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] max-w-[650px] rounded-[30px] hover:scale-105 ease-in-out duration-300'>
            <div className='mb-4'>
              <Image width="800" height="400" className='rounded-[22px]' src="https://assets.website-files.com/62b20e89c8f2df5c8a4b715d/62b48ab0666ca4eb09e93d62_how-we-increased-sign-up-creators-program-featured-image-advertise-webflow-ecommerce-template.png" alt="" />
            </div>
            <div>
              <p className='text-red-500 text-[25px] font-semibold mb-4'>Facebook</p>
              <p className='text-slate-800 text-[25px] font-semibold'>How we increased sign up rate by 56% on Creators Program</p>
              <p className='text-slate-500 text-[18px] font-semibold'>Lorem ipsum consectetur amet sit comeneer ilremsolme dolce issilmolil olme diment solem ipum adolem.</p>
            </div>
          </div>
          <div className='p-10 bg-white shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] max-w-[650px] rounded-[30px] hover:scale-105 ease-in-out duration-300'>
            <div className='mb-4'>
              <Image width="800" height="400" className='rounded-[22px]' src="https://assets.website-files.com/62b20e89c8f2df5c8a4b715d/62b48a173c542c5d0bafb395_how-we-improved-youtube-deliverability-featured-image-advertise-webflow-ecommerce-template.png" alt="" />
            </div>
            <div>
              <p className='text-red-500 text-[25px] font-semibold mb-4'>Youtube</p>
              <p className='text-slate-800 text-[25px] font-semibold'>How we increased sign up rate by 56% on Creators Program</p>
              <p className='text-slate-500 text-[18px] font-semibold'>Lorem ipsum consectetur amet sit comeneer ilremsolme dolce issilmolil olme diment solem ipum adolem.</p>
            </div>
          </div>
          </div>

  );
};

export default CardMedia;