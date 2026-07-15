export type DayMenu = {
  day: string;
  short: string;
  breakfast: string;
  lunch: string;
  dinner: string;
  dinnerNote?: "non-veg";
};

export const weeklyMenu: DayMenu[] = [
  {
    day: "Monday",
    short: "MON",
    breakfast: "Upma",
    lunch: "Rice, Rasam, Veg Curry / Fry Curry, Buttermilk, Dal / Sambar",
    dinner: "Rice, Dal / Sambar, Veg Curry, Buttermilk",
  },
  {
    day: "Tuesday",
    short: "TUE",
    breakfast: "Dosa",
    lunch: "Rice, Rasam, Veg Curry / Fry Curry, Buttermilk, Dal / Sambar",
    dinner: "Rice, Dal / Sambar, Veg Curry, Buttermilk",
  },
  {
    day: "Wednesday",
    short: "WED",
    breakfast: "Idly",
    lunch: "Rice, Rasam, Veg Curry / Fry Curry, Buttermilk, Dal / Sambar",
    dinner: "Rice, Dal / Sambar, Non-Veg Curry, Buttermilk",
    dinnerNote: "non-veg",
  },
  {
    day: "Thursday",
    short: "THU",
    breakfast: "Pulihora",
    lunch: "Rice, Rasam, Veg Curry / Fry Curry, Buttermilk, Dal / Sambar",
    dinner: "Rice, Dal / Sambar, Veg Curry, Buttermilk",
  },
  {
    day: "Friday",
    short: "FRI",
    breakfast: "Idly",
    lunch: "Rice, Rasam, Veg Curry / Fry Curry, Buttermilk, Dal / Sambar",
    dinner: "Rice, Dal / Sambar, Veg Curry, Buttermilk",
  },
  {
    day: "Saturday",
    short: "SAT",
    breakfast: "Pongal",
    lunch: "Rice, Rasam, Veg Curry / Fry Curry, Buttermilk, Dal / Sambar",
    dinner: "Rice, Dal / Sambar, Veg Curry, Buttermilk",
  },
  {
    day: "Sunday",
    short: "SUN",
    breakfast: "Chapatti",
    lunch: "Rice, Rasam, Veg Curry / Fry Curry, Buttermilk, Dal / Sambar",
    dinner: "Rice, Dal / Sambar, Non-Veg Curry, Buttermilk",
    dinnerNote: "non-veg",
  },
];
