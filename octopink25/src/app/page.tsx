import type React from "react";
import { SponsorsSection } from "@/components/sponsors-section";
import { AIDetectionSection } from "@/components/breast-cancer-section";
import EventAgenda  from "../components/event-agenda"
import { ObjectivesSection } from "../components/objectives-section";

export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto">
      {/* Other components */}
      <ObjectivesSection />
      <AIDetectionSection />
      <EventAgenda />
      <SponsorsSection />
      {/* Other components */}
    </main>
  );
}
