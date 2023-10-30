"use client";
import { StarIcon } from "@chakra-ui/icons";
import {
  Avatar,
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
  Tag,
  TagLabel,
  Text,
  Wrap,
  WrapItem,
  useDisclosure,
} from "@chakra-ui/react";
import { ProductDataProps } from "lib/types/product";
import { useState } from "react";
import Countdown from "react-countdown";

function ProductInfoPanel({ property }: { property: ProductDataProps }) {
  const [bidPrice, setBidPrice] = useState(property.basePrice);
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
            // noOfLines={1}
          >
            {property.productName}
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
                        color={i < property.ratings ? "blue.400" : "gray.300"}
                      />
                    ))}
                  <Box as="span" ml="2" color="gray.600" fontSize="sm">
                    {property.ratings} ratings
                  </Box>
                  <Box as="span" ml="2" color="gray.600" fontSize="sm">
                    {property.reviews} reviews
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
          <Tag size="lg" colorScheme="pink" borderRadius="full" mr={"10px"}>
            <Avatar
              objectFit={"contain"}
              src="/bid1.png"
              size="xs"
              name=""
              ml={-1}
              mr={2}
            />
            <TagLabel>{property.activeBids} Active Bidders</TagLabel>
          </Tag>
          <Tag size="lg" colorScheme="green" mr={"10px"} borderRadius="full">
            <Avatar
              objectFit={"contain"}
              src="/bid2.png"
              size="xs"
              name=""
              ml={-1}
              mr={2}
            />
            <TagLabel>{property.watchers} Watching</TagLabel>
          </Tag>
          <Tag size="lg" colorScheme="purple" borderRadius="full">
            <Avatar
              objectFit={"contain"}
              src="/bid3.png"
              size="xs"
              name=""
              ml={-1}
              mr={2}
            />
            <TagLabel>{property.totalBids} Total Bids</TagLabel>
          </Tag>
          <Wrap display={"flex"}>
            <WrapItem>
              <Box
                mt="1"
                fontWeight="semibold"
                color={"gray"}
                fontSize={"2xl"}
                lineHeight="tight"
                // noOfLines={1}
              >
                Auction ends in
              </Box>
            </WrapItem>{" "}
            <WrapItem>
              <Box
                mt="1"
                fontWeight="semibold"
                color={"red"}
                fontSize={"2xl"}
                lineHeight="tight"
                // noOfLines={1}
              >
                {
                  <Countdown
                    daysInHours={true}
                    date={Date.now() + property.endsInHours * 3600000}
                    precision={3}
                  />
                }
              </Box>
            </WrapItem>
          </Wrap>

          <Divider m={"10px"} />
          <Container
            margin={0}
            p={0}
            mb={"10px"}
            fontWeight="semibold"
            as="h2"
            fontSize={"1xl"}
            color={"gray.500"}
            width={"auto"}
          >
            {property.description}
          </Container>
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
            <Box>Base Price: ${property.basePrice}</Box>
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
