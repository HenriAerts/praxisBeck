import Link from "next/link"
import Image from "next/image"
import { FOOTER_LINKS } from "@/constants"
import BtnLight from "./BtnLight"

const imageStyle = {
  marginLeft: "1.25rem",
  paddingTop: "0.75rem",
  paddingBottom: "0.75rem"
}

const Footer = () => {



  
  return (
    <nav className='w-full z-50'>         
        <div className='max-container padding-container py-3'>
          <div className="rounded-full flexBetween flex-row items-center bg-blue-10 px-5">
            <Link  href={"mailto:info@praxisbeck.com"} className="hidden regular-p text-white lg:flexCenter cursor-pointer transition-all hover:font-semibold"> 
              info@praxisbeck.com
            </Link>
            <Link href={"/"}>
              <Image src="/Logo/logo Beck light.png" alt="Logo Praxis Beck" width='120' height="29" style={imageStyle}/>
              <img />
            </Link>
            <ul className='flexBetween gap-10'>
              {FOOTER_LINKS.map((link)=>(
                <Link href={link.href} key={link.key} className="regular-p text-white flexCenter cursor-pointer transition-all hover:font-semibold">
                  {link.label}
                </Link>
              ))}
            </ul>

          </div>
        </div>
  
    </nav>
  )
}

export default Footer
