import { Box, VStack, Heading, Text, Button } from "@chakra-ui/react";
import { FadeUp } from "./FadeIn";
import { FiCalendar } from "react-icons/fi";

export default function CTABanner() {
  return (
    <Box as="section" bg="white" py={{ base: "60px", md: "80px" }}>
      <FadeUp>
        <Box
          maxW="80rem"
          w="calc(100% - 3rem)"
          mx="auto"
          px={{ base: 6, md: 12 }}
          py={{ base: 12, md: 16 }}
          bg="brand.misty"
          borderRadius="2xl"
        >
          <VStack spacing={5} textAlign="center">
            <Text
              fontSize="sm"
              fontWeight="700"
              color="brand.teal"
              letterSpacing="widest"
              textTransform="uppercase"
            >
              Take the First Step
            </Text>
            <Heading
              fontSize={{ base: "28px", md: "36px" }}
              fontWeight="600"
              color="brand.textDark"
              lineHeight="1.15"
              maxW="720px"
            >
              Have questions after reading? Let’s talk.
            </Heading>
            <Text
              fontSize={{ base: "16px", md: "18px" }}
              color="brand.textDark"
              opacity={0.75}
              maxW="520px"
              lineHeight="1.7"
            >
              You deserve to feel like yourself again. Our compassionate team is
              ready to guide you — from first assessment to lasting recovery.
            </Text>
            <Button
              as="a"
              href="/contact"
              variant="cta"
              size="lg"
              rightIcon={<FiCalendar />}
              px={8}
              py={6}
              fontSize="md"
              mt={2}
            >
              Book a Consultation
            </Button>
          </VStack>
        </Box>
      </FadeUp>
    </Box>
  );
}
