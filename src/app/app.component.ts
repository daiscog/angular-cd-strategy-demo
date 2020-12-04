import { Component } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clickCounters = [...Array(9).keys()].map(_ => new BehaviorSubject<number>(0));

  otherBtnClickCount = 0;

  increment(index: number) {
    const counter$ = this.clickCounters[index];
    counter$.next(1 + counter$.value);
  }

  incrementOtherBtnClickCount() {
    ++this.otherBtnClickCount;
  }
}
