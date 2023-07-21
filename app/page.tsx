import BlueWomen from '@/components/BlueWomen'
import Bluetext from '@/components/Bluetext'
import CardTitle from '@/components/CardTitle'
import Planet from '@/components/Planet'
import TitlePlanet from '@/components/TitlePlanet'
import CardEmail from '@/components/CardEmail'
import Image from 'next/image'
import TransitionCard from '@/components/TransitionCard'
import Step from '@/components/ThreeStep'
import TitleMedia from '@/components/TitleMedia'
import CardMedia from '@/components/CardMedia'
import ButtonMedia from '@/components/ButtonMedia'
import Titlecustom from '@/components/Titlecustom'
import Cardcustom from '@/components/Cardcustom'
import Article from '@/components/Article'
import Message from '@/components/Message'
import Hometop from '@/components/Hometop'

export default function Home() {
  return (
    <div className='overflow-x-hidden'>
      <Hometop />
      <div className='w-screen h-[2400px] bg-white'>
          <TitlePlanet />
          <Planet />
          <BlueWomen />
          <div className='justify-center flex content-center items-center'>
              <div className='flex w-8/12'>
               <div className='mr-[100px] w-[1000px] mt-[100px]'>
                <CardTitle />
                <Bluetext />
                </div>
                <Image width="600" height="600" src="https://assets.website-files.com/62b20e89c8f2dfa89b4b712a/62b33ccfc28eb6d042e6388e_an-extension-of-your-marketing-team-advertise-webflow-ecommerce-template.svg" alt="" className="relative overflow-visible h-[600px] object-none -right-[0px]" />

              </div>
          </div>
      </div>

      <div className='w-screen h-[1500px] bg-slate-100 flex justify-center'>
      <CardEmail />
      </div>

      <div className='w-screen h-[1400px] bg-white flex justify-center'>
      <div className='mb-[50px] w-4/6 '>
        <TransitionCard />
          
          
        <Step />

      </div>

      </div>
      <div className='w-screen h-[1400px] bg-slate-100'>
        <TitleMedia />
         <CardMedia />
          <ButtonMedia />
      </div>

      <div className='w-screen h-[450px] bg-white flex justify-center'>
      <div className='mb-[50px] w-4/6 '>
        <Titlecustom />
          </div>        
          </div>
          <div className='w-full h-[850px] bg-white'>
          <Cardcustom />
            <div className='flex item-centre justify-center mt-8'>
              <button className="text-[21px] bg-red-500 hover:bg-blue-500 text-white font-semibold py-6 px-12 rounded-[12px] hover:scale-105 ease-in-out duration-300">Get in touch</button>
            </div>
          </div>

          <div className='w-screen h-[2200px] bg-slate-100'>
           <div className='w-4/6 mx-auto flex justify-center'>
             <div className='text-slate-800 text-[50px] font-bold mt-[250px] w-[600px] text-center mb-12'>
             Browse our articles on marketing and growth
             </div>
          </div>
          <Article />

          <div className='flex item-centre justify-center mt-8'>
              <button className="text-[21px] bg-white hover:bg-red-500 text-slate-800 font-semibold py-6 px-12 rounded-[12px] hover:scale-105 ease-in-out duration-300">Browse all articles</button>
            </div>

            <Message />

        </div>

    </div>

  )
}
