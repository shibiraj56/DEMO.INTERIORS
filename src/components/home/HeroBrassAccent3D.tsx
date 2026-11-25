import { Float } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import type { Group } from 'three';

function BrassSculpture() {
  const groupRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.16;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.35}>
      <group ref={groupRef}>
        {/* Outer royal gold architectural ring */}
        <mesh rotation={[Math.PI / 6, 0, 0]}>
          <torusGeometry args={[1.35, 0.025, 24, 96]} />
          <meshStandardMaterial
            color="#C6A45A"
            metalness={0.88}
            roughness={0.22}
          />
        </mesh>

        {/* Inner metallic silver precision ring */}
        <mesh rotation={[-Math.PI / 4, Math.PI / 5, 0]}>
          <torusGeometry args={[1.02, 0.018, 24, 96]} />
          <meshStandardMaterial
            color="#BFC3C7"
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>

        {/* Central warm gold octahedron prism */}
        <mesh rotation={[0.4, 0.6, 0]}>
          <octahedronGeometry args={[0.38, 0]} />
          <meshStandardMaterial
            color="#D8BE82"
            metalness={0.85}
            roughness={0.18}
          />
        </mesh>
      </group>
    </Float>
  );
}

/**
 * Lightweight 3D brass-and-silver spatial accent for the hero composition.
 */
export function HeroBrassAccent3D() {
  return (
    <div
      className="pointer-events-none hidden lg:block h-64 w-64 xl:h-72 xl:w-72 opacity-90"
      aria-hidden="true"
    >
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 4.2], fov: 40 }}
        gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.85} />
          <directionalLight position={[4, 5, 4]} intensity={1.8} color="#FFF8E7" />
          <directionalLight position={[-4, -2, 2]} intensity={0.8} color="#C6A45A" />
          <BrassSculpture />
        </Suspense>
      </Canvas>
    </div>
  );
}
