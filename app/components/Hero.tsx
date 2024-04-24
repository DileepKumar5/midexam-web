import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import heroimage from "../../public/assests/heroiamge1.svg"
import dots from "../../public/assests/dots.svg"

const Hero = () => {
  return (
    <div className=' h-[416.95px]'>
        <div className='flex flex-row items-center justify-between'>
            <div className='flex mt-20 ml-96 w-[467.32px] h-[192.9px]  flex-col'>

                <div className='flex text-[#4D4D4D] text-center mt-3 ml-2 font-bold text-4xl'>Lessons and insights</div>
                <div className='flex text-[#4CAF4F] text-center mt-1 ml-2 font-bold text-4xl'>from 8 years</div>
                <div className='flex text-[#717171] text-center mt-3 ml-1 text-sm'>Where to grow your business as a photographer: site or social media?</div>
                <Button className='flex bg-[#4CAF4F] w-[89.55px] h-[36.49px] mt-3 ml-2 px-[10px] py-[23px]'>Register</Button>
            </div>
            <div className='mr-96 mt-20 '>
                <Image src={heroimage} alt='HeroImage'></Image>
            </div>
        </div>
        <div className=' flex items-center justify-center mt-4'>
            <Image src={dots} alt='dots'></Image>
        </div>
        
    </div>
  )
}

export default Hero