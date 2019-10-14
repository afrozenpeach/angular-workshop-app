import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Video } from '../../app.types';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})

export class VideoListComponent implements OnInit {

  @Input() videos: Video[] = [];
  @Output() videoSelected = new EventEmitter<Video>();

  selectedVideo: Video | undefined;

  constructor() {
  }

  ngOnInit() {
    this.selectVideo(this.videos[0]);
  }

  selectVideo(video: Video) {
    this.selectedVideo = video;
    this.videoSelected.emit(video);
  }
}
