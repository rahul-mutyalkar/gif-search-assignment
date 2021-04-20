import { Component, OnInit } from "@angular/core";
import { GiphyService } from "../services/giphy.service";

@Component({
  selector: "app-search-page",
  templateUrl: "./search-page.component.html",
  styleUrls: ["./search-page.component.scss"],
})
export class SearchPageComponent implements OnInit {
  imageList = [];
  limit = null;
  limitList = [5, 25, 50];
  searchText = null;
  httpStatus = false;
  categoryList = [
    "Graphics",
    "Addons",
    "Buttons",
    "Infographics",
    "PSDs",
    "Fonts",
    "Forms",
    "Graphs",
    "Icons",
    "Textures",
    "GUI",
    "Logos",
    "Templates",
    "Patterns",
    "Navigation",
    "Vectors",
    "Themese",
    "Backgrounds",
    "UI kits",
    "Business Cards",
  ];
  constructor(private giphyService: GiphyService) {}

  ngOnInit() {
    // this.searchApi();
  }

  searchApi(el: HTMLElement) {
    if (this.searchText == null || this.searchText.length == 0) {
      alert('Please enter what you want to search')
      return false;
    }
    this.httpStatus = true;
    const { searchText, limit } = this;
    el.scrollIntoView({ behavior: "smooth" });

    this.giphyService.searchGif(searchText, limit).subscribe(
      (response: any) => {
        console.log("response : ", response.data);
        this.httpStatus = false;
        this.imageList = response.data;
      },
      (error) => {
        this.imageList = [];
        this.httpStatus = false;
      }
    );
  }

  onLoad(event, imageObj, index) {
    imageObj.load = true;
  }
}
