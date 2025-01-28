import { useEffect } from "react";
import "geometryangle/dist/geometryangle.min.css";
import $ from "jquery";

declare const FSS: any;

Math.randomInRange = function (min: number, max: number) {
  return Math.random() * (max - min) + min;
};

const GeometryCanvas = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Import the library/script if needed (e.g., geometryangle.js)
      const script = document.createElement("script");
      script.src = "path/to/geometryangle.js"; // Add the correct path here
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        // Initialize Geometryangle once the script is loaded
        $("body").Geometryangle({
          mesh: {
            width: 1.2,
            height: 1.2,
            depth: 10,
            columns_auto: true,
            rows_auto: true,
            zoom: 1,
            xRange: 0.8,
            yRange: 0.1,
            zRange: 1.0,
            ambient: "rgba(228, 255, 0, 1)",
            diffuse: "rgba(228, 255, 0, 1)",
            background: "rgb(0, 0, 0)",
            speed: 0.0002,
            fluctuationSpeed: 0.5,
            fluctuationIntensity: 0,
            onRender: function () {},
            floorPosition: false,
            draw: true,
          },
          lights: {
            count: 1,
            xyScalar: 1,
            zOffset: 100,
            ambient: "rgba(255,0,102, 1)",
            diffuse: "rgba(255,136,0, 1)",
            speed: 0.01,
            gravity: 1200,
            dampening: 0.95,
            minLimit: 10,
            maxLimit: null,
            minDistance: 20,
            maxDistance: 400,
            autopilot: false,
            draw: false,
            bounds: FSS.Vector3.create(),
            step: FSS.Vector3.create(
              Math.randomInRange(0.2, 1.0),
              Math.randomInRange(0.2, 1.0),
              Math.randomInRange(0.2, 1.0)
            ),
          },
          line: {
            fill: "rgba(0, 0, 0, 0)",
            thickness: 1,
            fluctuationIntensity: 0,
            fluctuationSpeed: 0.5,
            draw: false,
          },
          vertex: {
            radius: 0,
            fill: "rgba(0, 0, 0, 0)",
            fluctuationSpeed: 0.5,
            fluctuationIntensity: 0,
            strokeWidth: 0,
            strokeColor: "rgba(0, 0, 0, 0)",
            draw: false,
          },
        });
      };
    }
  }, []);

  return (
    <div className="w-full h-screen bg-black relative">
      <div className="absolute top-0 left-0 w-full h-full">
        {/* The canvas or element will be handled by Geometryangle */}
      </div>
    </div>
  );
};

export default GeometryCanvas;
