import { EquipementCreateComponent } from './components/equipement/equipement-create/equipement-create.component';
import { EquipementsCrudComponent } from './views/equipements-crud/equipements-crud.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
