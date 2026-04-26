import { Box, VStack, Text } from '@chakra-ui/react'
import { FadeIn } from './FadeIn'

export default function QuoteSection() {
  return (
    <Box
      as="section"
      py={{ base: '60px', md: '100px' }}
      bg="brand.teal"
      position="relative"
      overflow="hidden"
    >
      {/* Background decoration */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgGradient="linear(135deg, #4E9090 0%, brand.teal 50%, #5AADAD 100%)"
        zIndex={0}
      />

      <FadeIn>
        <VStack
          maxW="800px"
          mx="auto"
          px={{ base: 6, md: 8 }}
          spacing={6}
          textAlign="center"
          position="relative"
          zIndex={1}
        >
          <Text
            fontSize={{ base: '60px', md: '80px' }}
            lineHeight="0.6"
            color="whiteAlpha.400"
            fontFamily="Georgia, serif"
            userSelect="none"
            aria-hidden="true"
          >
            &ldquo;
          </Text>

          <Text
            fontSize={{ base: '20px', md: '26px', lg: '30px' }}
            fontStyle="italic"
            fontWeight="500"
            color="white"
            lineHeight="1.55"
            px={{ base: 0, md: 4 }}
          >
            The brain is not fixed. It is one of the most adaptable organs in the human body.
            With the right support, understanding, and tools, recovery is not just possible —
            it is the expectation.
          </Text>

          <Text
            fontSize={{ base: '60px', md: '80px' }}
            lineHeight="0.6"
            color="whiteAlpha.400"
            fontFamily="Georgia, serif"
            userSelect="none"
            aria-hidden="true"
          >
            &rdquo;
          </Text>

          <Box pt={2}>
            <Text fontSize="16px" fontWeight="700" color="whiteAlpha.900">
              Dr. Kilgour
            </Text>
            <Text fontSize="13px" color="whiteAlpha.700" mt={1}>
              Registered Neuropsychologist, AK Neuropsych
            </Text>
          </Box>
        </VStack>
      </FadeIn>
    </Box>
  )
}
