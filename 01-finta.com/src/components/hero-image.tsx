import Image from "next/image";

function HeroImage() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 h-px w-full bg-neutral-300" />
      <div className="relative mx-auto max-w-[1024px] px-4 pt-4 pb-10">
        <div className="absolute top-0 left-0 h-full w-px bg-neutral-300" />
        <div className="absolute top-0 right-0 h-full w-px bg-neutral-300" />
        <Image
          src={`/hero-image.webp`}
          alt={"Hero image"}
          width={1920}
          height={1080}
          className="mx-auto block h-auto max-w-[992px] rounded-xl border border-neutral-100 mask-b-from-0% shadow-md"
        />
      </div>
    </div>
  );
}
export default HeroImage;
