import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './modules/material/material.module';
import { CreateComponent } from './components/create/create.component';
import { ReadComponent } from './components/read/read.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [ReadComponent, CreateComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule

  ],
  exports: [ReadComponent, CreateComponent, MaterialModule]
})
export class CoreModule { }
