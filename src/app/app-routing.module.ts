import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeFormModule } from './resume-form/resume-form.module';

const routes: Routes = [
  {
    path: 'resume',
    loadChildren: () =>
      import('./resume-form/resume-form.module').then(
        (m) => m.ResumeFormModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
