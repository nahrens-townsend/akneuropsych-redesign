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
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { FiPhone, FiMail, FiInstagram, FiLinkedin } from 'react-icons/fi'

const FOOTER_LINKS = {
  Services: [
    { label: 'Neuropsychological Assessment', to: '/#services' },
    { label: 'Prevention & Brain Wellness', to: '/#services' },
    { label: 'Treatment & Rehabilitation', to: '/#services' },
    { label: 'Virtual Care', to: '/#virtual-care' },
  ],
  'Quick Links': [
    { label: 'About Dr. Kilgour', to: '/#about' },
    { label: 'Conditions We Address', to: '/#conditions' },
    { label: 'Our Process', to: '/#process' },
    { label: 'Contact Us', to: '/#contact' },
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <Box as="footer" bg="brand.textDark" color="whiteAlpha.800">
      <Box maxW="1200px" mx="auto" px={{ base: 4, md: 8 }} py={{ base: '60px', md: '80px' }}>
        <SimpleGrid
          columns={{ base: 1, sm: 2, lg: 4 }}
          spacing={10}
          mb={12}
        >
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
                <Text color="white" fontWeight="800" fontSize="sm">
                  AK
                </Text>
              </Box>
              <Box>
                <Text fontWeight="700" fontSize="md" color="white" lineHeight="1.1">
                  AK Neuropsych
                </Text>
                <Text fontSize="xs" color="whiteAlpha.600" lineHeight="1">
                  Dr. Kilgour
                </Text>
              </Box>
            </HStack>
            <Text fontSize="14px" color="whiteAlpha.700" lineHeight="1.7" maxW="220px">
              Evidence-based neuropsychological care to help you understand your
              brain and reclaim your life.
            </Text>
            <VStack align="flex-start" spacing={2}>
              <HStack spacing={2}>
                <Icon as={FiPhone} color="brand.seafoam" boxSize={4} />
                <Link
                  href="tel:+15550100100"
                  fontSize="13px"
                  color="whiteAlpha.800"
                  _hover={{ color: 'brand.seafoam' }}
                >
                  (555) 010-0100
                </Link>
              </HStack>
              <HStack spacing={2}>
                <Icon as={FiMail} color="brand.seafoam" boxSize={4} />
                <Link
                  href="mailto:info@akneuropsych.ca"
                  fontSize="13px"
                  color="whiteAlpha.800"
                  _hover={{ color: 'brand.seafoam' }}
                >
                  info@akneuropsych.ca
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
                    _hover={{ color: 'white' }}
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
            <HStack spacing={3}>
              {[
                { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: FiInstagram, href: 'https://instagram.com', label: 'Instagram' },
              ].map((s) => (
                <Box
                  key={s.label}
                  as="a"
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  w="38px"
                  h="38px"
                  borderRadius="10px"
                  bg="whiteAlpha.100"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  transition="all 0.2s"
                  _hover={{ bg: 'brand.teal' }}
                >
                  <Icon as={s.icon} color="white" boxSize={4} />
                </Box>
              ))}
            </HStack>
            <VStack align="flex-start" spacing={2} mt={2}>
              {[
                'Registered Psychologist — BC',
                'PHIPA Compliant',
                'CPA Member',
              ].map((c) => (
                <HStack key={c} spacing={2}>
                  <Box w="5px" h="5px" borderRadius="full" bg="brand.seafoam" flexShrink={0} />
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
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          gap={3}
        >
          <Text fontSize="12px" color="whiteAlpha.500">
            © {year} AK Neuropsych — Dr. Kilgour. All rights reserved.
          </Text>
          <HStack spacing={5}>
            {['Privacy Policy', 'Terms of Service', 'Accessibility'].map((label) => (
              <Link
                key={label}
                href="#"
                fontSize="12px"
                color="whiteAlpha.500"
                _hover={{ color: 'whiteAlpha.800' }}
              >
                {label}
              </Link>
            ))}
          </HStack>
        </Flex>
      </Box>
    </Box>
  )
}
