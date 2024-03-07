export interface ResourceDTO {
  title : string,
  categorie : string,
  relation : string,
  reach : string,
  content : string,
  file: File | null,
}

export class Resource {
  constructor(public title: string, public categorie: string, public relation: string, public reach: string, public content: string) {}

  // public toJSON(): ResourceDTO {
  //   return {
  //     title : this.title,
  //     categorie : this.CategorieFilter[0].categorie,
  //     relation : this.RelationFilter[0].relation,
  //     reach : this.reach_id,
  //     content : this.content,
  //     file: this.file,
  //   }
  // }
}
