import { Component, OnInit } from "@angular/core";
import { GiphyService } from "../services/giphy.service";

@Component({
  selector: "app-search-page",
  templateUrl: "./search-page.component.html",
  styleUrls: ["./search-page.component.scss"],
})
export class SearchPageComponent implements OnInit {
  imageList = [];
  categoryList = [
    "Graphics",
    "Addons",
    "Buttons",
    "Infographics",
    "PSDs",
    "Fonts",
    "Forms",
    "Graphs",
  ];
  constructor(private giphyService: GiphyService) {}

  ngOnInit() {
    this.searchApi();
  }

  searchApi() {
    this.giphyService.searchGif("sports").subscribe(
      (response: any) => {
        console.log("response : ", response.data);
        this.imageList = response.data;
      },
      (error) => {
        this.imageList = [];
      }
    );
  }

  onLoad(event, imageObj, index) {
    imageObj.load = true;
  }
}
