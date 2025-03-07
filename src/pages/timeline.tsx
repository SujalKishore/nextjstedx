import Image from "next/image";

export default function EventTimeline() {
  return (
    <>
      {/* <div className="md:hidden flex items-center justify-center mt-32 mb-20 w-full">
        <Image
          src="/X/timeline.png"
          alt="Event Timeline"
          layout="intrinsic"
          width={3280}
          height={1680}
          className="object-cover w-full rotate-90"
        />
      </div> */}
      <div className="min-h-screen bg-black flex items-center justify-center mb-20 md:mt-20">
        <Image
          src="/X/timeline2.png"
          alt="Event Timeline"
          width={2180}
          height={1080}
          className="object-contain"
        />
      </div>
    </>
  );
}
