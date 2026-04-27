import { Box, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { HiOutlineDocumentText, HiOutlineGlobeAlt } from "react-icons/hi";
import { FadeUp } from "./FadeIn";

interface ResourceLink {
  label: string;
  href: string;
}

const PDF_LINKS: ResourceLink[] = [
  {
    label: '"Psychology Works" Fact Sheet: Concussions',
    href: "https://cpa.ca/docs/File/Publications/FactSheets/PsychologyWorksFactSheet_Concussions.pdf",
  },
  {
    label: '"Psychology Works" Fact Sheet: Cognitive Disorders and Dementia',
    href: "https://cpa.ca/docs/File/Publications/FactSheets/PsychologyWorksFactSheet_CognitiveDisordersAndDementia.pdf",
  },
  {
    label: '"Psychology Works" Fact Sheet: Depression',
    href: "https://cpa.ca/docs/File/Publications/FactSheets/PsychologyWorksFactSheet_Depression.pdf",
  },
  {
    label: '"Psychology Works" Fact Sheet: Post-Traumatic Stress Disorder',
    href: "https://cpa.ca/docs/File/Publications/FactSheets/PsychologyWorksFactSheet_PTSD.pdf",
  },
  {
    label: '"Psychology Works" Fact Sheet: Generalized Anxiety Disorder',
    href: "https://cpa.ca/docs/File/Publications/FactSheets/PsychologyWorksFactSheet_GeneralizedAnxietyDisorder.pdf",
  },
  {
    label: '"Psychology Works" Fact Sheet: Health Anxiety',
    href: "https://cpa.ca/docs/File/Publications/FactSheets/PsychologyWorksFactSheet_HealthAnxiety.pdf",
  },
  {
    label: '"Psychology Works" Fact Sheet: Substance Abuse',
    href: "https://cpa.ca/docs/File/Publications/FactSheets/PsychologyWorksFactSheet_SubstanceAbuse.pdf",
  },
  {
    label: '"Psychology Works" Fact Sheet: Chronic Pain',
    href: "https://cpa.ca/docs/File/Publications/FactSheets/PsychologyWorksFactSheet_ChronicPain.pdf",
  },
  {
    label: '"Psychology Works" Fact Sheet: Insomnia',
    href: "https://cpa.ca/docs/File/Publications/FactSheets/PsychologyWorksFactSheet_Insomnia.pdf",
  },
  {
    label: '"Psychology Works" Fact Sheet: Physical Activity, Mental Health, and Motivation',
    href: "https://cpa.ca/docs/File/Publications/FactSheets/PsychologyWorksFactSheet_PhysicalActivity_MentalHealth_Motivation.pdf",
  },
  {
    label: '"Psychology Works" Fact Sheet: Physical Activity',
    href: "https://cpa.ca/docs/File/Publications/FactSheets/PsychologyWorksFactSheet_PhysicalActivity.pdf",
  },
];

const WEBSITE_LINKS: ResourceLink[] = [
  {
    label: "College of Alberta Psychologists",
    href: "https://www.cap.ab.ca/",
  },
  {
    label: "Psychological Association of Alberta",
    href: "https://www.psychologistsassociation.ab.ca/",
  },
  {
    label: "Collegiate Sport Medicine Clinic, Red Deer, AB",
    href: "https://collegiatesportsmedicine.ca/services/sport-neuropsychology/",
  },
];

interface LinkListItemProps {
  link: ResourceLink;
  isPdf: boolean;
}

function LinkListItem({ link, isPdf }: LinkListItemProps) {
  const Icon = isPdf ? HiOutlineDocumentText : HiOutlineGlobeAlt;
  return (
    <Box
      display="flex"
      alignItems="flex-start"
      gap={3}
      py={3}
      role="listitem"
      _notLast={{
        borderBottom: "1px solid",
        borderColor: "brand.misty",
      }}
    >
      <Box
        flexShrink={0}
        mt="2px"
        color="brand.seafoam"
        fontSize="20px"
        lineHeight="1"
      >
        <Icon />
      </Box>
      <Link
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        fontSize={{ base: "15px", md: "16px" }}
        color="brand.textDark"
        fontWeight="500"
        lineHeight="1.6"
        _hover={{ color: "brand.teal", textDecoration: "underline" }}
        transition="color 0.2s"
      >
        {link.label}
      </Link>
    </Box>
  );
}

interface SubsectionProps {
  brow: string;
  title: string;
  subtitle: string;
  links: ResourceLink[];
  isPdf: boolean;
  fadeDelay?: number;
}

function Subsection({
  brow,
  title,
  subtitle,
  links,
  isPdf,
  fadeDelay = 0,
}: SubsectionProps) {
  return (
    <FadeUp delay={fadeDelay}>
      <Box>
        <Text
          fontSize="xs"
          fontWeight="700"
          color="brand.teal"
          letterSpacing="widest"
          textTransform="uppercase"
          mb={2}
        >
          {brow}
        </Text>
        <Heading
          as="h3"
          fontSize={{ base: "20px", md: "24px" }}
          fontWeight="700"
          color="brand.textDark"
          mb={2}
        >
          {title}
        </Heading>
        <Text
          fontSize={{ base: "14px", md: "15px" }}
          color="brand.textDark"
          opacity={0.65}
          mb={6}
          maxW="520px"
        >
          {subtitle}
        </Text>

        <Box role="list">
          {links.map((link) => (
            <LinkListItem key={link.href} link={link} isPdf={isPdf} />
          ))}
        </Box>
      </Box>
    </FadeUp>
  );
}

export default function ResourcesSection() {
  return (
    <Box
      as="section"
      py={{ base: "60px", md: "100px" }}
      bg="white"
      position="relative"
      overflowX="hidden"
      _before={{
        content: '""',
        position: "absolute",
        top: { base: "-80px", md: "80px" },
        left: "-80px",
        width: "200px",
        height: "200px",
        bg: "brand.teal",
        borderRadius: "50%",
        opacity: 0.06,
      }}
      _after={{
        content: '""',
        position: "absolute",
        display: { base: "none", md: "block" },
        bottom: "80px",
        right: "-80px",
        width: "200px",
        height: "200px",
        bg: "brand.teal",
        borderRadius: "50%",
        opacity: 0.06,
      }}
    >
      <Box maxW="800px" mx="auto" px={{ base: 4, md: 8 }}>
        {/* Section header */}
        <FadeUp>
          <VStack spacing={3} mb={14} textAlign="center">
            <Text
              fontSize="sm"
              fontWeight="700"
              color="brand.teal"
              letterSpacing="widest"
              textTransform="uppercase"
            >
              Learn &amp; Explore
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: "28px", md: "36px" }}
              fontWeight="800"
              color="brand.textDark"
            >
              Helpful Resources
            </Heading>
            <Text
              fontSize={{ base: "15px", md: "17px" }}
              color="brand.textDark"
              opacity={0.7}
              maxW="520px"
            >
              Curated fact sheets and trusted organizations to support your
              understanding of neuropsychological and mental health topics.
            </Text>
          </VStack>
        </FadeUp>

        {/* Subsections */}
        <VStack spacing={14} align="stretch">
          <Subsection
            brow="Reading Material"
            title="PDF Fact Sheets"
            subtitle='Evidence-based fact sheets from the Canadian Psychological Association covering a range of mental health and neurological topics.'
            links={PDF_LINKS}
            isPdf={true}
            fadeDelay={0.1}
          />

          {/* Visual divider — spacing only, no border on the container */}
          <Box
            h="1px"
            bg="brand.misty"
            opacity={0.6}
            mx={{ base: 0, md: 4 }}
          />

          <Subsection
            brow="Professional Organizations"
            title="Helpful Websites"
            subtitle="Reputable organizations and clinics offering additional information, professional directories, and services."
            links={WEBSITE_LINKS}
            isPdf={false}
            fadeDelay={0.15}
          />
        </VStack>
      </Box>
    </Box>
  );
}
