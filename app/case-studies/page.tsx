import Casefacebook from '@/components/Casefacebook'
import Casegoogle from '@/components/Casegoogle'
import Casetwitch from '@/components/Casetwitch'
import Caseyoutube from '@/components/Caseyoutube'
import Image from 'next/image'

export default function Studies() {
  return (
    <div>

        <div className='w-screen h-auto bg-white pb-[300px]'>
           <div className=' mx-auto flex justify-center  flex-col pt-24 w-8/12'>
            <div className='mx-auto flex justify-center  flex-col mb-8'>
                <p className='text-slate-800 text-[55px] font-semibold  mb-4 mx-auto'>Case Studies</p>
                <p className='text-slate-500 text-[18px] font-semibold mb-4 w-[600px] mx-auto text-center'>Lorem ipsum consectetur amet dolor sit comeneer lomeipmil ilremsilom dolce issilm acalrm leoinsion duycoqun.</p>
            </div>
             <div className='mx-auto flex flex-col justify-center space-y-12 '>

                            <Casefacebook />
                            <Casegoogle />
                            <Casetwitch />
                            <Caseyoutube />      
                </div>
        </div>
    </div>
</div>

  )
}
