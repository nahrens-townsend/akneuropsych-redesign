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
  FiBarChart2,
  FiClipboard,
  FiCpu,
  FiFileText,
  FiPhone,
  FiUserCheck,
  FiUsers,
} from "react-icons/fi";
import PageHero from "../components/PageHero";
import { FadeUp, FadeIn } from "../components/FadeIn";
import screeningImage from "../assets/images/matheus-ferrero-yfmjALh1S6s-unsplash.jpg";
import CTABanner from "../components/CTABanner";
import HeroImage from "../assets/images/shapelined-_JBKdviweXI-unsplash.jpg";
import WhatToExpectSection, {
  WhatToExpectStep,
} from "../components/WhatToExpectSection";
import base from "@emotion/styled/base";

const PILLARS = [
  {
    icon: FiCpu,
    label: "Neurologically Focused",
    blurb:
      "Specialized evaluation targeting the full spectrum of brain-based functions impacted by acquired brain injury, stroke, or progressive neurological conditions.",
  },
  {
    icon: FiFileText,
    label: "Diagnostically Precise",
    blurb:
      "In-depth cognitive profiling that differentiates between overlapping conditions, clarifies diagnosis, and identifies the true scope of functional impairment.",
  },
  {
    icon: FiUserCheck,
    label: "Recovery-Oriented",
    blurb:
      "Every finding is translated into actionable recommendations that support your rehabilitation team and align with your personal recovery goals.",
  },
];

const EVALUATION_ITEMS = [
  {
    label: "Diagnosis Clarification",
    text: "Neurological and psychiatric conditions often present with overlapping symptoms. A comprehensive neuropsychological evaluation provides the objective cognitive and behavioural data needed to distinguish between conditions such as traumatic brain injury, dementia, post-concussion syndrome, and mood disorders — bringing clarity where uncertainty has persisted.",
  },
  {
    label: "Treatment Planning",
    text: "Evaluation findings are translated into targeted, evidence-based recommendations tailored to your specific cognitive profile. Whether you need accommodations at work or school, medication guidance, or cognitive rehabilitation strategies, the report gives your care team a precise roadmap for intervention.",
  },
  {
    label: "Rehabilitation Support",
    text: "A detailed neuropsychological profile equips your entire rehabilitation team — physiotherapists, occupational therapists, speech-language pathologists, and physicians — with the clinical data they need to direct meaningful, coordinated recovery efforts and monitor progress over time.",
  },
];

const WHAT_TO_EXPECT_STEPS: WhatToExpectStep[] = [
  {
    icon: FiPhone,
    title: "Initial Consultation",
    description:
      "A preliminary discussion to review your medical history, current concerns, and referral context, ensuring the evaluation is appropriate and tailored to your neurological condition and recovery goals.",
  },
  {
    icon: FiClipboard,
    title: "Comprehensive Assessment (8–10 Hours)",
    description:
      "A structured series of standardized, evidence-based tests administered one-on-one, assessing memory, attention, processing speed, executive functioning, language, and visuospatial abilities.",
  },
  {
    icon: FiBarChart2,
    title: "Clinical Analysis & Interpretation",
    description:
      "All results are carefully scored and interpreted in the context of your history, symptoms, and daily functioning, forming a cohesive and accurate cognitive profile.",
  },
  {
    icon: FiUsers,
    title: "Feedback & Results Review",
    description:
      "A dedicated session where findings are explained clearly, helping you understand your cognitive strengths, areas of impairment, and what they mean for your recovery.",
  },
  {
    icon: FiFileText,
    title: "Comprehensive Report & Recommendations",
    description:
      "A detailed written report outlining diagnostic conclusions and evidence-based recommendations to guide treatment, support rehabilitation, and advocate for your needs.",
  },
];

const CORNERSTONES_IMAGE =
  "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1200&q=80";

export default function NeuropsychEvalPage() {
  return (
    <main>
      <PageHero
        title="Neuropsychological Evaluation"
        subtitle="Brain Injury & Neurological Assessment — Alberta, Canada"
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
              Clinically Rigorous.{" "}
              <Text as="span" color="brand.teal">
                Recovery-Focused.
              </Text>
            </Text>
          </FadeUp>

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

      {/* ── Neuropsychological Evaluation Feature ───────────────────── */}
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
          bgPosition={{ base: "30%", md: "0% 70%" }}
        />

        {/* Mobile: uniform dark overlay */}
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
              Comprehensive Evaluation
            </Text>

            <Heading
              as="h2"
              fontSize={{ base: "26px", md: "32px" }}
              fontWeight="600"
              color="white"
              lineHeight="1.2"
            >
              Neuropsychological Evaluation
            </Heading>

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
              An 8–10 hour assessment designed for individuals living with the
              effects of brain injury or neurological conditions. Through an
              extensive battery of standardized, evidence-based tests, it
              evaluates memory, attention, processing speed, executive
              functioning, language, visuospatial abilities, and
              emotional-behavioural regulation. The evaluation generates a
              detailed cognitive profile that clarifies diagnosis, identifies
              functional strengths and impairments, and provides the foundation
              for coordinated care. Results are delivered in a comprehensive
              written report with clear, actionable recommendations to guide
              treatment planning, support rehabilitation efforts, and empower
              you and your care team at every stage of recovery.
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
                A neuropsychological evaluation doesn't simply measure what the
                brain cannot do — it illuminates every strength and strategy
                available for the road ahead.
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

      {/* ── Why a Neuropsychological Evaluation Matters ─────────────── */}
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
            Why a Neuropsychological Evaluation Matters
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
            Brain injuries and neurological conditions affect people in deeply
            individual ways. Symptoms can shift, overlap, and resist easy
            explanation. A neuropsychological evaluation cuts through that
            uncertainty — delivering an objective, comprehensive picture of
            cognitive functioning across every domain relevant to your condition
            and your daily life.
          </Text>

          <Text
            fontSize={{ base: "15px", md: "17px" }}
            color="brand.textDark"
            opacity={0.85}
            lineHeight="1.85"
          >
            For many people, a formal evaluation is the turning point: the
            moment a diagnosis finally fits, a treatment plan gains precision,
            or a rehabilitation programme finds its direction. The resulting
            report is yours — a detailed, evidence-based document that advocates
            for your needs in medical, legal, educational, and workplace
            settings long after the assessment is complete.
          </Text>
        </VStack>
        </FadeUp>
      </Box>

      <WhatToExpectSection
        eyebrow="Your Journey"
        title="What To Expect"
        steps={WHAT_TO_EXPECT_STEPS}
      />

      {/* ── What the Evaluation Covers ──────────────────────────────── */}
      <Box as="section" bg="gray.50" py={{ base: "72px", md: "96px" }}>
        <Box maxW="1200px" mx="auto" px={{ base: 6, md: 8 }}>
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
              What the Evaluation Covers
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
                src={CORNERSTONES_IMAGE}
                alt="MRI brain scan used in neuropsychological assessment"
                w="full"
                h="full"
                objectFit="cover"
                objectPosition="center"
                display="block"
              />
              </FadeIn>
            </Box>

            {/* Right: evaluation areas */}
            <VStack
              flex={1}
              spacing={0}
              align="flex-start"
              justify="center"
              gap={5}
            >
              {EVALUATION_ITEMS.map((item, idx) => (
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
