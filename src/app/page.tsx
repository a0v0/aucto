import { Flex, SimpleGrid, Wrap, WrapItem } from "@chakra-ui/react";
import { BidData } from "lib/constants";
import BidCard from "./components/BidCard";

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
      {/* <SomeText />
      <SomeImage />
      <CTASection /> */}
      <Wrap spacing="30px" justify="center">
        {BidData.map((bid) => (
          <WrapItem>
            <BidCard {...bid} />
          </WrapItem>
        ))}
      </Wrap>
    </Flex>
  );
};

export default Home;
