import { Component } from '@angular/core';
import{ CommonModule } from '@angular/common'; 

import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CarouselModule,CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  images = [
    {
      url: 'https://via.placeholder.com/1300x400?text=Imagen+1',
      title: 'Título de Imagen 1',
      description: 'Descripción de la imagen 1'
    },
    {
      url: 'https://via.placeholder.com/1300x400?text=Imagen+2',
      title: 'Título de Imagen 2',
      description: 'Descripción de la imagen 2'
    },
    {
      url: 'https://via.placeholder.com/1300x400?text=Imagen+3',
      title: 'Título de Imagen 3',
      description: 'Descripción de la imagen 3'
    }
  ];

}
