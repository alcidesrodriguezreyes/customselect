import { Component, OnInit } from '@angular/core';
import { ApartmentsService } from './services/apartments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApartmentsService]
})
export class AppComponent implements OnInit {
  title:String = "Rent an apartment";
  brand:String = "Vívelo!";
  apartments: any[];
  
  constructor (private _apartmentService: ApartmentsService){}

  ngOnInit(){
    this.apartments = this._apartmentService.getApprtments();
  }

}
