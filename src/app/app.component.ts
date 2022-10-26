import { Component, ViewChild } from '@angular/core';
import { WordGuessComponent } from './word-guess/word-guess.component';
import { FlipCardControlComponent } from './flip-card-control/flip-card-control.component';
import { WordGuessControlComponent } from './word-guess-control/word-guess-control.component';

@Component({
  selector:'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BTAngular';
  // @ViewChild("wordGuessComponent")
  // wordGuessComponent!: WordGuessComponent;

  // @ViewChild("wordGuessControlComponent")
  // wordGuessControlComponent!: WordGuessControlComponent;

  // @ViewChild("flipCardControlComponent")
  // flipCarControlComponent!: FlipCardControlComponent;

  // isWordGuess: boolean = false;   //word guess component display flag
  // isFlipCard: boolean = false;    //flip card component display flag

  // // count attribute for checking click event
  // fcHintClick:number = 0;         //hint click
  // fcReplayClick:number = 0;       //replay click
  // fcChangeThemeClick:number = 0;  //change theme click

  constructor(){}

  ngOnInit(): void{
  }

  // click word guess button
  // onWordGuessDisplay(){
  //   this.isWordGuess = true;
  //   this.isFlipCard = false;
  // }

  // // click flip card button
  // onFlipCardDisplay(){
  //   this.isFlipCard = true;
  //   this.isWordGuess = false;
  // }

  // // WORD GUESS
  // // press button hint
  // onDisplayHintFromControl(){
  //   this.wordGuessComponent.onDisplayHint();
  // }

  // // press button replay
  // onReplayFromControl(){
  //   this.wordGuessComponent.onReplay();
  // }

  // // press button change question
  // onChangeQuestionFromControl(){
  //   this.wordGuessComponent.onChangeQuestion();
  // }

  // displayWinMsg(){
  //   this.wordGuessControlComponent.isDisplayWinMsg = true;
  // }

  // FLIP CARD
  // press button hint
  // onDisplayHintFromFlipCardControl(){
  //   this.fcHintClick++;
  // }

  // // press button replay 
  // onReplayFromFlipCardControl(){
  //   this.fcReplayClick++;
  // }
  // onChangeThemeFromFlipCardControl(){
  //   this.fcChangeThemeClick++;
  // }
  // displayFlipCardWinMsg(event:any){
  //   this.flipCarControlComponent.isDisplayWinMsg = true;
  //   this.flipCarControlComponent.guessTimes = event;
  // }
}
