import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NpcComponent } from './components/npc/npc.component';
import { HttpClientModule } from '@angular/common/http';
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
import { AddDialogComponent } from './components/npc/add-dialog/add-dialog.component';
import { UpdateDialogComponent } from './components/npc/update-dialog/update-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NpcDetailsComponent } from './components/npc/npc-details/npc-details.component';
import { HomeComponent } from './components/home/home.component';
import { CampaignComponent } from './components/campaign/campaign.component';
import { AddCampaignDialogComponent } from './components/campaign/add-campaign-dialog/add-campaign-dialog.component';
import { CampaignDetailsComponent } from './components/campaign/campaign-details/campaign-details.component';
import { LocationComponent } from './components/location/location.component';
import { AddLocationDialogComponent } from './components/location/add-location-dialog/add-location-dialog.component';
import { LocationDetailsComponent } from './components/location/location-details/location-details.component';
import { AddLocationNpcComponent } from './components/location/location-details/add-location-npc/add-location-npc.component';
import { AddLocationSublocComponent } from './components/location/location-details/add-location-subloc/add-location-subloc.component';
import { AddLocationCampaignComponent } from './components/campaign/campaign-details/add-location-campaign/add-location-campaign.component';
import { AddNpcCampaignComponent } from './components/campaign/campaign-details/add-npc-campaign/add-npc-campaign.component';
import { PlayerCharsComponent } from './components/player-chars/player-chars.component';
import { AddPlayerCharDialogComponent } from './components/player-chars/add-player-char-dialog/add-player-char-dialog.component';
import { PlayerCharDetailsComponent } from './components/player-chars/player-char-details/player-char-details.component';
import { AddPlayerCharCampaignComponent } from './components/campaign/campaign-details/add-player-char-campaign/add-player-char-campaign.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NpcComponent,
    AddDialogComponent,
    UpdateDialogComponent,
    NpcDetailsComponent,
    HomeComponent,
    CampaignComponent,
    AddCampaignDialogComponent,
    CampaignDetailsComponent,
    LocationComponent,
    AddLocationDialogComponent,
    LocationDetailsComponent,
    AddLocationNpcComponent,
    AddLocationSublocComponent,
    AddLocationCampaignComponent,
    AddNpcCampaignComponent,
    PlayerCharsComponent,
    AddPlayerCharDialogComponent,
    PlayerCharDetailsComponent,
    AddPlayerCharCampaignComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatSliderModule,
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
