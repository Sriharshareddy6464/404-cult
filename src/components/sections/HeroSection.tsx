
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three'; // Importing THREE.js directly instead of relying on global scope


const HeroSection: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current || typeof THREE === 'undefined') {
      return;
    }

    const currentMount = mountRef.current;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.offsetWidth / currentMount.offsetHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(currentMount.offsetWidth, currentMount.offsetHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    // 2. Geometry & Material
    const geometry = new THREE.IcosahedronGeometry(1.5, 0);
    const material = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      wireframe: true,
      metalness: 0.5,
      roughness: 0.5,
    });
    const shape = new THREE.Mesh(geometry, material);
    scene.add(shape);

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xec4899, 1, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);
    const pointLight2 = new THREE.PointLight(0xa855f7, 1, 100);
    pointLight2.position.set(-5, -5, -5);
    scene.add(pointLight2);

    camera.position.z = 5;

    // 4. Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    document.addEventListener('mousemove', handleMouseMove);

    // 5. Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      shape.rotation.x += 0.001;
      shape.rotation.y += 0.001;
      shape.rotation.y += mouseX * 0.005;
      shape.rotation.x += mouseY * 0.005;
      renderer.render(scene, camera);
    };
    animate();

    // 6. Responsive Canvas
    const handleResize = () => {
      if (currentMount) {
        camera.aspect = currentMount.offsetWidth / currentMount.offsetHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(currentMount.offsetWidth, currentMount.offsetHeight);
      }
    };
    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      currentMount.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div ref={mountRef} className="absolute top-0 left-0 w-full h-full z-0"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-wider mb-4">
          Break the Build Cycle
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-400 mb-8">
          A curated library of copy-paste UI components, from sleek buttons to immersive 3D effects. Built by the community, for the community.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#components" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all transform hover:scale-105 glow-shadow">
            Explore Arsenal
          </a>
          <a href="#manifesto" className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors border border-gray-700">
            Read the Manifesto
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;