import { EquipementService } from './../equipement.service';
import { Component, OnInit } from '@angular/core';
import { Equipement } from '../equipement.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-equipement-delete',
  templateUrl: './equipement-delete.component.html',
  styleUrls: ['./equipement-delete.component.css']
})
export class EquipementDeleteComponent implements OnInit {

  equipement: Equipement

  constructor(private equipementService: EquipementService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!
    this.equipementService.readById(id).subscribe(equipement => {
      this.equipement = equipement
    })
  }

  deleteEquipement(): void {
    this.equipementService.delete(this.equipement.id).subscribe(() => {
      this.equipementService.showMessage('Equipamento excluído com sucesso!')
      this.router.navigate(['/equipements'])
    })

  }
  cancel(): void {
    this.router.navigate(['/equipements'])

  }

}
