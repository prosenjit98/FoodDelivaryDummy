import { icons, images } from "../constants"

export const initialCurrentLocation = {
  streetName: "Kuching",
  gps: {
    latitude: 1.5496614931,
    longnitude: 110.3638186691992
  }
}

export const categoryData = [
  {
    id: 1,
    name: "Rice",
    icon: icons.rice_bowl
  },
  {
    id: 2,
    name: "Noddles",
    icon: icons.noodle
  },
  {
    id: 3,
    name: "Hot Dogs",
    icon: icons.hotdog
  },
  {
    id: 4,
    name: "Salad",
    icon: icons.salad
  },
  {
    id: 6,
    name: "Pizza",
    icon: icons.pizza
  },
  {
    id: 7,
    name: "Sushi",
    icon: icons.sushi
  },
  {
    id: 8,
    name: "Drinks",
    icon: icons.drink
  },
  {
    id: 9,
    name: "Donut",
    icon: icons.donut
  },
]

export const affortable = 1
export const fairPrice = 2
export const expensive = 3

export const resturantData = [
  {
    id: 1,
    name: "Byprogramere buyer",
    rating: 4.8,
    categories: [5, 7],
    priceRating: affortable,
    photo: images.BurgerResturant1,
    duration: "30 - 45 min",
    location: {
      latitude: 1.53496614931,
      longnitude: 110.3538186691992
    },
    courier: {
      avater: images.avatar1
    },
    menu: [{
      menuId: 1,
      name: "Crispy Chicken Burger",
      photo: images.BurgerResturant1,
      description: "Burger with crispy chicken, cheese and letture.",
      calories: 200,
      price: 10
    },
    {
      menuId: 2,
      name: "Crispy Chi23cken Burger",
      photo: images.BurgerResturant1,
      description: "Burger with crispy chicken, cheese and letture.",
      calories: 200,
      price: 10
    },
    {
      menuId: 3,
      name: "Crispy Ch53icken Burger",
      photo: images.BurgerResturant1,
      description: "Burger with crispy chicken, cheese and letture.",
      calories: 200,
      price: 10
    }]
  },
  {
    id: 2,
    name: "Byprogramere buyer 2",
    rating: 4.8,
    categories: [5, 7, 8],
    priceRating: affortable,
    photo: images.BurgerResturant1,
    duration: "15 - 25 min",
    location: {
      latitude: 1.53496614931,
      longnitude: 110.3538186691992
    },
    courier: {
      avater: images.avatar1
    },
    menu: [{
      menuId: 1,
      name: "Crispy Chicken Burger",
      photo: images.BurgerResturant1,
      description: "Burger with crispy chicken, cheese and letture.",
      calories: 200,
      price: 10
    },
    {
      menuId: 2,
      name: "Crispy Chicken Burger",
      photo: images.BurgerResturant1,
      description: "Burger with crispy chicken, cheese and letture.",
      calories: 200,
      price: 10
    },
    {
      menuId: 3,
      name: "Crispy Chicken Burger",
      photo: images.BurgerResturant1,
      description: "Burger with crispy chicken, cheese and letture.",
      calories: 200,
      price: 10
    }]
  },
  {
    id: 3,
    name: "Byprogramere buyer 2",
    rating: 2,
    categories: [1, 3, 4],
    priceRating: affortable,
    photo: images.BurgerResturant1,
    duration: "10 - 15 min",
    location: {
      latitude: 1.53496614931,
      longnitude: 110.3538186691992
    },
    courier: {
      avater: images.avatar1
    },
    menu: [{
      menuId: 1,
      name: "Crispy Chicken Burger",
      photo: images.BurgerResturant1,
      description: "Burger with crispy chicken, cheese and letture.",
      calories: 200,
      price: 10
    },
    {
      menuId: 2,
      name: "Crispy Chicken Burger",
      photo: images.BurgerResturant1,
      description: "Burger with crispy chicken, cheese and letture.",
      calories: 200,
      price: 10
    },
    {
      menuId: 3,
      name: "Crispy Chicken Burger",
      photo: images.BurgerResturant1,
      description: "Burger with crispy chicken, cheese and letture.",
      calories: 200,
      price: 10
    }]
  }
]