import Newsarticle from '@/components/Newsarticle'
import Newslatestarticle from '@/components/Newslatestarticle'
import Newslatesttitle from '@/components/Newslatesttitle'
import Newssub from '@/components/Newssub'
import Newstitle from '@/components/Newstitle'
import Image from 'next/image'

export default function Studies() {
  return (
    <div>

        <div className='w-screen h-auto bg-white pb-[300px]'>
            <Newstitle />

            <Newsarticle />
        </div>

        <div className='w-screen h-auto bg-slate-100 pb-[300px]'>
            <div className=' mx-auto flex justify-center flex-col pt-24 w-8/12'>
                <Newslatesttitle />

                <div className='flex'>
                <Newslatestarticle />
                <Newssub />
                </div>
            </div>
        </div>
    </div>

  )
}
