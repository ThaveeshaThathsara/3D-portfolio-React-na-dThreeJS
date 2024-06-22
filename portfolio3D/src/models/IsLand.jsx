/* eslint-disable react/no-unknown-property */
// Island.jsx
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import isLand from '../assets/3d/island.glb';

const Island = (props) => {
  const islandRef = useRef();
  const { nodes, materials } = useGLTF(isLand);

  return (
    <group {...props} ref={islandRef}>
      <mesh geometry={nodes.polySurface944_tree_body_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface945_tree1_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface946_tree2_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface947_tree1_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface948_tree_body_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface949_tree_body_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.pCube11_rocks1_0.geometry} material={materials.PaletteMaterial001} />
    </group>
  );
}

export default Island;
