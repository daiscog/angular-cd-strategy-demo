import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DefaultExampleParentComponent} from "./default-example/parent/default-example-parent.component";
import {DefaultExampleChildComponent} from "./default-example/child/default-example-child.component";
import {RouterModule} from "@angular/router";
import {OnPushExampleChildComponent} from "./on-push-example/child/on-push-example-child.component";
import {OnPushExampleParentComponent} from "./on-push-example/parent/on-push-example-parent.component";

@NgModule({
  declarations: [
    AppComponent,
    DefaultExampleParentComponent,
    DefaultExampleChildComponent,
    OnPushExampleParentComponent,
    OnPushExampleChildComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'default'
      },
      {
        path: 'default',
        component: DefaultExampleParentComponent
      },
      {
        path: 'onpush',
        component: OnPushExampleParentComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
