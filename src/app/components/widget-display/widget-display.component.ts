import { Component, OnInit } from '@angular/core';
import { WidgetListService } from "../../services/widget-list.service";
@Component({
  selector: 'app-widget-display',
  templateUrl: './widget-display.component.html',
  styleUrls: ['./widget-display.component.scss']
})
export class WidgetDisplayComponent implements OnInit {

  constructor(private widgets_service: WidgetListService) { }
  widgets=this.widgets_service.widgets;
  ngOnInit() {
  }

}
