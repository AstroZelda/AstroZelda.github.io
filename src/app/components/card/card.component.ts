import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input("color-index")
  colorIndex = 0; 

  @Input("back-text")
  backText = "I love you";

  colorPalette = ["#fff1e6", "#fde2e4", "#fad2e1", "#c5dedd", "#dbe7e4", "#f0efeb", "#d6e2e9", "#bcd4e6", "#99c1de"];
  selectedColor: string = "#fff";

  constructor() { }

  ngOnInit(): void {
    this.selectedColor = this.colorPalette[this.colorIndex];
  }

}
