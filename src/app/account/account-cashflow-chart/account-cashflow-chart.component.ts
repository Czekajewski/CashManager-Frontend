import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-cashflow-chart',
  templateUrl: './account-cashflow-chart.component.html',
  styleUrls: ['./account-cashflow-chart.component.css']
})
export class AccountCashflowChartComponent implements OnInit {

  multi = [
    {
      name: 'Stan konta',
      series: [
        {
          name: '12.02',
          value: 1000
        },
        {
          name: '13.02',
          value: 800
        },
        {
          name: '16.02',
          value: 1500
        },
        {
          name: '17.02',
          value: 3000
        },
        {
          name: '20.02',
          value: 2000
        }
      ]
    }

  ];
  view: any[] = [800, 200];

  // options
  xAxis = true;
  yAxis = true;
  timeline = false;

  colorScheme = {
    domain: ['#5AA454']
  };

  constructor() { }

  ngOnInit() {
  }

}
