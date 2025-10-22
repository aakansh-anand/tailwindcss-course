import Hero from "@/components/hero";
import HeroImage from "@/components/hero-image";
import Navbar from "@/components/navbar";

const HomePage = () => {
  return (
    <main className="relative min-h-screen w-full bg-blue-50">
      <div className="absolute inset-0 -z-10 h-screen w-full bg-[radial-gradient(at_top,white,transparent,white)]"></div>
      <div className="relative container mx-auto max-h-screen max-w-5xl p-4">
        <Navbar />
        <Hero />
        <div className="absolute top-0 left-0 h-full w-px bg-neutral-300" />
        <div className="absolute top-0 right-0 h-full w-px bg-neutral-300" />
      </div>
      <HeroImage />
    </main>
  );
};

export default HomePage;
