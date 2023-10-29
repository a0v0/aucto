import { Flex, Heading, Spacer, Wrap, WrapItem } from "@chakra-ui/react";
import { ProductData } from "lib/constants";
import BidCard from "./components/BidCard";
import HowItWorks from "./components/HowItWorks";
import Hero from "./components/hero";

const Home = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <Hero />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <HowItWorks />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />

      <Heading id="all_products" size={"4xl"}>
        All Products
      </Heading>
      <Wrap spacing="30px" justify="center">
        {ProductData.map((bid) => (
          <WrapItem>
            <BidCard {...bid} />
          </WrapItem>
        ))}
      </Wrap>
    </Flex>
  );
};

export default Home;
