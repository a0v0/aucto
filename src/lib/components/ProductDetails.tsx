export interface ProductDetailsProps {
  images: string[];
  name: string;
  currentBid: string;
  endsInHours: number;
  description: string;
  ratings: number;
  activeBids: number;
  watchers: number;
  totalBids: number;
  //   key value pair for details
  details: Record<string, string>;
}

function ProductDetails() {
  return <div>ProductDetails</div>;
}

export default ProductDetails;
