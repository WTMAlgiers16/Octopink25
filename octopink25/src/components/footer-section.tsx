"use client";


import PartialImage from "./partialImage";
import { LiaFacebookSquare } from "react-icons/lia";
import { CiLinkedin } from "react-icons/ci";
import { RxTwitterLogo } from "react-icons/rx";
import { TbBrandTiktok, TbPhonePause } from "react-icons/tb";
import { FaInstagram, FaRegEnvelope } from "react-icons/fa";

export default function Footer() {
  const SLOGON="OctoPink, Together we fight, together we hope."
  const EMAIL="wtm.algiers@esi.dz"
  const PHONE="+213777796966"
  const COPYRIGHT="© 2025 Octopink – All rights reserved"
  return (
    <section className="bg-pink-500 text-white w-full h-auto relative flex flex-row">
      {/* Cropping container */}
      <div className=" flex-1">
       <PartialImage
         src="/images/footer/flower1.png"
         alt="flower"
         className=" object-cover top-0"
         hiddenPercent={30}
         side="left"
       />
      </div>
      <div className="flex-2 flex flex-col justify-around text-center py-6"> 
<div className="subsection-title max-w-md mx-auto">
          <p>{SLOGON}</p>
        </div>

        {/* Contact info */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-center items-center gap-2 flex-wrap text-sm md:text-base">
            <FaRegEnvelope className="w-4 h-4" />
            <span> {EMAIL}</span>
            <span className="hidden md:inline">|</span>
            <TbPhonePause className="w-4 h-4" />
            <span>{PHONE}</span>
          </div>

          {/* Social icons */}
          <div className="flex flex-row justify-center gap-4 mt-2">
            <FaInstagram className="w-6 h-6 cursor-pointer hover:text-pink-200" />
            <CiLinkedin className="w-6 h-6 cursor-pointer hover:text-pink-200" />
            <LiaFacebookSquare className="w-6 h-6 cursor-pointer hover:text-pink-200" />
            <RxTwitterLogo className="w-6 h-6 cursor-pointer hover:text-pink-200" />
            <TbBrandTiktok className="w-6 h-6 cursor-pointer hover:text-pink-200" />
          </div>
        </div>

        <div className="body-large text-sm md:text-base">
          <p>{COPYRIGHT}</p>
        </div>
      </div>
     <div className="flex-1 flex justify-end items-end relative overflow-hidden">
  {/* Flower 3 on the right side */}
  <div className="relative z-10 flex justify-end">
    <PartialImage
      src="/images/footer/flower3.png"
      alt="flower"
      className="object-cover"
      hiddenPercent={50}
      side="right"
    />
  </div>

  {/* Flower 2 pinned to bottom, behind */}
  <div className="absolute bottom-0 right-0 z-0">
    <PartialImage
      src="/images/footer/flower2.png"
      alt="flower"
      className="object-cover"
      hiddenPercent={50}
      side="bottom"
    />
  </div>
</div>

    </section>
  );
}
