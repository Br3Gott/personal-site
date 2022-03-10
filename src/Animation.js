import React from "react";
import Sketch from "react-p5";

function Animation(props) {
	const setup = (p5, canvasParentRef) => {
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)
		p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL).parent(canvasParentRef);
	};

	const draw = (p5) => {
		p5.background(12);
  
        for(let x = 0; x < 12; x++){
            for(let y = 0; y < 12; y++){
                p5.stroke(77)
                p5.strokeWeight(x)
                p5.point(x* 100, y* 100)
                p5.rotateX(x * 10)
                p5.rotateY(y * 10)
                p5.rotateZ(x-y* 10)
            }
        }
  
        p5.camera(0 + p5.sin(p5.frameCount * 0.001) * 300, 300, 300, 0, 0, 0, 0, 1, 0);
        };

	return <Sketch setup={setup} draw={draw} />;
};

export default Animation