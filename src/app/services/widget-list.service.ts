import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WidgetListService {
  widgets = []

  constructor() { }
}

