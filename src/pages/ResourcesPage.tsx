import { Box, Heading, Text } from "@chakra-ui/react";
import PageHero from "../components/PageHero";
import CTABanner from "../components/CTABanner";

export default function ResourcesPage() {
  return (
    <main>
      <PageHero title="Resources" subtitle="Learn & Explore" />
      <Box maxW="800px" mx="auto" px={{ base: 4, md: 8 }} py={{ base: 16, md: 24 }}>
        <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} mb={4} color="brand.textDark">
          Coming Soon
        </Heading>
        <Text color="gray.600" fontSize="lg">
          Helpful guides, articles, and tools are on their way.
        </Text>
      </Box>
      <CTABanner />
    </main>
  );
}
