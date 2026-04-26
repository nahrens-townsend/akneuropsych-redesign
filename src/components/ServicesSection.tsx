import {
  Box,
  Grid,
  GridItem,
  VStack,
  HStack,
  Text,
  Heading,
  Icon,
  List,
  ListItem,
  ListIcon,
  Button,
} from '@chakra-ui/react'
import { FiClipboard, FiShield, FiTrendingUp, FiCheckCircle, FiArrowRight } from 'react-icons/fi'

const SERVICES = [
  {
    icon: FiClipboard,
    title: 'Neuropsychological Assessment',
    accent: 'brand.teal',
    bg: 'brand.misty',
    description:
      'Comprehensive cognitive testing to understand strengths, challenges, and underlying neurological factors impacting daily functioning.',
    items: [
      'Cognitive & memory evaluation',
      'Academic and learning assessment',
      'Diagnostic clarification',
      'Medicolegal assessment',
    ],
  },
  {
    icon: FiShield,
    title: 'Prevention & Brain Wellness',
    accent: 'brand.seafoam',
    bg: '#EDF6F7',
    description:
      'Proactive strategies to protect and optimize brain health before symptoms emerge — for individuals, families, and organizations.',
    items: [
      'Cognitive reserve building',
      'Lifestyle & brain health coaching',
      'Return-to-work programs',
      'Caregiver support',
    ],
  },
  {
    icon: FiTrendingUp,
    title: 'Treatment & Rehabilitation',
    accent: 'brand.mocha',
    bg: '#F5EFED',
    description:
      'Targeted interventions to rebuild cognitive function, manage symptoms, and help you return to the activities that matter most.',
    items: [
      'Cognitive rehabilitation',
      'Psychotherapy & CBT',
      'Psychoeducation & skills training',
      'Ongoing monitoring & support',
    ],
  },
]

export default function ServicesSection() {
  return (
    <Box
      id="services"
      as="section"
      py={{ base: '60px', md: '100px' }}
      bg="#F8FAFB"
    >
      <Box maxW="1200px" mx="auto" px={{ base: 4, md: 8 }}>
        <VStack spacing={3} mb={12} textAlign="center">
          <Text
            fontSize="sm"
            fontWeight="700"
            color="brand.teal"
            letterSpacing="widest"
            textTransform="uppercase"
          >
            What We Offer
          </Text>
          <Heading
            fontSize={{ base: '28px', md: '36px' }}
            fontWeight="800"
            color="brand.textDark"
          >
            Comprehensive Neuropsychological Services
          </Heading>
          <Text
            fontSize={{ base: '15px', md: '17px' }}
            color="brand.textDark"
            opacity={0.7}
            maxW="520px"
          >
            From initial assessment through to long-term recovery and thriving.
          </Text>
        </VStack>

        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
          gap={8}
        >
          {SERVICES.map((s) => (
            <GridItem key={s.title}>
              <Box
                bg="white"
                borderRadius="20px"
                p={8}
                h="full"
                border="1.5px solid"
                borderColor="gray.100"
                display="flex"
                flexDirection="column"
                transition="all 0.25s"
                _hover={{
                  borderColor: 'brand.seafoam',
                  boxShadow: '0 10px 40px rgba(96,166,166,0.12)',
                  transform: 'translateY(-4px)',
                }}
              >
                <VStack align="flex-start" spacing={5} flex={1}>
                  <Box
                    w="56px"
                    h="56px"
                    borderRadius="16px"
                    bg={s.bg}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Icon as={s.icon} color={s.accent} boxSize={6} />
                  </Box>

                  <Heading fontSize="20px" fontWeight="700" color="brand.textDark">
                    {s.title}
                  </Heading>

                  <Text fontSize="14px" color="brand.textDark" opacity={0.75} lineHeight="1.7">
                    {s.description}
                  </Text>

                  <List spacing={2} flex={1}>
                    {s.items.map((item) => (
                      <ListItem key={item} display="flex" alignItems="center">
                        <ListIcon as={FiCheckCircle} color={s.accent} boxSize={4} mr={2} />
                        <Text fontSize="13px" color="brand.textDark" opacity={0.8}>
                          {item}
                        </Text>
                      </ListItem>
                    ))}
                  </List>
                </VStack>

                <Box mt={6}>
                  <Button
                    as="a"
                    href="#contact"
                    variant="ctaOutline"
                    size="sm"
                    rightIcon={<FiArrowRight />}
                    w="full"
                  >
                    Learn More
                  </Button>
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>

        <HStack justify="center" mt={10}>
          <Text fontSize="14px" color="brand.textDark" opacity={0.7}>
            Not sure what you need?
          </Text>
          <Button
            as="a"
            href="#contact"
            variant="cta"
            size="md"
            rightIcon={<FiArrowRight />}
          >
            Book a Free Intake Call
          </Button>
        </HStack>
      </Box>
    </Box>
  )
}
