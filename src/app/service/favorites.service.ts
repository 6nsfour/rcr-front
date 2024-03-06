import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SharedService} from "./shared.service";

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor(
    private http: HttpClient,
    private sharedService: SharedService,
  ) { }

  getFavorites() {
    const headers = this.sharedService.getAuthHeaders();
    return this.http.get(`${this.sharedService.apiUrl}/favorite/`, { headers })
  }
}
