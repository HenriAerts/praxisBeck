"use client"

import Link from "next/link"
import Image from "next/image"
import { NAV_LINKS, NAV_LINKS_2 } from "@/constants"
import BtnLight from "./BtnLight"
import { useState } from "react"

const imageStyle = {
  marginLeft: "1.25rem",
  paddingTop: "0.75rem",
  paddingBottom: "0.75rem"
}



const Navbar = () => {
  const [hamburger, setHamburger] = useState(false)

  let menuClick = " hidden";
    if (hamburger === true){
      menuClick = " flexCenter";      
    }

  //keine Animation möglich!

  // let menuClick = " translate-x-full";
  //   if (hamburger === true){
  //     menuClick = " translate-x-[0]";
  //   }

  
  return (
    <nav className='w-full fixed z-50'>         
        <div className='max-container padding-container py-3'>
          <div className="rounded-full flexBetween items-center bg-blue-10">
            <Link href={"/"}>
              <Image src="/Logo/logo Beck light.png" alt="Logo Praxis Beck" width='120' height="29" style={imageStyle}/>
              <img />
            </Link>
            <ul className='hidden lg:flexBetween gap-10'>
              {NAV_LINKS.map((link)=>(
                <Link href={link.href} key={link.key} className="regular-p text-white flexCenter cursor-pointer transition-all hover:font-semibold">
                  {link.label}
                </Link>
              ))}
            </ul>
            <div className='lg:flexCenter hidden'>
                <BtnLight 
                  link="/kontakt"
                  circle= {false}
                  props='Kontakt'
                />
            </div>


            <div className='flexCenter  lg:hidden'>
                <button className=' bg-white  rounded-full flexBetween m-1' onClick={()=> setHamburger((menu)=>!menu)}>
                  <div className='bg-blue-30 w-[45px] h-[45px] m-1 flexCenter rounded-full'>
                  <svg width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d={hamburger ? "M1.344 12.315 12.658 1M1.344 1.006 12.658 12.32" : "M0 1h16M0 6h16M0 11h12"} stroke="#044F76" stroke-width="2"/></svg>
                  </div> 
              </button>     
            </div>
          </div>
        </div>
        <div className={` relative bg-blue-30 w-dvh h-dvh ${menuClick} transition-all  px-10 py-24 lg:hidden`}>
          <ul className='gap-10 flex flex-col '>
                {NAV_LINKS_2.map((link)=>(
                  <Link href={link.href} key={link.key} onClick={()=> setHamburger((menu)=>!menu)} className="bg-white rounded-full px-5 py-1 regular-h4 mr-2 flexCenter text-blue-10 cursor-pointer transition-all hover:font-semibold">
                    {link.label}
                  </Link>
                ))}
          </ul>
        </div> 
   
    </nav>
  )
}

export default Navbar


{/* <button className='bg-white rounded-full m-1 '>
<p className='text-blue-10'></p>
</button> */}