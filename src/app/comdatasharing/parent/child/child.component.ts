import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  // Parent to child
  // @Input() message: string;
  // Parent to child end
  message = 'Hola Munda';

  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  sendMessage(){
    this.messageEvent.emit(this.message);
  }
  ngOnInit() {
  }

}
