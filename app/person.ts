export interface Person {
  name: string;
  age?: number; // Optional
  formatName: () => string;
}
