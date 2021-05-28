import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { BasicsComponent } from './pages/basics/basics.component';
import { DinamicsComponent } from './pages/dinamics/dinamics.component';
import { SwitchesComponent } from './pages/switches/switches.component';
import { FormsModule } from '@angular/forms';
import { CustomMinDirective } from './directives/custom-min.directive';


@NgModule({
  declarations: [
    BasicsComponent,
    DinamicsComponent,
    SwitchesComponent,

    CustomMinDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    TemplateRoutingModule
  ]
})
export class TemplateModule { }
