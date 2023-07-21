import React from "react";
import Image from "next/image";
import Link from "next/link";

const Article = () => {
  return (
<div className='flex mx-auto justify-center items-center space-x-12'>
          <div className='bg-white shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] max-w-[400px] rounded-[30px] hover:scale-105 ease-in-out duration-300'>
            <div className='mb-4'>
              <Image width="400" height="700" className='rounded-t-[30px] object-cover bg-blue-200 overflow-hidden' src="https://assets.website-files.com/62b20e89c8f2df5c8a4b715d/62bc9ed24bfc8b088f4940b5_seo-factors-to-consider-blog-thumbnail-v3-advertise-webflow-ecommerce-template.png" alt="" />
            </div>
            <div className='ml-12 mr-8'>
              <p className='text-slate-800 text-[25px] font-semibold mb-6 leading-[30px]'>5 SEO factors to consider for your website rank better</p>
              <p className='text-slate-500 text-[18px] font-semibold'>Lorem ipsum consectetur amet dolor sit comeneer eiusm ilremsilom dolce issilm acalrm leoinsion duycoqun.</p>
              <div className='flex mt-12 justify-between'>
                <p className='text-slate-500 text-[18px] font-semibold'>June 30, 2022</p>
                <div className='flex'>
                <p className='text-red-500 text-[18px] font-semibold mb-4'>Read more</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-red-600 w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
              </div>
              </div>
            </div>
          </div>

          <div className='bg-white shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] max-w-[400px] rounded-[30px] hover:scale-105 ease-in-out duration-300'>
            <div className='mb-4'>
              <Image width="400" height="700" className='rounded-t-[30px] object-cover bg-blue-200 overflow-hidden' src="https://assets.website-files.com/62b20e89c8f2df5c8a4b715d/62bc9e70b2c74b1e9dcfabc1_productivity-apps-blog-thumbnail-v3-advertise-webflow-ecommerce-template.png" alt="" />
            </div>
            <div className='ml-12 mr-8'>
              <p className='text-slate-800 text-[25px] font-semibold mb-6 leading-[30px]'>4 productivity apps for your marketing team</p>
              <p className='text-slate-500 text-[18px] font-semibold'>Lorem ipsum consectetur amet dolor sit comeneer eiusm ilremsilom dolce issilm acalrm leoinsion duycoqun.</p>
              <div className='flex mt-12 justify-between'>
                <p className='text-slate-500 text-[18px] font-semibold'>June 30, 2022</p>
                <div className='flex'>
                <p className='text-red-500 text-[18px] font-semibold mb-4'>Read more</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-red-600 w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
              </div>
              </div>
            </div>
          </div>

          <div className='bg-white shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] max-w-[400px] rounded-[30px] hover:scale-105 ease-in-out duration-300'>
            <div className='mb-4'>
              <Image width="400" height="700" className='rounded-t-[30px] object-cover bg-blue-200 overflow-hidden' src="https://assets.website-files.com/62b20e89c8f2df5c8a4b715d/62bc9e1d964e2e4f8505286f_whats-growth-hacking-blog-thumbnail-v3-advertise-webflow-ecommerce-template.png" alt="" />
            </div>
            <div className='ml-12 mr-8'>
              <p className='text-slate-800 text-[25px] font-semibold mb-6 leading-[30px]'>What is growth hacking and how to apply it to your startup</p>
              <p className='text-slate-500 text-[18px] font-semibold'>Lorem ipsum consectetur amet dolor sit comeneer eiusm ilremsilom dolce issilm acalrm leoinsion duycoqun.</p>
              <div className='flex mt-12 justify-between'>
                <p className='text-slate-500 text-[18px] font-semibold'>June 30, 2022</p>
                <div className='flex'>
                <p className='text-red-500 text-[18px] font-semibold mb-4'>Read more</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-red-600 w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
              </div>
              </div>
            </div>
          </div>
          </div>

  );
};

export default Article;