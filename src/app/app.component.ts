import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  valueFirstInput = 0;
  valueSecondInput = 0;

  changeFn(e) {
    this.valueFirstInput = Math.round(e.target.value * 100) / 100;
  }

  modelChangeFn(value) {
    this.valueSecondInput = Math.round(value * 100) / 100;
  }
}
