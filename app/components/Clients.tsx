import Image from 'next/image'
import React from 'react'
import clientlogos from "../../public/assests/clientlogos.svg"
import logo1 from "../../public/assests/logo1.svg"
import logo2 from "../../public/assests/logo2.svg"
import logo3 from "../../public/assests/logo3.svg"
import logo4 from "../../public/assests/logo4.svg"
import logo5 from "../../public/assests/logo5.svg"
import logo6 from "../../public/assests/logo6.svg"
import logo7 from "../../public/assests/logo7.svg"

const Clients = () => {
  return (
    <div className='h-[132.92px]'>
        <div className='flex flex-col'>
            <div className='text-[#4D4D4D] font-bold flex text-3xl justify-center text-center'>Our Clients</div>
            <div className='text-[#717171] text-xl flex justify-center text-center mt-1'>We have been working with some Fortune 500+ clients</div>
            <div className='flex justify-center text-center mt-1 h-[68.21px] gap-x-40'>
                <Image src={logo1} alt='1'></Image>
                <Image src={logo2} alt='2'></Image>
                <Image src={logo3} alt='3'></Image>
                <Image src={logo4} alt='4'></Image>
                <Image src={logo5} alt='5'></Image>
                <Image src={logo6} alt='6'></Image>
                <Image src={logo7} alt='7'></Image>
            {/* <Image src={clientlogos} alt='Clientlogos'></Image> */}

            </div>
           

        </div>
        
    </div>
  )
}

export default Clients