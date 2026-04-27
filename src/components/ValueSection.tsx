import {
  Box,
  Grid,
  GridItem,
  VStack,
  Text,
  Heading,
  Icon,
} from "@chakra-ui/react";
import { FiHeart, FiBookOpen, FiUser } from "react-icons/fi";
import { FadeUp } from "./FadeIn";

const VALUES = [
  {
    icon: FiHeart,
    title: "Holistic",
    color: "brand.mocha",
    bg: "#F5EFED",
    description:
      "We see the whole person — mind, body, and environment. Our biopsychosocial model integrates all factors shaping your brain health for truly comprehensive care.",
  },
  {
    icon: FiBookOpen,
    title: "Evidence-Based",
    color: "brand.teal",
    bg: "brand.misty",
    description:
      "Every assessment and intervention is grounded in current neuropsychological research. You receive care that science has proven to work — not guesswork.",
  },
  {
    icon: FiUser,
    title: "Client-Centred",
    color: "brand.seafoam",
    bg: "#EDF6F7",
    description:
      "Your goals drive the process. We collaborate with you to build a personalized plan that respects your values, culture, and life circumstances.",
  },
];

export default function ValueSection() {
  return (
    <Box as="section" py={{ base: "60px", md: "100px" }} bg="white">
      <Box maxW="1200px" mx="auto" px={{ base: 4, md: 8 }}>
        <FadeUp>
          <VStack spacing={3} mb={12} textAlign="center">
            <Text
              fontSize="sm"
              fontWeight="700"
              color="brand.teal"
              letterSpacing="widest"
              textTransform="uppercase"
            >
              Our Approach
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: "30px", md: "38px" }}
              fontWeight="600"
              color="brand.textDark"
            >
              Care That Goes Beyond the Diagnosis
            </Heading>
            <Text
              fontSize={{ base: "16px", md: "18px" }}
              color="brand.textDark"
              opacity={0.7}
              maxW="540px"
            >
              Three pillars that guide everything we do at AK Neuropsych.
            </Text>
          </VStack>
        </FadeUp>

        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
          {VALUES.map((v, idx) => (
            <GridItem key={v.title}>
              <FadeUp delay={idx * 0.12} style={{ height: "100%" }}>
                <Box
                  bg="white"
                  border="1.5px solid"
                  borderColor="gray.100"
                  borderRadius="20px"
                  p={8}
                  h="full"
                  transition="all 0.25s"
                  _hover={{
                    borderColor: "brand.seafoam",
                    boxShadow: "0 8px 32px rgba(96,166,166,0.12)",
                    transform: "translateY(-4px)",
                  }}
                >
                  <VStack align="flex-start" spacing={4}>
                    <Box
                      w="52px"
                      h="52px"
                      borderRadius="14px"
                      bg={v.bg}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Icon as={v.icon} color={v.color} boxSize={6} />
                    </Box>
                    <Heading
                      as="h3"
                      fontSize="22px"
                      fontWeight="700"
                      color="brand.textDark"
                    >
                      {v.title}
                    </Heading>
                    <Text
                      fontSize="15px"
                      color="brand.textDark"
                      opacity={0.75}
                      lineHeight="1.7"
                    >
                      {v.description}
                    </Text>
                  </VStack>
                </Box>
              </FadeUp>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
