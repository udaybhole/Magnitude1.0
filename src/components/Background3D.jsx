import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function Galaxy({ position, rotation, size, particleSize, color }) {
  const points = useRef();
  const particlesCount = 5000;

  const particlePositions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount; i++) {
      const radius = (Math.random() * size * 2) * (Math.pow(Math.random(), 2));
      const spinAngle = radius * 5;
      const branchAngle = (i % 3) * ((2 * Math.PI) / 3);

      const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * (size / 10);
      const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * (size / 10);
      const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * (size / 10);

      positions[i * 3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
      positions[i * 3 + 1] = randomY;
      positions[i * 3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;
    }
    
    return positions;
  }, [size]);

  useFrame((state) => {
    points.current.rotation.y += 0.0003;
    points.current.rotation.z += 0.0001;
  });

  return (
    <points ref={points} position={position} rotation={rotation}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={particlePositions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={particleSize}
        color={color}
        sizeAttenuation={true}
        transparent={true}
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function MovingGalaxies() {
  const group = useRef();
  
  useFrame((state) => {
    group.current.rotation.y += 0.0001;
    const t = state.clock.getElapsedTime() * 0.1;
    group.current.position.y = Math.sin(t) * 2;
  });

  return (
    <group ref={group}>
      <Galaxy 
        position={[0, 0, 0]} 
        rotation={[0.5, 0, 0]} 
        size={20} 
        particleSize={0.1}
        color="#1890FF"
      />
      <Galaxy 
        position={[-30, -10, -20]} 
        rotation={[0.3, 0.5, 0]} 
        size={15} 
        particleSize={0.08}
        color="#69C0FF"
      />
      <Galaxy 
        position={[25, 5, -30]} 
        rotation={[-0.4, 0.2, 0]} 
        size={12} 
        particleSize={0.06}
        color="#91D5FF"
      />
    </group>
  );
}

function Background3D() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-deep via-blue-darker to-blue-dark">
        <div className="absolute inset-0 bg-blue-deep/50" />
      </div>

      <Canvas
        camera={{ position: [0, 0, 60], fov: 60 }}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      >
        <MovingGalaxies />
        <ambientLight intensity={0.1} />
        <fog attach="fog" args={['#000B18', 50, 130]} />
      </Canvas>
    </div>
  );
}

export default Background3D; 