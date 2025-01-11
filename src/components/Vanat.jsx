import { useEffect, useRef, useState } from 'react';
import WAVES from 'vanta/dist/vanta.waves.min'
import * as THREE from 'three';

function VantaBackground() {

  useEffect(() => {
    VANTA.WAVES({
        el: "#vanta",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x0
      })
   }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1] overflow-hidden">
  <div id="vanta" className="w-full h-full absolute top-0 left-0" />
</div>
  );
}

export default VantaBackground;
