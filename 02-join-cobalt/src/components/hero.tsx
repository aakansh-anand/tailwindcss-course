export default function Hero() {
  return (
    <div className="z-10 flex flex-col items-center justify-center gap-10">
      <h1 className="mt-40 max-w-4xl bg-linear-to-b from-neutral-100 via-neutral-300 to-neutral-500 bg-clip-text text-center text-4xl leading-12 font-bold tracking-tighter text-transparent md:text-7xl md:leading-20">
        Unleash the power of intuitive finance
      </h1>

      <p className="max-w-2xl px-2 text-center text-base leading-6 tracking-wide text-neutral-400 selection:bg-neutral-200 selection:text-neutral-800 md:text-lg md:leading-8">
        Say goodbye to the outdated financial tools. Every small business owner,
        regardless of the background, can now manage their business like a pro.
        Simple, intuitive, and ...never boring.
      </p>

      <div className="flex w-full max-w-lg flex-col gap-10 sm:flex-row">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          className="rounded-lg border border-neutral-700 px-4 py-2 focus:outline-none md:flex-1"
          autoComplete="off"
        />
        <button className="group relative mx-auto flex max-w-[300px] items-center justify-center rounded-lg border border-neutral-700 bg-transparent px-4 py-2 shadow-sky-100 transition-colors duration-200 hover:border-neutral-200 hover:bg-neutral-200 hover:text-neutral-800 md:w-auto">
          Join the waitlist
          <span className="absolute inset-x-0 -bottom-px h-px rounded-lg bg-linear-to-r from-transparent via-sky-400 to-transparent transition-transform duration-200 group-hover:bg-transparent" />
        </button>
      </div>
    </div>
  );
}
