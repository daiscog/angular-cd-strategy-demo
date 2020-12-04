import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'app-default-example-child-component',
  templateUrl: './default-example-child.component.html',
  styleUrls: ['./default-example-child.component.css']
})
export class DefaultExampleChildComponent {
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
