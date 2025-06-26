import {
  EventCardType,
  MenuCardType,
  ServicesCardType,
  TestimonialsCardType,
} from "../types/types";

export const servicesCards: ServicesCardType[] = [
  {
    id: 1,
    img: "./servicesCards/koktel-img.png",
    icon: "./servicesCards/koktel-icon.png",
    title: "Коктел мени",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero numquam neque esse ea rem nobis qui eum magni magnam maiores.",
    pageLink: "/menu",
  },

  {
    id: 2,
    img: "./servicesCards/iznajmiprostor-img.png",
    icon: "./servicesCards/iznajmiprostor-icon.png",
    title: "Изнајми простор",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero numquam neque esse ea rem nobis qui eum magni magnam maiores.",
    hashLink: "iznajmi-prostor",
  },
  {
    id: 3,
    img: "./servicesCards/ketering-img.png",
    icon: "./servicesCards/ketering-icon.png",
    title: "Коктел кетеринг",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero numquam neque esse ea rem nobis qui eum magni magnam maiores.",
    hashLink: "koktel-ketering",
  },
  {
    id: 4,
    img: "./servicesCards/kotur-img.png",
    icon: "./servicesCards/kotur-icon.png",
    title: "Котур",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero numquam neque esse ea rem nobis qui eum magni magnam maiores.",
    hashLink: "kotur",
  },
];

export const sampleCards: EventCardType[] = [
  {
    id: 1,
    img: "./eventsCards/eventCard-1.png",
    name: "Meet prespa pre party",
    date: "Септември 5, 2024",
    time: "21:00",
  },
  {
    id: 2,
    img: "./eventsCards/eventCard-2.png",
    name: "Концерт под сенка",
    date: "Јуни 15, 2024",
    time: "12:30",
  },
  {
    id: 3,
    img: "./eventsCards/eventCard-3.png",
    name: "Диско принцип",
    date: "Септември 20, 2024",
    time: "20:00",
  },
];

export const testimonialsCards: TestimonialsCardType[] = [
  {
    id: 1,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum aperiam libero a esse consequuntur doloribus facere quaerat saepe nulla corporis ratione, officiis rem. Rem, minima!",
    user: "Petko Petkovski",
    userIcon: "P",
  },
  {
    id: 2,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum aperiam libero a esse consequuntur doloribus facere quaerat saepe nulla corporis ratione, officiis rem. Rem, minima!",
    user: "Petko Petkovski",
    userIcon: "P",
  },
  {
    id: 3,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum aperiam libero a esse consequuntur doloribus facere quaerat saepe nulla corporis ratione, officiis rem. Rem, minima!",
    user: "Petko Petkovski",
    userIcon: "P",
  },
  {
    id: 4,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum aperiam libero a esse consequuntur doloribus facere quaerat saepe nulla corporis ratione, officiis rem. Rem, minima!",
    user: "Petko Petkovski",
    userIcon: "P",
  },
];

export const menuCards: MenuCardType[] = [
  {
    id: 1,
    category: "Коктели",
    image: "/menu/filter-card-img1.png",
    ingredients: "Vodka, lime juice, syrup",
    popular: 1,
    recommended: 0,
    name: "Lime Fresh",
  },
  {
    id: 2,
    category: "Коктели",
    image: "/menu/filter-card-img2.png",
    ingredients: "Rum, cola, lime",
    popular: 1,
    recommended: 1,
    name: "Cuba Libre",
  },
  {
    id: 3,
    category: "Кафе",
    image: "/menu/filter-card-img3.png",
    ingredients: "Espresso, milk foam",
    popular: 0,
    recommended: 1,
    name: "Cappuccino",
  },
  {
    id: 4,
    category: "Кафе",
    image: "/menu/filter-card-img4.png",
    ingredients: "Espresso, hot water",
    popular: 1,
    recommended: 1,
    name: "Americano",
  },
  {
    id: 5,
    category: "Кафе",
    image: "/menu/filter-card-img5.png",
    ingredients: "Espresso, steamed milk",
    popular: 1,
    recommended: 0,
    name: "Latte",
  },
  {
    id: 6,
    category: "Мезе",
    image: "/menu/filter-card-img6.png",
    ingredients: "Hummus, olive oil, paprika",
    popular: 0,
    recommended: 1,
    name: "Hummus",
  },
  {
    id: 7,
    category: "Мезе",
    image: "/menu/filter-card-img7.png",
    ingredients: "Yogurt, cucumber, garlic",
    popular: 0,
    recommended: 0,
    name: "Tzatziki",
  },
  {
    id: 8,
    category: "Мезе",
    image: "/menu/filter-card-img8.png",
    ingredients: "Eggplant, garlic, tahini",
    popular: 0,
    recommended: 1,
    name: "Baba Ghanoush",
  },
  {
    id: 9,
    category: "Коктели",
    image: "/menu/filter-card-img9.png",
    ingredients: "Rum, mint, lime, sugar, soda",
    popular: 1,
    recommended: 1,
    name: "Mojito",
  },
  {
    id: 10,
    category: "Коктели",
    image: "/menu/filter-card-img10.png",
    ingredients: "Tequila, orange liqueur, lime",
    popular: 1,
    recommended: 1,
    name: "Margarita",
  },
];
