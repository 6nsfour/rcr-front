import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../service/resource.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resource-view-panel',
  templateUrl: './resource-view-panel.component.html',
  styleUrl: './resource-view-panel.component.scss'
})
export class ResourceViewPanelComponent implements OnInit {

  constructor(
    private resourceService: ResourceService,
    private route: ActivatedRoute,
  ) {}

  resource: any;

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.assignResource()
    })
  }

  assignResource(): void {
    this.getResource().subscribe((resource: any) => {
      console.log(resource);
      
      return this.resource = resource
    })
  }

  getResource(): Observable<any> {
    return this.resourceService.getResourceById(this.route.snapshot.paramMap.get('id') as string)
  }
}
