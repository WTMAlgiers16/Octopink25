import type React from "react";
import { SponsorsSection } from "@/components/sponsors-section";
import { AIDetectionSection } from "@/components/breast-cancer-section";
import EventAgenda  from "../components/event-agenda"
import { ObjectivesSection } from "../components/objectives-section";
import OrganizersSection from '@/components/organizers';
import AboutOctopink from "@/components/about-octopink";

export default function HomePage() {
  return (
    <main className="">
      {/* Other components */}
      <AboutOctopink/>
      <ObjectivesSection />
      <OrganizersSection />
      <SponsorsSection />
      <AIDetectionSection />
      <EventAgenda />
      {/* Other components */}
    </main>
  );
}
