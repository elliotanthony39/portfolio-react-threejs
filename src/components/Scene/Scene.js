import { useEffect, useRef } from "react";
import { cleanUpScene, initScene } from "./Script";
import '../../stylesheets/Scene.css'

const Scene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    initScene(mountRef);

    return () => {
      cleanUpScene();
    };
  }, []);

  return (
    <div className='Conteiner-3D' ref={mountRef}></div>
  );
};

export default Scene;