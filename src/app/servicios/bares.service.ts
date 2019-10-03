import {Injectable} from '@angular/core';

@Injectable()
export class BaresService {

    private bares: Bar[] = [
        {
            nombre: 'Bar Numero 1',
            descripcion: 'Descripción del bar',
            img: 'assets/img/bar1.jpg',
            estrellas: '4',
            casa: 'DC'
          },
          {
            nombre: 'Bar Numero 2',
            descripcion: 'Descripción del bar',
            img: 'assets/img/bar1.jpg',
            estrellas: '4',
            casa: 'DC'
          },
          {
            nombre: 'Bar Numero 1',
            descripcion: 'Descripción del bar',
            img: 'assets/img/bar1.jpg',
            estrellas: '4',
            casa: 'DC'
          },
          {
            nombre: 'Bar Numero 2',
            descripcion: 'Descripción del bar',
            img: 'assets/img/bar1.jpg',
            estrellas: '4',
            casa: 'DC'
          },
          {
            nombre: 'Bar Numero 1',
            descripcion: 'Descripción del bar',
            img: 'assets/img/bar1.jpg',
            estrellas: '4',
            casa: 'DC'
          },
          {
            nombre: 'Bar Numero 2',
            descripcion: 'Descripción del bar',
            img: 'assets/img/bar1.jpg',
            estrellas: '4',
            casa: 'DC'
          },
    ];

    constructor() {
        console.log('Servicio listo para user!!');
    }

    getBares(): Bar[] {
        return this.bares;
    }
}

export interface Bar {
    nombre: string;
    descripcion: string;
    img: string;
    estrellas: string;
    casa: string;
}
