import React from "react";
import Image from "next/image";
import Link from "next/link";

const Johncarter = () => {
  return (
<div className='w-screen h-auto bg-white pb-[300px]'>
           <div className=' mx-auto flex justify-center pt-24'>
                <div className=''>
                <Image width="500" height="700" className='rounded-[30px] object-cover bg-blue-200 mb-6' src="https://assets.website-files.com/62b20e89c8f2df5c8a4b715d/62be1542b8a06d52d4f4b51a_john-carter-portrait-image-advertise-webflow-ecommerce-template.png" alt="" />
                <div className=''>
                        <p className='text-slate-800 text-[50px] font-semibold leading-[30px] mb-4'>John Carter</p>
                        <p className='text-red-500 text-[25px] font-semibold'>CEO & Co-Founder</p>
                        <div className='mb-12 mt-5'>
                        <div className="flex mt-4 space-x-4">
                                <a href="#" className=" text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <Image width="40" height="40" src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62ba2aa2f6614cf3e7818f9d_facebook-social-media-icon-simple-advertise-webflow-ecommerce-template.svg" alt="" className=" hover:scale-[1.1] ease-in-out duration-200" />
                                </a>

                                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <Image width="40" height="40" src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62ba2aa24b327efbc00fdf45_twitter-social-media-icon-simple-advertise-webflow-ecommerce-template.svg" alt="" className=" hover:scale-[1.1] ease-in-out duration-200" />
                                </a>

                                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <Image width="40" height="40" src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62ba2aa2b8d40c11696f6a1b_linkedin-social-media-icon-simple-advertise-webflow-ecommerce-template.svg" alt="" className=" hover:scale-[1.1] ease-in-out duration-200" />
                                </a>
                                
                            </div>
                        </div>
                </div>
                </div>
                <div className='p-20 shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] rounded-[20px] w-[750px] ml-20'>
                    <div>
                      <p className='text-slate-800 text-[40px] font-semibold mb-2'>About John Carter</p>
                      <p className='text-slate-500 text-[18px] font-semibold mb-2 leading-[30px]'>Proin libero enim faucibus turpis consectetur dolor sit comeneer ilremsilom dolce issilm acalrm leoinsion duycoqun. Lorem ipsum consectetur amet dolor sit proin sed libero enim sed faucibus turpis in. Nisi est sit amet facilisis venenatis cras sed felis eget velit nam at lectus urna duis convallis. Cras ornare arcu dui vivamus arcu felis viverra ipsum nunc aliquet bibendum</p>
                    </div>
                    <div>
                      <p className='text-slate-800 text-[25px] font-semibold mb-2'>John Carter&apos;s Experience</p>
                      <p className='text-slate-500 text-[18px] font-semibold mb-2 leading-[30px]'>Lorem ipsum consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm leoinsion duycoqun. Lorem ipsum consectetur amet dolor sit proin sed libero enim sed faucibus turpis in. Nisi est sit amet facilisis. Venenatis cras sed felis eget velit. A erat nam at lectus urna duis convallis. Cras ornare arcu dui vivamus arcu felis. Viverra ipsum nunc aliquet bibendum</p>
                    </div>
                </div>
            </div>
        </div>

  );
};

export default Johncarter;