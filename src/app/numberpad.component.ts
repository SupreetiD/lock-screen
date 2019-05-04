import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numberpad',
  templateUrl: './numberpad.component.html'
})
export class NumberPadComponent implements OnInit {
  arr: any = [];
  randomNum: any;
  randomArr: any;
  InputModel: any;
  currentPassword: any = [];
  userPassword: string;

  constructor() {
  }

  ngOnInit() {
    this.arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -1];
    this.randomNum = this.shuffle(this.arr);
  }

  typedNumber(numberEntered: any) {
    this.currentPassword = this.currentPassword + numberEntered;
  }

  storeUserInput(event: any) {
    console.log(event.target.value);
    this.userPassword = event.target.value;
  }

  compareResults() {
    console.log(this.currentPassword, this.userPassword);
    if (this.currentPassword === this.userPassword) {
      alert('Matches');
    } else {
      alert('not matches');
    }
    this.currentPassword = [];
  }

  // Method to create a random array for the display of random numbers
    shuffle(array: any) {
    let currentIndex = array.length;
    let temporaryValue: any;
    let randomIndex: any;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    this.randomArr = array;
  }
}
