import { ProductDataProps } from "./types/product";

export const APP_NAME = "Aucto";
export const GITHUB_REPO = "https://github.com/a0v0/aucto";
export const SITE_URL = "https://aucto-site.vercel.app/";
export const ProductData: ProductDataProps[] = [
  {
    images: ["/drone1.png", "/android.png"],
    slug: "1",
    name: "4K Dual Camera Foldable Toy Drones",
    currentBid: 14750,
    endsInHours: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam tincidunt, ex enim luctus nunc, nec aliquet velit velit quis eros. Sed euismod, diam quis aliquam tincidunt, ex enim luctus nunc, nec aliquet velit velit quis eros.",
    ratings: 4,
    activeBids: 10,
    watchers: 100,
    totalBids: 1000,
    reviews: 32,
    bidIncrementBy: 100,
    details: [
      { key: "Brand", value: "Apple" },
      { key: "Model", value: "Macbook Air" },
      { key: "Year", value: "2023" },
      { key: "Color", value: "Silver" },
      { key: "Screen Size", value: "13.3 inches" },
      { key: "Processor", value: "1.6 GHz Apple M1" },
      { key: "RAM", value: "8 GB" },
    ],
  },
  {
    images: ["/drone1.png"],
    slug: "2",
    name: "4K Dual Camera Foldable Toy Drones",
    currentBid: 14750,
    endsInHours: 5,
    reviews: 25,
    bidIncrementBy: 40,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam tincidunt, ex enim luctus nunc, nec aliquet velit velit quis eros. Sed euismod, diam quis aliquam tincidunt, ex enim luctus nunc, nec aliquet velit velit quis eros.",
    ratings: 4,
    activeBids: 10,
    watchers: 100,
    totalBids: 1000,
    details: [
      { key: "Brand", value: "Apple" },
      { key: "Model", value: "Macbook Air" },
      { key: "Year", value: "2023" },
      { key: "Color", value: "Silver" },
      { key: "Screen Size", value: "13.3 inches" },
      { key: "Processor", value: "1.6 GHz Apple M1" },
      { key: "RAM", value: "8 GB" },
    ],
  },
];
