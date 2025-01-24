import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text3D, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
const Logo: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });
  return (
    <mesh ref={meshRef}>
      <Text3D
        font="./fonts/helvetiker_regular.typeface.json"
        size={3}
        height={0.5}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.1}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        TEDx
        <meshStandardMaterial color="red" />
      </Text3D>
    </mesh>
  );
};
const Interactive3DLogo: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Logo />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};
export default Interactive3DLogo;