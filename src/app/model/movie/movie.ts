import { OnInit } from "@angular/core";

export class Movie{

  constructor(
    public name: string,
    public image: string,
    public id: number,
    public description: string) {
  } 
}
