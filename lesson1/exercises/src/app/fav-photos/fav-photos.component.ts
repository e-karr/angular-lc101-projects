import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Photos';
  image1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQArwmBUZe_Pqm-Pt7TxjgMuKBcdDHDdhccDk5oWgcmZQ&usqp=CAU&ec=48665698';
  image2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJZsz_fkER4SZlvT7f675BYPVP-a_Eoe1RJFrOUIwy8kGpAQGPES7afbcuTuMDMKmuR_DsOBaayiU&usqp=CAU&ec=48665698';
  image3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIdg7OUarc5V1TdP1hbYR78AUPmUuEeJmNHmdgLvL7kA&usqp=CAU&ec=48665698';

  constructor() { }

  ngOnInit() {
  }

}