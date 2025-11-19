import { BrainIcon, ScreenShare, User } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardSkeleton,
  CardTitle,
} from "../ui/card";
import { cn } from "@/lib/utils";

export default function Grid() {
  return (
    <div className="bg-primary-foreground min-h-dvh max-w-6xl mx-auto border-x-2 border-muted-foreground/30">
      <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-y divide-muted-foreground/30">
        <Card>
          <CardHeader>
            <BrainIcon className="stroke-secondary-foreground" />
            <CardTitle>LLM Models</CardTitle>
          </CardHeader>
          <CardDescription>
            Track real-time activity of agents with detailed records of
            triggers, tools used, outcomes, and timestamps.
          </CardDescription>
          <CardSkeleton>{""}</CardSkeleton>
        </Card>

        <Card>
          <CardHeader>
            <ScreenShare />
            <CardTitle>Text to Workflow Builder AI</CardTitle>
          </CardHeader>
          <CardDescription>
            Preview and debug workflow logic in a safe sandbox before deploying,
            helping you iterate with confidence.
          </CardDescription>
          <CardSkeleton className="relative">
            <MainSkeleton />
          </CardSkeleton>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <BrainIcon />
            <CardTitle>LLM Models</CardTitle>
          </CardHeader>
          <CardDescription>
            Track real-time activity of agents with detailed records of
            triggers, tools used, outcomes, and timestamps.
          </CardDescription>
          <CardSkeleton className="">{""}</CardSkeleton>
        </Card>
      </div>
    </div>
  );
}

const MainSkeleton = () => {
  const chat = [
    {
      sequence: 1,
      role: "user",
      text: "Hello There!",
    },
    {
      sequence: 2,
      role: "assistant",
      text: "Hello! How can I help you today?",
    },
    {
      sequence: 3,
      role: "user",
      text: "I want to build a workflow for my SaaS app",
    },
    {
      sequence: 4,
      role: "assistant",
      text: "Sure! I can help you with that.",
    },
  ];

  const UserMessage = ({ text }: { text: string }) => {
    return (
      <div className="flex flex-row-reverse items-end justify-start gap-2">
        <div className="rounded-full border border-secondary p-2 bg-indigo-400 dark:bg-indigo-500">
          <User className="size-5" />
        </div>
        <p className="text-sm px-4 py-2 bg-linear-to-l from-indigo-300 via-violet-300 to-purple-300 dark:from-indigo-800 dark:via-violet-800 dark:to-purple-800 rounded-xl rounded-br-sm w-fit">
          {text}
        </p>
      </div>
    );
  };

  const AIMessage = ({ text }: { text: string }) => {
    return (
      <div className="flex justify-start items-center gap-2">
        <div className="rounded-full border border-secondary p-2 bg-neutral-300 dark:bg-neutral-600">
          <BrainIcon className="size-5" />
        </div>
        <p className="text-sm px-4 py-2 bg-linear-to-l from-gray-600 via-zinc-600 text-neutral-100 to-neutral-600 rounded-xl rounded-br-sm w-fit">
          {text}
        </p>
      </div>
    );
  };
  return (
    <div className="bg-accent z-10 w-full min-h-72 rounded-xl p-4 flex flex-col gap-3 relative">
      <div className="absolute bottom-4 left-[50%] -translate-x-[50%] w-[80%]">
        <input
          type="text"
          placeholder="Type your Prompt"
          className={cn(
            "outline-none border-3 border-neutral-400 px-3 py-2 rounded-lg text-sm w-full selection:bg-black dark:selection:bg-white selection:text-white dark:selection:text-black focus:border-indigo-400"
          )}
        />
      </div>
      {chat.map((item) => {
        return (
          <div key={item.sequence}>
            {item.role === "user" ? (
              <UserMessage text={item.text} />
            ) : (
              <AIMessage text={item.text} />
            )}
          </div>
        );
      })}
    </div>
  );
};
