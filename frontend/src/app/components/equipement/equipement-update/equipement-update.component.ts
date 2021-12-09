import { EquipementService } from './../equipement.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipement } from '../equipement.model';

@Component({
  selector: 'app-equipement-update',
  templateUrl: './equipement-update.component.html',
  styleUrls: ['./equipement-update.component.css']
})
export class EquipementUpdateComponent implements OnInit {

  equipement: Equipement  

  constructor(private equipementService: EquipementService, 
    private router: Router, 
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.equipementService.readById(id).subscribe(equipement => {
      this.equipement = equipement
    });
  }
  updateEquipement(): void {
    this.equipementService.update(this.equipement).subscribe(() => {
      this.equipementService.showMessage("Equipamento atualizado com sucesso!")
      this.router.navigate(['/equipements'])
    })

  }
  cancel(): void {
    this.router.navigate(['/equipements'])
  }

}
