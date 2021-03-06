import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { MatSidenavModule} from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatListModule} from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { EquipementsCrudComponent } from './views/equipements-crud/equipements-crud.component';
import { EquipementCreateComponent } from './components/equipement/equipement-create/equipement-create.component';
import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EquipementReadComponent } from './components/equipement/equipement-read/equipement-read.component';
import { EquipementRead2Component } from './components/equipement/equipement-read2/equipement-read2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { EquipementUpdateComponent } from './components/equipement/equipement-update/equipement-update.component';
import { EquipementDeleteComponent } from './components/equipement/equipement-delete/equipement-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    EquipementsCrudComponent,
    EquipementCreateComponent,
    RedDirective,
    ForDirective,
    EquipementReadComponent,
    EquipementRead2Component,
    EquipementUpdateComponent,
    EquipementDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
