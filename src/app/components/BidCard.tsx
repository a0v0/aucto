"use client";

import {
  Box,
  Button,
  Center,
  Divider,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Countdown from "react-countdown";
import { ProductDetailsProps } from "./ProductDetails";

export default function BidtaCard(data: ProductDetailsProps) {
  return (
    <Link style={{ textDecoration: "none" }} href={"/bid/" + data.slug}>
      <Box
        role={"group"}
        p={6}
        _hover={{
          boxShadow: "lg",
          cursor: "pointer",
          transform: "translateY(6px)",
          transition: "all 0.5s ease ",
        }}
        maxW={"500px"}
        w={""}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"xl"}
        rounded={"12px"}
        // border={"1px solid #e2e8f0"}
        pos={"relative"}
        zIndex={1}
      >
        <Center>
          <Box pos={"relative"}>
            <Image
              rounded={"lg"}
              // border={"2px"}
              height={150}
              // width={250}
              objectFit={"cover"}
              src={data.images[0]}
              alt="#"
              _after={{
                transition: "all .3s ease",
                content: '""',
                w: "full",
                h: "full",
                pos: "absolute",
                top: 5,
                left: 0,
                backgroundImage: `url(${data.images[0]})`,
                filter: "blur(15px)",
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: "blur(20px)",
                },
              }}
            />
          </Box>
        </Center>

        <Stack pt={10} align={"center"}>
          <Divider variant={"dashed"} />
          <Heading
            _groupHover={{ textDecoration: "underline" }}
            fontSize={"l"}
            fontFamily={"body"}
            fontWeight={500}
          >
            {data.name}
          </Heading>
          <Stack direction={"row"} align={"center"} gap={8}>
            <Stack direction={"column"}>
              <Text>Current Bid:</Text>
              <Text
                fontWeight={800}
                color={"#03d6f9"}
                textAlign={"left"}
                fontSize={"16px"}
              >
                {data.currentBid} (USD)
              </Text>
            </Stack>
            <Divider
              variant={"dashed"}
              orientation="vertical"
              height={"100px"}
            />
            <Stack direction={"column"} align={"end"}>
              <Text>Ends in:</Text>
              <Text fontWeight={800} color={"#fa8fc1"} fontSize={"16px"}>
                <Countdown
                  daysInHours={true}
                  date={Date.now() + data.endsInHours * 3600000}
                  precision={3}
                />
              </Text>
            </Stack>
          </Stack>

          <Button
            fontSize={"lg"}
            rounded={"full"}
            bg={"blue.400"}
            color={"white"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "blue.500",
            }}
            _focus={{
              bg: "blue.500",
            }}
          >
            Submit A Bid
          </Button>
        </Stack>
      </Box>
    </Link>
  );
}
