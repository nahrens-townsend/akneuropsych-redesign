import { Box, Flex, VStack, Text, Heading, Icon } from "@chakra-ui/react";

export interface WhatToExpectStep {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface WhatToExpectSectionProps {
  eyebrow?: string;
  title?: string;
  steps: WhatToExpectStep[];
}

const ICON_SIZE = 64; // px — diameter of the icon circle
const ZIGZAG_OFFSET = 88; // px — how far down even-indexed steps are shifted

// SVG viewBox dimensions
const SVG_W = 1000;
const SVG_H = ZIGZAG_OFFSET + ICON_SIZE; // 152

// Icon center Y positions in viewBox coords
const Y_TOP = ICON_SIZE / 2; // 32
const Y_BOT = ZIGZAG_OFFSET + ICON_SIZE / 2; // 120

function StepCard({ step }: { step: WhatToExpectStep }) {
  return (
    <VStack role="group" align="center" spacing={3} cursor="default">
      {/* Icon wrapper — hover circle lives here */}
      <Box
        position="relative"
        w={`${ICON_SIZE}px`}
        h={`${ICON_SIZE}px`}
        flexShrink={0}
      >
        {/* Icon circle */}
        <Box
          position="relative"
          zIndex={1}
          w={`${ICON_SIZE}px`}
          h={`${ICON_SIZE}px`}
          borderRadius="full"
          bg="brand.misty"
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="brand.teal"
          transition="background 0.35s ease, color 0.35s ease, box-shadow 0.35s ease"
          _groupHover={{
            bg: "brand.teal",
            color: "white",
            boxShadow: "0 8px 24px rgba(46,117,117,0.28)",
            transition: "transform 0.1s ease-in",
            transform: "scale(1.10)",
          }}
        >
          <Icon as={step.icon} boxSize={7} />
        </Box>
      </Box>

      <Text
        fontWeight="700"
        fontSize={{ base: "15px", md: "16px" }}
        color="brand.textDark"
        textAlign="center"
      >
        {step.title}
      </Text>

      <Text
        fontSize="14px"
        color="brand.textDark"
        lineHeight="1.7"
        textAlign="center"
        maxW="300px"
      >
        {step.description}
      </Text>
    </VStack>
  );
}

export default function WhatToExpectSection({
  eyebrow = "Your Journey",
  title = "What To Expect",
  steps,
}: WhatToExpectSectionProps) {
  // Compute SVG x-centers dynamically so the component works for any step count.
  const stepX = steps.map((_, i) =>
    Math.round((i + 0.5) * (SVG_W / steps.length)),
  );
  const stepY = steps.map((_, i) => (i % 2 === 0 ? Y_TOP : Y_BOT));

  return (
    <Box as="section" bg="white" pb={{ base: "72px", md: "96px" }}>
      <Box maxW="1200px" mx="auto" px={{ base: 6, md: 8 }}>
        {/* Header */}
        <VStack spacing={0} mb={{ base: 12, md: 16 }} align="center">
          <Text
            fontSize="sm"
            fontWeight="600"
            color="brand.teal"
            letterSpacing="widest"
            textTransform="uppercase"
            mb={3}
          >
            {eyebrow}
          </Text>
          <Heading
            as="h2"
            fontSize={{ base: "26px", md: "34px" }}
            fontWeight="600"
            color="brand.textDark"
            lineHeight="1.2"
            letterSpacing="-0.01em"
            textAlign="center"
          >
            {title}
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

        {/* Mobile: simple vertical stack */}
        <VStack
          display={{ base: "flex", lg: "none" }}
          spacing={10}
          align="center"
        >
          {steps.map((step, i) => (
            <StepCard key={i} step={step} />
          ))}
        </VStack>

        {/* Desktop: zigzag row with SVG connector lines */}
        <Flex
          display={{ base: "none", lg: "flex" }}
          position="relative"
          align="flex-start"
        >
          {/* SVG connector lines overlay */}
          <Box
            position="absolute"
            top={0}
            left={0}
            w="100%"
            h={`${SVG_H}px`}
            pointerEvents="none"
            zIndex={0}
          >
            <svg
              width="100%"
              height={SVG_H}
              viewBox={`0 0 ${SVG_W} ${SVG_H}`}
              preserveAspectRatio="none"
              style={{ overflow: "visible" }}
            >
              {steps.slice(0, -1).map((_, i) => (
                <line
                  key={i}
                  x1={stepX[i]}
                  y1={stepY[i]}
                  x2={stepX[i + 1]}
                  y2={stepY[i + 1]}
                  stroke="#DCEEF2"
                  strokeWidth="2.5"
                  strokeDasharray="6 5"
                  opacity="0.95"
                />
              ))}
            </svg>
          </Box>

          {steps.map((step, i) => (
            <Box
              key={i}
              flex={1}
              px={4}
              pt={i % 2 === 1 ? `${ZIGZAG_OFFSET}px` : 0}
              position="relative"
              zIndex={1}
            >
              <StepCard step={step} />
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
