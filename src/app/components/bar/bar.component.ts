import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaresService } from '../../servicios/bares.service';


@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.sass']
})
export class BarComponent {

  bar:any = {};

  constructor( private activatedRoute: ActivatedRoute,
                private _baresService: BaresService
                ){

    this.activatedRoute.params.subscribe(params => {
      this.bar = this._baresService.getBar (params['id']);
      console.log(this.bar);

    })
  }


}
