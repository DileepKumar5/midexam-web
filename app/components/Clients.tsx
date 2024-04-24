import Image from 'next/image'
import React from 'react'
import clientlogos from "../../public/assests/clientlogos.svg"

const Clients = () => {
  return (
    <div className='h-[132.92px]'>
        <div className='flex flex-col'>
            <div className='text-[#4D4D4D] font-bold flex text-3xl justify-center text-center'>Our Clients</div>
            <div className='text-[#717171] text-xl flex justify-center text-center mt-1'>We have been working with some Fortune 500+ clients</div>
            <div className='flex justify-center text-center mt-1'>
            <Image src={clientlogos} alt='Clientlogos'></Image>

            </div>
           

        </div>
        
    </div>
  )
}

export default Clients