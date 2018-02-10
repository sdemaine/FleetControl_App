import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RepositoryService {

  constructor(private http: HttpClient) { }

  repoUrl = 'http://localhost/Sprague.FleetControl.API/api/v1/';


  basePath = 'http://localhost/Sprague.FleetControl.API/api/v1/';
  //  => http://domain.com/api/path/foo/bar

  makeRequest(verb, uri, data) {

    verb = verb.toLowerCase();


    //start with the uri
    let httpArgs = [this.basePath + uri];
    if (verb.match(/post|put/)) {
      httpArgs.push(data);
    }

    return this.http.get('' + httpArgs);

  }


  get(url: string){
    return this.makeRequest('get', url, null);
  }
}
