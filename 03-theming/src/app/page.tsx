import ThemeToggle from "@/components/theming/theme-toggle";
import * as Icons from "@/components/icons";
export default function HomePage() {
  const icons = Object.values(Icons);
  return (
    <div className="min-h-dvh relative flex items-center justify-center">
      <ThemeToggle />
      <div className="relative z-10 bg-solid-background h-100 w-80 shadow-2xl shadow-muted-foreground/10 rounded-xl border border-muted overflow-hidden">
        <div className="relative h-[50%] mask-x-from-50% mask-y-from-50%">
          <Pattern />
          <div className="flex justify-center h-full items-center gap-4 animate-marquee">
            {icons.map((Icon, index) => (
              <Icon
                key={Icon.name}
                className={`size-14 bg-popover-foreground p-2 rounded-xl fill-popover ${
                  index === Math.floor(icons.length / 2) ? "scale-110" : ""
                }`}
              />
            ))}
          </div>
        </div>
        <div className="p-3">
          <h2 className="text-base font-bold leading-7 tracking-wide text-primary">
            These companies are very powerful.
          </h2>
          <p className="text-sm font-light leading-6 text-secondary-foreground/70">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod,
            iste! Aliquid, ipsam autem.
          </p>
          <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-xl w-full mt-5 cursor-pointer">
            Subscribe for fun
          </button>
        </div>
      </div>
    </div>
  );
}

const Pattern = () => {
  return (
    <div className="absolute inset-0 z-0 rounded-lg m-auto border border-(--pattern-fg) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed"></div>
  );
};
