import { Component, OnInit, ViewChild } from '@angular/core';
import { FlipCardControlComponent } from '../flip-card-control/flip-card-control.component';

@Component({
  selector: 'app-flip-card-viewer',
  templateUrl: './flip-card-viewer.component.html',
  styleUrls: ['./flip-card-viewer.component.css']
})
export class FlipCardViewerComponent implements OnInit {
  @ViewChild("flipCardControlComponent")
  flipCardControlComponent!: FlipCardControlComponent;

  // count attribute for checking click event
  fcHintClick:number = 0;         //hint click
  fcReplayClick:number = 0;       //replay click
  fcChangeThemeClick:number = 0;  //change theme click 
  constructor() { }

  ngOnInit(): void {
  }
  // FLIP CARD
  // press button hint
  onDisplayHintFromFlipCardControl(){
    this.fcHintClick++;
  }

  // press button replay
  onReplayFromFlipCardControl(){
    this.fcReplayClick++;
  }

  // press button change question
  onChangeThemeFromFlipCardControl(){
    this.fcChangeThemeClick++;
  }

  displayFlipCardWinMsg(event:any){
    this.flipCardControlComponent.isDisplayWinMsg = true;
    this.flipCardControlComponent.guessTimes = event;
  }
}
