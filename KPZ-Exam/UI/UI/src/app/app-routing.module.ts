import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMedicineComponent } from './components/medicine/add-medicine/add-medicine.component';
import { EditMedicineComponent } from './components/medicine/edit-medicine/edit-medicine.component';
import { MedicineListComponent } from './components/medicine/medicine-list/medicine-list.component';

const routes: Routes = [
  {
    path: '',
    component: MedicineListComponent
  },
  {
    path: 'medicine',
    component: MedicineListComponent
  },
  {
    path: 'medicine/add',
    component: AddMedicineComponent
  },
  {
    path: 'medicine/edit/:id',
    component: EditMedicineComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
