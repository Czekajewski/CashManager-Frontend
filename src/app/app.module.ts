import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {FormsModule} from '@angular/forms';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AccountsSummaryComponent } from './account/accounts-summary/accounts-summary.component';
import { AccountSummaryChartComponent } from './account/account-summary-chart/account-summary-chart.component';
import { AccountCashflowChartComponent } from './account/account-cashflow-chart/account-cashflow-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    AccountsSummaryComponent,
    AccountSummaryChartComponent,
    AccountCashflowChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
