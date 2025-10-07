"use client";

import PartialImage from "./partialImage";
import { LiaFacebookSquare } from "react-icons/lia";
import { CiLinkedin } from "react-icons/ci";
import { RxTwitterLogo } from "react-icons/rx";
import { TbBrandTiktok, TbPhonePause } from "react-icons/tb";
import { FaInstagram, FaRegEnvelope } from "react-icons/fa";

export default function Footer() {
  const SLOGON = "OctoPink, Together we fight, together we hope.";
  const EMAIL = "wtm.algiers@esi.dz";
  const PHONE = "+213777796966";
  const COPYRIGHT = "© 2025 Octopink – All rights reserved";

  return (
    <section className="bg-pink text-white w-full h-auto relative flex flex-row">
      {/* Cropping container */}
      {/* Flower 1 on the left side */}
      <div className="flex-1">
        <PartialImage
          src="/images/footer/flower1.png"
          alt="flower"
          className="object-cover top-0 h-full w-full"
          hiddenPercent={30}
          side="left"
        />
      </div>
{/* Main content */}
      <div className="flex-2 flex flex-col justify-around text-center py-6 gap-4">
        <div className="subsection-title max-w-md mx-auto">
          <p>{SLOGON}</p>
        </div>

        {/* Contact info */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-center items-center gap-2 flex-wrap body-regular">
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-1 hover:text-pink-200"
            >
              <FaRegEnvelope className="w-4 h-4" />
              <span>{EMAIL}</span>
            </a>
            <span className="hidden md:inline">|</span>
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-1 hover:text-pink-200"
            >
              <TbPhonePause className="w-4 h-4" />
              <span>{PHONE}</span>
            </a>
          </div>

         

          {/* Social icons */}
          <div className="flex flex-row justify-center gap-4">
            <a
              href="https://www.instagram.com/wtm_algiers/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6 cursor-pointer hover:text-pink-200" />
            </a>
            <a
              href="https://www.linkedin.com/company/wtm-algiers/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <CiLinkedin className="w-6 h-6 cursor-pointer hover:text-pink-200" />
            </a>
            <a
              href="https://www.facebook.com/WomenTechmakersAlgiers"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <LiaFacebookSquare className="w-6 h-6 cursor-pointer hover:text-pink-200" />
            </a>
            <a
              href="https://x.com/AlgiersWTM"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter/X"
            >
              <RxTwitterLogo className="w-6 h-6 cursor-pointer hover:text-pink-200" />
            </a>
            <a
              href="https://www.tiktok.com/@wtm.algiers.club"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <TbBrandTiktok className="w-6 h-6 cursor-pointer hover:text-pink-200" />
            </a>
          </div>
        </div>

        <div className="body-large">
          <p>{COPYRIGHT}</p>
        </div>
      </div>

      <div className="flex-1 flex justify-end items-end relative overflow-hidden">
        {/* Flower 3 on the right side */}
        <div className="relative z-10 flex justify-end h-full w-full">
          <PartialImage
            src="/images/footer/flower3.png"
            alt="flower"
            className="object-cover h-full w-full"
            hiddenPercent={50}
            side="right"
          />
        </div>

        {/* Flower 2 pinned to bottom, behind */}
       <div className="absolute bottom-0 right-0 h-[180px] w-[180px] md:h-[300px] md:w-[300px] flex items-end overflow-hidden -mr-10 ">
  <PartialImage
    src="/images/footer/flower2.png"
    alt="flower"
    className="object-contain h-full w-full z-0"
    hiddenPercent={50}
    side="bottom"
  />
</div>


      </div>
    </section>
  );
}