import { EquipementUpdateComponent } from './components/equipement/equipement-update/equipement-update.component';
import { EquipementCreateComponent } from './components/equipement/equipement-create/equipement-create.component';
import { EquipementsCrudComponent } from './views/equipements-crud/equipements-crud.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipementDeleteComponent } from './components/equipement/equipement-delete/equipement-delete.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path: "equipements",
    component: EquipementsCrudComponent
  },
  {
    path: "equipements/create",
    component: EquipementCreateComponent
  },
  {
    path: "equipements/update/:id",
    component: EquipementUpdateComponent
  },
  {
    path: "equipements/delete/:id",
    component: EquipementDeleteComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
