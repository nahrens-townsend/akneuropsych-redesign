import {
  Box,
  Flex,
  VStack,
  Text,
  Heading,
  List,
  ListItem,
  ListIcon,
  Image,
} from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";
import { FadeUp, SlideLeft, SlideRight } from "./FadeIn";
import faqSectionImg1 from "../assets/images/faq-section-1.jpg";

interface Step {
  number: string;
  title: string;
  opening: string;
  bullets: string[];
  closing: string;
}

const STEPS: Step[] = [
  {
    number: "1",
    title: "Before Your Appointment",
    opening:
      "Once your assessment is booked, we'll guide you through what to prepare.",
    bullets: [
      "You may be asked to complete intake forms in advance",
      "Bring identification, relevant medical records, and a list of medications",
      "Continue taking medications unless otherwise instructed",
      "No special preparation or studying is required",
    ],
    closing:
      "If you're unsure about anything, we're available to help before your visit.",
  },
  {
    number: "2",
    title: "The Day of Your Assessment",
    opening: "Your appointment is structured to be thorough, but manageable.",
    bullets: [
      "A clinical interview to understand your history and concerns",
      "Cognitive testing (attention, memory, language, problem-solving, etc.)",
      "Breaks are offered throughout as needed",
      "The pace is adjusted to your comfort and stamina",
    ],
    closing:
      "Most assessments are completed in a single day, but may occasionally be split into multiple sessions depending on complexity or fatigue.",
  },
  {
    number: "3",
    title: "After Testing",
    opening: "Once your assessment is complete:",
    bullets: [
      "Your results are carefully scored and interpreted",
      "Findings are integrated into a comprehensive clinical report",
      "A feedback session is scheduled to review results with you",
      "You receive clear explanations and individualized recommendations",
    ],
    closing:
      "Reports may also be shared with referring physicians or other professionals (with consent).",
  },
  {
    number: "4",
    title: "What You Walk Away With",
    opening: "You receive:",
    bullets: [
      "A clear understanding of your cognitive strengths and challenges",
      "Diagnostic clarification (if applicable)",
      "Practical recommendations for school, work, or daily functioning",
      "Guidance for treatment, supports, or next steps",
    ],
    closing: "You'll never leave without fully understanding your results.",
  },
];

export default function WhatToExpectFAQ() {
  return (
    <Box as="section" bg="#F8FAFB" py={{ base: "64px", md: "96px" }}>
      <Flex
        maxW="1200px"
        mx="auto"
        px={{ base: 6, md: 8 }}
        direction={{ base: "column", lg: "row" }}
        align="flex-start"
        gap={{ lg: 16 }}
      >
        {/* Left: text content (2/3 width) */}
        <SlideLeft style={{ flex: 2 }}>
          <VStack
            align={{ base: "center", lg: "flex-start" }}
            spacing={0}
            w="full"
          >
            {/* Section header */}
            <FadeUp>
              <VStack align="flex-start" spacing={0} mb={10}>
                <Text
                  fontSize="sm"
                  fontWeight="600"
                  color="brand.teal"
                  letterSpacing="widest"
                  textTransform="uppercase"
                  mb={3}
                >
                  The Process
                </Text>
                <Heading
                  as="h2"
                  fontSize={{ base: "26px", md: "34px" }}
                  fontWeight="600"
                  color="brand.textDark"
                  lineHeight="1.2"
                  letterSpacing="-0.01em"
                  mb={5}
                >
                  What to Expect
                </Heading>
                <Box
                  as="hr"
                  border="none"
                  borderTop="3px solid"
                  borderColor="brand.teal"
                  w="56px"
                  opacity={0.8}
                />
              </VStack>
            </FadeUp>

            {/* Steps */}
            <VStack align="flex-start" spacing={0} w="full">
              {STEPS.map((step, i) => (
                <FadeUp key={step.number} delay={i * 0.1}>
                  <Flex
                    align="flex-start"
                    gap={{ base: 2, md: 7 }}
                    mb={i < STEPS.length - 1 ? { base: 8, md: 10 } : 0}
                    pb={i < STEPS.length - 1 ? { base: 8, md: 10 } : 0}
                    borderBottom={i < STEPS.length - 1 ? "1px solid" : "none"}
                    borderColor="brand.misty"
                    w="full"
                  >
                    {/* Step number */}
                    <Text
                      fontSize={{ base: "30px", md: "56px" }}
                      fontWeight="300"
                      color="brand.teal"
                      lineHeight="1"
                      opacity={0.25}
                      flexShrink={0}
                      w={{ base: "52px", md: "64px" }}
                      textAlign="center"
                      mt="-4px"
                    >
                      {step.number}
                    </Text>

                    {/* Step content */}
                    <VStack align="flex-start" spacing={3} flex={1}>
                      <Heading
                        as="h3"
                        fontSize={{ base: "16px", md: "18px" }}
                        fontWeight="700"
                        color="brand.textDark"
                      >
                        {step.title}
                      </Heading>

                      <Text
                        fontSize="14px"
                        color="brand.textDark"
                        opacity={0.75}
                        lineHeight="1.7"
                      >
                        {step.opening}
                      </Text>

                      <List spacing={2}>
                        {step.bullets.map((bullet) => (
                          <ListItem
                            key={bullet}
                            display="flex"
                            alignItems="flex-start"
                          >
                            <ListIcon
                              as={FiArrowRight}
                              color="brand.teal"
                              mt="3px"
                              boxSize={4}
                              flexShrink={0}
                            />
                            <Text
                              fontSize="14px"
                              color="brand.textDark"
                              opacity={0.8}
                              lineHeight="1.65"
                            >
                              {bullet}
                            </Text>
                          </ListItem>
                        ))}
                      </List>

                      <Text
                        fontSize="13px"
                        color="brand.slate"
                        fontStyle="italic"
                        lineHeight="1.65"
                      >
                        {step.closing}
                      </Text>
                    </VStack>
                  </Flex>
                </FadeUp>
              ))}
            </VStack>
          </VStack>
        </SlideLeft>

        {/* Right: placeholder image (1/3 width) */}
        <SlideRight style={{ flex: 1 }}>
          <Box
            position={{ base: "static", lg: "sticky" }}
            top="100px"
            display={{ base: "none", lg: "block" }}
          >
            <Box
              bg="brand.misty"
              borderRadius="20px"
              w="full"
              h={{ base: "240px", lg: "520px" }}
              minW={{ lg: "260px" }}
              position={"relative"}
            >
              <Image
                src={faqSectionImg1}
                alt="Neuropsychological assessment consultation with Dr. Andrea Kilgour"
                borderRadius="20px"
                w="full"
                h={{ base: "360px", lg: "520px" }}
                objectFit="cover"
                objectPosition="center top"
                position="relative"
                zIndex={1}
                boxShadow="0 20px 56px rgba(26,44,53,0.14)"
              />
              <Box
                position="absolute"
                top="-24px"
                right="-24px"
                w="140px"
                h="140px"
                borderRadius="full"
                bg="brand.misty"
                zIndex={0}
              />
            </Box>
          </Box>
        </SlideRight>
      </Flex>
    </Box>
  );
}
