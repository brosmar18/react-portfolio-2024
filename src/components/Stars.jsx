import { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

function randomPointsInSphere(numPoints, radius) {
 const points = new Float32Array(numPoints * 3);
 for (let i = 0; i < numPoints; i++) {
  let u = Math.random();
  let v = Math.random();
  let theta = u * 2.0 * Math.PI;
  let phi = Math.acos(2.0 * v - 1.0);
  let r = Math.cbrt(Math.random()) * radius;
  let sinTheta = Math.sin(theta);
  let cosTheta = Math.cos(theta);
  let sinPhi = Math.sin(phi);
  let cosPhi = Math.cos(phi);
  let x = r * sinPhi * cosTheta;
  let y = r * sinPhi * sinTheta;
  let z = r * cosPhi;
  points[i * 3] = x;
  points[i * 3 + 1] = y;
  points[i * 3 + 2] = z;
 }
 return points;
}


const Sky = (props ) => {
 const ref  = useRef();
 const [sphere] = useState(() => randomPointsInSphere(5000, 1.2));

 useFrame((_, delta) => {
  ref.current.rotation.x -= delta / 10;
  ref.current.rotation.y -= delta / 15;
 });

 return (
  <group rotation={[0, 0, Math.PI / 4]}>
   <Points
    ref={ref}
    positions={sphere}
    stride={3}
    frustumCulled
    {...props}
   >
    <PointMaterial
     transparent
     color="#fff"
     size={0.002}
     sizeAttenuation={true}
     dethWrite={false}
    />
   </Points>
  </group>
 );
};

const Stars = () => {
 return (
  <div className='w-full h-auto fixed inset-0 z-0'>
   <Canvas camera={{
    position: [0, 0, 1]
   }}
   >
    <Suspense fallback={null}>
     <Sky />
    </Suspense>
   </Canvas>
  </div>
 )
}

export default Stars