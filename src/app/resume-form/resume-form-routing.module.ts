import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFormComponent } from './create-form/create-form.component';
import { DeleteFormComponent } from './delete-form/delete-form.component';
import { UpdateFormComponent } from './update-form/update-form.component';
import { ViewFormComponent } from './view-form/view-form.component';

const routes: Routes = [
  {
    path: 'create-form',
    component: CreateFormComponent,
  },
  {
    path: 'view-form',
    component: ViewFormComponent,
  },
  {
    path: 'update-form',
    component: UpdateFormComponent,
  },
  {
    path: 'delete-form',
    component: DeleteFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumeFormRoutingModule {}
