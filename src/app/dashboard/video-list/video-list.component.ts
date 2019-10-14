import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Video } from '../../app.types';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})

export class VideoListComponent implements OnInit {

  @Input() videos: Video[] = [];
  @Input() selectedVideo: Video | undefined;
  @Output() videoSelected = new EventEmitter<Video>();

  constructor() {
  }

  ngOnInit() {
    this.selectVideo(this.videos[0]);
  }

  selectVideo(video: Video) {
    this.videoSelected.emit(video);
  }
  
}
