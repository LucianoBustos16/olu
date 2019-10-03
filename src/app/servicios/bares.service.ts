import {Injectable} from '@angular/core';

@Injectable()
export class BaresService {

    private bares: Bar[] = [
        {
            nombre: 'Los Chinos',
            avatar: 'assets/img/avatar-bar.jpg',
            descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra, dolor vitae lacinia sodales, ante elit sollicitudin metus, in fringilla tellus libero at lorem.',
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

    getBar( idx: string){
      return this.bares[idx];
    }
}

export interface Bar {
    nombre: string;
    avatar: string;
    descripcion: string;
    img: string;
    estrellas: string;
    casa: string;
}
