import { EquipementService } from './../equipement.service';
import { Equipement } from './../equipement.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipement-read',
  templateUrl: './equipement-read.component.html',
  styleUrls: ['./equipement-read.component.css']
})
export class EquipementReadComponent implements OnInit {

  equipements: Equipement[]
  displayedColumns =['id', 'type', 'description', 'id_employee', 'action'];
  dataSource: Equipement;

  constructor(private equipementService: EquipementService) { }

  ngOnInit(): void {
    this.equipementService.read().subscribe(equipements =>{
      this.equipements = equipements
      console.log(equipements)
    })
  }

}
