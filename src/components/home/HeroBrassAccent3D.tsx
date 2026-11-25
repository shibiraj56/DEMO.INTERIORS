import { Float } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useMemo, useRef } from 'react';
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
 * Graceful static architectural SVG fallback when WebGL is unavailable or reduced motion is preferred.
 */
export function StaticBrassAccentFallback() {
  return (
    <div
      className="pointer-events-none hidden lg:flex h-64 w-64 xl:h-72 xl:w-72 items-center justify-center opacity-85"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 220 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-52 w-52"
      >
        <ellipse
          cx="110"
          cy="110"
          rx="86"
          ry="42"
          transform="rotate(-24 110 110)"
          stroke="#C6A45A"
          strokeWidth="2"
        />
        <ellipse
          cx="110"
          cy="110"
          rx="68"
          ry="34"
          transform="rotate(34 110 110)"
          stroke="#BFC3C7"
          strokeWidth="1.5"
        />
        <polygon
          points="110,76 138,110 110,144 82,110"
          fill="#D8BE82"
          fillOpacity="0.25"
          stroke="#C6A45A"
          strokeWidth="1.75"
        />
      </svg>
    </div>
  );
}

function canUseInteractive3D(): boolean {
  if (typeof window === 'undefined') return false;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
  try {
    const canvas = document.createElement('canvas');
    return Boolean(
      canvas.getContext('webgl2') || canvas.getContext('webgl')
    );
  } catch {
    return false;
  }
}

/**
 * Lightweight 3D brass-and-silver spatial accent with WebGL & reduced-motion fallback.
 */
export function HeroBrassAccent3D() {
  const enable3D = useMemo(() => canUseInteractive3D(), []);

  if (!enable3D) {
    return <StaticBrassAccentFallback />;
  }

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
