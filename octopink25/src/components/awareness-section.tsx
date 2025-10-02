import React from "react";

const AwarenessSection = () => {
  const reasons = [
    {
      title: "Global Context",
      mainText: "2.3M",
      subText: "women",
      description: "diagnosed each <br /> year",
      image: {
        src: "/images/awareness/pic45.png",
        className: "bottom-0 right-0 md:bottom-[-44px] md:right-0 pointer-events-none",
      },
    },
    {
      title: "Algerian Context",
      mainText: "12K",
      subText: "new cases",
      description: "diagnosed each <br /> year",
      image: {
        src: "/images/awareness/pic3.png",
        className:
          "md:top-[180px] md:left-1/2 opacity-10 md:-translate-x-1/2 md:-translate-y-1/2 md:opacity-10 pointer-events-none",
      },
    },
    {
      title: "The Crucial Message",
      mainText: "95%",
      subText: "survival",
      description: "with early <br /> screening",
      image: {
        src: "/images/awareness/pic12.png",
        className: "md:top-7 md:right-10 pointer-events-none",
      },
    },
  ];

  return (
    <section className="bg-white py-10">
      <div className="text-center mb-12">
        <h2 className="font-bold text-[#F8598F] text-4xl sm:text-4xl lg:text-5xl">
          Why Awareness matters
        </h2>
      </div>

      <div className="relative flex flex-col md:flex-row items-stretch justify-between bg-[#F8598F] min-h-[250px]">
        {reasons.map((reason, index) => (
          <div key={index} className="relative flex-1 px-6 py-8">
            <div className="relative z-20 text-center text-white h-full flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                {reason.title}
              </h3>
              <p className="text-3xl md:text-4xl font-bold leading-[0.7]">
                {reason.mainText} <br />
                {reason.subText}
              </p>
              <p
                className="text-xl md:text-2xl leading-none mt-2"
                dangerouslySetInnerHTML={{ __html: reason.description }}
              />
            </div>

            {reason.image && (
              <div
                className={`absolute inset-0 flex justify-center items-center md:block md:inset-auto z-0 ${reason.image.className}`}
              >
                <img
                  src={reason.image.src}
                  alt=""
                  className={`object-contain ${
                    index === 0
                      ? "max-w-[55%] sm:max-w-[90%] md:max-w-[300px] lg:max-w-[350px]"
                        : index === 2
                        ? "max-w-[50%] sm:max-w-[50%] md:max-w-[320px] lg:max-w-[275px]"
                        : "max-w-[50%] sm:max-w-[50%] md:max-w-[200px] lg:max-w-[250px]"

                  }`}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AwarenessSection;