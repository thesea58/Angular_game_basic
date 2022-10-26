import { Component, OnInit, ViewChild } from '@angular/core';
import { WordGuessComponent } from '../word-guess/word-guess.component';
import { WordGuessControlComponent } from '../word-guess-control/word-guess-control.component';

@Component({
  selector: 'app-word-guess-viewer',
  templateUrl: './word-guess-viewer.component.html',
  styleUrls: ['./word-guess-viewer.component.css']
})
export class WordGuessViewerComponent implements OnInit {
  @ViewChild("wordGuessComponent")
  wordGuessComponent!: WordGuessComponent;

  @ViewChild("wordGuessControlComponent")
  wordGuessControlComponent!: WordGuessControlComponent;
  constructor() { }

  ngOnInit(): void {
  }

  // WORD GUESS
  // press button hint
  onDisplayHintFromControl(){
    this.wordGuessComponent.onReplay();
  }

  // press button replay
  onReplayFromControl(){
    this.wordGuessComponent.onReplay();
  }

  // press button change question
  onChangeQuestionFromControl(){
    this.wordGuessComponent.onChangeQuestion();
  }

  displayWinMsg(){
    this.wordGuessControlComponent.isDisplayWinMsg = true;
  }
}
