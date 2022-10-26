import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { MyserviceService } from 'src/app/myservice.service';

const CONST_TIMER = 60;
@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.css']
})
export class FlipCardComponent implements OnInit {
  @Output("winMsg") winMsg = new EventEmitter();
  @Input("fcHintClick") fcHintClick = 0;
  @Input("fcReplayClick") fcReplayClick = 0;
  @Input("fcChangeThemeClick") fcChangeThemeClick = 0;

  constructor(private myService: MyserviceService) { }

  public images: Array<string> = [];
  public defaultImgPath = '../../../assets/images/default.jpg';

  remainingTime: number = CONST_TIMER;      //remaining time
  arrImgDisplay: { id: number; isDisplay: boolean; isDisplayHint: boolean, source: string; }[] = [];  //array of display image
  tmpArrImgDisplay: { id: number; isDisplay: boolean; isDisplayHint: boolean, source: string; }[] = [];  //copy of array of display image: use to duplicate array of image
  compareImgArr: { id: number; source: string }[] = [];  //Use to compare 2 image user select
  isDisplayHint: boolean = false;
  timer: any;

  guessTime: number = 0;
  ngOnInit(): void {
    this.setTimer();
    this.guessTime = 0;

    let listOfImg = this.myService.getListOfImage();
    this.images = listOfImg.images;

    this.arrImgDisplay.length = this.images.length;
    for (let i = 0; i < this.images.length; i++) {
      this.arrImgDisplay[i] = {
        id: i,
        isDisplay: false,
        isDisplayHint: false,
        source: this.images[i]
      };

      this.tmpArrImgDisplay[i] = {
        id: i,
        isDisplay: false,
        isDisplayHint: false,
        source: this.images[i]
      };
    }

    // duplicate array of image
    Array.prototype.push.apply(this.arrImgDisplay, this.tmpArrImgDisplay);

    this.shuffle(this.arrImgDisplay);
  }

  // shuffle all item of array
  shuffle(array: Array<object>) {
    let currentIndex = array.length;
    // while there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex]
      ];
    }
  }

  // timer
  setTimer() {
    this.timer = setInterval(() => {
      console.log(this.remainingTime);
      this.remainingTime--;
      if (this.remainingTime == 0) {
        clearInterval(this.timer);
      }
    }, 1000);
  }


  // press button replay
  onReplay() {
    this.remainingTime = CONST_TIMER;
    this.guessTime = 0;
    // hide all card
    for (let i = 0; i < this.arrImgDisplay.length; i++) {
      this.arrImgDisplay[i].isDisplay = false;
    }
  }

  // press button change theme
  onChangeTheme() {
    this.remainingTime = CONST_TIMER;
    this.guessTime = 0;
    clearInterval(this.timer);

    this.ngOnInit();
  }

  // press button hint
  onDisplayHint() {
    if (this.isDisplayHint == true) {
      return;
    }
    // Suggestions when selected 1 image
    if (this.compareImgArr.length == 1) {
      let id_of_the_selected_image: number = this.compareImgArr[0].id;
      let source_of_the_selected_image: string = this.compareImgArr[0].source;
      for (let j = 0; j < this.arrImgDisplay.length; j++) {
        if (this.arrImgDisplay[j].isDisplay == false && this.arrImgDisplay[j].source == source_of_the_selected_image) {

          this.isDisplayHint = true;
          this.arrImgDisplay[id_of_the_selected_image].isDisplayHint = true;
          this.arrImgDisplay[j].isDisplayHint = true;

          // after 1s hide hint
          setTimeout(() => {
            this.isDisplayHint = false;
            this.arrImgDisplay[id_of_the_selected_image].isDisplayHint = false;
            this.arrImgDisplay[j].isDisplayHint = false;
          }, 1000);
          return;

        }
      }
    }
    // show random hints
    else {
      
      for (let i = 0; i < this.arrImgDisplay.length - 1; i++) {
        if (this.arrImgDisplay[i].isDisplay == false) {
          for (let j = i + 1; j < this.arrImgDisplay.length; j++) {
            if (this.arrImgDisplay[i].source == this.arrImgDisplay[j].source) {
              this.isDisplayHint = true;
              this.arrImgDisplay[i].isDisplayHint = true;
              this.arrImgDisplay[j].isDisplayHint = true;

              // after 1s hide hint
              setTimeout(() => {
                this.isDisplayHint = false;
                this.arrImgDisplay[i].isDisplayHint = false;
                this.arrImgDisplay[j].isDisplayHint = false;
              }, 1000);
              return;
            }
          }
        }
      }
    }
  }

  // press image
  onClickImg(idx: number) {
    if (this.arrImgDisplay[idx].isDisplay == true || this.remainingTime == 0) {
      return;
    }
    // if length < 2: first click
    if (this.compareImgArr.length < 2) {
      this.arrImgDisplay[idx].isDisplay = true;
      this.compareImgArr.push({
        id: idx,
        source: this.arrImgDisplay[idx].source
      });
    }
    // length == 2: compare two image're selecting
    if (this.compareImgArr.length == 2) {
      this.guessTime++;
      setTimeout(() => {
        if (this.compareImgArr[0].source === this.compareImgArr[1].source) {
          this.compareImgArr = [];
          if (this.checkWin() == true) {
            this.winMsg.emit(this.guessTime);
            // alert('Chúc mừng bạn đã chiến thắng');
          }
        } else {
          this.arrImgDisplay[this.compareImgArr[0].id].isDisplay = false;
          this.arrImgDisplay[this.compareImgArr[1].id].isDisplay = false;
          this.compareImgArr = [];
        }
      }, 500);
    }
  }

  checkWin() {
    for (let i = 0; i < this.arrImgDisplay.length; i++) {
      if (this.arrImgDisplay[i].isDisplay == false) {
        return false;
      }
    }
    return true;
  }

  // get changes from parent
  ngOnChanges(changes: SimpleChanges) {
    if (!!changes['fcHintClick']) {
      if (this.fcHintClick > 0) {
        this.onDisplayHint();
      }
    }
    if (!!changes['fcReplayClick']) {
      if (this.fcReplayClick > 0) {
        this.onReplay();
      }
    }
    if (!!changes['fcChangeThemeClick']) {
      if (this.fcChangeThemeClick > 0) {
        this.onChangeTheme();
      }
    }
  }
}

