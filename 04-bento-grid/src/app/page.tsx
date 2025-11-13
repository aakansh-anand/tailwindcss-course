import Grid from "@/components/blocks/grid";
import { ModeToggle } from "@/components/theme/mode-toggle";

export default function HomePage() {
  return (
    <div className="relative">
      <ModeToggle />
      <Grid />
    </div>
  );
}
