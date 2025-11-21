import { cn } from "@/lib/utils";

export default function Form() {
  return (
    <form className="bg-gray-50 dark:bg-neutral-950 min-h-screen w-full">
      <h1
        className={cn(
          "text-3xl md:text-4xl font-bold tracking-tighter text-center",
          "text-transparent bg-clip-text bg-linear-to-b from-primary to-accent",
          "selection:text-black selection:bg-white",
          "my-12"
        )}
      >
        {"Here's"} our{" "}
        <span
          className={cn(
            "inline-block relative z-10 text-neutral-700 dark:text-neutral-300 p-1",
            "after:-z-10 after:absolute after:inset-0 after:w-full after:h-full after:bg-linear-to-b after:from-chart-5 after:to-chart-4",
            "after:-skew-5"
          )}
        >
          Feedback
        </span>{" "}
        form
      </h1>
      <div className="flex flex-col gap-7 w-full max-w-sm mx-auto">
        <Group>
          <Label
            className="after:content-['*'] after:text-red-500 after:text-xs after:ml-0.5"
            htmlFor="firstname"
          >
            First name
          </Label>
          <Input
            type="firstname"
            name="firstname"
            id="firstname"
            placeholder="Enter your firstname"
            autoComplete="off"
            className={cn("")}
          />
        </Group>

        <Group>
          <Label
            className="after:content-['*'] after:text-red-500 after:text-xs after:ml-0.5"
            htmlFor="email"
          >
            Email
          </Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            autoComplete="off"
          />
        </Group>

        <Group>
          <Label htmlFor="company">Company</Label>
          <Input
            type="company"
            name="company"
            id="company"
            placeholder="Enter your company"
            autoComplete="off"
          />
        </Group>

        <Group>
          <Label htmlFor="company">Enter your Message</Label>
          <Textarea
            name="message"
            id="message"
            placeholder="Enter your message"
            className="h-40"
          />
        </Group>
      </div>
      <button
        type="submit"
        className={cn(
          "bg-primary text-primary-foreground transition duration-150 cursor-pointer",
          "px-4 py-2 rounded-sm block w-full max-w-sm mx-auto my-10 relative",
          "hover:-translate-y-0.5 active:scale-98 hover:scale-102 overflow-hidden",
          "after:content-[''] after:w-full after:inset-0 after:absolute after:bg-rose-400/50  after:-translate-x-[105%]",
          "after:skew-6 after:-translate-y-5 hover:after:translate-x-[150%] after:transition-all after:duration-500"
        )}
      >
        Send your feedback
      </button>
    </form>
  );
}

const Group = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("flex flex-col gap-2", className)}>{children}</div>;
};

const Label = ({
  children,
  className,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label
      className={cn("text-base font-medium tracking-tight pl-1 ", className)}
      {...props}
    >
      {children}
    </label>
  );
};

const Input = ({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={cn(
        "bg-solid-background shadow-input ring ring-transparent",
        "focus:outline-none focus:ring-neutral-400 focus:ring-offset-1 focus:ring-offset-neutral-400",
        "dark:bg-neutral-900",
        "placeholder:text-neutral-400",
        "px-3 py-2 rounded-sm",
        "text-sm text-solid-foreground",
        className
      )}
      {...props}
    />
  );
};

const Textarea = ({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <textarea
      className={cn(
        "bg-solid-background shadow-input ring ring-transparent",
        "focus:outline-none focus:ring-neutral-400 focus:ring-offset-1 focus:ring-offset-neutral-400",
        "dark:bg-neutral-900",
        "placeholder:text-neutral-400",
        "px-3 py-2 rounded-sm",
        "text-sm text-solid-foreground",
        className
      )}
      {...props}
    />
  );
};
