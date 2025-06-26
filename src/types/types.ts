export interface ServicesCardType {
  id: number;
  img: string;
  icon: string;
  title: string;
  description: string;
  pageLink?: string;
  hashLink?: string;
}

export interface EventCardType {
  id: number;
  img: string;
  name: string;
  date: string;
  time: string;
}

export interface ApiEvent {
  id: number;
  name: string;
  date: string;
  time: string;
  image: string;
}

export interface TestimonialsCardType {
  id: number;
  description: string;
  user: string;
  userIcon: string;
}

export interface MenuCardType {
  category: "Коктели" | "Кафе" | "Мезе";
  id: number;
  image: string;
  ingredients: string;
  popular: number;
  recommended: number;
  name: string;
}
