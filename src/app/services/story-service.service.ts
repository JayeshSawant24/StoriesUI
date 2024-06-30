import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class StoryServiceService {
  apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) {

  }

  getStories(pageNumber: number, pageSize: number): any {
    return this.httpClient.get(`${this.apiUrl}/Stories/getallstories/${pageNumber}/${pageSize}`);
  }

  getStoryById(storyId: any): any{
    return this.httpClient.get(`${this.apiUrl}/api/Stories/getstorybyid/${storyId}`);
  }
}
