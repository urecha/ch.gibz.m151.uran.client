import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './dashboard/gallery.component';

import { ExhibitService } from './services/exhibit/exhibit.service';
import { CommentService } from './services/comment/comment.service';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ExhibitService,
    CommentService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
