import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input("position")
  position: number = 0;

  colorPalette = ["#fff1e6", "#fde2e4", "#fad2e1", "#c5dedd", "#dbe7e4", "#f0efeb", "#d6e2e9", "#bcd4e6", "#99c1de"];


  constructor() { }

  ngOnInit(): void {
  }

  test():void {
    this.position = 1 - this.position;
  }
}
