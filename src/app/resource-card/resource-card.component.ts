import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resource-card',
  templateUrl: './resource-card.component.html',
  styleUrl: './resource-card.component.scss'
})
export class ResourceCardComponent {
  constructor(
    private router: Router
  ) {}

  @Input()
  resource: any;
  
  goToResourcePanel(): void {
    this.router.navigate(['resource-panel'])
  }
}
