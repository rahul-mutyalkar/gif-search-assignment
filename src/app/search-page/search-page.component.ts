
import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../services/giphy.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  imageList=[];
  constructor(private giphyService:GiphyService) { }

  ngOnInit() {
    this.searchApi()
  }

searchApi()
{
  this.giphyService.searchGif('sports').subscribe((response:any)=>{
    console.log('response : ',response.data);
    this.imageList = response.data;
  },(error)=>{
    // console.log('error : ',error);
    this.imageList = [];
  })
}

onLoad(event,imageObj,index) {
  // console.log('onLoad : ',index);
  imageObj.load=true;
}

}
