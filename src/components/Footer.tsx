import {
  Box,
  Flex,
  VStack,
  HStack,
  Text,
  Link,
  Divider,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FiPhone, FiMail } from "react-icons/fi";

const FOOTER_LINKS = {
  Services: [
    { label: "Neuropsychological Evaluation", to: "/neuropsychological-evaluation" },
    { label: "Psychological Assessment", to: "/psychological-assessments" },
    { label: "Baseline Cognitive Screening", to: "/services" },
    { label: "Virtual Care", to: "/#virtual-care" },
  ],
  "Quick Links": [
    { label: "About Dr. Kilgour", to: "/meet-dr-kilgour" },
    { label: "Conditions We Address", to: "/#conditions" },
    { label: "FAQ", to: "/faq" },
    { label: "Contact Us", to: "/contact" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box as="footer" bg="brand.textDark" color="whiteAlpha.800">
      <Box
        maxW="1200px"
        mx="auto"
        px={{ base: 4, md: 8 }}
        py={{ base: "60px", md: "80px" }}
      >
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={10} mb={12}>
          {/* Brand column */}
          <VStack align="flex-start" spacing={5}>
            <HStack spacing={2}>
              <Box
                w="36px"
                h="36px"
                borderRadius="8px"
                bg="brand.teal"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text color="white" fontWeight="600" fontSize="sm">
                  AK
                </Text>
              </Box>
              <Box>
                <Text
                  fontWeight="700"
                  fontSize="md"
                  color="white"
                  lineHeight="1.1"
                >
                  AK Neuropsych
                </Text>
                <Text fontSize="xs" color="whiteAlpha.600" lineHeight="1">
                  Dr. Kilgour
                </Text>
              </Box>
            </HStack>
            <Text
              fontSize="14px"
              color="whiteAlpha.700"
              lineHeight="1.7"
              maxW="220px"
            >
              Evidence-based neuropsychological care to help you understand your
              brain and reclaim your life.
            </Text>
            <VStack align="flex-start" spacing={2}>
              <HStack spacing={2}>
                <Icon as={FiPhone} color="brand.seafoam" boxSize={4} />
                <Link
                  href="tel:+15872168132"
                  fontSize="13px"
                  color="whiteAlpha.800"
                  _hover={{ color: "brand.seafoam" }}
                >
                  (587) 216-8132
                </Link>
              </HStack>
              <HStack spacing={2}>
                <Icon as={FiMail} color="brand.seafoam" boxSize={4} />
                <Link
                  href="mailto:dr.akilgour@gmail.com"
                  fontSize="13px"
                  color="whiteAlpha.800"
                  _hover={{ color: "brand.seafoam" }}
                >
                  dr.akilgour@gmail.com
                </Link>
              </HStack>
            </VStack>
          </VStack>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <VStack key={heading} align="flex-start" spacing={4}>
              <Text
                fontSize="12px"
                fontWeight="700"
                color="brand.seafoam"
                letterSpacing="widest"
                textTransform="uppercase"
              >
                {heading}
              </Text>
              <VStack align="flex-start" spacing={3}>
                {links.map((l) => (
                  <Link
                    as={RouterLink}
                    key={l.label}
                    to={l.to}
                    fontSize="14px"
                    color="whiteAlpha.700"
                    _hover={{ color: "white" }}
                    transition="color 0.2s"
                  >
                    {l.label}
                  </Link>
                ))}
              </VStack>
            </VStack>
          ))}

          {/* Social / Credentials */}
          <VStack align="flex-start" spacing={4}>
            <Text
              fontSize="12px"
              fontWeight="700"
              color="brand.seafoam"
              letterSpacing="widest"
              textTransform="uppercase"
            >
              Connect
            </Text>
            <VStack align="flex-start" spacing={2}>
              {[
                "Registered Psychologist — Alberta & Manitoba",
                "PHIPA Compliant",
                "CPA Member",
              ].map((c) => (
                <HStack key={c} spacing={2}>
                  <Box
                    w="5px"
                    h="5px"
                    borderRadius="full"
                    bg="brand.seafoam"
                    flexShrink={0}
                  />
                  <Text fontSize="12px" color="whiteAlpha.600">
                    {c}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </VStack>
        </SimpleGrid>

        <Divider borderColor="whiteAlpha.200" mb={6} />

        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          gap={3}
        >
          <Text fontSize="12px" color="whiteAlpha.500">
            © {year} AK Neuropsych — Dr. Kilgour. All rights reserved.
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}
