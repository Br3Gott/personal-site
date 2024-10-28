import { useEffect, useRef } from 'react';
import P5 from 'p5';

function Animation () {
    const renderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        new P5 ((p: P5) => {
            p.setup = () => {
                if (renderRef.current) {
                    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL).parent(renderRef.current);
                }
            }

            p.draw = () => {
                p.background(12);
  
                for(let x = 0; x < 12; x++){
                    for(let y = 0; y < 12; y++){
                        p.colorMode(p.RGB);
                        p.stroke(255, 255, 180, 80);
                        p.strokeWeight(x);
                        p.point(x* 100, y* 100);
                        p.rotateX(x * 10);
                        p.rotateY(y * 10);
                        p.rotateZ(x-y* 10);
                    }
                }
        
                p.camera(p.sin(p.frameCount * 0.001) * 300, 300, 300, 0, 0, 0, 0, 1, 0);
            }

            p.windowResized = () => {
                p.resizeCanvas(p.windowWidth, p.windowHeight);
            }
        })
    }, [])

    return(
        <div ref={renderRef}></div>
    )
}

export default Animation;