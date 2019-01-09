import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { 
  MatToolbarModule, MatCardModule, MatAutocompleteModule, MatInputModule, MatPaginatorModule, MatTableModule,
  MatFormFieldModule, MatSortModule, MatIconModule, MatDialogModule, MatButtonModule, MatGridListModule,
  MatNativeDateModule, MatDatepickerModule, MatCheckboxModule, MatSidenavModule, MatChipsModule, MatListModule, MatExpansionModule,
  MatDividerModule, MatMenuModule, MatTabsModule, MatProgressBarModule, MatSnackBarModule, MatButtonToggleModule, MatRadioModule,
  MatOptionModule, MatSelectModule, MatTooltipModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { NpcComponent } from './components/npc/npc.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NpcComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
