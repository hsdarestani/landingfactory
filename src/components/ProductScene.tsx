import { Canvas } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'

export function ProductScene({ color = '#d8ff5a', wire = '#ffffff' }: { color?: string; wire?: string }) {
  return (
    <div className="product-scene" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 4.8], fov: 42 }} dpr={[1, 1.6]} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={1.25} />
        <directionalLight position={[4, 5, 3]} intensity={4.5} color={wire} />
        <pointLight position={[-4, -2, 2]} intensity={5} color={color} />
        <Float speed={2.2} rotationIntensity={1.05} floatIntensity={1.15}>
          <mesh rotation={[0.4, 0.15, -0.25]}>
            <torusKnotGeometry args={[1.12, 0.34, 180, 28]} />
            <MeshDistortMaterial
              color={color}
              roughness={0.16}
              metalness={0.82}
              distort={0.38}
              speed={1.8}
            />
          </mesh>
        </Float>
      </Canvas>
    </div>
  )
}
