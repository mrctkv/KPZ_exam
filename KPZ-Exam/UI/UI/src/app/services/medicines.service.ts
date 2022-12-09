import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Medicine} from 'src/app/modules/medicine.module';

@Injectable({
  providedIn: 'root'
})
export class MedicinesService {

  baseApiUrl: string = 'https://localhost:7296/';
  constructor(private http: HttpClient) { }

  getAllMedicines() : Observable<Medicine[]>
  {

    return this.http.get<Medicine[]>(this.baseApiUrl+ 'api/Medicine');

  }

  addMedicine(addMedicineRequest: Medicine) : Observable<Medicine>
  {
    addMedicineRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Medicine>(this.baseApiUrl+ 'api/Medicine', addMedicineRequest);
  }

  getMedicine(id: string) : Observable<Medicine>
  {
    return this.http.get<Medicine>(this.baseApiUrl+ 'api/Medicine/' + id);
  }

  updateMedicine(id: string, updateMedicineRequest: Medicine) : Observable<Medicine>
  {
   return this.http.put<Medicine>(this.baseApiUrl + 'api/Medicine/' + id, updateMedicineRequest);
  }

  deleteMedicine(id: string) : Observable<Medicine>
  {
    return this.http.delete<Medicine>(this.baseApiUrl + 'api/Medicine/' + id);
    }
}
