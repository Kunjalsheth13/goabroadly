"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

function Globe() {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.12;
    }
    if (glowRef.current) {
      glowRef.current.rotation.y = t * 0.12;
      const scale = 1.02 + Math.sin(t * 0.8) * 0.01;
      glowRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group>
      <Sphere ref={glowRef} args={[2.05, 32, 32]}>
        <meshBasicMaterial color="#22D3EE" transparent opacity={0.06} />
      </Sphere>
      <Sphere ref={meshRef} args={[1.85, 48, 48]}>
        <meshStandardMaterial
          color="#3B5BDB"
          wireframe
          transparent
          opacity={0.45}
        />
      </Sphere>
      <Sphere args={[1.88, 48, 48]}>
        <meshBasicMaterial
          color="#C9A962"
          wireframe
          transparent
          opacity={0.12}
        />
      </Sphere>
    </group>
  );
}

function Particles({ count = 180 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 2.5 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = radius * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.04;
      ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.05;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={count} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#22D3EE" transparent opacity={0.55} sizeAttenuation />
    </points>
  );
}

function Scene({ particleCount }: { particleCount: number }) {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.9} color="#ffffff" />
      <pointLight position={[-3, 2, 4]} intensity={0.6} color="#C9A962" />
      <Globe />
      <Particles count={particleCount} />
    </>
  );
}

type GlobeSceneProps = {
  particleCount?: number;
};

export default function GlobeScene({ particleCount = 180 }: GlobeSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 5.5], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <Scene particleCount={particleCount} />
    </Canvas>
  );
}
