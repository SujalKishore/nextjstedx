"use client";
import * as THREE from "three";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ThreeScene = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Utility functions
    const Mathutils = {
      normalize: ($value, $min, $max) => ($value - $min) / ($max - $min),
      interpolate: ($normValue, $min, $max) =>
        $min + ($max - $min) * $normValue,
      map: ($value, $min1, $max1, $min2, $max2) => {
        $value = Math.max($min1, Math.min($value, $max1));
        return Mathutils.interpolate(
          Mathutils.normalize($value, $min1, $max1),
          $min2,
          $max2
        );
      },
    };

    // Scene setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    });
    const ww = window.innerWidth;
    const wh = window.innerHeight;
    renderer.setSize(ww, wh);

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x194794, 0, 100);

    const camera = new THREE.PerspectiveCamera(45, ww / wh, 0.001, 200);
    const cameraGroup = new THREE.Group();
    cameraGroup.position.z = 400;
    cameraGroup.add(camera);
    scene.add(cameraGroup);

    // Tube Geometry
    const points = [
      [10, 89, 0],
      [50, 88, 10],
      [76, 139, 20],
      [126, 141, 12],
      [150, 112, 8],
      [157, 73, 0],
      [180, 44, 5],
      [207, 35, 10],
      [232, 36, 0],
    ].map(([x, y, z]) => new THREE.Vector3(x, y, z));

    const path = new THREE.CatmullRomCurve3(points);
    path.tension = 0.5;

    const geometry = new THREE.TubeGeometry(path, 300, 4, 32, false);
    const texture = new THREE.TextureLoader().load(
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/68819/3d_space_5.jpg",
      (texture) => {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(15, 2);
      }
    );

    const material = new THREE.MeshPhongMaterial({
      side: THREE.BackSide,
      map: texture,
      shininess: 20,
    });

    const tube = new THREE.Mesh(geometry, material);
    scene.add(tube);

    // Lighting
    const light = new THREE.PointLight(0xffffff, 0.35, 4, 0);
    light.castShadow = true;
    scene.add(light);

    // Scroll Animation
    let cameraTargetPercentage = 0;

    const tubePerc = { percent: 0 };
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scrollTarget",
        start: "top top",
        end: "bottom 100%",
        scrub: 5,
        markers: false,
      },
    });
    tl.to(tubePerc, {
      percent: 0.96,
      duration: 10,
      onUpdate: () => (cameraTargetPercentage = tubePerc.percent),
    });

    const updateCameraPercentage = (percentage) => {
      const p1 = path.getPointAt(percentage % 1);
      const p2 = path.getPointAt((percentage + 0.03) % 1);

      cameraGroup.position.set(p1.x, p1.y, p1.z);
      cameraGroup.lookAt(p2);
      light.position.set(p2.x, p2.y, p2.z);
    };

    const render = () => {
      updateCameraPercentage(cameraTargetPercentage);
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    };
    render();

    // Handle resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} className="experience"></canvas>
      <div className="scrollTarget" style={{ height: "2000px" }}></div>
    </div>
  );
};

export default ThreeScene;
