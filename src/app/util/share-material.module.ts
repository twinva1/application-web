import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  exports: [
    MatButtonModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSelectModule,
  ],
})
export class SharedMaterialModule {}
