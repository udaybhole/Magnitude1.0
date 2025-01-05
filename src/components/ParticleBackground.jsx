import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function ParticleBackground() {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const options = {
    background: {
      color: {
        value: "#000B18"
      }
    },
    fpsLimit: 120,
    particles: {
      color: {
        value: "#1890FF"
      },
      links: {
        color: "#1890FF",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "bounce"
        },
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 80
      },
      opacity: {
        value: 0.5
      },
      shape: {
        type: "circle"
      },
      size: {
        value: { min: 1, max: 3 }
      }
    },
    detectRetina: true
  };

  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-deep via-blue-darker to-blue-dark opacity-50" />
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={options}
        className="absolute inset-0"
      />
    </div>
  );
}

export default ParticleBackground; 