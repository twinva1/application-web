import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { NgParticlesModule } from 'ng-particles';
//
import { NumberFormatPipe } from './pipe/number-format.pipe';
import { BadgeComponent } from './components/badge/badge.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ViewFormComponent } from './components/viewform/viewform.component';
import { LayoutComponent } from './layout/layout.component';
import { CommonModule } from '@angular/common';

export const TW_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY MMM',
    dateA11yLabel: 'YYYY-MM-DD',
    monthYearA11yLabel: 'YYYY MMM',
  },
};

const MODULES = [
  CommonModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTableModule,
  MatSnackBarModule,
  MatPaginatorModule,
  MatToolbarModule,
  MatSidenavModule,
  ReactiveFormsModule,
  RouterModule,
  MatListModule,
  NgParticlesModule,
];
@NgModule({
  imports: [...MODULES],
  exports: [...MODULES, NumberFormatPipe, BadgeComponent, LoadingComponent, ViewFormComponent],
  declarations: [
    NumberFormatPipe,
    BadgeComponent,
    LoadingComponent,
    ViewFormComponent,
    LayoutComponent,
  ],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: TW_FORMATS },
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: { duration: 3000, verticalPosition: 'top' },
    },
  ],
})
export class SharedModule {}
