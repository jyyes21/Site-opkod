import React from "react";
import Image from "next/image";
import Link from "next/link";

const Johnarticle = () => {
  return (
<div className='w-screen h-auto bg-slate-100'>
           <div className=' mx-auto flex justify-center pt-[300px]'>
            <div>
              <div className='flex justify-between mb-12 w-8/12 mx-auto'>
                <p className='text-slate-800 text-[45px] font-semibold mb-2'>Articles by John Carter</p>
                <button className="bg-white hover:bg-red-500 text-slate-800 hover:text-white font-bold py-2 px-4 rounded-[20px] hover:scale-105 ease-in-out duration-300">Browse more articles</button>
              </div>


              <div className='flex mx-auto justify-center space-x-12 w-8/12 mb-[300px]'>

              <div className='bg-white shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] w-1/2 rounded-[30px] hover:scale-105 ease-in-out duration-300'>
                <div className='mb-4'>
                  <Image width="700" height="700" className='rounded-t-[30px] object-cover overflow-hidden' src="https://assets.website-files.com/62b20e89c8f2df5c8a4b715d/62bc9ed24bfc8b088f4940b5_seo-factors-to-consider-blog-thumbnail-v3-advertise-webflow-ecommerce-template.png" alt="" />
                </div>
                <div className='ml-12 mr-8 mb-12'>
                  <p className='text-slate-800 text-[25px] font-semibold mb-6 leading-[30px]'>5 SEO factors to consider for your website rank better</p>
                  <p className='text-slate-500 text-[18px] font-semibold'>Lorem ipsum consectetur amet dolor sit comeneer eiusm ilremsilom dolce issilm acalrm leoinsion duycoqun.</p>
                  <hr className="my-8 border-slate-400 rounded-[20px] " />
                  <div className='flex mt-12 justify-between items-center'>
                    <p className='text-white bg-green-500 rounded-[20px] py-6 px-8 text-[18px] font-semibold'>SEO</p>
                    <p className='text-slate-800 text-[18px] font-semibold'>June 30, 2022</p>
                  </div>
                </div>
              </div>

                      <div className='bg-white shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] w-1/2 rounded-[30px] hover:scale-105 ease-in-out duration-300'>
                    <div className='mb-4'>
                      <Image width="700" height="700" className='rounded-t-[30px] object-cover overflow-hidden' src="https://assets.website-files.com/62b20e89c8f2df5c8a4b715d/62bc9e70b2c74b1e9dcfabc1_productivity-apps-blog-thumbnail-v3-advertise-webflow-ecommerce-template.png" alt="" />
                    </div>
                    <div className='ml-12 mr-8 mb-12'>
                      <p className='text-slate-800 text-[25px] font-semibold mb-6 leading-[30px]'>4 productivity apps for your marketing team</p>
                      <p className='text-slate-500 text-[18px] font-semibold'>Lorem ipsum consectetur amet dolor sit comeneer eiusm ilremsilom dolce issilm acalrm leoinsion duycoqun.</p>
                      <hr className="my-8 border-slate-400 rounded-[20px] " />
                      <div className='flex mt-12 justify-between items-center'>
                        <p className='text-white bg-blue-500 rounded-[20px] py-6 px-8 text-[18px] font-semibold'>Social Media</p>
                        <p className='text-slate-800 text-[18px] font-semibold'>June 30, 2022</p>
                      </div>
                    </div>
                  </div>
              </div>


            </div>
           </div>
           </div>

  );
};

export default Johnarticle;