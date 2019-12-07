import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class PeliculasService {

  private apikey:string = "41fa68b6bc8b0c98e7741f7f17b79de6";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  peliculas:any[]=[];

  constructor( private http:HttpClient ) { }


  getCartelera(){

    let from= new Date();
    let to= new Date();

    to.setDate(to.getDate() + 7);

    let fromStr=`${from.getFullYear()}-${from.getMonth()+1}-${from.getDate()}`;
    let toStr=`${to.getFullYear()}-${to.getMonth()+1}-${to.getDate()}`;

    let url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${fromStr}&primary_release_date.lte=${toStr}&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.http.jsonp(url,'JSONP_CALLBACK').pipe( map( data => data['results'] ));
    //get( url ).pipe( map( res =>res.json() ));
  }


  getPopulares(){

    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.http.jsonp(url,'JSONP_CALLBACK').pipe( map( data => data['results'] ));
    //get( url ).pipe( map( res =>res.json() ));
  }

  getPopularesNinos(){

    let url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.http.jsonp(url,'JSONP_CALLBACK').pipe( map( data => data['results'] ));
    //get( url ).pipe( map( res =>res.json() ));
  }

  buscarPelicula( texto:string ){

    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.http.jsonp(url,'JSONP_CALLBACK').pipe( map( data =>{
       this.peliculas=data['results'];
       return data['results'];
    } ));
    //.get( url ).pipe( map( res =>res.json() ));
  }


  getPelicula( id:string ){
    let url = `${ this.urlMoviedb }/movie/${ id }?api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.http.jsonp(url,'JSONP_CALLBACK').pipe( map( data =>{
       return data;
    } ));
    //.get( url ).pipe( map( res =>res.json() ));
  }


}
