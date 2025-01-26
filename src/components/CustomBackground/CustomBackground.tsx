import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const CustomBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return () => {};

    // Store the ref value in a local variable
    const container = containerRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
    container.appendChild(renderer.domElement);

    // Mouse tracking
    const mouse = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();
    const mouseWorld = new THREE.Vector3();

    const onMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      raycaster.ray.intersectPlane(
        new THREE.Plane(new THREE.Vector3(0, 0, 1), 0),
        mouseWorld
      );
    };
    window.addEventListener("mousemove", onMouseMove);

    // Create smaller dots with more density
    const dots: THREE.Mesh<THREE.CircleGeometry, THREE.MeshBasicMaterial>[] =
      [];
    const geometry = new THREE.CircleGeometry(0.015, 16); // Reduced size of dots
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.4, // Slightly higher opacity
    });

    // Increased density of dots by reducing the spacing
    for (let x = -10; x <= 10; x += 0.3) {
      for (let y = -5; y <= 5; y += 0.3) {
        const dot = new THREE.Mesh(geometry, material.clone());
        dot.position.set(x, y, 0);
        (dot as THREE.Mesh).userData.originalPosition = dot.position.clone(); // Attach metadata properly
        scene.add(dot);
        dots.push(dot);
      }
    }

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      dots.forEach((dot) => {
        const originalPosition = dot.userData.originalPosition as THREE.Vector3;
        const distanceToMouse = originalPosition.distanceTo(mouseWorld);
        const influenceRadius = 1.5; // Increased influence radius
        const maxAttraction = 0.6; // Slightly stronger attraction strength

        if (distanceToMouse < influenceRadius) {
          const influence = 1 - distanceToMouse / influenceRadius;
          const attraction = new THREE.Vector3()
            .subVectors(mouseWorld, originalPosition)
            .multiplyScalar(influence * influence * maxAttraction);

          dot.position.lerp(originalPosition.clone().add(attraction), 0.15);

          const scale = 0.8 + influence * 1.5; // Slightly reduced scaling effect
          dot.scale.setScalar(scale);
          dot.material.opacity = 0.4 + influence * 0.3;
          dot.material.color.set(0xff0000); // Change color to red on hover
        } else {
          dot.position.lerp(originalPosition, 0.1);
          dot.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
          dot.material.opacity = lerp(dot.material.opacity, 0.4, 0.1);
          dot.material.color.set(0x424242); // Default color as brown
        }
      });

      renderer.render(scene, camera);
    };

    const lerp = (start: number, end: number, amt: number) => {
      return (1 - amt) * start + amt * end;
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onWindowResize);
    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onWindowResize);
      container.removeChild(renderer.domElement); // Use local variable here
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
};

export default CustomBackground;
