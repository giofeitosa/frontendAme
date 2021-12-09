import { Equipement } from './../equipement.model';
import { EquipementService } from './../equipement.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipement-create',
  templateUrl: './equipement-create.component.html',
  styleUrls: ['./equipement-create.component.css']
})
export class EquipementCreateComponent implements OnInit {

  equipement: Equipement = {
    id:1,
    type:"",
    description: "",
    id_employee: 1
  }
  
  constructor(private equipementService: EquipementService,
     private router: Router ) { }

  ngOnInit(): void {
  }
  createEquipement(): void {
    this.equipementService.create(this.equipement).subscribe(() => {
      this.equipementService.showMessage('Equipamento cadastrado com sucesso!')
      this.router.navigate(['/equipements'])
    })
  }
  cancel(): void{
   this.router.navigate(['/equipements'])
  }

}
