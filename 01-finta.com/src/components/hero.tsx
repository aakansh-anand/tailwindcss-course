import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <div>
      <div className="mx-auto mt-16 flex w-fit items-center rounded-full border border-neutral-300 bg-neutral-200 px-3 py-1 transition-colors duration-200 ease-in-out hover:bg-neutral-300">
        <span className="text-sm leading-6 font-medium tracking-tight text-neutral-800">
          We made Finta better & more affordable{" "}
        </span>
        <FaArrowRight className="ml-2 inline-block h-2 w-2 text-neutral-600" />
      </div>

      <div className="">
        <h1 className="mx-auto mt-12 max-w-3xl text-center text-4xl font-semibold tracking-tight md:text-6xl">
          Magically simplify accounting and taxes
        </h1>

        <p className="mx-auto mt-4 max-w-lg text-center text-base text-neutral-700">
          Automated bookkeeping, effortless tax filing, real-time insights. Set
          up in 10 mins. Back to building by 2:08pm.
        </p>
      </div>

      <div className="mx-auto my-10 flex w-fit gap-2">
        <button className="rounded-lg border border-blue-500 bg-blue-500 px-4 py-2 text-white shadow-xl shadow-neutral-200 transition-colors duration-200 ease-in-out text-shadow-md hover:bg-blue-500/90">
          Get Started
        </button>
        <button className="flex items-center justify-center gap-2 rounded-lg border border-sky-200 px-4 py-2 text-neutral-600 transition-colors duration-200 ease-in-out text-shadow-md hover:bg-sky-200">
          Pricing <FaArrowRight className="h-2 w-2" />
        </button>
      </div>
      <span className="mx-auto block w-fit text-sm text-neutral-500">
        For US based C-Corps, LLCs and PBCs.
      </span>
    </div>
  );
}
