import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SearchService {

    constructor(private httpClient: HttpClient) { }
    getInfo(repo) {
        return this.httpClient.get('https://api.github.com/users/' + repo)
    }

    getUsers(repo) {
        return this.httpClient.get('https://api.github.com/users/' + repo)
    }
}
