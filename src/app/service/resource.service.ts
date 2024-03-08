import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';
import { Observable } from 'rxjs';
import { ResourceDTO } from '../model/resource';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  constructor(
    private http: HttpClient,
    private sharedService: SharedService,
    private router: Router,
  ) {}

  getResources(): Observable<any> {
    const headers = this.sharedService.getAuthHeaders();
    return this.http.get(`${this.sharedService.apiUrl}/resources`, {headers})
  }

  getResourceById(id: string): Observable<any> {
    const headers = this.sharedService.getAuthHeaders();
    return this.http.get(`${this.sharedService.apiUrl}/resources/${id}`, {headers})
  }

  getCategories(): Observable<any> {
    const headers = this.sharedService.getAuthHeaders();
    return this.http.get(`${this.sharedService.apiUrl}/category`, {headers})
  }

  getTypes(): Observable<any> {
    const headers = this.sharedService.getAuthHeaders();
    return this.http.get(`${this.sharedService.apiUrl}/type`, {headers})
  }

  getReach(): Observable<any> {
    const headers = this.sharedService.getAuthHeaders();
    return this.http.get(`${this.sharedService.apiUrl}/reach`, {headers})
  }

  getRelations(): Observable<any> {
    const headers = this.sharedService.getAuthHeaders();
    return this.http.get(`${this.sharedService.apiUrl}/relation`, {headers})
  }

  createResource(body: ResourceDTO): Observable<any> {
    const headers = this.sharedService.getAuthHeaders();
    return this.http.post(`${this.sharedService.apiUrl}/resources`, body, {headers})
  }
  
  goToResourcePanel(id: number): void {
    this.router.navigate(['resource/view/', id]);
  }
}
