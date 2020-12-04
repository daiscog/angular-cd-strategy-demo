import { Component } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-on-push-example-parent',
  templateUrl: './on-push-example-parent.component.html'
})
export class OnPushExampleParentComponent {
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
