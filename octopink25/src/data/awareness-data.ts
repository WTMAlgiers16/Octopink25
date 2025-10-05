// data/awareness-data.ts
export interface AwarenessImage {
  src: string;
  className: string;          
  mobileClassName?: string;   
  semanticName?: string;
}

export interface AwarenessReason {
  title: string;
  mainText: string;
  subText: string;
  description: string; 
  image?: AwarenessImage;
}

export const awarenessData: AwarenessReason[] = [
  {
    title: "Global Context",
    mainText: "2.3M",
    subText: "women",
    description: "diagnosed each \n year",
    image: {
      src: "/images/awareness/Group 44.svg",

      mobileClassName:
        "absolute left-1/2 -translate-x-1/2 w-70 sm:w-80 pointer-events-none",
      
      className:
        "md:bottom-[-44px] md:right-0 pointer-events-none sm:right-15",
      semanticName: "global-context-decorative",
    },
  },
  {
    title: "Algerian Context",
    mainText: "12K",
    subText: "new cases",
    description: "diagnosed each \n year",
    image: {
      src: "/images/awareness/pic3.svg",
      
     mobileClassName:
  "absolute left-1/2 -translate-x-1/2 w-48 sm:w-48 pointer-events-none opacity-10",

className:
  "md:top-44 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:opacity-10 pointer-events-none scale-125",
      semanticName: "algerian-context-decorative",
    },
  },
  {
  title: "The Crucial Message",
  mainText: "95%",
  subText: "survival",
  description: "with early \n screening",
  image: {
    src: "/images/awareness/pic12.png",
    
    mobileClassName:
      "absolute left-1/2 -translate-x-1/2 w-60 sm:w-80 pointer-events-none",
   
    className:
      "md:top-2 md:right-10 pointer-events-none max-w-[250px] md:max-w-[300px]",
    semanticName: "crucial-message-decorative ",
  },
}

];
