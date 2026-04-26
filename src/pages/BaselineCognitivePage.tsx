import {
  Box,
  Flex,
  VStack,
  HStack,
  Text,
  Heading,
  Icon,
  Image,
} from "@chakra-ui/react";
import {
  FiActivity,
  FiLayers,
  FiHeart,
  FiPhone,
  FiClipboard,
  FiBarChart2,
  FiUsers,
  FiFileText,
} from "react-icons/fi";
import PageHero from "../components/PageHero";
import { FadeUp, FadeIn } from "../components/FadeIn";
import CTABanner from "../components/CTABanner";
import screeningImage from "../assets/images/hanna-morris-Eu_jjK6Z67Q-unsplash.jpg";
import servicesImages from "../assets/images/services-1.jpg";
import HeroImage from "../assets/images/pawel-czerwinski-uA5mG5kyazI-unsplash.jpg";
import WhatToExpectSection, {
  WhatToExpectStep,
} from "../components/WhatToExpectSection";

const PILLARS = [
  {
    icon: FiActivity,
    label: "Evidence-Based",
    blurb:
      "Assessments grounded in peer-reviewed research and established clinical best practices.",
  },
  {
    icon: FiLayers,
    label: "Comprehensive",
    blurb:
      "Every evaluation examines the full picture — cognition, personal history, and context.",
  },
  {
    icon: FiHeart,
    label: "Person-Centred",
    blurb:
      "Your goals, your story, and your lived experience guide every recommendation we make.",
  },
];

const PRACTICE_ITEMS = [
  {
    label: "Assessment",
    text: "Assessments are tailored to identify behavioural, emotional, and cognitive concerns related to your brain health, as well as provide diagnostic clarification, describe changes over time, and guide treatment recommendations.",
  },
  {
    label: "Prevention",
    text: "Individualized treatment is designed to address your unique needs and goals, the challenges or barriers that may be interfering with your best self, and your ability to live in accordance with your values.",
  },
  {
    label: "Treatment",
    text: "The prevention of illness begins with evidence-informed education and skill-building to help you optimize factors that support healthy aging (e.g. mental health, sleep, exercise, diet, stress management, etc.).",
  },
];

const WHAT_TO_EXPECT_STEPS: WhatToExpectStep[] = [
  {
    icon: FiPhone,
    title: "Initial Consultation",
    description:
      "A brief discussion to understand your concerns, history, and goals, ensuring the screening is appropriate and tailored to your needs.",
  },
  {
    icon: FiClipboard,
    title: "Cognitive Screening Session (3 Hours)",
    description:
      "A structured series of standardized, evidence-based tasks assessing memory, attention, processing speed, language, and executive functioning in a supportive, one-on-one setting.",
  },
  {
    icon: FiBarChart2,
    title: "Scoring & Baseline Analysis",
    description:
      "Results are carefully scored and interpreted to establish a clear snapshot of your current cognitive functioning and identify any meaningful patterns or changes.",
  },
  {
    icon: FiUsers,
    title: "Feedback & Results Review",
    description:
      "A dedicated session where findings are explained in clear, practical terms, helping you understand your cognitive profile and what it means moving forward.",
  },
  {
    icon: FiFileText,
    title: "Report & Next Steps",
    description:
      "You’ll receive a detailed written summary with guidance on monitoring, prevention, or further assessment if needed — providing a reliable baseline for future comparison.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        title="Baseline Cognitive Screening"
        subtitle="Neuropsychological Care — Alberta, Canada"
        bgImage={HeroImage}
      />

      {/* ── Intro Strip ─────────────────────────────────────────────── */}
      <Box as="section" bg="white" py={{ base: "60px", md: "80px" }}>
        <VStack
          maxW="1200px"
          mx="auto"
          px={{ base: 4, md: 8 }}
          spacing={0}
          align="center"
          textAlign="center"
        >
          <FadeUp>
          <Text
            fontSize={{ base: "22px", md: "32px" }}
            fontWeight="600"
            color="brand.textDark"
            letterSpacing="-0.01em"
          >
            Science-Guided.{" "}
            <Text as="span" color="brand.teal">
              Compassion-Driven.
            </Text>
          </Text>
          </FadeUp>

          {/* Styled divider */}
          <Box mt={5} mb={8}>
            <Box
              as="hr"
              border="none"
              borderTop="3px solid"
              borderColor="brand.teal"
              w="72px"
              mx="auto"
              opacity={0.7}
            />
          </Box>

          {/* 3 icon pillars */}
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={{ base: 10, md: 8 }}
            justify="center"
            align={{ base: "center", md: "flex-start" }}
            w="full"
            maxW="860px"
          >
            {PILLARS.map((p, idx) => (
              <FadeUp key={p.label} delay={idx * 0.12} style={{ flex: 1 }}>
              <VStack spacing={4} align="center" w="full">
                <Box
                  w={{ base: "64px", md: "86px" }}
                  h={{ base: "64px", md: "86px" }}
                  borderRadius="18px"
                  bg="brand.misty"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon
                    as={p.icon}
                    color="brand.teal"
                    boxSize={{ base: 7, md: 10 }}
                  />
                </Box>
                <Text
                  fontWeight="600"
                  fontSize={{ base: "18px", md: "24px" }}
                  color="brand.textDark"
                >
                  {p.label}
                </Text>
                <Text
                  fontSize={{ base: "16px", md: "18px" }}
                  color="brand.textDark"
                  opacity={0.7}
                  lineHeight="1.7"
                  maxW="240px"
                  textAlign="center"
                >
                  {p.blurb}
                </Text>
              </VStack>
              </FadeUp>
            ))}
          </Flex>
        </VStack>
      </Box>

      {/* ── Baseline Cognitive Screening────────────────────────────── */}
      <Box
        as="section"
        position="relative"
        overflow="hidden"
        minH={{ base: "520px", md: "500px" }}
      >
        {/* Full-viewport-width background image */}
        <Box
          position="absolute"
          inset={0}
          bgImage={screeningImage}
          bgSize="cover"
          bgPosition={{ base: "center", md: "80% 30%" }}
        />

        {/* Mobile: uniform dark overlay for text readability */}
        <Box
          position="absolute"
          inset={0}
          bg="rgba(10,30,40,0.60)"
          zIndex={1}
          display={{ base: "block", lg: "none" }}
        />

        {/* Desktop left gradient: brand.misty → transparent */}
        <Box
          position="absolute"
          inset={0}
          zIndex={1}
          display={{ base: "none", lg: "block" }}
          style={{
            background:
              "linear-gradient(90deg, rgb(25, 61, 80) 47%, rgba(20, 50, 60, 0.68) 100%)",
          }}
        />

        {/* Desktop right vignette: dark → transparent (keeps quote readable) */}
        <Box
          position="absolute"
          inset={0}
          zIndex={1}
          display={{ base: "none", lg: "block" }}
        />

        {/* Content */}
        <Flex
          position="relative"
          zIndex={2}
          maxW="1200px"
          mx="auto"
          px={{ base: 8, md: 12 }}
          py={{ base: 16, md: 24 }}
          direction={{ base: "column", lg: "row" }}
          align="center"
          gap={{ base: 12, lg: 0 }}
        >
          {/* Left: title / hr / description */}
          <Box maxW={{ base: "100%", lg: "600px" }} flex={{ lg: "0 0 600px" }}>
            <FadeUp>
            <Text
              fontSize="sm"
              fontWeight="600"
              color={{ base: "brand.seafoam", lg: "brand.teal" }}
              letterSpacing="widest"
              textTransform="uppercase"
              mb={4}
            >
              Featured Service
            </Text>

            <Heading
              as="h2"
              fontSize={{ base: "26px", md: "32px" }}
              fontWeight="600"
              color={{ base: "white", lg: "white" }}
              lineHeight="1.2"
            >
              Baseline Cognitive Screening
            </Heading>

            {/* Styled hr */}
            <Box
              as="hr"
              border="none"
              borderTop="3px solid"
              borderColor="brand.teal"
              w="56px"
              my={5}
              opacity={0.8}
            />

            <Text
              fontSize={{ base: "15px", md: "16px" }}
              color={{ base: "whiteAlpha.900" }}
              opacity={{ base: 1, lg: 0.85 }}
              lineHeight="1.8"
            >
              A 3-hour assessment designed to provide a detailed snapshot of
              your current cognitive functioning. Through a series of
              standardized, evidence-based tasks, it evaluates key areas such as
              memory, attention, processing speed, language, and executive
              functioning. The results help identify subtle changes that may
              point to early signs of neurological conditions, while also
              distinguishing between normal variations and clinically meaningful
              concerns. Just as importantly, the assessment establishes a
              reliable baseline, allowing for accurate comparison over time to
              monitor the effects of injury, illness, or treatment and support
              informed decisions about care, recovery, and next steps.
            </Text>
            </FadeUp>
          </Box>

          {/* Right: quote — desktop only */}
          <Flex
            flex={1}
            justify="flex-end"
            display={{ base: "none", lg: "flex" }}
          >
            <FadeIn delay={0.16}>
            <VStack spacing={5} align="flex-start" maxW="380px">
              <Text
                fontSize="72px"
                lineHeight="0.6"
                color="brand.seafoam"
                fontWeight="600"
                aria-hidden
              >
                "
              </Text>
              <Text
                fontSize="18px"
                fontStyle="italic"
                color="white"
                lineHeight="1.8"
                style={{ textShadow: "0 2px 8px rgba(10,30,40,0.5)" }}
              >
                Understanding your cognitive baseline is not about what you
                might lose — it is about knowing what you have to protect.
              </Text>
              <HStack spacing={3} align="center">
                <Box w="32px" h="2px" bg="brand.seafoam" flexShrink={0} />
                <Text
                  fontSize="13px"
                  fontWeight="600"
                  color="whiteAlpha.800"
                  letterSpacing="wide"
                  style={{ textShadow: "0 1px 4px rgba(10,30,40,0.5)" }}
                >
                  Dr. Andrea Kilgour
                </Text>
              </HStack>
            </VStack>
            </FadeIn>
          </Flex>
        </Flex>
      </Box>

      {/* ── Why Cognitive Assessments Matter───────────────────────── */}
      <Box
        as="section"
        position="relative"
        bg="white"
        py={{ base: "72px", md: "96px" }}
        overflow="hidden"
        _before={{
          content: '""',
          position: "absolute",
          top: { base: "-80px", md: "80px" },
          left: "-80px",
          width: "200px",
          height: "200px",
          bg: "brand.teal",
          borderRadius: "50%",
          opacity: 0.08,
        }}
        _after={{
          content: '""',
          position: "absolute",
          display: { base: "none", md: "inherit" },
          bottom: "80px",
          right: "-80px",
          width: "200px",
          height: "200px",
          bg: "brand.teal",
          borderRadius: "50%",
          opacity: 0.08,
        }}
      >
        <FadeUp>
        <VStack
          maxW="760px"
          mx="auto"
          px={{ base: 6, md: 8 }}
          spacing={0}
          align="center"
          position="relative"
          zIndex={1}
        >
          <Heading
            as="h2"
            fontSize={{ base: "26px", md: "34px" }}
            fontWeight="600"
            color="brand.textDark"
            lineHeight="1.2"
            letterSpacing="-0.01em"
          >
            Why Cognitive Assessments Matter
          </Heading>

          <Box
            as="hr"
            border="none"
            borderTop="3px solid"
            borderColor="brand.teal"
            w="56px"
            mt={5}
            mb={7}
            opacity={0.8}
          />

          <Text
            fontSize={{ base: "15px", md: "17px" }}
            color="brand.textDark"
            opacity={0.85}
            lineHeight="1.85"
            mb={5}
          >
            Cognitive assessments provide an objective, comprehensive picture of
            how your brain is functioning across key domains — memory,
            attention, processing speed, language, and executive abilities. They
            reveal what no single conversation or routine appointment can
            capture.
          </Text>

          <Text
            fontSize={{ base: "15px", md: "17px" }}
            color="brand.textDark"
            opacity={0.85}
            lineHeight="1.85"
          >
            For some, an assessment brings clarity after years of unexplained
            difficulties. For others, it documents a healthy baseline — an
            anchor point that becomes invaluable if illness, injury, or aging
            ever brings change. In every case, the results are yours: a
            detailed, evidence-based report that empowers you, your family, and
            your care team to plan, act, and advocate with confidence.
          </Text>
        </VStack>
        </FadeUp>
      </Box>

      <WhatToExpectSection
        eyebrow="Your Journey"
        title="What To Expect"
        steps={WHAT_TO_EXPECT_STEPS}
      />

      {/* ── Cornerstones of Our Practice ────────────────────────────── */}
      <Box as="section" bg="gray.50" py={{ base: "72px", md: "96px" }}>
        <Box maxW="1200px" mx="auto" px={{ base: 6, md: 8 }}>
          {/* Section header */}
          <FadeUp>
          <VStack align="center" spacing={0} mb={{ base: 10, md: 14 }}>
            <Heading
              as="h2"
              fontSize={{ base: "26px", md: "34px" }}
              fontWeight="600"
              color="brand.textDark"
              lineHeight="1.2"
              letterSpacing="-0.01em"
            >
              Cornerstones of Our Practice
            </Heading>
            <Box
              as="hr"
              border="none"
              borderTop="3px solid"
              borderColor="brand.teal"
              w="56px"
              mt={5}
              opacity={0.8}
            />
          </VStack>
          </FadeUp>

          {/* Image + text */}
          <Flex
            direction={{ base: "column", lg: "row" }}
            gap={{ base: 10, lg: 16 }}
            align="stretch"
          >
            {/* Left: image */}
            <Box
              flex={{ lg: "0 0 42%" }}
              borderRadius="xl"
              overflow="hidden"
              maxH={{ base: "320px", lg: "none" }}
              minH={{ lg: "420px" }}
            >
              <FadeIn style={{ width: "100%", height: "100%", display: "block" }}>
              <Image
                src={servicesImages}
                alt="Dr. Andrea Kilgour"
                w="full"
                h="full"
                objectFit="cover"
                objectPosition="top center"
                display="block"
              />
              </FadeIn>
            </Box>

            {/* Right: pillars */}
            <VStack
              flex={1}
              spacing={0}
              align="flex-start"
              justify="center"
              gap={5}
            >
              {PRACTICE_ITEMS.map((item, idx) => (
                <FadeUp key={item.label} delay={idx * 0.12}>
                <Box>
                  <Text
                    fontWeight="600"
                    fontSize={{ base: "16px", md: "24px" }}
                    color="brand.teal"
                    mb={1}
                  >
                    {item.label}
                  </Text>
                  <Text
                    fontSize={{ base: "15px", md: "16px" }}
                    color="brand.textDark"
                    opacity={0.85}
                    lineHeight="1.85"
                  >
                    {item.text}
                  </Text>
                </Box>
                </FadeUp>
              ))}
            </VStack>
          </Flex>
        </Box>
      </Box>

      <CTABanner />
    </main>
  );
}
