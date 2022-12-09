import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicine } from 'src/app/modules/medicine.module';
import { MedicinesService } from 'src/app/services/medicines.service';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent implements OnInit {

  addMedicineRequest: Medicine =
  {
    id: '',
    name: '',
    type: '',
    price: 0,
    quantity: 0,
    withPrescription: ''
  };
  constructor(private router: Router, private medicineService: MedicinesService){}
  ngOnInit(): void {
    
  }

  addMedicine()
   {
    this.medicineService.addMedicine(this.addMedicineRequest)
    .subscribe({
      next: (medicine) => {
      this.router.navigate(['medicine']);
      }
    });
   }

}
