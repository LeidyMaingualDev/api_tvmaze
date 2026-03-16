import { Component, OnInit } from '@angular/core';
import { TvmazeService } from '../../services/tvmaze.service';

@Component({
  selector: 'app-episodes-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.css']
})
export class EpisodesListComponent implements OnInit {

  episodes:any[] = [];

  constructor(private tvmazeService: TvmazeService){}

  ngOnInit(): void {
    this.tvmazeService.getEpisodes().subscribe(data=>{
      this.episodes = data;
    });
  }

}