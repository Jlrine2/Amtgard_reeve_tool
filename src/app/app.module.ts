import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClockComponent } from './components/clock/clock.component';
import { NewWidgetComponent } from './components/new-widget/new-widget.component';
import { WidgetDisplayComponent } from './components/widget-display/widget-display.component';
import { CounterComponent } from './components/clock/counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    NewWidgetComponent,
    WidgetDisplayComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }