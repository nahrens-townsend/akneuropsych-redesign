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
  FiSearch,
  FiClipboard,
  FiMessageSquare,
  FiPhone,
  FiBarChart2,
  FiUsers,
  FiFileText,
} from "react-icons/fi";
import PageHero from "../components/PageHero";
import { FadeUp, FadeIn } from "../components/FadeIn";
import CTABanner from "../components/CTABanner";
import WhatToExpectSection from "../components/WhatToExpectSection";
import type { WhatToExpectStep } from "../components/WhatToExpectSection";
import screeningImage from "../assets/images/raspopova-marina-yL96L498NDM-unsplash.jpg";
import cornerstonesImage from "../assets/images/services-2.jpg";
import HeroImage from "../assets/images/pawel-czerwinski-VIoy52Jx6Cg-unsplash.jpg";
import base from "@emotion/styled/base";

const PILLARS = [
  {
    icon: FiSearch,
    label: "In-Depth Exploration",
    blurb:
      "A thorough look at emotional functioning, personality structure, and coping patterns — not just symptoms, but the deeper factors shaping daily life.",
  },
  {
    icon: FiClipboard,
    label: "Validated Testing",
    blurb:
      "Standardized psychological instruments with established reliability and validity, interpreted within the full context of your personal history.",
  },
  {
    icon: FiMessageSquare,
    label: "Collaborative Review",
    blurb:
      "Findings are shared with you in a dedicated follow-up session, ensuring every recommendation is clear, meaningful, and actionable.",
  },
];

const ASSESSMENT_ITEMS = [
  {
    label: "Emotional Functioning",
    text: "The assessment examines how you experience, regulate, and express emotions — identifying patterns of anxiety, depression, trauma responses, or emotional reactivity that may be affecting your quality of life and relationships. Understanding these patterns is the essential first step toward meaningful, lasting change.",
  },
  {
    label: "Personality & Coping Styles",
    text: "Formal psychological testing provides a validated, structured portrait of your personality and the ways you characteristically respond to stress, adversity, and interpersonal challenges. This understanding informs targeted treatment, builds self-awareness, and highlights both vulnerabilities and areas of resilience.",
  },
  {
    label: "Clinical Interview & Written Report",
    text: "A thorough clinical interview anchors the entire assessment, gathering personal history, context, and the concerns most relevant to you. All findings are compiled into a detailed written report, reviewed with you in a dedicated follow-up session so that every result translates into practical, actionable guidance.",
  },
];

const WHAT_TO_EXPECT_STEPS: WhatToExpectStep[] = [
  {
    icon: FiPhone,
    title: "Initial Consultation",
    description:
      "A brief discussion to understand your concerns, determine if an assessment is appropriate, and answer any initial questions.",
  },
  {
    icon: FiClipboard,
    title: "Assessment Session(s)",
    description:
      "A structured combination of clinical interview and standardized testing, completed in a supportive, one-on-one setting.",
  },
  {
    icon: FiBarChart2,
    title: "Scoring & Interpretation",
    description:
      "All results are carefully analyzed and integrated with your personal history to ensure an accurate and meaningful understanding.",
  },
  {
    icon: FiUsers,
    title: "Feedback Session",
    description:
      "A dedicated review where findings are explained clearly, questions are answered, and next steps are outlined.",
  },
  {
    icon: FiFileText,
    title: "Written Report",
    description:
      "A comprehensive, easy-to-understand document you can use for personal insight or to guide treatment with other professionals.",
  },
];

export default function PsychAssessmentPage() {
  return (
    <main>
      <PageHero
        title="Psychological Assessment"
        subtitle="Emotional & Personality Evaluation — Alberta, Canada"
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
            Clinically Grounded.{" "}
            <Text as="span" color="brand.teal">
              Emotionally Informed.
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

      {/* ── Psychological Assessment Feature ────────────────────────── */}
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
          bgPosition="50% 61%"
        />

        {/* Mobile: uniform dark overlay for text readability */}
        <Box
          position="absolute"
          inset={0}
          bg="rgba(10,30,40,0.60)"
          zIndex={1}
          display={{ base: "block", lg: "none" }}
        />

        {/* Desktop left gradient: brand.teal → transparent */}
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
              color={{ base: "brand.seafoam", lg: "white" }}
              letterSpacing="widest"
              textTransform="uppercase"
              mb={4}
            >
              Comprehensive Assessment
            </Text>

            <Heading
              as="h2"
              fontSize={{ base: "26px", md: "32px" }}
              fontWeight="600"
              color="white"
              lineHeight="1.2"
            >
              Psychological Assessment
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
              color="whiteAlpha.900"
              opacity={{ base: 1, lg: 0.85 }}
              lineHeight="1.8"
            >
              A comprehensive evaluation for individuals experiencing emotional
              difficulties, stress, or adverse reactions to life events. Through
              a clinical interview and a battery of formal psychological tests,
              it examines emotional functioning, personality structure, coping
              styles, and the psychological factors influencing daily life.
              Results are compiled into a detailed written report — reviewed
              with you in a dedicated follow-up session — to ensure you have a
              clear understanding of the findings and practical direction for
              the path ahead.
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
                Understanding how you feel — and why — is not a luxury. It is
                the foundation of meaningful, lasting change.
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

      {/* ── Why Psychological Assessments Matter────────────────────── */}
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
            textAlign="center"
          >
            {" "}
            Why Psychological Assessments Matter{" "}
          </Heading>{" "}
          <Box
            as="hr"
            border="none"
            borderTop="3px solid"
            borderColor="brand.teal"
            w="56px"
            mt={5}
            mb={7}
            opacity={0.8}
          />{" "}
          <Text
            fontSize={{ base: "15px", md: "17px" }}
            color="brand.textDark"
            opacity={0.85}
            lineHeight="1.85"
            mb={5}
          >
            {" "}
            Emotional difficulties and adverse life reactions rarely fit neatly
            into a single category — and they're seldom explained by a brief
            appointment. A psychological assessment provides the depth and
            structure to understand what is truly happening: the underlying
            emotional patterns, the personality factors at play, and the coping
            strategies that are helping or quietly working against you.{" "}
          </Text>{" "}
          <Text
            fontSize={{ base: "15px", md: "17px" }}
            color="brand.textDark"
            opacity={0.85}
            lineHeight="1.85"
          >
            {" "}
            For many people, a formal assessment is the turning point — the
            moment vague distress finally has a name and a path forward becomes
            visible. The written report documents your psychological profile
            with precision, empowering you and your care team to pursue
            targeted, evidence-informed treatment that is grounded in who you
            truly are.{" "}
          </Text>
        </VStack>
        </FadeUp>
      </Box>

      <WhatToExpectSection
        eyebrow="Your Journey"
        title="What To Expect"
        steps={WHAT_TO_EXPECT_STEPS}
      />

      {/* ── What the Assessment Explores ────────────────────────────── */}
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
              What the Assessment Explores
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
                src={cornerstonesImage}
                alt="Psychologist conducting a psychological assessment with a patient"
                w="full"
                h="full"
                objectFit="cover"
                objectPosition="top center"
                display="block"
              />
              </FadeIn>
            </Box>

            {/* Right: assessment areas */}
            <VStack
              flex={1}
              spacing={0}
              align="flex-start"
              justify="center"
              gap={5}
            >
              {ASSESSMENT_ITEMS.map((item, idx) => (
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
