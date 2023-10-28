"use client";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import MotionBox from "./components/motion/Box";
import Link from "next/link";

const Page500 = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex minHeight="70vh" direction="column" justifyContent="center">
      <MotionBox
        animate={{ y: 20 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
        width={{ base: "100%", sm: "70%", md: "60%" }}
        margin="0 auto"
      >
        <Image
          src="/Under construction-amico.svg"
          alt="Error 500 Illustration"
        />
      </MotionBox>

      <Box marginY={4}>
        <Heading textAlign="center" size="lg">
          Oops! Something went wrong at our end 🙇‍♂️.
        </Heading>

        <Box textAlign="center" marginTop={4}>
          <Button
            as={Link}
            href="/"
            backgroundColor={colorMode === "light" ? "gray.300" : "teal.500"}
            size="sm"
          >
            Go Back
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default Page500;
