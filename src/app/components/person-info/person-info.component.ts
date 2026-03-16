import { Component, OnInit } from '@angular/core';
import { TvmazeService } from '../../services/tvmaze.service';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css']
})
export class PersonInfoComponent implements OnInit {

  person:any;

  constructor(private tvmazeService: TvmazeService){}

  ngOnInit(): void {
    this.tvmazeService.getPerson().subscribe(data=>{
      this.person = data;
    });
  }

}