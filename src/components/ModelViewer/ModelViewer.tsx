"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

// Custom Model component
function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

// Fallback component to show while loading the model
function Fallback() {
  return null; // No fallback content to display
}

// ModelViewer component with enhanced lighting setup
export default function ModelViewer({ url }: { url: string }) {
  return (
    <div className="h-96 w-full">
      <Canvas camera={{ position: [0, 0, 5] }}>
        {/* Ambient Light - softer intensity and a new color */}
        <ambientLight intensity={0.5} color={new THREE.Color(0x444444)} />

        {/* SpotLight - adjust intensity and color */}
        <spotLight
          position={[5, 5, 5]}
          angle={0.15}
          penumbra={0.5}
          intensity={2}
          color={new THREE.Color(0xff6347)} // Tomato color for spotlight
        />

        {/* Additional Point Light for more shading */}
        <pointLight
          position={[-5, -5, -5]}
          intensity={1.5}
          color={new THREE.Color(0x00ffff)} // Cyan color for point light
        />

        {/* Suspense to show fallback while model is loading */}
        <Suspense fallback={<Fallback />}>
          <Model url={url} />
        </Suspense>

        {/* Orbit Controls to allow interaction with the model */}
        <OrbitControls />
      </Canvas>
    </div>
  );
}
