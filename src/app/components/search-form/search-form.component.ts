import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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
    ipp: [''],
  });
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.searchForm.value);
  }
}
