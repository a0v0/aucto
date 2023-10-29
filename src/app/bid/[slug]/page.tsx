import { Wrap, WrapItem } from "@chakra-ui/react";
import { ImageSlider } from "app/components/imageSlider";
import ProductInfoPanel from "app/components/productInfoPanel";
import { ProductData } from "lib/constants";

function Page({ params }: { params: { slug: string } }) {
  var postData = ProductData.find((item) => item.slug === params.slug);

  if (!postData) {
    postData = {
      activeBids: 0,
      bidIncrementBy: 0,
      currentBid: 0,
      description: "",
      details: {},
      ratings: 0,
      images: [],
      endsInHours: 0,
      name: "",
      reviews: 0,
      slug: "",
      totalBids: 0,
      watchers: 0,
    };
  }
  return (
    <Wrap justify={"center"}>
      <WrapItem>
        <ImageSlider />
      </WrapItem>
      <WrapItem>
        <ProductInfoPanel
          price={postData.currentBid}
          title={postData.name}
          rating={postData.ratings}
          reviewCount={postData.reviews}
          bidIncrementBy={postData.bidIncrementBy}
        />
      </WrapItem>
    </Wrap>
  );
}

export default Page;
