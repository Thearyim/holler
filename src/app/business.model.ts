export class Business {
  private id: string;
  public name: string;
  public description: string;
  public category: string;
  public address: string;
  public phone: string;
  public businessHours: string;

  public constructor (name: string, description: string, category: string, address: string, phone: string, businessHours: string, id: string = null)
  {
    this.id = id;
    this.name = name;
    this.description = description;
    this.category = category;
    this.address = address;
    this.phone = phone;
    this.businessHours = businessHours;
  }
}

export class Review {
  public reviewer: string;
  public score: number;
  public reviewDate: Date;

  public constructor (reviewer: string, score: number, reviewDate: Date) { }
}

export class BusinessReview {
  public businessId: string;
  public reviews: Review[];

  public constructor (businessId: string, reviews: Review[]) { }
}
