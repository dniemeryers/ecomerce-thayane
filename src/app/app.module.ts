import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SexoPipe } from './pipes/sexo.pipe';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';
import { NovoComponent } from './componentes/novo/novo.component';
import { HomeComponent } from './componentes/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButton, MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [
    AppComponent,
    SexoPipe,
    ToolbarComponent,
    NovoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    HttpClientModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
