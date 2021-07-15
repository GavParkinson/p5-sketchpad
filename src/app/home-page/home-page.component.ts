import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  canvas: any;

  constructor() { }

  ngOnInit(): void {
    const sketch = (p: p5) => {
      p.setup = () => {
        let canvas2 = p.createCanvas(p.windowWidth - 200, p.windowHeight - 200);
        // creating a reference to the div here positions it so you can put things above and below
        // where the sketch is displayed
        canvas2.parent('sketch-holder');

        // Background color
        p.background(33, 41, 51);
        // Initial stroke weigth for border rect
        p.strokeWeight(2);
        // Border color
        p.stroke(0,255,170);
        // Canvas fill color
        p.fill(33, 41, 51);
        // Draw a border
        p.rect(0, 0, p.width, p.height);

        // Set a random stroke color
        let rVal = p.random(0, 256);
        let gVal = p.random(0, 256);
        let bVal = p.random(0, 256);
        p.stroke(rVal, gVal, bVal);
        // Set a random stroke weight
        let sWeight = p.random(2,10);
        p.strokeWeight(sWeight);
      };

      p.draw = () => {
        if (p.mouseIsPressed) {
          if (p.mouseButton === p.LEFT) {
            p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
          } else if (p.mouseButton === p.CENTER) {
            p.background(33, 41, 51);
          }
        }
      };

      p.mouseReleased = () => {
        // Change the stroke color to something random
        let rVal = p.random(0, 256);
        let gVal = p.random(0, 256);
        let bVal = p.random(0, 256);
        p.stroke(rVal, gVal, bVal);
        // Set a random stroke weight
        let sWeight = p.random(2,10);
        p.strokeWeight(sWeight);
      };

      p.keyPressed = () => {
        if (p.key === 'c') {
          window.location.reload();
        }
      };
    };

    this.canvas = new p5(sketch);
  };
}
