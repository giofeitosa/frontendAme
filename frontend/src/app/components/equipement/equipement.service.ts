import { Equipement } from './equipement.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipementService {

  baseUrl = "http://localhost:3001/equipements"
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
  create(equipement: Equipement): Observable<Equipement>{
    return this.http.post<Equipement>(this.baseUrl, equipement)
  }
}