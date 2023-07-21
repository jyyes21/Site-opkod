import Contactcard from '@/components/Contactcard'
import Contactlien from '@/components/Contactlien'
import Contactmedia from '@/components/Contactmedia'
import Contactpays from '@/components/Contactpays'
import Contactquestion from '@/components/Contactquestion'
import Image from 'next/image'

export default function Studies() {
  return (
    <div>

        <div className='w-screen h-auto bg-white pb-[300px]'>
           <div className=' mx-auto flex justify-center pt-2 text-slate-800'>
            <Contactlien />
            <Contactcard />
        </div>
    </div>

    <Contactquestion />
    <Contactpays />
    <Contactmedia />


</div>

  )
}
