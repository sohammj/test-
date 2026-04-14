"use client";

import * as THREE from "three";
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

type GLTFResult = {
  nodes: Record<string, THREE.Mesh>;
  materials: Record<string, THREE.Material & { map?: THREE.Texture }>;
};

function FloatingCard({ glbPath }: { glbPath: string }) {
  const { nodes, materials } = useGLTF(glbPath) as unknown as GLTFResult;
  const groupRef = useRef<THREE.Group>(null);
  const BASE_Y = -1.8;

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    groupRef.current.rotation.y = Math.sin(t * 0.5) * 0.25;
    groupRef.current.position.y = BASE_Y + Math.sin(t * 0.8) * 0.08; // float around BASE_Y
  });

  const baseMap = materials.base?.map;
  if (baseMap) baseMap.anisotropy = 16;

  return (
    // Card stays at y=0, camera looks at y=0 — no fighting
    <group ref={groupRef} scale={2.6} position={[0, 0, 0]}>
      {nodes.card && (
        <mesh geometry={nodes.card.geometry}>
          <meshPhysicalMaterial
            map={baseMap}
            clearcoat={1}
            clearcoatRoughness={0.15}
            roughness={0.3}
            metalness={0.5}
          />
        </mesh>
      )}
      {nodes.clip && <mesh geometry={nodes.clip.geometry} material={materials.metal} />}
      {nodes.clamp && <mesh geometry={nodes.clamp.geometry} material={materials.metal} />}
    </group>
  );
}

export default function IdCardStatic({ glbPath }: { glbPath: string }) {
  return (
    // Camera centered at y=0, close enough to fill the canvas
    <Canvas
      camera={{ position: [0, -1.0, 5], fov: 40 }}
      dpr={[1, 2]}
      gl={{ alpha: true }}
      style={{ width: "100%", height: "100%", background: "transparent" }}
    >
      <ambientLight intensity={Math.PI} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <directionalLight position={[-5, -5, 5]} intensity={1} />
      <Suspense fallback={null}>
        <FloatingCard glbPath={glbPath} />
      </Suspense>
    </Canvas>
  );
}