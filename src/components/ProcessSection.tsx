import { Box, Flex, VStack, HStack, Text, Heading } from "@chakra-ui/react";
import { FadeUp } from "./FadeIn";

const STEPS = [
  {
    number: "01",
    title: "Intake & Referral",
    desc: "Complete a brief intake form or call us directly. We review your needs and schedule an initial consultation within days — not months.",
  },
  {
    number: "02",
    title: "Assessment",
    desc: "Comprehensive neuropsychological testing and clinical interview across one or more sessions. We use validated, gold-standard instruments.",
  },
  {
    number: "03",
    title: "Report & Treatment",
    desc: "Receive a detailed report with clear findings and personalized recommendations. We walk you through results and begin your treatment plan.",
  },
];

export default function ProcessSection() {
  return (
    <Box
      id="process"
      as="section"
      py={{ base: "60px", md: "100px" }}
      bg="white"
    >
      <Box maxW="1200px" mx="auto" px={{ base: 4, md: 8 }}>
        <FadeUp>
          <VStack spacing={3} mb={14} textAlign="center">
            <Text
              fontSize="sm"
              fontWeight="700"
              color="brand.teal"
              letterSpacing="widest"
              textTransform="uppercase"
            >
              How It Works
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: "28px", md: "36px" }}
              fontWeight="600"
              color="brand.textDark"
            >
              Your Journey to Better Brain Health
            </Heading>
            <Text
              fontSize={{ base: "15px", md: "17px" }}
              color="brand.textDark"
              opacity={0.7}
              maxW="480px"
            >
              Simple, clear, compassionate — from first contact to lasting
              outcomes.
            </Text>
          </VStack>
        </FadeUp>

        <Flex
          direction={{ base: "column", md: "row" }}
          gap={{ base: 8, md: 0 }}
          position="relative"
        >
          {/* Connector line (desktop only) */}
          <Box
            display={{ base: "none", md: "block" }}
            position="absolute"
            top="36px"
            left="calc(16.67% + 18px)"
            right="calc(16.67% + 18px)"
            h="2px"
            bg="brand.misty"
            zIndex={0}
          />

          {STEPS.map((step, idx) => (
            <Box
              key={step.number}
              flex={1}
              px={{ md: 6 }}
              position="relative"
              zIndex={1}
            >
              <FadeUp delay={idx * 0.15}>
                <VStack
                  align={{ base: "flex-start", md: "center" }}
                  spacing={4}
                >
                  <HStack spacing={3} align="center">
                    <Box
                      w="56px"
                      h="56px"
                      borderRadius="full"
                      bg={idx === 1 ? "brand.teal" : "brand.misty"}
                      border="3px solid"
                      borderColor={idx === 1 ? "brand.teal" : "brand.seafoam"}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexShrink={0}
                      boxShadow={
                        idx === 1 ? "0 4px 20px rgba(96,166,166,0.35)" : "none"
                      }
                    >
                      <Text
                        fontSize="16px"
                        fontWeight="600"
                        color={idx === 1 ? "white" : "brand.teal"}
                      >
                        {step.number}
                      </Text>
                    </Box>
                  </HStack>

                  <VStack
                    align={{ base: "flex-start", md: "center" }}
                    textAlign={{ base: "left", md: "center" }}
                    spacing={2}
                  >
                    <Heading
                      as="h3"
                      fontSize="18px"
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
                      maxW="280px"
                    >
                      {step.desc}
                    </Text>
                  </VStack>
                </VStack>
              </FadeUp>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
