import Teambot from '@/components/Teambot'
import Teamcard from '@/components/Teamcard'
import Teamtitle from '@/components/Teamtitle'
import Image from 'next/image'

export default function Team() {
  return (
    <div className=''>
            <div className='w-screen h-auto bg-white'>
           <Teamtitle />
          <Teamcard />
            <Teambot />

          </div>
        
    </div>

  )
}
