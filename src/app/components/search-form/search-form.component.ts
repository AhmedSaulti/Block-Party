import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  locations: any[] = [
    { name: 'All', value: '-- Alles --' },
    { name: 'Charlottenburg-Wilmersdorf', value: 'Charlottenburg-Wilmersdorf' },
    { name: 'Friedrichshain-Kreuzberg', value: 'Friedrichshain-Kreuzberg' },
    { name: 'Lichtenberg', value: 'Lichtenberg' },
    { name: 'Marzahn-Hellersdorf', value: 'Marzahn-Hellersdorf' },
    { name: 'Mitte', value: 'Mitte' },
    { name: 'Neukölln', value: 'Neukölln' },
    { name: 'Pankow', value: 'Pankow' },
    { name: 'Reinickendorf', value: 'Reinickendorf' },
    { name: 'Spandau', value: 'Spandau' },
    { name: 'Steglitz-Zehlendorf', value: 'Steglitz-Zehlendorf' },
    { name: 'Tempelhof-Schöneberg', value: 'Tempelhof-Schöneberg' },
    { name: 'Treptow-Köpenick', value: 'Treptow-Köpenick' },
    { name: 'Brandenburg', value: 'Brandenburg' },
  ];
  searchForm = this.fb.group({
    q: [''],
    bezirk: [''],
    ipp: [10, [Validators.required, Validators.min(1)]],
  });
  constructor(
    private fb: FormBuilder,
    private searchService: SearchService,
  ) { }

  ngOnInit(): void {
  }
  onSubmit() {
    if(!this.searchForm.valid) return;

    const formValue = this.searchForm.value as any;
    let searchQuery = '';
    Object.keys(formValue).forEach((key:string) => {
      searchQuery += key + '=' + formValue[key] + '&';
    })
    this.searchService.getParties(searchQuery)
    .pipe(
      map((data: any) => data.features)
    )
    .subscribe({
      next: parties => {
        console.log(parties);
        this.searchService.partiesBS.next(parties);
      },
      error: err => {
        console.error(err);
      }
    })
    
  }
}
