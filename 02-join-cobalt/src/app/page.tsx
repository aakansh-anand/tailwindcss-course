import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-neutral-900 px-10 text-neutral-100">
      <Navbar />
      <Hero />
    </div>
  );
}
