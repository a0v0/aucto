"use client";
import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Wrap,
  WrapItem,
  useDisclosure,
} from "@chakra-ui/react";
import { detailsProps } from "lib/types/product";
import { useState } from "react";

interface productInfoPanelProps {
  title: string;
  price: number;
  rating: number;
  reviewCount: number;
  bidIncrementBy: number;
  details: detailsProps[];
}

function ProductInfoPanel(property: productInfoPanelProps) {
  const [bidPrice, setBidPrice] = useState(property.price);
  const [bidCount, setBidCount] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();

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
    <>
      <Modal
        isCentered
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Bid</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="bold" mb="1rem">
              Are you sure you want to bid ${bidPrice} for this item?
            </Text>
            {/* <Lorem count={2} /> */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Yes
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box borderWidth="2px" borderRadius="lg">
        <Box p="6">
          {/* Title */}
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

          {/* Price */}
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

          <Divider m={"10px"} />
          {property.details.map((item) => (
            <Container
              key={item.key}
              margin={"auto"}
              fontWeight="semibold"
              as="h2"
              fontSize={"1xl"}
              lineHeight="tight"
              color={"gray"}
              noOfLines={1}
            >
              {item.key}: {item.value}
            </Container>
          ))}
          <Divider m={"10px"} />
          {/* Metadata */}
          <Box
            fontWeight="semibold"
            as="h2"
            fontSize={"2xl"}
            // lineHeight="tight"
            color={"gray.500"}
          >
            <Box>Base Price: ${property.price}</Box>
            <Box>Bid Increment: ${property.bidIncrementBy}</Box>
            <Box>Final Bid Price: ${bidPrice}</Box>
          </Box>
          <Box gap={2} justifyContent={"center"} display={"flex"} m={"10px"}>
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
          <Box gap={2} justifyContent={"center"} display={"flex"} m={"10px"}>
            <Button onClick={onOpen} bgColor={"blue.400"} variant="solid">
              Submbit Bid
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ProductInfoPanel;
