import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-summary-chart',
  templateUrl: './account-summary-chart.component.html',
  styleUrls: ['./account-summary-chart.component.css']
})
export class AccountSummaryChartComponent implements OnInit {

  single = [
    {
      name: 'Przychody',
      value: 2500
    },
    {
      name: 'Wydatki',
      value: 1500
    }
  ];
  view: any[] = [800, 100];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28']
  };

  constructor() { }

  ngOnInit() {
  }

}
