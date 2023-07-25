import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";

// const IMAGE =
//   "https://files.myglamm.com/site-images/400x400/Game-over-Germs_2.jpg";

export default function CollectionCards({ image, name }) {
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"220px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        border="1px"
        borderColor="gray.400"
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"160px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            zIndex: -1,
          }}
          _groupHover={{
            _after: {},
          }}
        >
          <Image
            rounded={"lg"}
            height={200}
            width={282}
            objectFit={"contain"}
            src={image}
            pt="30px"
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Heading fontSize={"sm"} fontFamily={"body"} fontWeight={500}>
            {name}
          </Heading>
          <Text
            color={"gray.600"}
            fontWeight={500}
            fontSize={"10px"}
            textTransform={"uppercase"}
          >
            Compact Eyeshadow Palette with 9 shades in
          </Text>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={700} fontSize={"xl"}>
              $57
            </Text>
            <span textDecoration="line-through" color={"gray.600"}>
              $199
            </span>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
