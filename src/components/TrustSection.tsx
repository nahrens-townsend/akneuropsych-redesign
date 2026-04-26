import { Box, VStack, HStack, Text, Heading, Flex, Grid, GridItem } from '@chakra-ui/react'

const INSURERS = [
  'Sun Life',
  'Manulife',
  'Great-West Life',
  'Blue Cross',
  'Desjardins',
  'Green Shield',
]

export default function TrustSection() {
  return (
    <Box
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
            Insurance &amp; Billing
          </Text>
          <Heading
            fontSize={{ base: '26px', md: '34px' }}
            fontWeight="800"
            color="brand.textDark"
          >
            Direct Billing Available
          </Heading>
          <Text
            fontSize={{ base: '15px', md: '17px' }}
            color="brand.textDark"
            opacity={0.7}
            maxW="500px"
          >
            We work directly with major insurers so you can focus on recovery,
            not paperwork. Coverage questions? We're happy to help.
          </Text>
        </VStack>

        <Grid
          templateColumns={{
            base: 'repeat(2, 1fr)',
            sm: 'repeat(3, 1fr)',
            md: 'repeat(6, 1fr)',
          }}
          gap={4}
          mb={10}
        >
          {INSURERS.map((name) => (
            <GridItem key={name}>
              <Flex
                bg="white"
                border="1.5px solid"
                borderColor="gray.100"
                borderRadius="12px"
                h="72px"
                alignItems="center"
                justifyContent="center"
                px={3}
                filter="grayscale(100%)"
                opacity={0.7}
                transition="all 0.25s"
                _hover={{
                  filter: 'grayscale(0%)',
                  opacity: 1,
                  borderColor: 'brand.seafoam',
                  boxShadow: '0 4px 16px rgba(96,166,166,0.12)',
                }}
              >
                <Text
                  fontSize="13px"
                  fontWeight="700"
                  color="brand.textDark"
                  textAlign="center"
                >
                  {name}
                </Text>
              </Flex>
            </GridItem>
          ))}
        </Grid>

        {/* Trust badges */}
        <Flex
          justify="center"
          flexWrap="wrap"
          gap={6}
        >
          {[
            '✓  Registered Psychologist',
            '✓  PHIPA Compliant',
            '✓  Telehealth Approved',
            '✓  CPA Member',
          ].map((badge) => (
            <HStack
              key={badge}
              bg="white"
              border="1.5px solid"
              borderColor="gray.100"
              borderRadius="full"
              px={5}
              py={2.5}
              spacing={2}
            >
              <Text fontSize="13px" fontWeight="600" color="brand.textDark">
                {badge}
              </Text>
            </HStack>
          ))}
        </Flex>
      </Box>
    </Box>
  )
}
