import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  parties: any[] = [];
  constructor(
    private searchService: SearchService,
  ) { }

  ngOnInit(): void {
    this.searchService.partiesBS.subscribe((parties: any) => {
      console.log(parties);
      this.parties = parties;
    })
  }

}
