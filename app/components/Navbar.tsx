import Image from "next/image"
import logo from "../../public/assests/logo.svg"
import Link from "next/link"
import { Button } from "@/components/ui/button"



const Navbar = () => {
  return (
    <div className="flex flex-col h-[58.76px] ">

        <div className="flex flex-row ">
            <div className="flex items-center mt-3  ml-60">
                <Image src={logo} alt="logo"></Image>
            </div>
            <div className="flex mt-5 ml-96 gap-x-[56.7px]">
                <Link href={'/'}>Home</Link>
                <Link href={'/'}>Features</Link>
                <Link href={'/'}>Community</Link>
                <Link href={'/'}>Blog</Link>
                <Link href={'/'}>Pricing</Link>
            </div>
            <div className="flex mt-3 ml-80">
            <Button className="bg-[#4CAF4F]">Register Now ➡</Button>

            </div>
            
        </div>
    

        

    </div>
  )
}

export default Navbar