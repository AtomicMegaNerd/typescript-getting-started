import { Person } from "./person";

export class Player implements Person {
  name: string;
  age: number;
  highScore: number;

  // keyword function not needed for methods :)
  formatName() {
    return this.name.toUpperCase();
  }
}
