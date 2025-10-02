import Image from "next/image"; // 1. React and Next.js imports 

import Button from "./button"; // 4. Relative imports 
import PartialImage from "./partialImage"; // 4. Relative imports 

export default function Hero() { // Component Name is PascalCase (Hero) and uses a function declaration [cite: 47, 62]
  return (
    <section className="w-full bg-pink-500">
      <div className="relative flex flex-col lg:flex-row min-h-[500px] sm:min-h-[600px] ">


        {/* Text Section */}
        <div className="absolute inset-0 z-10 flex flex-col text-center items-center justify-around p-6
                        text-white lg:static lg:flex-1 lg:bg-transparent">
          {/* Title */}
          <div>
            <div className="flex flex-row justify-center items-baseline gap-2">
              <p className="hero-title-large font-bold text-3xl sm:text-4xl md:text-5xl">Octopink</p>
              <p className="section-title text-xl sm:text-2xl md:text-3xl">2025</p>
            </div>
            <div className="subsection-title opacity-80 font-normal text-center mt-2 text-sm sm:text-base md:text-lg">
              <p>A Collaborative Initiative Against Breast Cancer</p>
            </div>
          </div>

          {/* Event Info */}
          <div className="flex  gap-4 flex-row justify-around items-center mt-4 text-sm sm:text-base">
            <div className="flex flex-col text-center">
              <div className="font-bold time-text">Oct, 15th & 18th</div>
              <div>ESI Algiers</div>
            </div>

            <div className="hidden sm:block w-1 bg-white mx-6 flex-shrink-0"></div>

            <div className="flex flex-col text-center">
              <div className="font-bold time-text">Oct, 25th</div>
              <div>Faculty of Medicine of Ziania</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-row justify-center gap-3 mt-6">
            <Button text="join me!" bgColor="white" textColor="#F8598F"  border borderColor="white" />
            <Button text="learn more" bgColor="#FF80AB" textColor="white" border borderColor="white" />
          </div>


        </div>
        {/* Image Section */}
        <div className="relative flex-2 ">
          <Image
            src="/images/hero/woman.png"
            alt="hero"
            fill
            className="object-contain object-bottom-left lg:object-bottom"
            priority
          />
            <Image
            src="/images/hero/rubon1.png"
            alt="ribbon"
            width={500}
            height={500}
            className="absolute mx-auto bottom-0 z-10 pointer-events-none -mb-20 hidden lg:block"
          />
          {/* Overlay only on small screens */}
          <div className="absolute inset-0  lg:hidden"></div>
        </div>
      </div>


      <div className="z-10 absolute inset-0 lg:flex  pointer-events-none  hidden">

        <PartialImage
          src="/images/footer/flower3.png"
          alt="flower"
          className="h-[200px] w-[200px] object-cover mx-auto"
          hiddenPercent={40}
          side="top"
        />


        <div className="flex flex-col absolute inset-0 right-0 h-full overflow-hidden min-h-[500px] sm:min-h-[600px] ">

          <div className="h-[300px] w-auto flex justify-end  ">
            <PartialImage
              src="/images/footer/flower2.png"
              alt="flower"
              className="object-contain z-20 -mt-10"
              hiddenPercent={40}
              side="right"
            />
          </div>
          <div className="h-[300px] w-auto flex justify-end ">
            <PartialImage
              src="/images/hero/flower2.png"
              alt="flower"
              className=" object-contain z-30 object-bottom"
              hiddenPercent={50}
              side="right"
            />
          </div>
        </div>

      </div>
    </section>
  );
}