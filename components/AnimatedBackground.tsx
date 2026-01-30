"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

const FloatingOrb = () => {
  const mesh = useRef<Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y += 0.003;
    mesh.current.position.y = Math.sin(state.clock.elapsedTime) * 0.4;
  });

  return (
    <mesh ref={mesh} position={[0, 0, -2]}>
      <icosahedronGeometry args={[1.2, 1]} />
      <meshStandardMaterial color="#2A6CFF" emissive="#5CF2FF" emissiveIntensity={0.6} />
    </mesh>
  );
};

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[4, 4, 6]} intensity={1.4} color="#5CF2FF" />
        <Stars radius={30} depth={20} count={500} factor={3} fade speed={1} />
        <FloatingOrb />
      </Canvas>
    </div>
  );
};

export default AnimatedBackground;
