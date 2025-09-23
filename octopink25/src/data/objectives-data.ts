export interface ObjectiveItem {
  title: string;
  description: string;
  iconSrc: string;
}

export const objectivesData: ObjectiveItem[] = [
  {
    title: "Encourage innovation",
    description: `Foster the creation of
projects combining science,
health, and technology`,
    iconSrc: "/images/objectif-icons/icon-innovation.svg",
  },
  {
    title: "Build bridges",
    description: `Connect computer science
and medical students for
rich and multidisciplinary
exchanges`,
    iconSrc: "/images/objectif-icons/icon-bridges.svg",
  },
  {
    title: "Support talent",
    description: `Offer opportunities for
training, mentoring, and
collaboration`,
    iconSrc: "/images/objectif-icons/icon-talent.svg",
  },
];
