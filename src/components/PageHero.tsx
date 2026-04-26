import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { FadeUp } from "./FadeIn";

const DEFAULT_BG =
  "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80')";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
}

export default function PageHero({ title, subtitle, bgImage }: PageHeroProps) {
  return (
    <Box
      position="relative"
      bgImage={bgImage ?? DEFAULT_BG}
      bgSize="cover"
      bgPosition="center"
      overflow="hidden"
      h={{ base: "320px", md: "400px" }}
    >
      {/* Dark overlay */}
      <Box
        position="absolute"
        inset={0}
        bgGradient="linear(to-br, rgba(10,30,40,0.80), rgba(20,50,60,0.2))"
        zIndex={0}
      />

      <Flex
        maxW="1200px"
        mx="auto"
        px={{ base: 4, md: 8 }}
        h="full"
        align="flex-end"
        pb={{ base: 10, md: 14 }}
        position="relative"
        zIndex={1}
      >
        <Box>
          {subtitle && (
            <FadeUp delay={0}>
              <Text
                fontSize="sm"
                fontWeight="700"
                color="brand.seafoam"
                letterSpacing="widest"
                textTransform="uppercase"
                mb={3}
              >
                {subtitle}
              </Text>
            </FadeUp>
          )}
          <FadeUp delay={subtitle ? 0.1 : 0}>
            <Heading
              as="h1"
              fontSize={{ base: "36px", md: "52px", lg: "60px" }}
              fontWeight="600"
              color="white"
              lineHeight="1.1"
            >
              {title}
            </Heading>
          </FadeUp>
        </Box>
      </Flex>
    </Box>
  );
}
