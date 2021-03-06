import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppComponent } from './app.component';
import { NpcComponent } from './components/npc/npc.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { HttpClientModule } from '@angular/common/http';
import { AddDialog } from './components/npc/addDialog/addDialog';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NpcComponent,
    NavbarComponent,
    AddDialog,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MatToolbarModule,
    MatCardModule, 
    MatAutocompleteModule, 
    MatInputModule, 
    MatPaginatorModule, 
    MatTableModule,
    MatFormFieldModule, 
    MatSortModule, 
    MatIconModule, 
    MatDialogModule, 
    MatButtonModule, 
    MatGridListModule,
    MatNativeDateModule, 
    MatDatepickerModule, 
    MatCheckboxModule, 
    MatSidenavModule, 
    MatChipsModule, 
    MatListModule, 
    MatExpansionModule,
    MatDividerModule, 
    MatMenuModule, 
    MatTabsModule, 
    MatProgressBarModule, 
    MatSnackBarModule, 
    MatButtonToggleModule, 
    MatRadioModule,
    MatOptionModule, 
    MatSelectModule, 
    MatTooltipModule
  ],
  entryComponents: [
    AddDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
