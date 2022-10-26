import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-word-guess-control',
  templateUrl: './word-guess-control.component.html',
  styleUrls: ['./word-guess-control.component.css']
})
export class WordGuessControlComponent implements OnInit {
  @Output("hint") hint = new EventEmitter();
  @Output("replay") replay = new EventEmitter();
  @Output("changeQuestion") changeQuestion = new EventEmitter();
  isDisplayWinMsg: boolean = false; //display win message flag
  isDisplayHint: boolean = false;
  constructor() { }

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

  // press button change question
  onChangeQuestion(){
    this.changeQuestion.emit();
    this.isDisplayWinMsg = false;
  }
}
