import { Component, OnInit } from '@angular/core';
import { Video, videos } from '../../app.types';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})

export class VideoDashboardComponent implements OnInit {

  selectedVideo?: Video;
  videos: Video[] = videos;

  constructor() {
  }

  ngOnInit() {
  }

}
