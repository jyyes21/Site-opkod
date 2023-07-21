import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
<div>
      <header className="bg-white justify-center flex">
  <div className='text-slate-800 flex justify-between items-center px-4 py-8 w-4/6'>
  <nav className='flex flex-row'>
  <Image width="300" height="500" src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62b23d1145c1a6072dbe465d_logo-advertise-webflow-ecommerce-template.svg" alt="" className="h-8 mr-5 hover:scale-110 ease-in-out duration-500" />
    <ul className="flex space-x-6 mt-1 ml-5">
      <li><Link href="#" className="hover:text-red-500 text-slate-800 font-semibold rounded mr-2 ease-in-out duration-300">Home</Link></li>
      <li><Link href="#" className="hover:text-red-500 text-slate-800 font-semibold rounded mr-2 ease-in-out duration-300">About</Link></li>
      <li><Link href="#" className="hover:text-red-500 text-slate-800 font-semibold rounded mr-2 ease-in-out duration-300">Blog</Link></li>
      <li><Link href="#" className="hover:text-red-500 text-slate-800 font-semibold rounded mr-2 ease-in-out duration-300">Pages</Link></li>
      <li><Link href="#" className="hover:text-red-500 text-slate-800 font-semibold rounded mr-2 ease-in-out duration-300">Pricing</Link></li>
    </ul>
  </nav>

  <div>
    <button className="hover:text-red-500 text-slate-800 font-bold py-2 px-4 rounded mr-2 ease-in-out duration-300">Cart</button>
    <button className="bg-red-500 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-[20px] hover:scale-105 ease-in-out duration-300">Get in touch</button>
  </div>
  </div>
</header>
      </div>

  );
};

export default Header;