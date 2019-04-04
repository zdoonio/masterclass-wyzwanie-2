import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public displayDate = new Date().toLocaleTimeString();

  constructor() { setInterval(() => {
    this.displayDate = new Date().toLocaleTimeString();
  }, 1);

  }

  ngOnInit() {
  }


}
