
export interface Organizer {
  id: string;
  logo: string; // Path to logo image
  description: string;
  whyOctopink?: string; // Optional field for some organizers
}

export const organizersData: Organizer[] = [
  {
    id: "wtm-algiers",
    logo: "/images/organizers/wtm-logo.svg",
    description: "Promote the role of women in technology and provide a space for learning, sharing, and empowerment.",
    whyOctopink: "Because WTM cares about women’s place in tech as much as their health and well-being, aligning perfectly with Octopink’s mission to support both."
  },
  {
    id: "ai-club-algiers", 
    logo: "/images/organizers/school-of-ai-logo.svg",
    description: "Democratize artificial intelligence and enable students to explore its potential.",
    whyOctopink: "Because AI can play a crucial role in healthcare, and we want to contribute with our technological skills to this cause."
  },
  {
    id: "source d'innocence",
    logo:  "/images/organizers/sourire-logo.svg",
    description: "Bring support, joy, and assistance to sick and underprivileged children.",
    whyOctopink: "To unite technology and humanitarian values with a common goal: raising awareness and supporting the fight against cancer."
  }
];