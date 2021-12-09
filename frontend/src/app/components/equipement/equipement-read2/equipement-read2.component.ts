import { Equipement } from './../equipement.model';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { EquipementRead2DataSource } from './equipement-read2-datasource';

@Component({
  selector: 'app-equipement-read2',
  templateUrl: './equipement-read2.component.html',
  styleUrls: ['./equipement-read2.component.css']
})
export class EquipementRead2Component implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Equipement>;
  dataSource: EquipementRead2DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'type', 'description', 'id_employee'];

  constructor() {
    this.dataSource = new EquipementRead2DataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
