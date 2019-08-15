import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  currentTab: number = 0;
  constructor() { }

  ngOnInit() { }

  nextPrev(n: number) {
    if(true){
      if (n === 1) { this.currentTab = this.currentTab + n };
      if (n === -1) { this.currentTab = this.currentTab + n };
    }
  }

}
