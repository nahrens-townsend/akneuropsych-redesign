import {
  Box,
  Flex,
  VStack,
  HStack,
  Button,
  Text,
  Heading,
  Badge,
} from "@chakra-ui/react";
import { FiCalendar } from "react-icons/fi";
import { HeroFade } from "./FadeIn";

export default function HeroSection() {
  return (
    <Box
      id="hero"
      position="relative"
      bgImage="url('https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1920&q=80')"
      bgSize="cover"
      bgPosition="center"
      overflow="hidden"
    >
      {/* Dark gradient overlay for text contrast */}
      <Box
        position="absolute"
        inset={0}
        bgGradient="linear(to-br, rgba(10,30,40,0.78), rgba(20,50,60,0.65))"
        zIndex={0}
      />

      <Flex
        maxW="1200px"
        mx="auto"
        px={{ base: 4, md: 8 }}
        py={{ base: "100px", md: "148px" }}
        direction="column"
        align={"center"}
        position="relative"
        zIndex={1}
      >
        <VStack
          align={{ base: "center", lg: "center" }}
          textAlign={{ base: "center", lg: "center" }}
          spacing={7}
          maxW={{ base: "100%", lg: "1000px" }}
        >
          <HeroFade delay={0}>
            <Badge
              bg="brand.seafoam"
              color="white"
              px={4}
              py={1.5}
              borderRadius="full"
              fontSize="sm"
              fontWeight="600"
              letterSpacing="wide"
            >
              Neuropsychological Care
            </Badge>
          </HeroFade>

          <HeroFade delay={0.12}>
            <Heading
              as="h1"
              fontSize={{ base: "40px", md: "52px", lg: "62px" }}
              fontWeight="600"
              lineHeight="1.1"
              color="white"
            >
              Understand Your{" "}
              <Text as="span" color="brand.seafoam">
                Brain.
              </Text>
              <br />
              Reclaim Your Life.
            </Heading>
          </HeroFade>

          <HeroFade delay={0.22}>
            <Text
              fontSize={{ base: "17px", md: "19px" }}
              color="whiteAlpha.900"
              lineHeight="1.75"
              maxW="1000px"
            >
              Comprehensive neuropsychological assessments and evidence-based
              cognitive testing with Dr. Andrea Kilgour in Calgary, AB — a
              biopsychosocial approach designed to help you understand and
              reclaim your brain health.
            </Text>
          </HeroFade>

          <HeroFade delay={0.3}>
            <Text
              fontSize={{ base: "15px", md: "17px" }}
              color="whiteAlpha.800"
              lineHeight="1.8"
              maxW="1000px"
            >
              Whether you're navigating attention challenges, memory concerns,
              recovery from traumatic brain injury or concussion, or seeking
              clarity on a recent diagnosis, our practice provides a thorough
              and compassionate evaluation process that places your story at the
              center of care. Serving individuals across Alberta and Manitoba
              with personalized treatment planning rooted in the latest
              neuropsychological research.
            </Text>
          </HeroFade>

          <HeroFade delay={0.4}>
            <HStack
              spacing={4}
              pt={2}
              flexWrap="wrap"
              justify={{ base: "center", lg: "flex-start" }}
            >
              <Button
                as="a"
                href="contact"
                variant="cta"
                size="lg"
                rightIcon={<FiCalendar />}
                px={8}
                py={6}
                fontSize="md"
              >
                Book a Consultation
              </Button>
            </HStack>
          </HeroFade>
        </VStack>
      </Flex>
    </Box>
  );
}
