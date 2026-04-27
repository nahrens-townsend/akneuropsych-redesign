import {
  Box,
  Grid,
  GridItem,
  VStack,
  Text,
  Heading,
  Icon,
} from "@chakra-ui/react";
import {
  FiCpu,
  FiActivity,
  FiAlertCircle,
  FiZap,
  FiMoon,
  FiEye,
  FiCloudRain,
  FiHeart,
  FiCloud,
} from "react-icons/fi";
import type { IconType } from "react-icons";

interface Condition {
  icon: IconType;
  label: string;
  color: string;
  bg: string;
}

const CONDITIONS: Condition[] = [
  {
    icon: FiCpu,
    label: "Traumatic Brain Injury",
    color: "brand.teal",
    bg: "brand.misty",
  },
  {
    icon: FiActivity,
    label: "Concussion & Post-Concussion",
    color: "#5B9BD5",
    bg: "#EBF4FD",
  },
  { icon: FiAlertCircle, label: "ADHD", color: "brand.mocha", bg: "#F5EFED" },
  {
    icon: FiZap,
    label: "Epilepsy & Seizure Disorders",
    color: "#C97D2E",
    bg: "#FEF3E2",
  },
  { icon: FiMoon, label: "Sleep Disorders", color: "#7B68C8", bg: "#F0EEFA" },
  {
    icon: FiEye,
    label: "Neurodevelopmental Conditions",
    color: "brand.seafoam",
    bg: "#EDF6F7",
  },
  {
    icon: FiCloudRain,
    label: "Anxiety & Depression",
    color: "#E06B8B",
    bg: "#FDEEF3",
  },
  {
    icon: FiHeart,
    label: "Chronic Pain & Illness",
    color: "brand.mocha",
    bg: "#F5EFED",
  },
  {
    icon: FiCloud,
    label: "Dementia & Memory Loss",
    color: "#6B8FB5",
    bg: "#EDF3FA",
  },
];

export default function ProblemGrid() {
  return (
    <Box
      id="conditions"
      as="section"
      py={{ base: "60px", md: "100px" }}
      bg="white"
    >
      <Box maxW="1200px" mx="auto" px={{ base: 4, md: 8 }}>
        <VStack spacing={3} mb={12} textAlign="center">
          <Text
            fontSize="sm"
            fontWeight="700"
            color="brand.teal"
            letterSpacing="widest"
            textTransform="uppercase"
          >
            Conditions We Address
          </Text>
          <Heading
            as="h2"
            fontSize={{ base: "28px", md: "36px" }}
            fontWeight="600"
            color="brand.textDark"
          >
            We Help With a Wide Range of Conditions
          </Heading>
          <Text
            fontSize={{ base: "15px", md: "17px" }}
            color="brand.textDark"
            opacity={0.7}
            maxW="520px"
          >
            From brain injuries to mood disorders — if it affects how you think,
            feel, or function, we can help.
          </Text>
        </VStack>

        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={5}
        >
          {CONDITIONS.map((c) => (
            <GridItem key={c.label}>
              <Box
                bg="white"
                border="1.5px solid"
                borderColor="gray.100"
                borderRadius="16px"
                p={5}
                h="full"
                cursor="default"
                transition="all 0.25s"
                _hover={{
                  borderColor: "brand.seafoam",
                  boxShadow: "0 6px 24px rgba(96,166,166,0.14)",
                  transform: "translateY(-3px)",
                }}
              >
                <VStack spacing={3} align="flex-start">
                  <Box
                    w="44px"
                    h="44px"
                    borderRadius="12px"
                    bg={c.bg}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink={0}
                  >
                    <Icon as={c.icon} color={c.color} boxSize={5} />
                  </Box>
                  <Text
                    fontSize="14px"
                    fontWeight="600"
                    color="brand.textDark"
                    lineHeight="1.4"
                  >
                    {c.label}
                  </Text>
                </VStack>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
