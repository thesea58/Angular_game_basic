import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-flip-card-control',
  templateUrl: './flip-card-control.component.html',
  styleUrls: ['./flip-card-control.component.css']
})
export class FlipCardControlComponent implements OnInit {
  @Input("guessTimes") guessTimes: number = 0;  
  @Output("hint") hint = new EventEmitter();
  @Output("replay") replay = new EventEmitter();
  @Output("changeTheme") changeTheme = new EventEmitter();

  constructor() { }

  isDisplayWinMsg: boolean = false; //display win message flag

  ngOnInit(): void {
  }

  // press button hint
  onDisplayHint(){
    this.hint.emit();
  }

  // press button replay
  onReplay(){
    this.replay.emit();
    this.isDisplayWinMsg = false;
  }

  // press button change theme
  onChangeTheme(){
    this.changeTheme.emit();
    this.isDisplayWinMsg = false;
  }
}