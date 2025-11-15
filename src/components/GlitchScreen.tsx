import React, { useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const GlitchScreen: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  useEffect(() => {
    const tl = gsap.timeline({ onComplete: onFinish });

    // 1️⃣ White portal build-up
    tl.to(".portal-flash", {
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
    });

    // 2️⃣ Hold full white — portal charging
    tl.to(".portal-flash", {
      opacity: 1,
      duration: 0.5, // 0.5s hold
    });

    // 3️⃣ Fade white before glitch
    tl.to(".portal-flash", {
      opacity: 0,
      duration: 0.2,
      ease: "power1.out",
    });

    // 4️⃣ Glitch ziggle distortion
    tl.to(".glitch-ziggle", {
      opacity: 1,
      duration: 0.05,
    });

    tl.to(".glitch-ziggle", {
      x: () => gsap.utils.random(-20, 20),
      skewX: () => gsap.utils.random(-8, 8),
      duration: 0.07,
      repeat: 2,
      yoyo: true,
    });

    tl.to(".glitch-ziggle", {
      opacity: 0,
      duration: 0.1,
    });

    // 5️⃣ Black & white rapid flicker
    tl.to(".bw-flicker", {
      opacity: 1,
      duration: 0.05,
    });

    tl.to(".bw-flicker", {
      opacity: 0,
      duration: 0.05,
      repeat: 4,
      yoyo: true,
    });

  }, [onFinish]);

  return (
    <>
      {/* Portal Flash */}
      <motion.div
        className="portal-flash fixed inset-0 bg-white opacity-0 z-[90]"
        style={{ pointerEvents: "none" }}
      />

      {/* Glitch Ziggle */}
      <motion.div
        className="glitch-ziggle fixed inset-0 bg-black opacity-0 z-[85]"
        style={{
          mixBlendMode: "difference",
          pointerEvents: "none",
        }}
      />

      {/* BW Flicker */}
      <motion.div
        className="bw-flicker fixed inset-0 bg-white opacity-0 z-[80]"
        style={{ pointerEvents: "none" }}
      />
    </>
  );
};

export default GlitchScreen;
