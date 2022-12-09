import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormStyle } from '@angular/common';
import { AddMedicineComponent } from './components/medicine/add-medicine/add-medicine.component';
import { EditMedicineComponent } from './components/medicine/edit-medicine/edit-medicine.component';
import { MedicineListComponent } from './components/medicine/medicine-list/medicine-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMedicineComponent,
    EditMedicineComponent,
    MedicineListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
