import { Injectable } from '@angular/core';

@Injectable()
export class ApartmentsService {

  constructor() { }

  getApprtments (){
    return [
      {id: 1, title: 'arriendo apartamento en modelia', price: 1200000},
      {id: 2, title: 'arriendo apartamento en normandia', price: 800000},
      {id: 3, title: 'arriendo apartamento en los monjes', price: 750000},
      {id: 4, title: 'arriendo apartamento en salitre', price: 1600000},
      {id: 5, title: 'arriendo apartamento en hayuelos', price: 1300000},
    ];
  }

}
