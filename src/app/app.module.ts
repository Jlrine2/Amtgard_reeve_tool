import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClockComponent } from './components/clock/clock.component';
import { NewWidgetComponent } from './components/new-widget/new-widget.component';
import { WidgetDisplayComponent } from './components/widget-display/widget-display.component';
import { TimeFormatPipe } from './time-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    NewWidgetComponent,
    WidgetDisplayComponent,
    TimeFormatPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
