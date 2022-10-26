import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }

  // list of question
  questions: { question: string, answer: string, hint: string}[] = [
    {
      question: "Điền vào chỗ trống để hoàn thành tên bài hát: 'Em của ngày ... '",
      answer: 'SUTO',
      hint: 'Bài hát nổi tiếng của Sơn Tùng MT-P?'
    },
    {
      question: "Fan Club của Sơn Tùng MT-P gọi là gì",
      answer: 'SKY',
      hint: 'Bầu trời nhưng tiếng nước ngoài !!!'
    },
    {
      question: "Cái gì đen khi bạn mua nó, đỏ khi dùng nó và xám xịt khi vứt nó đi?",
      answer: 'THAN',
      hint: 'dùng để sưởi ấm'
    },
    {
      question: "Xã đông nhất là xã nào?",
      answer: 'XAHOI',
      hint: 'Xã hay tổ chức nhiều \'lễ\''
    }
  ];
  currQuestionInx: number = -1;
  // get data for word guess
  public getQuestionInfo(){
    // random index of question
    let len = this.questions.length;
    let randomIndex = this.currQuestionInx;
    while(randomIndex == this.currQuestionInx){
      randomIndex = Math.floor(Math.random() * len);
    }

    this.currQuestionInx = randomIndex;
    return this.questions[randomIndex];
  }


  themes: {images: Array<string>} [] = [
    {
      images: [
        '../../../assets/images/img (1).jpg',
        '../../../assets/images/img (2).jpg',
        '../../../assets/images/img (3).jpg',
        '../../../assets/images/img (4).jpg'
      ]
    },
    {
      images: [
        '../../../assets/images/img2 (1).jpg',
        '../../../assets/images/img2 (2).jpg',
        '../../../assets/images/img2 (3).jpg',
        '../../../assets/images/img2 (4).jpg'
      ]
    }
  ];

  currThemesIdx: number = -1;
  // get data for flip card
  public getListOfImage(){
    // random index of question
    let len = this.themes.length;
    let randomIndex = this.currThemesIdx;
    while(randomIndex == this.currThemesIdx){
      randomIndex = Math.floor(Math.random() * len);
    }

    this.currThemesIdx - randomIndex;
    return this.themes[randomIndex];
  }
}
