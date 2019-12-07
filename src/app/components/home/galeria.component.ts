import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  //peliculas:any[]=[];
  @Input('peliculas') peliculas; //para datos que vienen de otro componente
  @Input('titulo') titulo;
  constructor() { }

  ngOnInit() {
  }

}
