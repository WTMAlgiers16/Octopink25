export interface BenefitItem {
  text: string;
}

export interface BreastCancerData {
  title: string;
  subtitle: string;
  howItWorksTitle: string;
  howItWorksDescription: string;
  benefitsTitle: string;
  benefits: BenefitItem[];
  heroImageSrc: string;
  heroImageAlt: string;
}

export const breastCancerData: BreastCancerData = {
  title: "Detecting Breast Cancer with AI",
  subtitle:
    "Artificial Intelligence is transforming the way doctors detect and diagnose breast cancer.",
  howItWorksTitle: "How it works",
  howItWorksDescription:
    "AI systems are trained on thousands of medical images (such as mammograms and X-rays). They learn to identify patterns that might indicate early signs of cancer, sometimes even before they are visible to the human eye.",
  benefitsTitle: "Benefits",
  benefits: [
    { text: "Higher accuracy in spotting anomalies" },
    { text: "Early detection, which increases survival rates" },
    { text: "Assistance for radiologists, reducing fatigue and error" },
    {
      text: "Accessibility: AI-powered mobile tools can help extend screening to remote areas",
    },
  ],
  heroImageSrc: "/images/breast-cancer/doctor-pink-ribbon.jpg",
  heroImageAlt:
    "Healthcare professional holding pink ribbon symbolizing breast cancer awareness",
};

export const getBreastCancerData = (): BreastCancerData => {
  return breastCancerData;
};
