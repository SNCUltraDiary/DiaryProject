import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

import { NavigationComponent } from './navigation/navigation.component';
import { FiltrationComponent } from './filtration/filtration.component';
import { HomeComponent } from './home/home.component';
import { FilterViewerComponent } from './filter-viewer/filter-viewer.component';
import { CalendarLayoutComponent } from './calendar-layout/calendar-layout.component';

@NgModule({
  declarations: [
    NavigationComponent,
    FiltrationComponent,
    HomeComponent,
    FilterViewerComponent,
    CalendarLayoutComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    NavigationComponent,
    FiltrationComponent,
    HomeComponent,
    FilterViewerComponent,
    CalendarLayoutComponent,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatCardModule
  ]
})
export class LayoutModule { }
