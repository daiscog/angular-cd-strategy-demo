import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'app-on-push-example-child-component',
  templateUrl: './on-push-example-child.component.html',
  styleUrls: ['./on-push-example-child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushExampleChildComponent {
  @Input()
  clickCount: number;

  @Output()
  readonly btnClick = new EventEmitter<void>()

  private cdCounter = 0;

  cdCount() {
    // This is bad! Never bind to methods that have side-effects in your templates!
    return ++this.cdCounter;
  }
}
