import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../../services/peliculas.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  pelicula:any;
  volvera:any;
  busqueda:string;

  constructor(public route:ActivatedRoute, private _ps:PeliculasService) {
    this.route.params.subscribe(params=>{
      //console.log(params);
      this._ps.getPelicula(params['id'])
              .subscribe(pelicula=>{
                this.pelicula=pelicula
                this.volvera=params['pag'];

                if (params['busqueda']) {
                    this.busqueda=params['busqueda'];
                }
                console.log(pelicula)
              })
    })
  }

  ngOnInit() {
  }

}
