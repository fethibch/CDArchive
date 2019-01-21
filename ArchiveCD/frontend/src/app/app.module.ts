import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent} from './home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import {CRUDServices} from "./service/CRUD-Services";
import {DateFilterPipe, FilterComponent, GenderFilterPipe, NameFilterPipe} from './filter/filter.component';

const appRoutes: Routes=[];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NameFilterPipe,
    GenderFilterPipe,
    DateFilterPipe,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),HttpClientModule,FormsModule,NgbModule
  ],
  providers: [CRUDServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
