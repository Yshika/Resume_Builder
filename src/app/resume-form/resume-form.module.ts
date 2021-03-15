import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeFormRoutingModule } from './resume-form-routing.module';
import { CreateFormComponent } from './create-form/create-form.component';
import { UpdateFormComponent } from './update-form/update-form.component';
import { DeleteFormComponent } from './delete-form/delete-form.component';
import { ViewFormComponent } from './view-form/view-form.component';


@NgModule({
  declarations: [CreateFormComponent, UpdateFormComponent, DeleteFormComponent, ViewFormComponent],
  imports: [
    CommonModule,
    ResumeFormRoutingModule
  ]
})
export class ResumeFormModule { }
