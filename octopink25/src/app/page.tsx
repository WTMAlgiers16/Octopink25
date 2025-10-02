import type React from "react";
import { SponsorsSection } from "@/components/sponsors-section";
import { AIDetectionSection } from "@/components/breast-cancer-section";
import EventAgenda  from "../components/event-agenda"
import { ObjectivesSection } from "../components/objectives-section";
import OrganizersSection from '@/components/organizers';
import AboutOctopink from "@/components/about-octopink";
import Activities from "@/components/activities-section";
import { Header } from "@/components/header";

export default function HomePage() {
  return (
    <main className="">
      <AboutOctopink/>
      <ObjectivesSection />
      <OrganizersSection />
      <SponsorsSection />
      <AIDetectionSection />
      <Activities />
      <EventAgenda />
      
    </main>
  );
}