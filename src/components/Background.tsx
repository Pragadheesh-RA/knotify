import React from 'react';
import Particles from 'react-particles';
import { loadFull } from "tsparticles";

export const Background: React.FC = () => {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ff6b81",
          },
          shape: {
            type: "heart",
          },
          opacity: {
            value: 0.5,
            random: true,
          },
          size: {
            value: 5,
            random: true,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
        },
      }}
    />
  );
};