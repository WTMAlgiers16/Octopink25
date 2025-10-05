import Image from "next/image";

import Button from "./button";
import PartialImage from "./partialImage";

export default function Hero() {  
  return (
    <section className="w-full bg-pink relative">
      <div className="relative flex flex-col lg:flex-row min-h-[500px] sm:min-h-[600px]">
        
        {/* Text Section */}
        <div className="flex flex-col text-center items-center justify-around p-6 text-white flex-1">
          {/* Title */}
          <div>
            <div className="flex flex-row justify-center items-baseline gap-2">
              <p className="hero-title-large font-bold ">Octopink</p>
              <p className="section-title ">2025</p>
            </div>
            <div className="subsection-title opacity-80 font-normal text-center mt-2 ">
              <p>A Collaborative Initiative Against Breast Cancer</p>
            </div>
          </div>

          {/* Event Info */}
          <div className="flex gap-4 flex-row justify-around items-center mt-4 ">
            <div className="flex flex-col text-center">
              <div className="font-bold time-text">Oct, 15th & 18th</div>
              <div>ESI Algiers</div>
            </div>

            <div className=" w-px h-full bg-white mx-6 flex-shrink-0 "></div>
            
            <div className="flex flex-col text-center">
              <div className="font-bold time-text">Oct, 25th</div>
              <div>Faculty of Medicine of Ziania</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-row justify-center gap-3 mt-6">
            <Button 
              text="join me!" 
              className="bg-white text-[#F8598F] border-white" 
              border 
            />

            <Button 
              text="learn more" 
              className="bg-[#FF80AB] text-white border-white" 
              border 
            />
          </div>
        </div>

        {/* woman and ribbon Image Section */}
        <div className="flex-2 relative hidden lg:block">
          <Image
            src="/images/hero/woman.png"
            alt="hero"
            fill
            className="object-contain object-bottom"
            priority
          />
          <Image
            src="/images/hero/rubon1.png"
            alt="ribbon"
            width={500}
            height={500}
            className="absolute mx-auto bottom-0 z-10 pointer-events-none -mb-20"
          />
        </div>

        {/* decoration for small screens */}
        <div className="absolute inset-0 lg:hidden flex justify-between  overflow-hidden">
          {/* Top Left Flower */}
        
            <div className="relative z-0 flex  h-[150px] w-[150px] md:h-[270px] md:w-[270px] items-start">
                     <PartialImage
                       src="/images/footer/flower3.png"
                       alt="flower"
                       className="object-cover h-full w-full -mt-10"
                       hiddenPercent={37}
                       side="left"
                     />
                   </div>
           
                  
          

          {/* Bottom Right Flower */}
          <div className=" bottom-0 right-0  flex items-end">
            
            <PartialImage
              src="/images/footer/flower2.png"
              alt="flower bottom right"
              className="w-[200px] h-[200px] md:h-[350px] md:w-[350px] object-cover z-0 -mb-22"
              hiddenPercent={50}
              side="right"
            />
          </div>
        </div>

      </div>

      {/* Decorative Flowers for Large Screens */}
      <div className="absolute inset-0 lg:flex pointer-events-none hidden">
        <PartialImage
          src="/images/footer/flower3.png"
          alt="flower"
          className="h-[200px] w-[200px] mx-auto"
          width={200}
          height={200}
          hiddenPercent={40}
          side="top"
        />

        <div className="flex flex-col absolute inset-0 right-0 h-full overflow-hidden min-h-[500px] sm:min-h-[600px]">
          <div className="h-[300px] w-auto flex justify-end">
            <PartialImage
              src="/images/footer/flower2.png"
              alt="flower"
              className="z-20 -mt-10 h-[300px] w-auto"
              width={300}
              height={300}
              hiddenPercent={40}
              side="right"
            />
          </div>
          <div className="h-[300px] w-auto flex justify-end">
            <PartialImage
              src="/images/hero/flower2.png"
              alt="flower"
              className="z-30 h-[300px] w-auto"
              width={300}
              height={300}
              hiddenPercent={50}
              side="right"
            />
          </div>
        </div>
      </div>
    </section>
  );
}