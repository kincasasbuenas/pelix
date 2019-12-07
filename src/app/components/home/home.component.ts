import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../../services/peliculas.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cartelera:any;
  popularesninos:any;
  populares:any;

  constructor(private _ps:PeliculasService) {
    this._ps.getCartelera().subscribe(data=>{ this.cartelera=data;  });
    this._ps.getPopulares().subscribe(data=>{ this.populares=data;  });
    this._ps.getPopularesNinos().subscribe(data=>{ this.popularesninos=data;  });
  }

  ngOnInit() {
  }

}
