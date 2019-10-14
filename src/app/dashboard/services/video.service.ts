import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Video } from '../../app.types';
import { Injectable } from '@angular/core';

const videosUrl = 'https://api.angularbootcamp.com/videos';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
    
    constructor(private http: HttpClient) {}

    loadVideos(): Observable<Video[]> {
        return this.http.get<Video[]>(videosUrl);
    }
}