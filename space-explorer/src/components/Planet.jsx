import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Planet = () => {
  return (
    <Canvas style={{ height: "300px", backgroundColor: "#000" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <mesh rotation={[0, 0, 0]} castShadow>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#0077be" />
      </mesh>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Planet;
