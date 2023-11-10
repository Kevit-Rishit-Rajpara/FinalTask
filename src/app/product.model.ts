export class Product {
  public name: string | undefined;
  public description: string | undefined;
  public imageUrl: string | undefined;
  public actualPrice: number | undefined;
  public discPrice: number | undefined;
  public quantity: number | undefined;
  public sizes: [] | undefined;
  public colors: [] | undefined;
  public ratings: [] | undefined;

  constructor(
    name: string,
    desc: string,
    imageUrl: string,
    actualPrice: number,
    discPrice: number,
    quantity: number,
    sizes: [],
    colors: [],
    ratings: []
  ) {
      this.name = name;
      this.description = desc;
      this.imageUrl = imageUrl;
      this.actualPrice = actualPrice;
      this.discPrice = discPrice;
      this.quantity = quantity;
      this.sizes = sizes;
      this.colors = colors;
      this.ratings = ratings;
  }
}
