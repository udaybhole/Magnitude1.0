import { useEffect, useRef, useState } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

function VantaBackground() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x1890ff,
          backgroundColor: 0x000B18,
          points: 10.00,
          maxDistance: 20.00,
          spacing: 16.00
        })
      );
    }

    // Cleanup
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div 
      ref={vantaRef} 
      className="fixed inset-0 -z-10"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-deep via-blue-darker to-blue-dark opacity-50" />
    </div>
  );
}

export default VantaBackground; 