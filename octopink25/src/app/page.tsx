import type React from "react";
import { SponsorsSection } from "@/components/sponsors-section";
import { AIDetectionSection } from "@/components/breast-cancer-section";
import EventAgenda  from "../components/event-agenda"
import { ObjectivesSection } from "../components/objectives-section";
import OrganizersSection from '@/components/organizers';
import AboutOctopink from "@/components/about-octopink";
import Activities from "@/components/activities-section";
import Hero from "@/components/hero-section";
import Footer from "@/components/footer-section";

export default function HomePage() {
  return (
    <main className="">
      {/* Other components */}
      <Hero />
      <AboutOctopink/>
      <ObjectivesSection />
      <OrganizersSection />
      <SponsorsSection />
      <AIDetectionSection />
      <Activities />
      <EventAgenda />
      <Footer />
      {/* Other components */}
    </main>
  );
}
