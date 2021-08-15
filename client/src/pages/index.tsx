// import { useRef } from 'react';
// import * as THREE from 'three';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { Shadow } from '@react-three/drei';

// interface ISpinningBox {
//   position: [number, number, number];
//   args: [number, number, number];
//   color: string;
// }

// const SpinningBox = ({ args, color, ...rest }: ISpinningBox) => {
//   const mesh = useRef<THREE.Mesh>(null!);
//   useFrame(() => {
//     mesh.current.rotation.x += 0.01;
//     mesh.current.rotation.y += 0.01;
//   });

//   return (
//     <mesh {...rest} castShadow ref={mesh}>
//       <boxBufferGeometry attach="geometry" args={args} />
//       <meshBasicMaterial attach="material" color={color} />
//     </mesh>
//   );
// };

// export default function Home() {
//   return (
//     <div style={{ width: '100vw', height: '100vh', background: '#fff' }}>
//       <Canvas camera={{ position: [-5, 2, 10], fov: 60 }}>
//         <ambientLight intensity={0.3} />
//         <directionalLight
//           castShadow
//           position={[0, 10, 0]}
//           shadow-mapSize-width={1024}
//           shadow-mapSize-height={1024}
//           shadow-camera-far={50}
//           shadow-camera-left={-10}
//           shadow-camera-right={10}
//           shadow-camera-top={10}
//           shadow-camera-bottom={-10}
//         />
//         <SpinningBox position={[0, 0, 0]} args={[1, 1, 1]} color="red" />
//         <SpinningBox position={[-3, 0, 0]} args={[1, 1, 1]} color="red" />
//         <SpinningBox position={[3, 0, 0]} args={[1, 1, 1]} color="red" />

//         <group>
//           <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
//             <planeBufferGeometry attach="geometry" args={[100, 100]} />
//             <shadowMaterial attach="material" opacity={0.3} color="blue" />
//           </mesh>
//         </group>
//       </Canvas>
//     </div>
//   );
// }

import { useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';

interface ISpinningBox {
  position: [number, number, number];
  args?: [number, number, number];
  color: string;
}

const SpinningMesh = ({ position, args, color }: ISpinningBox) => {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh castShadow ref={mesh} position={position}>
      <boxBufferGeometry attach="geometry" args={args} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
};

export default function Home() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#fff' }}>
      <Canvas camera={{ position: [-5, 2, 10], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />

        <group>
          <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -3, 0]}
          >
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <shadowMaterial attach="material" opacity={0.3} color="yellow" />
          </mesh>
        </group>

        <SpinningMesh position={[0, 1, 0]} args={[3, 2, 1]} color="green" />
        <SpinningMesh position={[-2, 1, -5]} color="blue" />
        <SpinningMesh position={[5, 1, -2]} color="red" />
      </Canvas>
    </div>
  );
}
