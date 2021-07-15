import { Component } from '@angular/core';
import { P5JSInvoker } from '../shared/p5-jsinvoker';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent extends P5JSInvoker{

  constructor() {
    super();
    this.startP5JS(document.body);
  }

  setup() {
    this.p5.createCanvas(this.p5.windowWidth, this.p5.windowHeight, this.p5.WEBGL);

    this.p5.background(33, 41, 51);
    this.p5.fill(255,50);
    const xstart = this.p5.random(10);

    let ynoise = this.p5.random(10);

    for(let y = -(this.p5.height/4); y <= (this.p5.height/4); y+=3) {
      ynoise += 0.02;
      let xnoise = xstart;
      for(let x = -(this.p5.width/4); x <= (this.p5.width/4); x+=3) {
        xnoise += 0.02;
        this.drawPoint(x,y,this.p5.noise(xnoise, ynoise));
      }
    }
  }

  drawPoint(x: number, y: number, noiseFactor: number) {
    this.p5.push();
    this.p5.translate(x*noiseFactor*4, y*noiseFactor*4, -y);
    let edgeSize = noiseFactor * 26;

    let rVal = this.p5.random(0, 256);
    let gVal = this.p5.random(150, 256);
    let bVal = this.p5.random(0, 256);
    this.p5.stroke(rVal, gVal, bVal);
    this.p5.fill(rVal, gVal, bVal, 50);
    this.p5.ellipse(0,0,edgeSize,edgeSize);
    this.p5.pop();
  }

  draw() {}

}
