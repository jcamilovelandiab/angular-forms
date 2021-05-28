export interface Favorite {
  id: number;
  name: string;
}

export interface Person {
  name: string;
  favorites: Favorite[]
}