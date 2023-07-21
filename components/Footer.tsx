import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
<div>
      <footer className="bg-white justify-center flex h-[700px]">
  <div className=' flex  w-9/12 mt-[150px]'>
  <div className="w-1/3 ">
  <Image width="200" height="100" src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62b23d1145c1a6072dbe465d_logo-advertise-webflow-ecommerce-template.svg" alt="" className="mb-4 h-10 hover:scale-110 ease-in-out duration-500" />
  <p className="text-slate-400 text-[18px] font-semibold mb-6">Lorem ipsum consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm leoinsion.</p>
  <div className="bg-red-400 p-8 w-[450px] h-3500px] rounded-[20px]">
    <p className="text-white text-[20px] font-semibold mb-6 mt-4">Subscribe to our newsletter</p>
    <p className="text-white text-[18px] font-semibold mb-6">Lorem ipsum consectetur amet dolor sit comeneer ilremsilom dolce issilm.</p>
    <form>
  <label className="block">
    <input type="email" placeholder="Enter your Email"  className="mt-1 block w-full px-6 py-6 bg-red-400 border border-white rounded-[25px] text-sm shadow-sm placeholder-white mb-4
      focus:outline-none focus:border-white focus:ring-1 focus:ring-swhiteky-500
      disabled:bg-slate-50 disabled:text-white disabled:border-white disabled:shadow-none
      invalid:border-pink-200 invalid:text-pink-600
      focus:invalid:border-pink-300 focus:invalid:ring-pink-500
      hover:border-slate-300
    "/>
  </label>
</form>
          <button className="bg-white hover:bg-slate-800 text-slate-800 hover:text-white font-bold py-6 px-8 rounded-[25px] hover:scale-105 ease-in-out duration-300">Get in touch</button>
  </div>
  </div>
  <div className="w-1/3  ml-12">
    <div><p className="text-slate-800 text-[20px] font-bold">Pages</p></div>
    <div className="flex space-x-[120px] mt-5">
      <ul className="1/2 space-y-4">
        <li><Link href="#" className="hover:text-red-500 text-slate-500 font-bold rounded ease-in-out duration-300">Home V1</Link></li>
        <li><Link href="#" className="hover:text-red-500 text-slate-500 font-bold rounded ease-in-out duration-300">Home V2</Link></li>
        <li><Link href="#" className="hover:text-red-500 text-slate-500 font-bold rounded ease-in-out duration-300">Home V3</Link></li>
        <li><Link href="#" className="hover:text-red-500 text-slate-500 font-bold rounded ease-in-out duration-300">About</Link></li>
        <li><Link href="#" className="hover:text-red-500 text-slate-500 font-bold rounded ease-in-out duration-300">Team</Link></li>
        <li><Link href="#" className="hover:text-red-500 text-slate-500 font-bold rounded ease-in-out duration-300">Team single</Link></li>
        <li><Link href="#" className="hover:text-red-500 text-slate-500 font-bold rounded ease-in-out duration-300">Contact</Link></li>
        <li><Link href="#" className="hover:text-red-500 text-slate-500 font-bold rounded ease-in-out duration-300">Blog V1</Link></li>
        <li><Link href="#" className="hover:text-red-500 text-slate-500 font-bold rounded ease-in-out duration-300">Blog V2</Link></li>
        <li><Link href="#" className="hover:text-red-500 text-slate-500 font-bold rounded ease-in-out duration-300">Blog V3</Link></li>
        <li><Link href="#" className="hover:text-red-500 text-slate-500 font-bold rounded ease-in-out duration-300">Blog Post</Link></li>
        
      </ul>
      <ul className="1/2 space-y-4">
        <li><Link href="#" className="hover:text-red-500 text-slate-500 font-bold rounded ease-in-out duration-300">Careers</Link></li>
        <li><Link href="#" className="hover:text-red-500 text-slate-500 font-bold rounded ease-in-out duration-300">Career Single</Link></li>
        <li><Link href="#" className="hover:text-red-500 text-slate-500 font-bold rounded ease-in-out duration-300">Packages eCommerce</Link></li>
        <li><Link href="#" className="hover:text-red-500 text-slate-500 font-bold rounded ease-in-out duration-300">Packages Single</Link></li>
        <li><Link href="#" className="hover:text-red-500 text-slate-500 font-bold rounded ease-in-out duration-300">Services V1</Link></li>
        <li><Link href="#" className="hover:text-red-500 text-slate-500 font-bold rounded ease-in-out duration-300">Services V2</Link></li>
        <li><Link href="#" className="hover:text-red-500 text-slate-500 font-bold rounded ease-in-out duration-300">Services V3</Link></li>
        <li><Link href="#" className="hover:text-red-500 text-slate-500 font-bold rounded ease-in-out duration-300">Service Single</Link></li>
        <li><Link href="#" className="hover:text-red-500 text-slate-500 font-bold rounded ease-in-out duration-300">Case Studies</Link></li>
        <li><Link href="#" className="hover:text-red-500 text-slate-500 font-bold rounded ease-in-out duration-300">Case Study Single</Link></li>
      </ul>
    </div>
  </div>


  <div className="w-1/3  ml-8">
    <div><p className="text-slate-800 text-[20px] font-bold">Landing Pages</p></div>
    <div className="flex flex-col mt-5">
      <ul className="1/2 space-y-4 mb-6">
        <li><Link href="#" className="hover:text-red-500 text-slate-500 font-bold rounded ease-in-out duration-300">Free Consultation Landing Page</Link></li>
        <li><Link href="#" className="hover:text-red-500 text-slate-500 font-bold rounded ease-in-out duration-300">Newsletter Subscribe Landing Page</Link></li>
        <li><Link href="#" className="hover:text-red-500 text-slate-500 font-bold rounded ease-in-out duration-300">Form Landing Page</Link></li>
        <li><Link href="#" className="hover:text-red-500 text-slate-500 font-bold rounded ease-in-out duration-300">Video Landing Page</Link></li>
      </ul>
      <div><p className="text-slate-800 text-[20px] font-bold mb-6">Utility Pages</p></div>
      <div className="flex flex-col">
      <ul className="1/2 space-y-4">
        <li><Link href="#" className="hover:text-red-500 text-slate-500 font-bold rounded ease-in-out duration-300">Styleguide</Link></li>
        <li><Link href="#" className="hover:text-red-500 text-slate-500 font-bold rounded ease-in-out duration-300">Start Here</Link></li>
        <li><Link href="#" className="hover:text-red-500 text-slate-500 font-bold rounded ease-in-out duration-300">404 Not Found</Link></li>
        <li><Link href="#" className="hover:text-red-500 text-slate-500 font-bold rounded ease-in-out duration-300">Password Protected</Link></li>
        <li><Link href="#" className="hover:text-red-500 text-slate-500 font-bold rounded ease-in-out duration-300">Licenses</Link></li>
        <li><Link href="#" className="hover:text-red-500 text-slate-500 font-bold rounded ease-in-out duration-300">Changelog</Link></li>
        <li><Link href="#" className="hover:text-blue-500 text-red-500 font-bold rounded ease-in-out duration-300">More Webflow Templates</Link></li>
      </ul>
    </div>
  </div>
  </div>
 </div>
</footer>
<footer className="bg-white">
    <div className="mx-auto w-9/12 p-4 py-6 lg:py-8">
        
      <hr className="my-6  sm:mx-auto border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-[18px] text-gray-500 sm:text-center dark:text-gray-400 font-semibold">Copyright © | Lorem, ipsum. <a className="cursor-pointer text-red-500 hover:text-blue-500 ease-in-out duration-300">Lorem ipsum dolor sit amet.</a> - Create by <a className="cursor-pointer text-red-500 hover:text-blue-500 ease-in-out duration-300">Jonas</a>
          </span>
          <div className="flex mt-4 space-x-4 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <Image width="30" height="30" src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62b399e312bcd03f99aa3cf5_facebook-footer-link-icon-advertise-webflow-ecommerce-template.svg" alt="" className=" hover:scale-[1.2] ease-in-out duration-200" />
              </a>

              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <Image width="30" height="30" src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62b399e4102bae34f5b07795_twitter-footer-link-icon-advertise-webflow-ecommerce-template.svg" alt="" className=" hover:scale-[1.2] ease-in-out duration-200" />
              </a>

              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <Image width="30" height="30" src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62b399e48333ff4d0342cf13_instagram-footer-link-icon-advertise-webflow-ecommerce-template.svg" alt="" className=" hover:scale-[1.2] ease-in-out duration-200" />
              </a>

              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <Image width="30" height="30" src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62b399e34a73b058081e7d5e_linkedin-footer-link-icon-advertise-webflow-ecommerce-template.svg" alt="" className=" hover:scale-[1.2] ease-in-out duration-200" />
              </a>

              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <Image width="30" height="30" src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62b399e3798462b1fdbc847a_youtube-footer-link-icon-advertise-webflow-ecommerce-template.svg" alt="" className=" hover:scale-[1.2] ease-in-out duration-200" />
              </a>

              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <Image width="30" height="30" src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62b399e3511a4ada6aa6a59c_whatsapp-footer-link-icon-advertise-webflow-ecommerce-template.svg" alt="" className=" hover:scale-[1.2] ease-in-out duration-200" />
              </a>
              
          </div>
      </div>
    </div>
</footer>
      </div>

  );
};

export default Footer;