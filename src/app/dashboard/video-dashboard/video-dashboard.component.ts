import { Component, OnInit } from '@angular/core';
import { Video } from '../../app.types';
import { HttpClient } from '@angular/common/http';

const videosUrl = 'https://api.angularbootcamp.com/videos';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})

export class VideoDashboardComponent implements OnInit {

  selectedVideo?: Video;
  videoData: Video[] = [];

  constructor(httpClient: HttpClient) {
    httpClient
      .get<Video[]>(videosUrl)
      .subscribe(videos => {
        this.videoData = videos;
        this.selectedVideo = this.videoData[0];
      });
  }

  ngOnInit() {
  }

}
