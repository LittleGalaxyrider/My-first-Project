export class Recipe {
  public name: string;
  public description: string | undefined;
  public imagePath: string;
  desc: string;

  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.desc = desc;
    this.imagePath = imagePath;
  }
}
