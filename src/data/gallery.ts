export type GalleryItem = {
  title: string;
  category: "Rooms" | "Dining" | "Common Areas" | "Exteriors" | "Highlights";
  gradient: string;
  image?: string;
  tall?: boolean;
};

// Tiles with a real `image` render that photo; the rest fall back to a
// decorative gradient placeholder until more photography is supplied.
export const galleryItems: GalleryItem[] = [
  {
    title: "Building Exterior",
    category: "Exteriors",
    gradient: "from-maroon-700 via-maroon-600 to-gold-600",
    image: "/images/exterior-front.jpeg",
    tall: true,
  },
  {
    title: "Meenakshi Men's PG — Info Card",
    category: "Highlights",
    gradient: "from-maroon-900 via-maroon-700 to-gold-600",
    image: "/images/pg-info-card.jpeg",
    tall: true,
  },
  {
    title: "Main Gate & Entrance",
    category: "Exteriors",
    gradient: "from-gold-700 via-maroon-600 to-maroon-900",
    image: "/images/entrance-parking.jpeg",
  },
  { title: "Dining Hall", category: "Dining", gradient: "from-gold-600 via-gold-500 to-maroon-700" },
  { title: "Deluxe AC Room", category: "Rooms", gradient: "from-maroon-700 via-maroon-600 to-gold-600" },
  {
    title: "Street View",
    category: "Exteriors",
    gradient: "from-maroon-900 via-maroon-600 to-gold-500",
    image: "/images/exterior-street.jpeg",
    tall: true,
  },
  { title: "Common Lounge", category: "Common Areas", gradient: "from-maroon-800 via-maroon-500 to-gold-400" },
  { title: "Twin-Sharing Room", category: "Rooms", gradient: "from-maroon-600 via-gold-500 to-gold-300" },
  { title: "Washing Area", category: "Common Areas", gradient: "from-gold-500 via-maroon-700 to-maroon-900" },
  { title: "Study Corner", category: "Common Areas", gradient: "from-maroon-700 via-maroon-900 to-gold-600", tall: true },
  { title: "Meal Spread", category: "Dining", gradient: "from-gold-400 via-gold-600 to-maroon-800" },
];
