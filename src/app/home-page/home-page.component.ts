import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  canvas: any;
  sw = 2;
  c: any[] = [];
  strokeColor = 0;

  constructor() { }

  ngOnInit(): void {
    const sketch = (p: p5) => {
      p.setup = () => {
        let canvas2 = p.createCanvas(p.windowWidth - 200, p.windowHeight - 200);
        // creating a reference to the div here positions it so you can put things above and below
        // where the sketch is displayed
        canvas2.parent('sketch-holder');

        p.background(33, 41, 51);
        p.strokeWeight(this.sw);

        this.c[0] = p.color(148,0,211);
        this.c[1] = p.color(75,0,130);
        this.c[2] = p.color(0,0,255);
        this.c[3] = p.color(0,255,0);
        this.c[4] = p.color(255,255,0);
        this.c[5] = p.color(255,127,0);
        this.c[6] = p.color(255,0,0);

        // Border color
        p.stroke(0,255,170);
        // Canvas fill color
        p.fill(33, 41, 51);
        p.rect(0, 0, p.width, p.height);

        p.stroke(this.c[this.strokeColor]);
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
        // modulo math forces the color to swap through the array provided
        this.strokeColor = (this.strokeColor + 1) % this.c.length;
        p.stroke(this.c[this.strokeColor]);
        console.log(`color is now ${this.c[this.strokeColor]}`);
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
