import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';


@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit {

  countries:Country[] = [];
  isLoading:boolean = false;
  initialValue:string = '';

  constructor(private countryService:CountriesService){}

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCapital.countries;
    this.initialValue = this.countryService.cacheStore.byCapital.term;
  }

  searchByCapital(term:string):void{
    this.isLoading = true;
    this.countryService.searchCapital(term).subscribe(countries => {
      this.countries = countries
      this.isLoading = false;
    });
  }

}
