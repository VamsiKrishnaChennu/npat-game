import {NgModule} from '@angular/core';
//A
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
//C
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
//D
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
//E
import { MatExpansionModule } from '@angular/material/expansion';
//F
import { MatFormFieldModule } from '@angular/material/form-field';
//G
import { MatGridListModule } from '@angular/material/grid-list';
//I
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
//L
import { MatListModule } from '@angular/material/list';
//M
import { MatMenuModule } from '@angular/material/menu';
//N
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
//R
import { MatRadioModule } from '@angular/material/radio';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
//S
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';

@NgModule({
  exports: [
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatDividerModule,
    MatFormFieldModule,
    MatTreeModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatBadgeModule,
    MatChipsModule,
    MatNativeDateModule
  ]
})
export class MaterialModule { }