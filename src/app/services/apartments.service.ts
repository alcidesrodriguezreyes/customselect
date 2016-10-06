import { Injectable } from '@angular/core';

@Injectable()
export class ApartmentsService {

  constructor() { }

  getApprtments (){
    return [
      {id: 1, title: 'arriendo apartamento en modelia', price: 1200000, featureImg: "http://imagenes.fincaraiz.com.co/FC_COL/2016/08/19/2276362/63792566.jpg", description: "Espectacular apartamento ubicado en exclusivo sector de la ciudad, a media cuadra del parque El Virrey y cerca de la Calle ochenta y cinco, Autopista Norte, Carrera Quince, Zona T y Parque de la 93. Se entrega con paneles japoneses y lavaplatos eléctrico.."},
      {id: 2, title: 'arriendo apartamento en normandia', price: 800000, featureImg: "http://imagenes.fincaraiz.com.co/FC_COL/2016/10/05/2364402/apartamento-arriendo-cundinamarca-bogota-66831616.jpg", description: "ubicado en la calle 127 bis con carrera 17A en perfecto estado con solo dos años de construido, un área de 80 metros, 2 habitaciones amplias con closet, 2 baños, sala comedor con chimenea a gas, cocina integral, zona de lavandería independiente, pisos en madera laminada, garaje cubierto para dos carros, deposito, el valor del arriendo incluye la administración, el edificio cuenta con terraza y BBQ. Para mayor información comunicarse con Diego Wilches al celular o whatsapp."},
      {id: 3, title: 'arriendo apartamento en los monjes', price: 750000, featureImg: "http://imagenes.fincaraiz.com.co/FC_COL/2016/08/17/2270383/apartamento-arriendo-cundinamarca-bogota-66829224.jpg", description: "Apartamentora estrenar con vista exterior, sobre parque arborizado tipo loft de 1 habitación, sala comedor, pisos en madera laminada, balcón, cocina a gas natural, 1 baño, 1 garaje y deposito.PRECIO NEGOCIABLE."},
      {id: 4, title: 'arriendo apartamento en salitre', price: 1600000, featureImg: "http://imagenes.fincaraiz.com.co/FC_COL/2016/09/22/2341482/apartamento-arriendo-cundinamarca-bogota-65529246.jpg", description: "Venta / arriendo de lindo apartamento para ESTRENAR, conjunto residencial Portus (CALLE 159 54-65), excelente iluminación área de 87.54m2, piso 9, 3 habitaciones, 3 baños, con estudio, 2 parqueaderos independientes, deposito, estrato 4."},
      {id: 5, title: 'arriendo apartamento en hayuelos', price: 1300000, featureImg: "http://imagenes.fincaraiz.com.co/FC_COL/2016/08/24/2284686/apartamento-arriendo-cundinamarca-bogota-66827662.jpg", description: "Excelente Apartamento exterior, ubicado en sector residencial muy tranquilo y a pocos pasos de Usaquen. El apartamento cuenta balcón y chimenea en la zona social, moderna cocina abierta dotada con lavaplatos eléctrico, dos alcobas, dos baños, dos parqueaderos independientes y deposito.."},
    ];
  }

}
