"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function AirplaneModel() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime() * 0.22;
    const cycle = t % 1;
    const x = THREE.MathUtils.lerp(-12, 12, cycle);
    const y = Math.sin(t * 3) * 0.35 + 0.5;
    const z = Math.cos(t * 2) * 0.3;
    groupRef.current.position.set(x, y, z);
    groupRef.current.rotation.z = Math.sin(t * 3) * 0.08 - 0.05;
    groupRef.current.rotation.y = Math.PI / 2;
  });

  return (
    <group ref={groupRef}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.4, 0.18, 0.18]} />
        <meshStandardMaterial color="#E8ECF4" metalness={0.6} roughness={0.3} />
      </mesh>
      <mesh position={[-0.55, 0, 0]}>
        <coneGeometry args={[0.12, 0.35, 8]} />
        <meshStandardMaterial color="#3B5BDB" metalness={0.5} roughness={0.4} />
      </mesh>
      <mesh position={[0.65, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <coneGeometry args={[0.08, 0.25, 8]} />
        <meshStandardMaterial color="#C9A962" metalness={0.5} roughness={0.4} />
      </mesh>
      <mesh position={[0.1, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.5, 0.04, 0.7]} />
        <meshStandardMaterial
          color="#3B5BDB"
          metalness={0.4}
          roughness={0.5}
          transparent
          opacity={0.9}
        />
      </mesh>
      <mesh position={[-0.5, 0.08, 0]}>
        <boxGeometry args={[0.3, 0.04, 0.15]} />
        <meshStandardMaterial color="#64748B" metalness={0.3} roughness={0.6} />
      </mesh>
      {/* Engine glow trail */}
      <mesh position={[-0.85, 0, 0]}>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshBasicMaterial color="#22D3EE" transparent opacity={0.7} />
      </mesh>
      <mesh position={[-1.05, 0, 0]}>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshBasicMaterial color="#22D3EE" transparent opacity={0.35} />
      </mesh>
      <mesh position={[-1.2, 0, 0]}>
        <sphereGeometry args={[0.025, 8, 8]} />
        <meshBasicMaterial color="#22D3EE" transparent opacity={0.15} />
      </mesh>
    </group>
  );
}

function Clouds() {
  const groupRef = useRef<THREE.Group>(null);
  const cloudData = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        x: (i - 4) * 3.5,
        y: 0.8 + (i % 3) * 0.6,
        z: -1 - (i % 2) * 0.5,
        scale: 0.4 + (i % 3) * 0.15,
        speed: 0.3 + (i % 4) * 0.1,
      })),
    []
  );

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.children.forEach((child, i) => {
      const data = cloudData[i];
      child.position.x = ((data.x + clock.getElapsedTime() * data.speed) % 24) - 12;
    });
  });

  return (
    <group ref={groupRef}>
      {cloudData.map((cloud, i) => (
        <group key={i} position={[cloud.x, cloud.y, cloud.z]} scale={cloud.scale}>
          <mesh>
            <sphereGeometry args={[0.5, 8, 8]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.12} />
          </mesh>
          <mesh position={[0.35, 0.05, 0]}>
            <sphereGeometry args={[0.35, 8, 8]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.1} />
          </mesh>
          <mesh position={[-0.3, -0.05, 0]}>
            <sphereGeometry args={[0.3, 8, 8]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.08} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 3]} intensity={0.8} />
      <pointLight position={[-5, 3, 2]} intensity={0.4} color="#C9A962" />
      <Clouds />
      <AirplaneModel />
    </>
  );
}

export default function AirplaneScene() {
  return (
    <Canvas
      camera={{ position: [0, 1, 8], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <Scene />
    </Canvas>
  );
}
