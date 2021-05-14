import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './dashboard/gallery.component';

const routes: Routes = [
  {
     path: 'gallery', component: GalleryComponent
  },
  {
     path: '', redirectTo: 'gallery', pathMatch: 'full' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
