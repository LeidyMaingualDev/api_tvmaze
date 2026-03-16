import { Component, OnInit } from '@angular/core';
import { TvmazeService } from '../../services/tvmaze.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {

  images:any[]=[];

  constructor(private tvmazeService:TvmazeService){}

  ngOnInit(): void {
    this.tvmazeService.getImages().subscribe(data=>{
      this.images = data;
    });
  }

}