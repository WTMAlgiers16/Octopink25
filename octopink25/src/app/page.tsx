import { AIDetectionSection } from "@/components/breast-cancer-section";
import EventAgenda  from "../components/event-agenda"
import { ObjectivesSection } from "../components/objectives-section";

export default function HomePage() {
  return (
    <main>
      {/* Other components */}
      <ObjectivesSection />
      <AIDetectionSection />
      <EventAgenda />
      {/* Other components */}
    </main>
  );
}
