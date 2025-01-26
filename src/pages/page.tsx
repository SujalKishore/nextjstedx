import Image from "next/image";
// import DigitalWalls from "@/components/DigitalWalls/DigitalWalls";
import StickyScrollGallery from "@/components/asd/asd";

const PageWithCountdownAndDigitalWalls = () => {
  return (
    <div>
      <section className="h-[95vh] relative mt-16 flex items-center justify-center">
        {/* Flexbox applied here to center the image */}
        <div className="w-[1500px] h-[1500px] flex items-center justify-center mr-10 mt-10">
          <Image
            src="/themes/Logo.png"
            alt="Hourglass"
            width={1500}
            height={1500}
          />
        </div>
        <div className="absolute w-72 h-72 bg-white/5 transform rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-96 h-96 border-white/10 border-2 transform rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-24 h-24 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"></div>
      </section>
      <section>
        <StickyScrollGallery />
      </section>
    </div>
  );
};

export default PageWithCountdownAndDigitalWalls;
