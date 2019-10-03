import { Component, OnInit } from '@angular/core';
import { BaresService, Bar } from '../../servicios/bares.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  bares: Bar[] = [];

  constructor( private _BARESSERVICE: BaresService) {
    console.log('constructor');
  }

  ngOnInit() {
    this.bares = this._BARESSERVICE.getBares();

    console.log( this.bares);
  }

}
