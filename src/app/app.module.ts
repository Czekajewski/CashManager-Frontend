import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {FormsModule} from '@angular/forms';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent
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
