export interface ProductDataProps {
  images: string[];
  productName: string;
  basePrice: number;
  endsInHours: number;
  description: string;
  ratings: number;
  activeBids: number;
  watchers: number;
  totalBids: number;
  reviews: number;
  bidIncrementBy: number;
  //   key value pair for details
  details: detailsProps[];
  slug: string;
}

export interface detailsProps {
  key: string;
  value: string;
}
