export type Furniture = {
  name: string;
  price: number;
  currency: string;
  productLink?: string;
  // Surely there is a way to see if a website has images that could be used? hmmm
  imageLink?: string;
  id: string;
};

export type Room = {
  wallColor?: string;
  id: string;
  name: string;
  furniture: Furniture[];
  order: number;
};
