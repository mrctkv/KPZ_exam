import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicine } from 'src/app/modules/medicine.module';
import { MedicinesService } from 'src/app/services/medicines.service';

@Component({
  selector: 'app-edit-medicine',
  templateUrl: './edit-medicine.component.html',
  styleUrls: ['./edit-medicine.component.css']
})
export class EditMedicineComponent implements OnInit{

  medicineDetails: Medicine = {
    id: '',
    name: '',
    type: '',
    price: 0,
    quantity: 0,
    withPrescription: ''
  };
  constructor(private router: Router, private route: ActivatedRoute, private medicineService: MedicinesService) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe({
     next: (params) =>{
       const id = params.get('id');
 
       if(id)
       {
         this.medicineService.getMedicine(id)
         .subscribe({
           next: (response) =>
           {
             this.medicineDetails = response;
           }
         })
       }
 
     }
    }) 
   }

   updateMedicine()
  {
    this.medicineService.updateMedicine(this.medicineDetails.id, this.medicineDetails)
    .subscribe({
      next: (response) =>
      {
        this.router.navigate(['medicine']);
      }
    });

  }

 
   deleteMedicine(id: string)
  {
    this.medicineService.deleteMedicine(id)
    .subscribe({
      next: (response) =>
      {
        this.router.navigate(['medicine']);
      }
    });

}
}
