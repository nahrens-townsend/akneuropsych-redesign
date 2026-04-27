import {
  Box,
  Flex,
  VStack,
  Text,
  Heading,
  Image,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { FiCheckCircle } from "react-icons/fi";
import PageHero from "../components/PageHero";
import CTABanner from "../components/CTABanner";
import headshot from "../assets/images/headshot.jpg";
import PageMeta from "../components/PageMeta";

const BIO_PARAGRAPHS = [
  "Dr. Andrea Kilgour is a registered neuropsychologist who graduated at the top of her class with a Doctorate in Clinical Psychology from Queen's University in 2003. She completed her accredited residency in Neuropsychology at the Ottawa Hospital, gaining hands-on expertise in comprehensive neuropsychological assessment and clinical care.",
  "Following her residency, Dr. Kilgour was appointed as an Assistant Professor and Clinical Academic in the Faculty of Medicine at the University of Manitoba, jointly with the Winnipeg Regional Health Authority. There, she specialized in neuropsychological evaluations for patients being considered for neurosurgery — a high-stakes clinical environment demanding exceptional diagnostic precision.",
  "A respected researcher and thought leader in neuropsychology, Dr. Kilgour has authored and presented more than 80 peer-reviewed papers, conference presentations, and invited addresses. She has been awarded multiple research grants and has served as a reviewer for leading scientific journals and national grant-funding research councils.",
  "In 2014, Dr. Kilgour relocated to Alberta, where she continues to offer neuropsychological services in both public and private settings. Her clinical experience spans a wide range of assessment purposes — including clinical care, insurance and personal injury evaluations, documentation of intellectual disability, dementia and memory concerns, and sport concussion and return-to-play assessments.",
  "Dr. Kilgour's professional mission is to deliver timely, high-quality neuropsychological services that empower individuals and their care teams to understand the intimate connections among cognitive, mental, and physical health — and chart a clear path forward.",
];

const HIGHLIGHTS = [
  "Doctorate in Clinical Psychology — Queen's University, 2003 (top of class)",
  "Accredited Neuropsychology Residency — Ottawa Hospital",
  "Assistant Professor / Clinical Academic — University of Manitoba, Faculty of Medicine",
  "80+ peer-reviewed publications, conference presentations & invited addresses",
  "Sport concussion, return-to-play, dementia, and personal injury assessments",
  "Serving patients across Alberta in public and private sectors",
];

export default function MeetDrKilgour() {
  return (
    <main>
      <PageMeta
        title="Meet Dr. Andrea Kilgour | Registered Neuropsychologist | Calgary & Winnipeg"
        description="Dr. Andrea Kilgour is a registered neuropsychologist with a Doctorate from Queen's University and 20+ years of clinical experience in Alberta and Manitoba."
        canonical="/meet-dr-kilgour"
      />
      <PageHero
        title="Meet Dr. Kilgour"
        subtitle="Neuropsychologist · Alberta, Canada"
      />

      {/* Bio Section */}
      <Box as="section" py={{ base: "60px", md: "100px" }} bg="white">
        <Flex
          maxW="1200px"
          mx="auto"
          px={{ base: 4, md: 8 }}
          direction={{ base: "column", lg: "row" }}
          align="flex-start"
          gap={{ base: 12, lg: 16 }}
        >
          {/* Left: Image */}
          <Box
            flex="0 0 auto"
            w={{ base: "full", lg: "420px" }}
            maxW={{ base: "420px", lg: "420px" }}
            mx={{ base: "auto", lg: "0" }}
            position="relative"
          >
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
            <Image
              src={headshot}
              alt="Dr. Andrea Kilgour — Registered Neuropsychologist, Alberta"
              borderRadius="20px"
              w="full"
              h="540px"
              objectFit="cover"
              objectPosition="center top"
              position="relative"
              zIndex={1}
              boxShadow="0 20px 56px rgba(26,44,53,0.14)"
            />
            {/* Floating credential badge */}
            <Box
              position="absolute"
              bottom="-20px"
              right="-16px"
              bg="white"
              borderRadius="16px"
              px={5}
              py={4}
              boxShadow="0 8px 32px rgba(26,44,53,0.12)"
              zIndex={2}
            >
              <VStack spacing={0.5} align="center">
                <Text
                  fontSize="22px"
                  fontWeight="600"
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
                  Clinical Neuropsychology
                </Text>
              </VStack>
            </Box>
          </Box>

          {/* Right: Bio */}
          <VStack flex={1} align="flex-start" spacing={5} pt={{ lg: 2 }}>
            <Text
              fontSize="sm"
              fontWeight="700"
              color="brand.teal"
              letterSpacing="widest"
              textTransform="uppercase"
            >
              About Dr. Kilgour
            </Text>

            <Heading
              fontSize={{ base: "28px", md: "36px" }}
              fontWeight="600"
              color="brand.textDark"
              lineHeight="1.2"
            >
              Dr. Andrea Kilgour, PhD
            </Heading>

            <VStack align="flex-start" spacing={4}>
              {BIO_PARAGRAPHS.map((p, i) => (
                <Text
                  key={i}
                  fontSize={{ base: "15px", md: "16px" }}
                  color="brand.textDark"
                  opacity={0.85}
                  lineHeight="1.8"
                >
                  {p}
                </Text>
              ))}
            </VStack>

            {/* Highlights card */}
            <Box
              bg="#F8FAFB"
              border="1.5px solid"
              borderColor="gray.100"
              borderRadius="16px"
              p={5}
              w="full"
              mt={2}
            >
              <Text
                fontWeight="700"
                color="brand.textDark"
                mb={4}
                fontSize="sm"
              >
                Credentials &amp; Areas of Practice
              </Text>
              <List spacing={2.5}>
                {HIGHLIGHTS.map((h) => (
                  <ListItem key={h} display="flex" alignItems="flex-start">
                    <ListIcon
                      as={FiCheckCircle}
                      color="brand.teal"
                      mt="2px"
                      boxSize={4}
                      flexShrink={0}
                    />
                    <Text
                      fontSize="13px"
                      color="brand.textDark"
                      opacity={0.8}
                      lineHeight="1.6"
                    >
                      {h}
                    </Text>
                  </ListItem>
                ))}
              </List>
            </Box>
          </VStack>
        </Flex>
      </Box>

      <CTABanner />
    </main>
  );
}
