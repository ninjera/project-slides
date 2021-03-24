import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  arrayMenu: { diaSemana: string, descuento: string, descripcion: string, imagenURL: string }[];
  title: string;

  constructor() {
    this.title = "Food Delivery";
    this.showSlides();
  }
  showSlides() {
    this.arrayMenu = [
      {
        "diaSemana": "Lunes",
        "descripcion": "hamburguesa casera completa",
        "descuento": "20%",
        "imagenURL": "../../assets/hamburguesas.jpg"
      },
      {
        "diaSemana": "Martes",
        "descripcion": "Lasagna con salsa",
        "descuento": "15%",
        "imagenURL": "../../assets/lasagna.jpg"
      },
      {
        "diaSemana": "Miércoles",
        "descripcion": "Picada Completa",
        "descuento": "10%",
        "imagenURL": "../../assets/picadas.jpg"
      },
      {
        "diaSemana": "Jueves",
        "descripcion": "Ensalada Cesar",
        "descuento": "25%",
        "imagenURL": "../../assets/ensalada.jpg"
      },
      {
        "diaSemana": "Viernes",
        "descripcion": "Empanadas",
        "descuento": "10%",
        "imagenURL": "../../assets/empanadas.jpg"
      }
    ];
  }

}
