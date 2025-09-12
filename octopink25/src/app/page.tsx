import AboutOctopink from "../components/about-octopink"
import EventAgenda  from "../components/event-agenda"
export default function Home() {
  return (
    <div className="bg-pink text-white text-4xl font-bold flex items-center justify-center min-h-screen">
    <EventAgenda />
    </div>
  );
}
