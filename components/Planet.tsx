import React from "react";
import Image from "next/image";
import Link from "next/link";

const Planet = () => {
  return (
<div>
<div className='mb-[400px] flex justify-center space-x-8'>
              <div className=' py-7 px-9 shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] rounded-[20px]'>
                <Image src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62b5f7a999b97379a34e2eca_google-logo-advertise-webflow-ecommerce-template.svg" alt="" className='' width="100" height="500" />
              </div>
              <div className=' py-7 px-9 shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] rounded-[20px]'>
                <Image src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62b5f72da8140c1ec7a5f53d_facebook-logo-advertise-webflow-ecommerce-template.svg" alt="" className='' width="100" height="500" />
              </div>
              <div className=' py-7 px-9 shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] rounded-[20px]'>
                <Image src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62b32ba825162f7c22998a5a_youtube-logo-advertise-webflow-ecommerce-template.svg" alt="" className='' width="100" height="500" />
              </div>
              <div className=' py-7 px-9 shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] rounded-[20px]'>
                <Image src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62b5f817e7ccfc4591fbf924_pinterest-logo-advertise-webflow-ecommerce-template.svg" alt="" className='' width="100" height="500" />
              </div>
              <div className=' py-7 px-9 shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)] rounded-[20px]'>
                <Image src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62b32ba7d403cb91756450b6_twitch-logo-advertise-webflow-ecommerce-template.svg" alt="" className='' width="100" height="500" />
              </div>
          </div>
      </div>

  );
};

export default Planet;