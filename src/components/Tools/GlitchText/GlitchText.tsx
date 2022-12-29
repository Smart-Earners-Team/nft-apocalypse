import React, { useEffect } from 'react'
import { useGlitch, GlitchHandle } from 'react-powerglitch'
import { GlitchTextProps } from './index';

export const Glitch:React.FC<GlitchTextProps> = (
  {
    text
  }
) => {
  const glitch: GlitchHandle = useGlitch(
    {
      "playMode": "always",
      "createContainers": true,
      "hideOverflow": true,
      "timing": {
        "duration": 3650
      },
      "glitchTimeSpan": {
        "start": 0.4,
        "end": 0.75
      },
      "shake": {
        "velocity": 15,
        "amplitudeX": 0.2,
        "amplitudeY": 0.2
      },
      "slice": {
        "count": 6,
        "velocity": 15,
        "minHeight": 0.02,
        "maxHeight": 0.15,
        "hueRotate": true
      },
      "pulse": false
    }
  );

  // const glitchStart = () => {
  //   useEffect(() => {
  //     const timer = setTimeout(()=>{
  //       glitch.startGlitch
  //     }, 3000);
  //     return () => clearTimeout(timer);
  //   }, [])
  // }

  return(
    <div>
      {
        <div>
          <span ref={glitch.ref} onMouseOver={glitch.stopGlitch} onMouseLeave={glitch.startGlitch}>{text}</span>
        </div>
      }
    </div>
  )
}