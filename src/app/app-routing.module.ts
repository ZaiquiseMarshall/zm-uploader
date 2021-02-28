import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { UploadComponent } from './views/upload/upload.component';

const routerOps: ExtraOptions = { 
  'scrollPositionRestoration' : 'enabled' 
};

const routes: Routes = [
  { path: '', redirectTo: 'upload', pathMatch: 'full'},
  { path: 'upload', component: UploadComponent},
  { path: '**', component: UploadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOps)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
