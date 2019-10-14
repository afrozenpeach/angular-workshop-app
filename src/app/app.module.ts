import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideoDashboardComponent } from './dashboard/video-dashboard/video-dashboard.component';
import { VideoListComponent } from './dashboard/video-list/video-list.component';
import { VideoPlayerComponent } from './dashboard/video-player/video-player.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoDashboardComponent,
    VideoListComponent,
    VideoPlayerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
