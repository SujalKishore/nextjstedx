import Image from "next/image";
import DigitalWalls from "@/components/DigitalWalls/DigitalWalls";

const PageWithCountdownAndDigitalWalls = () => {
  return (
    <div>
      <section className="h-[80vh] relative mt-36">
        <div className="absolute w-48 h-48 bg-white/5 transform rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-72 h-72 border-white/10 border-2 transform rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-24 h-24 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <div className="w-[900px] h-[900px] flex items-center justify-center">
            <Image
              src="/themes/color_hourglass.png"
              alt="Hourglass"
              className="w-full h-full object-contain"
              width={900}
              height={900}
            />
          </div>
        </div>
      </section>
      <section>
        <DigitalWalls />
      </section>
    </div>
  );
};

export default PageWithCountdownAndDigitalWalls;
