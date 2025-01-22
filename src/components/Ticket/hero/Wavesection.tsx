import React from "react";

const WaveSection: React.FC = () => {
  const paths = Array.from({ length: 10 }, (_, i) => ({
    translateY: `${i * 100}px`,
    animationDelay: `${i % 3 === 0 ? i + 1 : i}s`,
  }));

  return (
    <div className="box-border w-full h-full bg-black overflow-hidden">
      <main className="w-[1500px] h-[1000px] min-w-[100vw] min-h-[100vh] relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <section className="w-full h-full transform -rotate-45">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1500 1000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g strokeLinecap="round" fill="none" strokeWidth="32">
              {paths.map((path, index) => (
                <path
                  key={index}
                  className="stroke-[#eb0028]"
                  style={{
                    transform: `translateY(${path.translateY})`,
                    animation: `dash 15s linear infinite`,
                    animationDelay: path.animationDelay,
                    strokeDasharray: 700,
                  }}
                  d="M16,16 C76.235,16 77.932,77 138.167,77 C198.402,77 198.402,16 260.333,16 C320.568,16 322.265,77 382.5,77 C442.735,77 442.735,16 504.667,16 C564.902,16 566.598,77 626.833,77 C687.068,77 687.068,16 749,16 C809.235,16 810.932,77 871.167,77 C931.402,77 931.402,16 993.333,16 C1053.568,16 1055.265,77 1115.5,77 C1175.735,77 1175.735,16 1237.667,16 C1297.902,16 1299.598,77 1359.833,77 C1420.068,77 1420.068,16 1482,16"
                />
              ))}
            </g>
          </svg>
        </section>
      </main>
      <style jsx>{`
        @keyframes dash {
          0% {
            stroke-dashoffset: 10;
            stroke: #eb0028;
          }
          50% {
            stroke: #ff00ff;
          }
          100% {
            stroke-dashoffset: 9800;
            stroke: #ffffff;
          }
        }
      `}</style>
    </div>
  );
};

export default WaveSection;
