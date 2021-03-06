import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../event-emitter.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  constructor(
    private eventEmitterService: EventEmitterService
  ) { }

  ngOnInit() {
    if (this.eventEmitterService.subsVar === undefined) {
      this.eventEmitterService.subsVar = this.eventEmitterService
      .invokeFirstComponentFunction.subscribe((name: string) => {
        this.firstFunction();
      });
    }
  }

  firstFunction() {
    alert( 'Hello ' + '\nWelcome to C# Corner \nFunction in First Component');
  }

}
