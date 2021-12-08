import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipements-crud',
  templateUrl: './equipements-crud.component.html',
  styleUrls: ['./equipements-crud.component.css']
})
export class EquipementsCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToEquipementCreate(): void{
    this.router.navigate(['/equipements/create'])

  }

}
