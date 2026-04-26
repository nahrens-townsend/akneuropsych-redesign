import {
  Box,
  Flex,
  VStack,
  Text,
  Heading,
  Button,
  Icon,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import {
  FiMonitor,
  FiWifi,
  FiClock,
  FiMapPin,
  FiArrowRight,
} from 'react-icons/fi'
import { FadeUp } from './FadeIn'

const VIRTUAL_FEATURES = [
  {
    icon: FiMonitor,
    title: 'Secure Video Sessions',
    desc: 'PHIPA-compliant platform — your privacy is fully protected.',
  },
  {
    icon: FiWifi,
    title: 'All Canadian Provinces',
    desc: 'Registered to provide services across Canada via telehealth.',
  },
  {
    icon: FiClock,
    title: 'Flexible Scheduling',
    desc: 'Morning, evening, and weekend appointments available.',
  },
  {
    icon: FiMapPin,
    title: 'No Travel Required',
    desc: 'Access expert neuropsychological care from your home.',
  },
]

export default function VirtualCareSection() {
  return (
    <Box
      id="virtual-care"
      as="section"
      py={{ base: '60px', md: '100px' }}
      bg="brand.misty"
    >
      <Flex
        maxW="1200px"
        mx="auto"
        px={{ base: 4, md: 8 }}
        direction={{ base: 'column', lg: 'row' }}
        align="center"
        gap={{ base: 12, lg: 16 }}
      >
        {/* Left: Text */}
        <FadeUp style={{ flex: 1 }}>
          <VStack align="flex-start" spacing={6}>
            <Text
              fontSize="sm"
              fontWeight="700"
              color="brand.teal"
              letterSpacing="widest"
              textTransform="uppercase"
            >
              Virtual Care
            </Text>

            <Heading
              fontSize={{ base: '28px', md: '36px' }}
              fontWeight="800"
              color="brand.textDark"
              lineHeight="1.2"
            >
              Expert Care —{' '}
              <Text as="span" color="brand.teal">
                Wherever You Are
              </Text>
            </Heading>

            <Text
              fontSize="16px"
              color="brand.textDark"
              opacity={0.8}
              lineHeight="1.75"
            >
              Distance should never be a barrier to brain health. Our secure
              telehealth platform delivers the same quality of neuropsychological
              assessment and treatment you'd receive in person — from the comfort
              of home.
            </Text>

            <Button
              as="a"
              href="#contact"
              variant="cta"
              size="lg"
              rightIcon={<FiArrowRight />}
              px={8}
            >
              Book a Virtual Appointment
            </Button>
          </VStack>
        </FadeUp>

        {/* Right: Feature Grid */}
        <Grid
          flex={1}
          templateColumns="repeat(2, 1fr)"
          gap={5}
        >
          {VIRTUAL_FEATURES.map((f, idx) => (
            <GridItem key={f.title}>
              <FadeUp delay={0.1 + idx * 0.1} style={{ height: '100%' }}>
                <Box
                  bg="white"
                  borderRadius="16px"
                  p={6}
                  h="full"
                  boxShadow="0 2px 16px rgba(26,44,53,0.06)"
                  transition="all 0.25s"
                  _hover={{
                    boxShadow: '0 8px 32px rgba(96,166,166,0.16)',
                    transform: 'translateY(-3px)',
                  }}
                >
                  <VStack align="flex-start" spacing={3}>
                    <Box
                      w="44px"
                      h="44px"
                      borderRadius="12px"
                      bg="brand.misty"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Icon as={f.icon} color="brand.teal" boxSize={5} />
                    </Box>
                    <Text fontSize="15px" fontWeight="700" color="brand.textDark">
                      {f.title}
                    </Text>
                    <Text fontSize="13px" color="brand.textDark" opacity={0.7} lineHeight="1.6">
                      {f.desc}
                    </Text>
                  </VStack>
                </Box>
              </FadeUp>
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </Box>
  )
}
