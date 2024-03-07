import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ResourceService } from '../service/resource.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnDestroy {

  constructor(
    private cookieService: CookieService,
    private resourceService: ResourceService,
    private router: Router,
  ) {}

  ngOnDestroy(): void {
    this.getRelation().unsubscribe();
    this.getType().unsubscribe();
    this.getCategory().unsubscribe();
    this.getResources().unsubscribe();
  }

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

  goToResourcePanel(id: number): void {
    this.resourceService.goToResourcePanel(id);
  }

  getType(): Subscription {
    return this.resourceService.getTypes().subscribe((type: any) => {
      this.resourceType = type;
    })
  }

  getRelation(): Subscription {
    return this.resourceService.getRelations().subscribe((relations: any) => {
      this.resourceRelations = relations;
    })
  }

  getCategory(): Subscription {
    return this.resourceService.getCategories().subscribe((categories: any) => {
      this.resourceCategories = categories;
    })
  }

  getResources(): Subscription {
    return this.resourceService.getResources().subscribe((resources: any) => {
      console.log(resources);
      
      return this.resources = resources;
    })
  }

  checkRight(): void {
    const tokenData = this.cookieService.get('authToken');
    console.log(tokenData);
  }

  
}
