import {Component, OnDestroy, OnInit} from '@angular/core';
import {ResourceService} from "../service/resource.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ResourceDTO} from "../model/resource";
import {Editor, toHTML} from "ngx-editor";
import { CategoryDTO } from '../model/category';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrl: './creation.component.scss'
})
export class CreationComponent implements OnInit, OnDestroy {

  editor: Editor = new Editor();

  constructor(
    private resourceService: ResourceService,
) {
  }

  createResourceForm : FormGroup = new FormGroup({
    title : new FormControl(null, Validators.required),
    categories : new FormControl(null, Validators.required),
    relations : new FormControl(null, Validators.required),
    type : new FormControl(null, Validators.required),
    reach : new FormControl(null, Validators.required),
    content : new FormControl(null, Validators.required),
    file_upload : new FormControl(null)
  })

  types: any = null;
  categories: any = null;
  relations: any = null;
  reachs: any = null;

  html = '';

  ngOnInit(): void {
    this.getCategories();
    this.getTypes();
    this.getReach();
    this.getRelations();
    this.editor = new Editor();
  }

  // make sure to destroy the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }

  getTypes() {
    this.resourceService.getTypes().subscribe((types: any) => {
      this.types = types;
    })
  }

  getRelations() {
    this.resourceService.getRelations().subscribe((relations: any) => {
      this.relations = relations;
    })
  }

  getCategories(): Subscription {
    return this.resourceService.getCategories().subscribe((categories: any) => {
      this.categories = categories;
    })
  }

  getReach() {
    this.resourceService.getReach().subscribe((reach: any) => {
      this.reachs = reach;
    })
  }


  createResource() : void {
    const rawValue = this.createResourceForm.getRawValue();
    const body : ResourceDTO = {
      title : rawValue.title,
      categories : rawValue.categories,
      relations : rawValue.relations,
      type_id : rawValue.type,
      reach_id : rawValue.reach,
      user_id : '1',
      status_id : 1,
      content : toHTML(rawValue.content),
      file : rawValue.file_upload
    }
    console.log(body);
    
    this.resourceService.createResource(body).subscribe((resource) => {
      console.log(resource);
      
    })
  }
}
