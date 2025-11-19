import CardContainer from "@/components/blocks/card-container";
import { ModeToggle } from "@/components/theme/mode-toggle";

export default function HomePage() {
  return (
    <div className="relative flex items-center min-h-screen">
      <ModeToggle />
      <CardContainer />
    </div>
  );
}
