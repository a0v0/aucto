export interface ProductDataProps {
  images: string[];
  name: string;
  currentBid: number;
  endsInHours: number;
  description: string;
  ratings: number;
  activeBids: number;
  watchers: number;
  totalBids: number;
  reviews: number;
  bidIncrementBy: number;
  //   key value pair for details
  details: Record<string, string>;
  slug: string;
}
