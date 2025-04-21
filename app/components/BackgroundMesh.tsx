import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { MeshWobbleMaterial, OrbitControls } from "@react-three/drei";
export default function BackgroundMesh({ isDark }: { isDark: boolean }) {
  const color = isDark ? "#414141" : "#e5e5e5";

  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 5]} intensity={0.5} />
        <Suspense fallback={null}>
          <WavyPlane color={color} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

function WavyPlane({ color }: { color: string }) {
  return (
    <mesh rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -1, 0]}>
      <planeGeometry args={[10, 10, 64, 64]} />
      <MeshWobbleMaterial
        color={color}
        factor={0.3}
        speed={0.8}
        wireframe={false}
      />
    </mesh>
  );
}
