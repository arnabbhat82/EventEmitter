import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor() { }
  message = 'hello world';

  ngOnInit() {
  }
  recieveMessage($event) {
    this.message = $event;
  }

}
