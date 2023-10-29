import { Wrap, WrapItem } from "@chakra-ui/react";
import { ImageSlider } from "app/components/imageSlider";
import ProductInfoPanel from "app/components/productInfoPanel";
import { ProductData } from "lib/constants";
import { ProductDataProps } from "lib/types/product";

function Page({ params }: { params: { slug: string } }) {
  const postData: ProductDataProps = getProductDetails(params.slug);

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

// export const getProductDetails = (slug: string) => {
//   const product = ProductData.find((item) => item.slug === slug);
//   return product;
// };
// Force getProductDetails to return an empty object if the product is not found
// export const getProductDetails<ProductDataProps> = (slug: string) => {
//   const product = ProductData.find((item) => item.slug === slug);
//   return product ;
// };
export function getProductDetails<ProductDataProps>(
  slug: string
): ProductDataProps {
  const product = ProductData.find((item) => item.slug === slug);
  return product as ProductDataProps;
}
