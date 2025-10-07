// data/awareness-data.ts

export interface AwarenessReason {
  title: string;
  mainText: string;
  subText: string;
  description: string; 
  image: string ;
}

export const awarenessData: AwarenessReason[] = [
  {
    title: "Global Context",
    mainText: "2.3M",
    subText: "women",
    description: "diagnosed each \n year",
    image:"/images/awareness/global-context.svg",
  },
  {
    title: "Algerian Context",
    mainText: "12K",
    subText: "new cases",
    description: "diagnosed each \n year",
    image:  "/images/awareness/algerian-context.svg",
  },
  {
    title: "The Crucial Message",
    mainText: "95%",
    subText: "survival",
    description: "with early \n screening",
    image: "/images/awareness/crucial-message.png"
 }

];
