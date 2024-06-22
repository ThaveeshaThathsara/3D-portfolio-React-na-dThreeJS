// Home.jsx
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Loader from '../components/Loader';
import Island from '../models/IsLand';

function Home() {

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return { screenScale, screenPosition };
  };

  const { screenScale, screenPosition } = adjustIslandForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      <Canvas className='w-full h-screen bg-transparent' camera={{ position: [0, 0, 5] }}>
        <Suspense fallback={<Loader />}>
          <directionalLight />
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />
          <Island
            position={screenPosition}
            scale={screenScale}
            rotation={[0.1, 4.7077, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
}

export default Home;
