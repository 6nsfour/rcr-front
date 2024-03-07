import {Component, OnDestroy, OnInit} from '@angular/core';
import {ResourceService} from "../service/resource.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ResourceDTO} from "../model/resource";
import {Editor, toHTML} from "ngx-editor";

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
    categorie : new FormControl(null, Validators.required),
    relation : new FormControl(null, Validators.required),
    reach : new FormControl(null, Validators.required),
    content : new FormControl(null, Validators.required),
    file_upload : new FormControl(null)
  })

  types = null;
  categories = null;
  relations = null;
  html = '';

  ngOnInit(): void {
    this.getCategories();
    this.getTypes();
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

  getCategories() {
    this.resourceService.getCategories().subscribe((categories: any) => {
      this.categories = categories;
    })
  }

  log(): void {
    console.log(this.html)
  }

  createResource() : void {
    const rawValue = this.createResourceForm.getRawValue();
    const body : ResourceDTO = {
      title : rawValue.title,
      categorie : rawValue.categorie,
      relation : rawValue.relation,
      reach : rawValue.reach,
      content : toHTML(rawValue.content),
      file : rawValue.file_upload
    }
    console.log(body)
  }
}
