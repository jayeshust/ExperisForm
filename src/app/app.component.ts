import { Component } from '@angular/core';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularmaterial';

  constructor(private dateAdapter: DateAdapter<Date>) {}

  french() {
    this.dateAdapter.setLocale('fr');
  }

  japanese() {
    this.dateAdapter.setLocale('ja');
  }

  dutch() {
    this.dateAdapter.setLocale('nl');
  }

  spanish() {
    this.dateAdapter.setLocale('es');
  }
}

