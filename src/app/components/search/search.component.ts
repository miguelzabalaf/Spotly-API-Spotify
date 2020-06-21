import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  term: string;

  constructor( private activatedRoute: ActivatedRoute,
               private router: Router ) { 
    this.activatedRoute.params.subscribe( params =>{
      this.term = params['term']
      console.log(this.term);
    });
   }

  ngOnInit(): void {
  }

}
