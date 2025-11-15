import React, { useState } from "react";
import HomePage from "./components/HomePage";
import LoaderVideo from "./components/LoaderVideo";
import GlitchScreen from "./components/GlitchScreen";

const App: React.FC = () => {
  const [isLoadedVideo, setIsLoadedVideo] = useState(false);
  const [runGlitch, setRunGlitch] = useState(false);
  const [showHome, setShowHome] = useState(false);

  return (
    <>
      {/* 1. Video Loader */}
      {!isLoadedVideo && (
        <LoaderVideo
          onFinish={() => {
            setIsLoadedVideo(true);
            setRunGlitch(true);
          }}
        />
      )}

      {/* 2. Glitch Transition */}
      {runGlitch && (
        <GlitchScreen
          onFinish={() => {
            setRunGlitch(false);
            setShowHome(true);
          }}
        />
      )}

      {/* 3. Homepage */}
      {showHome && <HomePage />}
    </>
  );
};

export default App;
