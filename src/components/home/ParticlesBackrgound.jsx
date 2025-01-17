"use client";
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackrgound = ({ children }) => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: {
            enable: true,
            zIndex: 1,
            // IMPORTANT
          },
          background: {
            color: {
              value: "#0d47a1",
            },
            opacity: 0,
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 1,
              },
              repulse: {
                distance: 80,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#26D367",
            },
            links: {
              color: "#E8BD17",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "random",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              value: 150,
            },
            opacity: {
              value: 0.4,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 0.3, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      {children}
    </>
  );
};

export default ParticlesBackrgound;
