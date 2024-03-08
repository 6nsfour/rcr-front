import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResourceService } from '../service/resource.service';
import {CookieService} from "ngx-cookie-service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    private cookieService: CookieService,
    private resourceService: ResourceService,
    private router: Router,
  ) {
  }

  isModalOpen = false;
  selectedResource: any = {
    reach: { value: null },
    status: { value: null }
  };

  resources: any = [];
  categories: any = [];

  ngOnInit(): void {
    this.getResources()
  }

  getResources(): void {
    this.resourceService.getResources().subscribe((resources: any) => {
      console.log(resources)
      return this.resources = resources;
    })
  }

  deleteResource(id: number): void {
      this.resourceService.deleteResource(id).subscribe({
        next: () => {
          this.getResources();
        },
        error: (error) => {
          console.error('Erreur lors de la suppression de la ressource', error);
        }
      });
  }

  openEditModal(resource: any): void {
    this.selectedResource = {...resource};
    this.isModalOpen = true;
    console.log(this.selectedResource);
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  validateResource(id: number): void {
    const body = { status_id: 3  }
    this.resourceService.updateResource(body, id).subscribe({
      next: () => {
        console.log('Ressource mise à jour avec succès');
        this.closeModal();
        this.getResources();
      },
      error: () => {
        console.error('Erreur lors de la mise à jour de la ressource');
      }
    });
  }
}
