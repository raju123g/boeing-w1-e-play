import { Component, OnInit } from '@angular/core';
import { SearchDataService } from "../search-data.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  event$: any;
  movie$: any;
  message:string;
  omdbSearchTitle:string
  constructor(    private data: SearchDataService,
    private router: Router,

  ) { 
    
  }

  ngOnInit() {this.data.currentMessage.subscribe(message => this.message = message)
    console.log("in search result compoment",this.message);
    this.fetchEvents();
    
  }
  onSearch(){
    console.log("Hi on searchevents for search is called ", this.message);
    this.data.getSearchedMovies(this.omdbSearchTitle).subscribe(data => {
      this.movie$ = data;
      console.log(data);
    });
    this.data.getSearchedEvents(this.omdbSearchTitle).subscribe(data => {
      this.event$ = data;
      console.log(data);
    });
    
  }
  fetchEvents(){

    console.log("Hi fetchevents for search is called ", this.message);
    this.data.getSearchedEvents(this.message).subscribe(data => {
      this.event$ = data;
      console.log(data);
    });
  }
  goMoviePage(movie){
    this.data.changeMovieMessage(movie);
    console.log(movie);
    this.router.navigate(['/movieinfo']);

  }
  gocheck(){
    console.log("something just like this");

  }
}