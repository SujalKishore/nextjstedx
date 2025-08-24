// components/CustomTimer.tsx
import { useEffect, useState } from "react";

const CustomTimer = () => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  const newYearEnd = "Mar 09 2025 08:30:00";

  useEffect(() => {
    // Timer Countdown
    const countdown = () => {
      const newYearEndDate = new Date(newYearEnd);
      const currentDate = new Date();
      const totalSeconds =
        (newYearEndDate.getTime() - currentDate.getTime()) / 1000;

      const formatTime = (time: number) =>
        time < 10 ? `0${time}` : time.toString();

      if (currentDate >= newYearEndDate){
        setDays("00");
        setHours("00");
        setMinutes("00");
        setSeconds("00");
      }else{
        setDays(formatTime(Math.floor(totalSeconds / 3600 / 24)));
        setHours(formatTime(Math.floor((totalSeconds / 3600) % 24)));
        setMinutes(formatTime(Math.floor((totalSeconds / 60) % 60)));
        setSeconds(formatTime(Math.floor(totalSeconds % 60)));
      }
    };

    countdown();
    const interval = setInterval(countdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative z-[9999]">
      <section className="timeContainer flex justify-center items-center h-full">
        <div className="wrapper flex justify-around gap-5 p-5 max-w-[800px] w-full">
          <div className="flex flex-col items-center justify-center w-[70px] h-[70px] bg-red-600 text-white rounded-lg shadow-lg">
            <h2 className="text-2xl">{days}</h2>
            <span className="text-sm">DAYS</span>
          </div>
          <div className="flex flex-col items-center justify-center w-[70px] h-[70px] bg-red-600 text-white rounded-lg shadow-lg">
            <h2 className="text-2xl">{hours}</h2>
            <span className="text-sm">HOURS</span>
          </div>
          <div className="flex flex-col items-center justify-center w-[70px] h-[70px] bg-[#1C1C1C] text-white rounded-lg shadow-lg">
            <h2 className="text-2xl">{minutes}</h2>
            <span className="text-sm">MINUTES</span>
          </div>
          <div className="flex flex-col items-center justify-center w-[70px] h-[70px] bg-[#1C1C1C] text-white rounded-lg shadow-lg">
            <h2 className="text-2xl">{seconds}</h2>
            <span className="text-sm">SECONDS</span>
          </div>
        </div>
      </section>

      {/* Animation Keyframes */}
      <style jsx global>{`
        @keyframes rotatingCircle {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default CustomTimer;
