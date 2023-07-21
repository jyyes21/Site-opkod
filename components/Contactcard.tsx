import React from "react";
import Image from "next/image";
import Link from "next/link";

const Contactcard = () => {
  return (
<div className='w-6/12 bg-red-400'>
                <div className='shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] w-[620px] h-auto pb-[100px] bg-white rounded-[25px] relative top-[100px] -left-[55px]'>
                    <div className='mx-10 flex item-center just text-slate-800ify-center pt-10 text-slate-8002'>
                        <form className='w-1/2 '>
                        <div className='mb-[30px] space-y-[10px]'>
                        <label htmlFor="fname" className='text-slate-800 text-[20px] font-semibold '>name:</label>
                        <input placeholder='John Carter' className=' w-[250px] h-[70px] text-[22px] font-semibold placeholder:text-slate-400 placeholder:font-semibold placeholder:text-[18px] hover:border-slate-300 pl-6 text-slate-700 shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] border-2 border-slate-200 rounded-[20px] focus:border-3 focus:border-red-300 focus:outline-none duration-200' type="text" name="fname" /><br />
                        </div>
                        <div className='mb-[30px] space-y-[10px]'>
                        <label htmlFor="fname" className='text-slate-800 text-[20px] font-semibold '>Company</label>
                        <input placeholder='Facebook' className=' w-[250px] h-[70px] text-[22px] font-semibold placeholder:text-slate-400 placeholder:font-semibold placeholder:text-[18px] hover:border-slate-300 pl-6 text-slate-700 shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] border-2 border-slate-200 rounded-[20px] focus:border-3 focus:border-red-300 focus:outline-none duration-200' type="text" name="fname" /><br />
                        </div>
                        </form>
                        <form className='w-1/2 '>
                        <div className='mb-[30px] space-y-[10px]'>
                        <label htmlFor="fname" className='text-slate-800 text-[20px] font-semibold '>Email</label>
                        <input placeholder='Exemple@gmail.com' className=' w-[250px] h-[70px] text-[22px] font-semibold placeholder:text-slate-400 placeholder:font-semibold placeholder:text-[18px] hover:border-slate-300 pl-6 text-slate-700 shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] border-2 border-slate-200 rounded-[20px] focus:border-3 focus:border-red-300 focus:outline-none duration-200' type="email" name="fname" /><br />
                        </div>
                        <div className='mb-[30px] space-y-[10px]'>
                        <label htmlFor="fname" className='text-slate-800 text-[20px] font-semibold '>Budget</label>
                        <input placeholder='ex. $25,000' className=' w-[250px] h-[70px] text-[22px] font-semibold placeholder:text-slate-400 placeholder:font-semibold placeholder:text-[18px] hover:border-slate-300 pl-6 text-slate-700 shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] border-2 border-slate-200 rounded-[20px] focus:border-3 focus:border-red-300 focus:outline-none duration-200' type="text" name="fname" /><br />
                        </div>
                        </form>
                    </div>
                    <div className=" bg-white rounded mx-10 pt-6">
                    <form className='grid grid-cols-2 gap-x-2 gap-y-4 '>
                    <div className="flex items-center mb-2 text-slate-800 shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] w-[250px] h-[70px] rounded-[20px] justify-between px-5">
                        <div className='flex items-center space-x-3'>
                        <Image width="30" height="40" className='' src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62bb3a35e96581217eee4614_email-marketing-checkbox-icon-advertise-webflow-ecommerce-template.svg" alt="" />
                        <label htmlFor="option1" className='w-[50px] text-[16px] text-slate-400 leading-[22px] font-semibold'>Email Marketing</label>
                        </div>
                        <input type="checkbox" id="option1" name="option1" className="mr-2 h-5 w-5 duration-200 bg-white checked:bg-red-400 rounded-[5px] border-2 border-slate-500 appearance-none" />
                    </div>

                    <div className="flex items-center mb-2 text-slate-800 shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] w-[250px] h-[70px] rounded-[20px] justify-between px-5">
                        <div className='flex items-center space-x-3'>
                        <Image width="30" height="40" className='' src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62bb3a35ca475d98345c7dfd_funnel-optimization-checkbox-icon-advertise-webflow-ecommerce-template.svg" alt="" />
                        <label htmlFor="option1" className='w-[50px] text-[16px] text-slate-400 leading-[22px] font-semibold'>Funnel Optimization</label>
                        </div>
                        <input type="checkbox" id="option1" name="option1" className="mr-2 h-5 w-5 duration-200 bg-white checked:bg-red-400 rounded-[5px] border-2 border-slate-500 appearance-none" />
                    </div>

                    <div className="flex items-center mb-2 text-slate-800 shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] w-[250px] h-[70px] rounded-[20px] justify-between px-5">
                        <div className='flex items-center space-x-3'>
                        <Image width="30" height="40" className='' src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62bb3a35be83684ea78a1cb4_social-media-marketing-checkbox-icon-advertise-webflow-ecommerce-template.svg" alt="" />
                        <label htmlFor="option1" className='w-[100px] text-[16px] text-slate-400 leading-[22px] font-semibold'>Social Media Marketing</label>
                        </div>
                        <input type="checkbox" id="option1" name="option1" className="mr-2 h-5 w-5 duration-200 bg-white checked:bg-red-400 rounded-[5px] border-2 border-slate-500 appearance-none" />
                    </div>

                    <div className="flex items-center mb-2 text-slate-800 shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] w-[250px] h-[70px] rounded-[20px] justify-between px-5">
                        <div className='flex items-center space-x-3'>
                        <Image width="30" height="40" className='' src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62bb3a3548ec4a431ac3bede_seo-checkbox-icon-advertise-webflow-ecommerce-template.svg" alt="" />
                        <label htmlFor="option1" className='w-[50px] text-[16px] text-slate-400 leading-[22px] font-semibold'>SEO</label>
                        </div>
                        <input type="checkbox" id="option1" name="option1" className="mr-2 h-5 w-5 duration-200 bg-white checked:bg-red-400 rounded-[5px] border-2 border-slate-500 appearance-none" />
                    </div>

                    <div className="flex items-center mb-2 text-slate-800 shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] w-[250px] h-[70px] rounded-[20px] justify-between px-5">
                        <div className='flex items-center space-x-3'>
                        <Image width="30" height="40" className='' src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62bb3a36953bc03cac04f7b2_paid-advertising-checkbox-icon-advertise-webflow-ecommerce-template.svg" alt="" />
                        <label htmlFor="option1" className='w-[50px] text-[16px] text-slate-400 leading-[22px] font-semibold'>Paid Advertising</label>
                        </div>
                        <input type="checkbox" id="option1" name="option1" className="mr-2 h-5 w-5 duration-200 bg-white checked:bg-red-400 rounded-[5px] border-2 border-slate-500 appearance-none" />
                    </div>

                    <div className="flex items-center mb-2 text-slate-800 shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] w-[250px] h-[70px] rounded-[20px] justify-between px-5">
                        <div className='flex items-center space-x-3'>
                        <Image width="30" height="40" className='' src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62bb3a3589868a6aabf1e543_content-marketing-checkbox-icon-advertise-webflow-ecommerce-template.svg" alt="" />
                        <label htmlFor="option1" className='w-[50px] text-[16px] text-slate-400 leading-[22px] font-semibold'>Content Marketing</label>
                        </div>
                        <input type="checkbox" id="option1" name="option1" className="mr-2 h-5 w-5 duration-200 bg-white checked:bg-red-400 rounded-[5px] border-2 border-slate-500 appearance-none" />
                    </div>
                    </form>
                    <div className="mt-8">
                        <h2 className="text-lg font-bold mb-2">Message</h2>
                        <textarea className="w-full h-[150px] resize border-2 border-slate-200 rounded-[15px] p-2 focus:outline-none focus:border-red-300 hover:border-slate-300 duration-100 placeholder:font-semibold placeholder:text-[18px] placeholder:hover:text-red-400" placeholder="Décriver votre projet ici"></textarea>
                    </div>
                    <button type='submit' className="bg-red-500 hover:bg-blue-500 text-[20px] text-white font-bold mt-6 px-10 py-6 rounded-[20px] hover:scale-105 ease-in-out duration-300">Get in touch</button>
                    
                </div>
                </div>
            </div>

  );
};

export default Contactcard;