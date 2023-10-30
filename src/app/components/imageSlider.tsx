"use client";

import { Box, Center, Grid, GridItem, Image } from "@chakra-ui/react";
import { useState } from "react";

export function ImageSlider({ images }: { images: string[] }) {
  const [currentImage, setCurrentImage] = useState(images[0]);

  return (
    <Box borderRadius={"lg"} maxW={"512px"} borderWidth={"2px"}>
      <Image
        w={"512px"}
        textAlign={"center"}
        objectFit={"cover"}
        height={"408px"}
        src={currentImage}
      />
      <Center>
        <Grid
          padding={2}
          templateColumns={"repeat(" + images.length + ", 1fr)"}
          gap={3}
          overflow={"hidden"}
        >
          {images.map((image) => (
            <GridItem
              borderWidth={"3px"}
              borderRadius={"25px"}
              cursor={"pointer"}
              _hover={{
                borderColor: "blue.500",
                transition: "0.5s",
                transform: "scale(1.1)",
              }}
              borderColor={currentImage === image ? "blue.500" : "gray.200"}
              key={image}
              w="100px"
              h="80px"
              backgroundSize={"cover"}
              backgroundImage={image}
              onClick={() => setCurrentImage(image)}
            ></GridItem>
          ))}
        </Grid>
      </Center>
    </Box>
  );
}
