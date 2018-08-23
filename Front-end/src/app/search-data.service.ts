import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Router} from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movie } from "./models/movie";

@Injectable({
 providedIn: 'root'
})

export class SearchDataService {

 private messageSource = new BehaviorSubject('default message');
 currentMessage = this.messageSource.asObservable();

 changeMessage(message: string) {
  this.messageSource.next(message)
}

 private movie = new BehaviorSubject(new Movie());
 movieMessage = this.movie.asObservable();

 changeMovieMessage(message: Movie) {
  this.movie.next(message)
}

 
 constructor(private http: HttpClient, private router: Router) { }
 getMyMovies(city) {
   return this.http.get('http://172.23.238.198:8092/search-service/api/v1/city/'+city+'/movies')
 }

 getAllMovies(): Observable<Movie[]>{
  return this.http.get<Movie[]>('http://172.23.238.198:8090/ticket-service/api/v1/getAllMovie')
 }
 getMyEvents(city) {
  return this.http.get('http://172.23.238.198:8092/search-service/api/v1/city/'+city+'/events')
}

 getSearchedEvents(name) {
   console.log(name);
  return this.http.get('http://172.23.238.198:8092/search-service/api/v1/events/'+name)
}
getSearchedMovies(name) {
  console.log(name);
 return this.http.get('http://172.23.238.198:8092/search-service/api/v1/movies/'+name)
}

getMovieByCitynId(movieId) {
  let city=localStorage.getItem('city');
   return this.http.get('http://172.23.238.198:8092/search-service/api/v1/movie/'+movieId+'/city/'+city)
  }

}