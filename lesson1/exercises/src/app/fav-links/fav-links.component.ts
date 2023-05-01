import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

  constructor() { }
  favLinks = ['https://kawvalleykickball.com', 'https://www.w3schools.com']
  ngOnInit() {
  }

}
