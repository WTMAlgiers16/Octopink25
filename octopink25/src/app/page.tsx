import type React from "react";
import { SponsorsSection } from "@/components/sponsors-section";
import { AIDetectionSection } from "@/components/breast-cancer-section";
import EventAgenda  from "../components/event-agenda"
import { ObjectivesSection } from "../components/objectives-section";
import OrganizersSection from '@/components/organizers';
import AwarenessSection from "@/components/awareness-section";
import AboutOctopink from "@/components/about-octopink";
import Activities from "@/components/activities-section";
import Hero from "@/components/hero-section";
import Footer from "@/components/footer-section";


export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutOctopink/>
      <ObjectivesSection />
      <AwarenessSection/>
      <AIDetectionSection />
      <OrganizersSection />    
      <SponsorsSection />  
      <Activities />
      <EventAgenda />
      <Footer />
    </main>
  );
}