import { Flex, SimpleGrid } from "@chakra-ui/react";
import BidCard from "lib/components/BidCard";
import { BidData } from "lib/constants";

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
      <SimpleGrid columns={3} spacing={10}>
        {BidData.map((bid) => (
          <BidCard {...bid} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default Home;
