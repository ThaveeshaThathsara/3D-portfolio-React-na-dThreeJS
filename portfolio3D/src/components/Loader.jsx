// Loader.jsx

import { Html, useProgress } from '@react-three/drei';

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className='flex justify-center items-center'>
        <div className='w-10 h-10 border-4 border-blue-500 rounded-full animate-spin' />
        <p>{progress} % loaded</p>
      </div>
    </Html>
  );
}

export default Loader;
