import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hammond\'s Heroes';
  name = 'Elizabeth Karr';
  itemList = ['pen', 'pencil', 'dog', 'ice cream'];

  rectangle = {
    length: 5,
    width: 6,
    area: function () {
      return this.length * this.width;
    }
  }
}
