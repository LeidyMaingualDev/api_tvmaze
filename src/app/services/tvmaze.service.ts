import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvmazeService {

  private showUrl = 'https://api.tvmaze.com/shows/2993';
  private episodesUrl = 'https://api.tvmaze.com/shows/2993/episodes';
  private personUrl = 'https://api.tvmaze.com/people/2993';
  private imagesUrl = 'https://api.tvmaze.com/shows/2993/images';

  constructor(private http: HttpClient) { }

  getShow(): Observable<any> {
    return this.http.get(this.showUrl);
  }

  getEpisodes(): Observable<any> {
    return this.http.get(this.episodesUrl);
  }

  getPerson(): Observable<any> {
    return this.http.get(this.personUrl);
  }

  getImages(): Observable<any> {
    return this.http.get(this.imagesUrl);
  }

}