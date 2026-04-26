import {
  Box,
  Flex,
  VStack,
  HStack,
  Text,
  Heading,
  Image,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { FiCheckCircle } from "react-icons/fi";
import headshot from "../assets/images/headshot.jpg";
import { FadeUp, FadeIn, SlideRight } from "./FadeIn";

const PILLARS = [
  "Biological factors — neurological, genetic, and medical",
  "Psychological factors — emotions, cognition, and behaviour",
  "Social factors — relationships, culture, and environment",
];

const CREDENTIALS = [
  "Registered Psychologist",
  "Board Certified in Neuropsychology",
  "Member, NAN & Canadian Psychological Association",
  "Telehealth Approved — All Canadian Provinces",
];

export default function AboutSection() {
  return (
    <Box
      id="about"
      as="section"
      py={{ base: "60px", md: "100px" }}
      bg="#F8FAFB"
    >
      <Flex
        maxW="1200px"
        mx="auto"
        px={{ base: 4, md: 8 }}
        direction={{ base: "column", lg: "row" }}
        align="center"
        gap={{ base: 12, lg: 16 }}
      >
        {/* Left: Image */}
        <Box flex={1} maxW={{ base: "400px", lg: "480px" }} position="relative">
          <Box
            position="absolute"
            top="-24px"
            left="-24px"
            w="140px"
            h="140px"
            borderRadius="full"
            bg="brand.misty"
            zIndex={0}
          />
          <FadeIn>
            <Image
              src={headshot}
              alt="About Dr. Kilgour"
              borderRadius="20px"
              w="full"
              h={{ base: "360px", lg: "520px" }}
              objectFit="cover"
              objectPosition="center top"
              position="relative"
              zIndex={1}
              boxShadow="0 20px 56px rgba(26,44,53,0.14)"
            />
          </FadeIn>
          <Box
            position="absolute"
            bottom="-20px"
            right="-20px"
            bg="white"
            borderRadius="16px"
            p={5}
            boxShadow="0 8px 32px rgba(26,44,53,0.10)"
            zIndex={2}
          >
            <VStack spacing={1} align="center">
              <Text
                fontSize="28px"
                fontWeight="800"
                color="brand.teal"
                lineHeight="1"
              >
                PhD
              </Text>
              <Text
                fontSize="xs"
                color="brand.slate"
                fontWeight="600"
                textAlign="center"
              >
                Neuropsychology
              </Text>
            </VStack>
          </Box>
        </Box>

        {/* Right: Text */}
        <SlideRight style={{ flex: 1 }}>
          <VStack align="flex-start" spacing={6}>
            <FadeUp delay={0.05}>
              <Text
                fontSize="sm"
                fontWeight="700"
                color="brand.teal"
                letterSpacing="widest"
                textTransform="uppercase"
              >
                About Dr. Kilgour
              </Text>
            </FadeUp>

            <FadeUp delay={0.12}>
              <Heading
                fontSize={{ base: "28px", md: "36px" }}
                fontWeight="800"
                color="brand.textDark"
                lineHeight="1.2"
              >
                A Biopsychosocial Approach to Brain Health
              </Heading>
            </FadeUp>

            <FadeUp delay={0.18}>
              <Text
                fontSize="16px"
                color="brand.textDark"
                opacity={0.8}
                lineHeight="1.75"
              >
                Dr. Kilgour is a registered neuropsychologist with over 15 years
                of experience helping individuals understand, manage, and recover
                from complex neurological and psychological challenges. Her
                practice is built on the belief that the brain cannot be
                understood in isolation.
              </Text>
            </FadeUp>

            <FadeUp delay={0.24}>
              <Box>
                <Text fontWeight="700" color="brand.textDark" mb={3}>
                  The Biopsychosocial Model
                </Text>
                <List spacing={3}>
                  {PILLARS.map((p) => (
                    <ListItem key={p} display="flex" alignItems="flex-start">
                      <ListIcon
                        as={FiCheckCircle}
                        color="brand.teal"
                        mt="3px"
                        boxSize={5}
                      />
                      <Text
                        fontSize="15px"
                        color="brand.textDark"
                        opacity={0.8}
                        lineHeight="1.6"
                      >
                        {p}
                      </Text>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </FadeUp>

            <FadeUp delay={0.30}>
              <Box
                bg="white"
                border="1.5px solid"
                borderColor="gray.100"
                borderRadius="16px"
                p={5}
                w="full"
              >
                <Text fontWeight="700" color="brand.textDark" mb={3} fontSize="sm">
                  Credentials &amp; Memberships
                </Text>
                <VStack align="flex-start" spacing={2}>
                  {CREDENTIALS.map((c) => (
                    <HStack key={c} spacing={2}>
                      <Box
                        w="6px"
                        h="6px"
                        borderRadius="full"
                        bg="brand.seafoam"
                        flexShrink={0}
                      />
                      <Text fontSize="13px" color="brand.textDark" opacity={0.75}>
                        {c}
                      </Text>
                    </HStack>
                  ))}
                </VStack>
              </Box>
            </FadeUp>
          </VStack>
        </SlideRight>
      </Flex>
    </Box>
  );
}
