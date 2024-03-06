import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ResourceService } from '../service/resource.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(
    private cookieService: CookieService,
    private resourceService: ResourceService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getResources()
    this.getRelation()
    this.getType()
    this.getCategory()
  }

  //TODO : fetch les resources avec le back.
  resources: any = null
  resourceRelations: any = null
  resourceType: any = null
  resourceCategories: any = null

  logout(): void {
    this.cookieService.delete('authToken');
    this.router.navigate(['login']);
  }

  goToLogin(): void {
    this.router.navigate(['login']);
  }

  getType(): void {
    this.resourceService.getTypes().subscribe((type: any) => {
      this.resourceType = type;
    })
  }

  getRelation(): void {
    this.resourceService.getRelations().subscribe((relations: any) => {
      this.resourceRelations = relations;
    })
  }

  getCategory(): void {
    this.resourceService.getCategories().subscribe((categories: any) => {
      this.resourceCategories = categories;
    })
  }

  getResources(): void {
    this.resourceService.getResources().subscribe((resources: any) => {
      return this.resources = resources;
    })
  }

  checkRight(): void {
    const tokenData = this.cookieService.get('authToken');
    console.log(tokenData);
  }
}
