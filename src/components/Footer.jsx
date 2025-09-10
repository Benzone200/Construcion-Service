import React from 'react'
import Logo2 from "../assets/images/Logo2.png"
import X from "../assets/images/twitter.png"
import youtube from "../assets/images/youtube.png"
import pinterest from "../assets/images/pinterest.png"
import facebook from "../assets/images/facebook.png"
import insta from "../assets/images/insta.png"
import tiktok from "../assets/images/tiktok.png"
import linkedin from "../assets/images/linkedin.png"

const Footer = () => {
  return (

    <footer className="w-full bg-[#333333] lg:h-[750px] box-border">

      <div className="mx-auto max-w-[1200px] px-6 py-8 lg:px-[100px] lg:py-[100px] flex flex-col lg:flex-row lg:gap-[190px]">

        {/* Left Side */}
        <div className="flex flex-col">
          <img src={Logo2} className="w-[110px] h-[34px] lg:w-[130px] lg:h-[40px]" alt="Logo" />

          <div className="pt-6 lg:pt-[30px]">
            <h2 className="text-[16px] lg:text-[20px] text-[#ffffff] font-bold">Address:</h2>
            <p className="text-[14px] lg:text-[18px] font-semibold text-[#ffffff] pt-4">1234 Harvey Macauley</p>
            <p className="text-[14px] lg:text-[18px] font-semibold text-[#ffffff]">Trombonerr</p>
            <p className="text-[14px] lg:text-[18px] font-semibold text-[#ffffff]">Ado-Lagos</p>
          </div>

          <div className="pt-6 lg:pt-[30px]">
            <h2 className="text-[16px] lg:text-[20px] text-[#ffffff] font-bold">Contact:</h2>
            <p className="text-[14px] lg:text-[18px] font-semibold text-[#ffffff] underline pt-4">
              <a href="tel:0124-094-0982">0124-094-0982</a>
            </p>
            <p className="text-[14px] lg:text-[18px] font-semibold text-[#ffffff] underline">
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank" rel="noreferrer">dunuchisom1@gmail.com</a>
            </p>
          </div>

          <div className="pt-6 lg:pt-[30px]">
            <h2 className="text-[16px] lg:text-[20px] text-[#ffffff] font-bold">Socials:</h2>
            <div className="flex flex-row gap-3 lg:space-x-4 cursor-pointer pt-4">
              <img src={X} alt="X logo" className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px] transition-transform duration-300 hover:scale-110" />
              <img src={youtube} alt="Youtube Logo" className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px] transition-transform duration-300 hover:scale-110" />
              <img src={pinterest} alt="Pinterest Logo" className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px] transition-transform duration-300 hover:scale-110" />
              <img src={facebook} alt="Facebook Logo" className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px] transition-transform duration-300 hover:scale-110" />
              <img src={insta} alt="Instagram Logo" className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px] transition-transform duration-300 hover:scale-110" />
              <img src={tiktok} alt="Tiktok Logo" className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px] transition-transform duration-300 hover:scale-110" />
              <img src={linkedin} alt="Linkedin Logo" className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px] transition-transform duration-300 hover:scale-110" />
            </div>
          </div>
        </div>


        <div className="mt-8 lg:mt-0 flex flex-col gap-6 lg:flex-row lg:space-x-[30px] flex-wrap">
          <div>
            <h2 className="text-[20px] lg:text-[30px] font-semibold text-[#007bff]">Electrical</h2>
            <div className="pt-2 lg:pt-[10px] space-y-2 lg:space-y-3 pl-0 lg:pl-[2px]">
              {Array.from({length:9}).map((_,i) => (
                <p key={i} className="text-[14px] lg:text-[22px] font-semibold text-[#ffffff]">abcd</p>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[20px] lg:text-[30px] font-semibold text-[#007bff]">Renovation</h2>
            <div className="pt-2 lg:pt-[10px] space-y-2 lg:space-y-3 pl-0 lg:pl-[4px]">
              {Array.from({length:9}).map((_,i) => (
                <p key={i} className="text-[14px] lg:text-[22px] font-semibold text-[#ffffff]">abcd</p>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[20px] lg:text-[30px] font-semibold text-[#007bff]">Repair</h2>
            <div className="pt-2 lg:pt-[10px] space-y-2 lg:space-y-3">
              {Array.from({length:9}).map((_,i) => (
                <p key={i} className="text-[14px] lg:text-[22px] font-semibold text-[#ffffff]">abcd</p>
              ))}
            </div>
          </div>
        </div>
      </div>


      <hr className="border-t border-white w-full max-w-[1050px]  lg:mx-[250px] lg:w-[900px] opacity-20" />

      <div className="mx-auto max-w-[1200px] px-6 py-4 flex flex-col lg:flex-row items-center lg:items-center">
        <div className="ml-0 lg:ml-[100px]">
          <p className="text-[14px] lg:text-[18px] leading-[28px] lg:leading-[50px] text-[#ffffff]">Copyright</p>
        </div>

        <div className="flex flex-row lg:ml-auto space-x-6 lg:space-x-10 mr-0 lg:mr-[170px] mt-4 lg:mt-0">
          <p className="text-[14px] lg:text-[18px] leading-[28px] lg:leading-[50px] text-[#ffffff] underline">Terms & Conditions</p>
          <p className="text-[14px] lg:text-[18px] leading-[28px] lg:leading-[50px] text-[#ffffff] underline">Privacy Policy</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
