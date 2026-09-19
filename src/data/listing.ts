export interface Photo {
  id: string;
  url: string;
  alt: string;
}

export interface Amenity {
  id: string;
  label: string;
  icon: string; // lucide-react icon name, resolved in the component
  available: boolean; // reference site shows unavailable safety items struck through
}

export interface Review {
  id: string;
  authorName: string;
  authorAvatarUrl: string;
  tenure: string; // e.g. "2 months on Airbnb"
  date: string;
  rating: number;
  text: string;
}

export interface SleepArea {
  id: string;
  label: string;
  subtitle: string;
  photoUrl: string;
}

export interface CoHost {
  id: string;
  name: string;
  avatarUrl: string;
}

export interface NearbyListing {
  id: string;
  title: string;
  photoUrl: string;
  price: number;
  rating: number;
}

export interface ListingData {
  title: string;
  propertyType: string;
  location: string;
  rating: number;
  reviewCount: number;
  isSuperhost: boolean;
  isGuestFavourite: boolean;
  guestCount: number;
  bedroomCount: number;
  bedCount: number;
  bathroomCount: number;
  photos: Photo[];
  sleepAreas: SleepArea[];
  highlights: { id: string; icon: string; title: string; description: string }[];
  description: string;
  neighbourhoodBlurb: string;
  amenities: Amenity[];
  pricePerNight: number;
  currency: string;
  currencySymbol: string;
  discountPercent: number;
  host: {
    name: string;
    avatarUrl: string;
    yearsHosting: number;
    isSuperhost: boolean;
    reviewCount: number;
    rating: number;
    bornDecade: string;
    school: string;
    responseRate: number;
    responseTime: string;
  };
  coHosts: CoHost[];
  cancellationPolicy: string;
  houseRules: string[];
  safetyNotes: string[];
  reviewCategories: { label: string; icon: string; score: number }[];
  reviewTags: { label: string; icon: string; count: number }[];
  ratingDistribution: number[]; // percentage for 5,4,3,2,1 stars, in that order
  reviews: Review[];
  nearbyListings: NearbyListing[];
}

// Replace with your own free-to-use images (Unsplash, Pexels) — never pull
// image URLs from the reference site.
export const listing: ListingData = {
  title: "Villa Serenity — Oceanfront Retreat with Private Pool",
  propertyType: "Entire villa",
  location: "Uluwatu, Bali, Indonesia",
  rating: 4.98,
  reviewCount: 142,
  isSuperhost: true,
  isGuestFavourite: true,
  guestCount: 6,
  bedroomCount: 3,
  bedCount: 4,
  bathroomCount: 3,
  photos: [
    { id: "p1", url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1600&q=80", alt: "Villa exterior with infinity pool at sunset" },
    { id: "p2", url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80", alt: "Open-plan living room with ocean view" },
    { id: "p3", url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80", alt: "Primary bedroom with four-poster bed" },
    { id: "p4", url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80", alt: "Outdoor dining terrace" },
    { id: "p5", url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&q=80", alt: "Bathroom with soaking tub" },
    { id: "p6", url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80", alt: "Villa garden path" },
    { id: "p7", url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&q=80", alt: "Kitchen with island counter" },
    { id: "p8", url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80", alt: "Second bedroom" },
    { id: "p9", url: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&q=80", alt: "Pool loungers at golden hour" },
  ],
  sleepAreas: [
    { id: "s1", label: "Bedroom", subtitle: "1 king bed", photoUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80" },
    { id: "s2", label: "Living room", subtitle: "1 sofa bed", photoUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" },
  ],
  highlights: [
    { id: "h1", icon: "Umbrella", title: "Outdoor entertainment", description: "The pool and alfresco dining are great for sunset drinks." },
    { id: "h2", icon: "Wind", title: "Designed for staying cool", description: "Beat the heat with the A/C and ceiling fans throughout the villa." },
    { id: "h3", icon: "DoorOpen", title: "Self check-in", description: "Check in yourself with a smart lock — no need to coordinate arrival times." },
  ],
  description:
    "Perched above the cliffs of Uluwatu, Villa Serenity blends open-air living with uninterrupted ocean views. Wake up to the sound of waves, spend afternoons by the infinity pool, and watch the sunset melt into the horizon from the terrace. Thoughtfully designed with local teak and stone, the villa sleeps up to six guests across three bedrooms.",
  neighbourhoodBlurb:
    "Uluwatu is known for dramatic clifftop views, world-class surf breaks, and a laid-back beach-town pace. You're a short scooter ride from cliffside cafes, temple sunsets, and some of Bali's best-known beach clubs.",
  amenities: [
    { id: "a1", label: "Kitchen", icon: "ChefHat", available: true },
    { id: "a2", label: "Wifi", icon: "Wifi", available: true },
    { id: "a3", label: "Dedicated workspace", icon: "Laptop", available: true },
    { id: "a4", label: "Free parking on premises", icon: "Car", available: true },
    { id: "a5", label: "Pool", icon: "Waves", available: true },
    { id: "a6", label: "Hot tub", icon: "Bath", available: true },
    { id: "a7", label: "Pets allowed", icon: "PawPrint", available: true },
    { id: "a8", label: "Exterior security cameras on property", icon: "Camera", available: true },
    { id: "a9", label: "Carbon monoxide alarm", icon: "AlertTriangle", available: false },
    { id: "a10", label: "Smoke alarm", icon: "AlertTriangle", available: false },
  ],
  pricePerNight: 245,
  currency: "USD",
  currencySymbol: "$",
  discountPercent: 10,
  host: {
    name: "Kadek",
    avatarUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&q=80",
    yearsHosting: 6,
    isSuperhost: true,
    reviewCount: 1463,
    rating: 4.9,
    bornDecade: "in the 90s",
    school: "Udayana University",
    responseRate: 100,
    responseTime: "within an hour",
  },
  coHosts: [
    { id: "c1", name: "Wayan", avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80" },
    { id: "c2", name: "Made", avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80" },
  ],
  cancellationPolicy:
    "Free cancellation before 13 October. Cancel before check-in on 18 October for a partial refund.",
  houseRules: ["Check-in after 3:00 pm", "Checkout before 11:00 am", "6 guests maximum"],
  safetyNotes: ["Carbon monoxide alarm not reported", "Smoke alarm not reported", "Exterior security cameras on property"],
  reviewCategories: [
    { label: "Cleanliness", icon: "Sparkle", score: 5.0 },
    { label: "Accuracy", icon: "CheckCircle", score: 5.0 },
    { label: "Check-in", icon: "KeyRound", score: 4.9 },
    { label: "Communication", icon: "MessageCircle", score: 5.0 },
    { label: "Location", icon: "Map", score: 4.9 },
    { label: "Value", icon: "Tag", score: 4.8 },
  ],
  reviewTags: [
    { label: "Pool", icon: "Waves", count: 38 },
    { label: "Views", icon: "Mountain", count: 29 },
    { label: "Cleanliness", icon: "Sparkle", count: 24 },
    { label: "Hospitality", icon: "HeartHandshake", count: 21 },
    { label: "Location", icon: "Map", count: 18 },
  ],
  ratingDistribution: [92, 6, 1, 1, 0],
  reviews: [
    { id: "r1", authorName: "Sarah", authorAvatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80", tenure: "3 years on Airbnb", date: "September 2026", rating: 5, text: "Absolutely stunning villa. The views alone are worth the trip, and Kadek was the most attentive host we've had." },
    { id: "r2", authorName: "James", authorAvatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80", tenure: "5 years on Airbnb", date: "August 2026", rating: 5, text: "Every detail was perfect. Pool was immaculate, WiFi was fast enough to work remotely, and the location is unbeatable." },
    { id: "r3", authorName: "Priya", authorAvatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80", tenure: "2 months on Airbnb", date: "July 2026", rating: 5, text: "We celebrated our anniversary here and it exceeded every expectation. Already planning to come back next year." },
    { id: "r4", authorName: "Tom", authorAvatarUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&q=80", tenure: "1 year on Airbnb", date: "June 2026", rating: 5, text: "Genuinely one of the best places we've stayed. Quiet, private, and the sunset views are unreal." },
  ],
  nearbyListings: [
    { id: "n1", title: "Cliffside Studio with Ocean View", photoUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&q=80", price: 120, rating: 4.9 },
    { id: "n2", title: "Modern Loft near Uluwatu Temple", photoUrl: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=400&q=80", price: 95, rating: 4.85 },
    { id: "n3", title: "Beachfront Bungalow, Bingin", photoUrl: "https://images.unsplash.com/photo-1519643381401-22c77e60520e?w=400&q=80", price: 150, rating: 4.95 },
    { id: "n4", title: "Private Pool Villa, Pecatu", photoUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&q=80", price: 210, rating: 4.92 },
  ],
};
