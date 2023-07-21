import React from "react";
import Image from "next/image";
import Link from "next/link";

const Newsarticle = () => {
  return (
<div className='flex mx-auto justify-center space-x-12 w-8/12 mb-[300px]'>

<div className='bg-white shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] w-1/2 rounded-[30px] hover:scale-105 ease-in-out duration-300'>
<div className='mb-4'>
    <Image width="700" height="700" className='rounded-t-[30px] object-cover overflow-hidden' src="https://assets.website-files.com/62b20e89c8f2df5c8a4b715d/62bc9ece93cbb857a47bab60_seo-factors-to-consider-blog-thumbnail-v2-advertise-webflow-ecommerce-template.png" alt="" />
</div>
<div className='ml-12 mr-8 mb-6'>
    <p className='text-green-500 font-bold text-[25px]'>SEO</p>
    <p className='text-slate-800 text-[25px] leading-[30px] font-bold mb-6'>5 SEO factors to consider for your website rank better</p>
</div>
</div>

<div className='w-1/2 space-y-4'>
    
    <div className='bg-white  hover:scale-105 ease-in-out duration-300 h-[200px]'>
        <div className='flex item-center justify-center w-full'>
        <Image width="250" height="200" className='rounded-[30px]' src="https://assets.website-files.com/62b20e89c8f2df5c8a4b715d/62bc9e6867018f2f97ca4a44_productivity-apps-blog-thumbnail-v2-advertise-webflow-ecommerce-template.png" alt="" />
        <div className='ml-6'>
            <p className='text-blue-500 text-[20px] font-bold mb-6'>Social Media</p>
            <p className='text-slate-800 text-[25px] font-bold'>4 productivity apps for your marketing team</p>
        </div>
        </div>
    </div>

    <div className='bg-white hover:scale-105 ease-in-out duration-300 h-[200px]'>
        <div className='flex item-center justify-center w-full'>
        <Image width="250" height="200" className='rounded-[30px]' src="https://assets.website-files.com/62b20e89c8f2df5c8a4b715d/62bc9e1571e0063452b04dd1_whats-growth-hacking-blog-thumbnail-v2-advertise-webflow-ecommerce-template.png" alt="" />
        <div className='ml-6'>
            <p className='text-yellow-500 text-[20px] font-bold mb-6'>Growth</p>
            <p className='text-slate-800 text-[25px] font-bold'>What is growth hacking and how to apply it to your startup</p>
        </div>
        </div>
    </div>


    <div className='bg-white hover:scale-105 ease-in-out duration-300 h-[200px]'>
        <div className='flex item-center justify-center w-full'>
        <Image width="250" height="200" className='rounded-[30px]' src="https://assets.website-files.com/62b20e89c8f2df5c8a4b715d/62bc9d47cf098fcf833ed5fb_increase-engagement-on-social-media-blog-thumbnail-v2-advertise-webflow-ecommerce-template.png" alt="" />
        <div className='ml-6'>
            <p className='text-red-500 text-[20px] font-bold mb-6'>Social Media</p>
            <p className='text-slate-800 text-[25px] font-bold'>3 tips to increase engagement on social media</p>
        </div>
        </div>
    </div>
</div>
</div>

  );
};

export default Newsarticle;