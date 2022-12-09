import { Component, OnInit } from '@angular/core';
import { Medicine } from 'src/app/modules/medicine.module';
import { MedicinesService } from 'src/app/services/medicines.service';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css']
})
export class MedicineListComponent implements OnInit {

  medicines: Medicine[] =[ {id: '7b49d3d2-103f-48de-a251-70ece51cc7dc',
name: 'newmed',
type: 'Pill',
price: 200,
quantity: 25,
withPrescription: 'yes'
},
{
id: '7d46d3d2-103f-48de-a251-70ece51cc7dc',
name: 'meeeeod',
type: 'Liquid',
price: 500,
quantity: 10,
withPrescription: 'yes'
},
{
  id: '6l56d3d2-103f-48de-a251-70ece51cc7dc',
  name: 'Lool',
  type: 'Liquid',
  price: 100,
  quantity: 100,
  withPrescription: 'no'
  }
];

  constructor(private medicinesService: MedicinesService) { }

  ngOnInit(): void {
    this.medicinesService.getAllMedicines()
  .subscribe({
    next: (medicines) =>{
      this.medicines = medicines;
    },
    error: (response) =>
    {
      console.log(response)
    }
  })
  }
}
