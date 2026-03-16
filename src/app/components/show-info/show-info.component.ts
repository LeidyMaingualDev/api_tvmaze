import { Component, OnInit } from '@angular/core';
import { TvmazeService } from '../../services/tvmaze.service';

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.css']
})
export class ShowInfoComponent implements OnInit {

  show:any;

  constructor(private tvmazeService: TvmazeService){}

  ngOnInit(): void {
    this.tvmazeService.getShow().subscribe(data=>{
      this.show = data;
    });
  }

}