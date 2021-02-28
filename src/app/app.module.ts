import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UploadComponent } from './views/upload/upload.component';
import { UploaderDirective } from './directives/uploader.directive';
import { ProgressComponent } from './widgets/progress/progress.component';
import { VideoPlayerComponent } from './widgets/video-player/video-player.component';
import { NavbarComponent } from './widgets/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    UploaderDirective,
    ProgressComponent,
    VideoPlayerComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
