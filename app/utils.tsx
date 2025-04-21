export type Project = {
  slug: string;
  imageUrl: string;
  imageAlt: string;
  projectName: string;
  year: string;
  location: string;
  category: string;
  image_1Url?: string;
  image_2Url?: string;
  image_3Url?: string;
  image_4Url?: string;
  image_5Url?: string;
  image_6Url?: string;
};

export const projects = [
  {
    slug: "modern-loft",
    imageUrl: "/img/titleImg/title-1.jpg",
    image_1Url: "/img/titleImg/title-1.jpg",
    image_2Url: "/img/ProjectsImg/ModernLoft/1.jpg",
    image_3Url: "/img/ProjectsImg/ModernLoft/2.jpg",
    image_4Url: "/img/ProjectsImg/ModernLoft/3.jpg",
    image_5Url: "/img/ProjectsImg/ModernLoft/1.jpg",
    image_6Url: "/img/ProjectsImg/ModernLoft/2.jpg",
    imageAlt: "Modern Loft Exterior",
    projectName: "Modern Loft Apartment",
    year: "2023",
    location: "New York, NY",
    category: "Residential",
  },
  {
    slug: "corporate-headquarters",
    imageUrl: "/img/titleImg/title-2.jpg",
    image_1Url: "/img/titleImg/title-2.jpg",
    image_2Url: "/img/ProjectsImg/GlobalHQ/1.jpg",
    image_3Url: "/img/ProjectsImg/GlobalHQ/2.jpg",
    image_4Url: "/img/ProjectsImg/GlobalHQ/3.jpg",
    image_5Url: "/img/ProjectsImg/GlobalHQ/1.jpg",
    image_6Url: "/img/ProjectsImg/GlobalHQ/2.jpg",
    imageAlt: "Corporate Office",
    projectName: "Global HQ Office",
    year: "2022",
    location: "San Francisco, CA",
    category: "Commercial",
  },
  {
    slug: "urban-mall",
    imageUrl: "/img/titleImg/title-3.jpg",
    image_1Url: "/img/titleImg/title-3.jpg",
    image_2Url: "/img/ProjectsImg/DowntownUrban/1.jpg",
    image_3Url: "/img/ProjectsImg/DowntownUrban/2.jpg",
    image_4Url: "/img/ProjectsImg/DowntownUrban/3.jpg",
    image_5Url: "/img/ProjectsImg/DowntownUrban/1.jpg",
    image_6Url: "/img/ProjectsImg/DowntownUrban/2.jpg",
    imageAlt: "Urban Mall",
    projectName: "Downtown Urban Mall",
    year: "2021",
    location: "Chicago, IL",
    category: "Retail",
  },
  {
    slug: "eco-villa",
    imageUrl: "/img/titleImg/title-4.jpg",
    image_1Url: "/img/titleImg/title-4.jpg",
    image_2Url: "/img/ProjectsImg/SustainableVilla/1.jpg",
    image_3Url: "/img/ProjectsImg/SustainableVilla/2.jpg",
    image_4Url: "/img/ProjectsImg/SustainableVilla/3.jpg",
    image_5Url: "/img/ProjectsImg/SustainableVilla/1.jpg",
    image_6Url: "/img/ProjectsImg/SustainableVilla/2.jpg",
    imageAlt: "Eco Villa Front",
    projectName: "Sustainable Eco Villa",
    year: "2025",
    location: "Sedona, AZ",
    category: "Sustainable",
  },
  {
    slug: "beach-resort",
    imageUrl: "/img/titleImg/title-5.jpg",
    image_1Url: "/img/titleImg/title-5.jpg",
    image_2Url: "/img/ProjectsImg/PacificResort/1.jpg",
    image_3Url: "/img/ProjectsImg/PacificResort/2.jpg",
    image_4Url: "/img/ProjectsImg/PacificResort/3.jpg",
    image_5Url: "/img/ProjectsImg/PacificResort/1.jpg",
    image_6Url: "/img/ProjectsImg/PacificResort/2.jpg",
    imageAlt: "Beach Resort",
    projectName: "Pacific Beach Resort",
    year: "2020",
    location: "Tulum, Mexico",
    category: "Hospitality",
  },
  {
    slug: "cultural-center",
    imageUrl: "/img/titleImg/title-6.jpg",
    image_1Url: "/img/titleImg/title-6.jpg",
    image_2Url: "/img/ProjectsImg/NationalCultural/1.jpg",
    image_3Url: "/img/ProjectsImg/NationalCultural/2.jpg",
    image_4Url: "/img/ProjectsImg/NationalCultural/3.jpg",
    image_5Url: "/img/ProjectsImg/NationalCultural/1.jpg",
    image_6Url: "/img/ProjectsImg/NationalCultural/2.jpg",
    imageAlt: "Cultural Center Exterior",
    projectName: "National Cultural Center",
    year: "2024",
    location: "Austin, TX",
    category: "Institutional",
  },
];
