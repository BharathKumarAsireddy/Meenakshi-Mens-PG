import {
  Snowflake,
  Wifi,
  Camera,
  FlameKindling,
  GlassWater,
  WashingMachine,
  Car,
  UtensilsCrossed,
  Droplets,
  type LucideIcon,
} from "lucide-react";

export type Facility = {
  icon: LucideIcon;
  title: string;
  description: string;
  category: "Comfort" | "Safety" | "Food" | "Convenience";
};

export const facilities: Facility[] = [
  {
    icon: Snowflake,
    title: "Air-Conditioned Rooms",
    description:
      "Every room is fitted with a split AC unit, so restful sleep and comfortable stays are guaranteed through every season.",
    category: "Comfort",
  },
  {
    icon: Wifi,
    title: "24/7 Free High-Speed WiFi",
    description:
      "Stay connected around the clock with complimentary high-speed WiFi across all rooms and common areas.",
    category: "Convenience",
  },
  {
    icon: Camera,
    title: "CCTV Surveillance",
    description:
      "Round-the-clock CCTV monitoring at entrances and common areas keeps every resident safe and secure.",
    category: "Safety",
  },
  {
    icon: FlameKindling,
    title: "Hot Water Supply",
    description:
      "Round-the-day hot water in every bathroom, perfect for refreshing showers no matter the weather outside.",
    category: "Comfort",
  },
  {
    icon: GlassWater,
    title: "Purified Drinking Water",
    description:
      "RO-purified drinking water is available at all times, so hydration never comes with a second thought.",
    category: "Food",
  },
  {
    icon: WashingMachine,
    title: "Washing Machines",
    description:
      "On-site washing machines take laundry day off your to-do list, with dedicated slots for every resident.",
    category: "Convenience",
  },
  {
    icon: Car,
    title: "Parking Facility",
    description:
      "Secure, dedicated parking space for two-wheelers and vehicles right within the premises.",
    category: "Convenience",
  },
  {
    icon: UtensilsCrossed,
    title: "Veg & Non-Veg Meals",
    description:
      "Freshly prepared home-style breakfast, lunch and dinner with both vegetarian and non-vegetarian options through the week.",
    category: "Food",
  },
  {
    icon: Droplets,
    title: "24-Hour Water Supply",
    description:
      "Uninterrupted water supply through the day, so there's never a wait for a bucket to fill.",
    category: "Comfort",
  },
];

export const facilityCategories = ["Comfort", "Food", "Safety", "Convenience"] as const;
