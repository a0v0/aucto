import { Box, Wrap, WrapItem } from "@chakra-ui/react";
import { ImageSlider } from "app/components/imageSlider";
import ProductInfoPanel from "app/components/productInfoPanel";
import { ProductData } from "lib/constants";

function Page({ params }: { params: { slug: string } }) {
  var postData = ProductData.find((item) => item.slug === params.slug);

  if (!postData) {
    postData = {
      activeBids: 0,
      bidIncrementBy: 0,
      basePrice: 0,
      description: "",
      details: [],
      ratings: 0,
      images: [],
      endsInHours: 0,
      productName: "",
      reviews: 0,
      slug: "",
      totalBids: 0,
      watchers: 0,
    };
  }
  return (
    <Wrap spacing={"30px"} align={"center"} ml={0} justify={"center"}>
      <WrapItem>
        <ImageSlider images={postData.images} />
      </WrapItem>
      <WrapItem>
        <ProductInfoPanel property={postData} />
      </WrapItem>
    </Wrap>
  );
}

export default Page;
