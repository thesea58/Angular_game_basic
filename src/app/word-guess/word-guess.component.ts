import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { MyserviceService } from '../myservice.service';

const CONST_REMAIN_CHANGES = 5;
@Component({
  selector: 'app-word-guess',
  templateUrl: './word-guess.component.html',
  styleUrls: ['./word-guess.component.css']
})
export class WordGuessComponent implements OnInit {
  @Output("winMsg") winMsg = new EventEmitter();

  public letters: string[]=[
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X', 
    'Y',
    'Z'
  ];

  question: string = '';          //question of word-guess
  remainingChances: number = CONST_REMAIN_CHANGES;   //remaining chance   
  arr_answer: {isDisplay: boolean; letter: string}[]=[];      //array char of answer
  answer: string = '';            //answer
  answerOfUser: string = '';      //answer of user
  hint: string = '';              //hint of question
  isDisplayHint: boolean = false; //display hint or not

  constructor(private myService: MyserviceService) { }  

  ngOnInit(): void {
    // get from service
    this.getQuestionInfo();

    // set answer
    let ansTemp: string[] = this.answer.split('');
    this.arr_answer = [];
    for(let index = 0; index < ansTemp.length; index++){
      this.arr_answer[index] = {
        isDisplay: false,
        letter: ansTemp[index],
      };
    };
  }

  getQuestionInfo(){
    let questionInfo = this.myService.getQuestionInfo();
    this.question = questionInfo.question;
    this.answer = questionInfo.answer;
    this.hint = questionInfo.hint;
  }

  // press button guest
  onGuest(){
    if(this.answerOfUser.toUpperCase() || this.answerOfUser.trim() == this.answer.toUpperCase()){
      // alert('Chúc mừng bạn đoán đúng.');
      this.winMsg.emit();
    }else {
      alert('Sai rồi. Mời bạn đoán tiếp.');
    }
  }

  // press button hint
  onDisplayHint(){
    this.isDisplayHint = true;
  }

  onReplay(){
    this.remainingChances = CONST_REMAIN_CHANGES;
    this.isDisplayHint = false;
    this.answerOfUser = '';

    // hide all letters
    for (let index = 0; index < this.arr_answer.length; index++){
      this.arr_answer[index].isDisplay = false;
    }
  }

  // press button change question
  onChangeQuestion(){
    this.ngOnInit();
  }

  onClickCharacter(indx: any){
    if(this.remainingChances == 0){
      return;
    }

    let isGuessAll = true;

    // check if guess right/wrong
    for (let i = 0; i < this.arr_answer.length; i++){
      if(this.arr_answer[i].letter === this.letters[indx]){
        this.arr_answer[i].isDisplay = true;
      }
      if(this.arr_answer[i].isDisplay == false){
        isGuessAll = false;
      }
    }

    // subtract chances if wrong 
    if(!this.answer.includes(this.letters[indx])){
      alert('Bạn đã đoán sai');
      this.remainingChances = this.remainingChances -1;
      if(this.remainingChances === 0){
        alert('Bạn đã hết số lần đoán');
      }
    }

    // check all letters're guessed
    setTimeout(() => {
      if(isGuessAll){
        this.winMsg.emit();
      }
    }, 200);
  }
}
