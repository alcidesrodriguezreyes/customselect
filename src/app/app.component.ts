import { Component, OnInit } from '@angular/core';
import { ApartmentsService } from './services/apartments.service';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    ApartmentsService,
    HttpModule
  ]
})
export class AppComponent implements OnInit {
  title: String = 'Rent an apartment';
  brand: String = 'Vívelo!';
  apartments: Observable<any[]>;

  constructor(private _apartmentService: ApartmentsService) { }

  ngOnInit() {
    this.apartments = this._apartmentService.getApprtments()
    .catch((err) => {
      console.log(err);// you can show the user an error on screen
      return Observable.of(true);
    });
  }

}
