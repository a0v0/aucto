"use client";
import { StarIcon } from "@chakra-ui/icons";
import { Box, Button, Wrap, WrapItem } from "@chakra-ui/react";
import { useState } from "react";

interface productInfoPanelProps {
  title: string;
  price: number;
  rating: number;
  reviewCount: number;
  bidIncrementBy: number;
}

function ProductInfoPanel(property: productInfoPanelProps) {
  const [bidPrice, setBidPrice] = useState(property.price);
  const [bidCount, setBidCount] = useState(1);

  function handleBidIncrement() {
    setBidCount(bidCount + 1);
    setBidPrice(bidPrice + property.bidIncrementBy);
  }

  function handleBidDecrement() {
    if (bidCount > 1) {
      setBidCount(bidCount - 1);
      setBidPrice(bidPrice - property.bidIncrementBy);
    }
  }

  return (
    <Box borderWidth="2px" borderRadius="lg">
      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h1"
          fontSize={"2xl"}
          lineHeight="tight"
          noOfLines={1}
        >
          {property.title}
        </Box>
        <Box display={"flex"}>
          <Wrap>
            <WrapItem>
              <Box
                mt="1"
                fontWeight="semibold"
                as="h1"
                fontSize={"2xl"}
                lineHeight="tight"
                noOfLines={1}
                color={"pink.500"}
              >
                ${bidPrice}
              </Box>
            </WrapItem>
            <WrapItem>
              <Box display="flex" mt="2" mb={"10px"}>
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <StarIcon
                      key={i}
                      color={i < property.rating ? "blue.400" : "gray.300"}
                    />
                  ))}
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  {property.rating} ratings
                </Box>
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  {property.reviewCount} reviews
                </Box>
              </Box>
            </WrapItem>
          </Wrap>
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h2"
          fontSize={"1xl"}
          lineHeight="tight"
          color={"gray"}
          noOfLines={1}
        >
          Base Price: ${property.price}
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h2"
          fontSize={"1xl"}
          lineHeight="tight"
          color={"gray"}
          noOfLines={1}
        >
          Bid Increment: ${property.bidIncrementBy}
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h2"
          fontSize={"1xl"}
          lineHeight="tight"
          color={"gray"}
          noOfLines={1}
        >
          Final Bid Price: ${bidPrice}
        </Box>

        <Box gap={2} display={"flex"} mt={"10px"}>
          <Button onClick={handleBidDecrement} colorScheme="gray">
            -
          </Button>
          <Button width={"100px"} colorScheme="gray">
            {bidCount}
          </Button>

          <Button onClick={handleBidIncrement} colorScheme="gray">
            +
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductInfoPanel;
