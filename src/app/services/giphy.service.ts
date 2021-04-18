import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  // link = "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=";
  http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
}

searchGif(gifName)
{
  // https://api.giphy.com/v1/gifs/search?api_key=IHZbkzq78EUShpjoDd6MtIZHtC2p7X3k&q=excel&limit=25&offset=0&rating=g&lang=en
  var apiLink:any =`${environment.apiKey}search?api_key=${environment.gifApiKey}&q=${gifName}&limit=5&offset=0&rating=g&lang=en`;
return this.http.get(apiLink);
}
}
