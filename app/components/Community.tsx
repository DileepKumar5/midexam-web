import React from 'react'
import membershipicon from "../../public/assests/membershipicon.svg"
import nationalicon from "../../public/assests/nationalicon.svg"
import clubsicon from "../../public/assests/clubsicon.svg"
import Image from 'next/image'

const Community = () => {
  return (
    <div className='h-[291.8px] mt-2 '>

        <div className='flex flex-col'>

            <div className='h-[62px] w-[377.27px] flex items-center text-center justify-center ml-[770px] text-2xl font-bold text-[#4D4D4D]'>Manage your entire community in a single system</div>
            <div className='text-[#717171] text-sm flex justify-center text-center mt-1'>Who is Nextcent suitable for?</div>
            <div className='h-[196.1px]'>

                <div className='grid grid-cols-3 mt-3  items-center justify-center '>
                    <div className='flex flex-col ml-44'>
                        <Image src={membershipicon} alt='Membershipicon' className='flex ml-24'></Image>
                        <div className='h-[51px] w-[250px] flex justify-center text-center text-2xl font-bold text-[#4D4D4D] mt-2'>Membership Organisations</div>
                        <div className='h-[51px] w-[250px] flex justify-center text-center text-sm text-[#4D4D4D] mt-4'>Our membership management software provides full automation of membership renewals and payments</div>
                    </div>

                    <div className='flex flex-col ml-44'>
                        <Image src={nationalicon} alt='national' className='flex ml-24'></Image>
                        <div className='h-[51px] w-[250px] flex justify-center text-center text-2xl font-bold text-[#4D4D4D] mt-2'>National Associations</div>
                        <div className='h-[56px] w-[250px] flex justify-center text-center text-sm text-[#4D4D4D] mt-4'>Our membership management software provides full automation of membership renewals and payments</div>
                    </div>

                    <div className='flex flex-col ml-44'>
                        <Image src={clubsicon} alt='clubs' className='flex ml-24'></Image>
                        <div className='h-[51px] w-[250px] flex justify-center text-center text-3xl font-bold text-[#4D4D4D] mt-2'>Clubs And Groups</div>
                        <div className='h-[51px] w-[250px] flex justify-center text-center text-sm text-[#4D4D4D] mt-6'>Our membership management software provides full automation of membership renewals and payments</div>
                    </div>

                </div>


            </div>


        </div>
        
    </div>
  )
}

export default Community