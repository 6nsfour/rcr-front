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
    reach: { value: '' }
  };

  resources: any = [];
  categories: any = [];

  ngOnInit(): void {
    this.getResources()
    //this.getCategories()
  }
/*
  getCategories(): void{
    this.resourceService.getCategories().subscribe((categories: any) => {
      return this.categories = categories;
    })
  }*/
  getResources(): void {
    this.resourceService.getResources().subscribe((resources: any) => {
      console.log(resources)
      return this.resources = resources;
    })
  }

  deleteResource(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette ressource ?')) {
      this.resourceService.deleteResource(id).subscribe({
        next: () => {
          alert('Ressource supprimée avec succès.');
          //this.resources = this.resources.filter(resource => resource.id !== id);
        },
        error: (error) => {
          console.error('Erreur lors de la suppression de la ressource', error);
          alert('Erreur lors de la suppression de la ressource.');
        }
      });
    }
  }

  openEditModal(resource: any): void {
    this.selectedResource = {...resource};
    this.isModalOpen = true;
    console.log(this.selectedResource);
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  updateResource(id: number, resourceData: any): void {
    this.resourceService.updateResource(id, resourceData).subscribe({
      next: (response) => {
        console.log('Ressource mise à jour avec succès', response);
        this.closeModal();
        this.getResources();
      },
      error: (error) => {
        console.error('Erreur lors de la mise à jour de la ressource', error);
      }
    });
  }
}
