import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../event-emitter.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  constructor(
    private eventEmitterServivce: EventEmitterService
  ) { }

  ngOnInit() {
  }

  firstComponentFunction() {
    this.eventEmitterServivce.onFirstComponentButtonClick();
  }
}
