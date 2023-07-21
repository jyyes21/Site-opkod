import React from "react";
import Image from "next/image";
import Link from "next/link";

const Contactlien = () => {
  return (
<div className=' w-7/12 pt-[100px] pl-[300px]'>
                <div className='w-[600px] flex flex-col '>
                <p className='text-slate-800 text-[60px] font-semibold  mb-4  '>Get in touch today</p>
                <p className='text-slate-500 text-[18px] font-semibold mb-4 '>Lorem ipsum consectetur amet dolor sit comeneer lomeipmil ilremsilom dolce issilm acalrm leoinsion duycoqun.</p>
                <button className="mb-6 bg-white text-[22px] text-slate-800 hover:text-red-500 pl-8 h-[100px] w-[450px] font-bold  flex items-center rounded-[25px] hover:scale-[1.1] shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] ease-in-out duration-300">
                <Image width="40" height="40" className='mr-5' src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62db24230af0c62d6cefda8d_contact-phone-icon-advertise-webflow-ecommerce-template.svg" alt="" />

                contact@advertise.com
                    </button>
                    <button className="bg-white text-[22px] text-slate-800 hover:text-red-500 pl-8 h-[100px] w-[450px] font-bold  flex items-center rounded-[25px] hover:scale-[1.1] shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] ease-in-out duration-300">
                <Image width="40" height="40" className='mr-5' src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62db24239b6142352ba82174_contact-mail-icon-advertise-webflow-ecommerce-template.svg" alt="" />

                (487) 870 - 0710
                    </button>
                    
                </div>
                <div className='flex '>
                    <Image width="700" height="700" className='relative overflow-visible pt-12 -left-[100px]' src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62bb31542f682a39b558f242_contact-page-hero-illustration-advertise-webflow-ecommerce-template.svg" alt="" />
                </div>
            </div>

  );
};

export default Contactlien;