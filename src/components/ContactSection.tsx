import {
  Box,
  Flex,
  VStack,
  HStack,
  Text,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Icon,
  SimpleGrid,
  Alert,
  AlertIcon,
  AlertDescription,
  useToast,
} from "@chakra-ui/react";
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend } from "react-icons/fi";
import { useState, type FormEvent } from "react";

const PHONE = "(555) 010-0100";
const PHONE_TEL = "tel:+15550100100";
const EMAIL = "info@akneuropsych.ca";

const CONTACT_INFO = [
  { icon: FiPhone, label: "Phone", value: PHONE, href: PHONE_TEL },
  { icon: FiMail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Vancouver, BC — Virtual Canada-wide",
    href: undefined,
  },
  {
    icon: FiClock,
    label: "Hours",
    value: "Mon – Fri 9am–6pm, Sat 10am–3pm",
    href: undefined,
  },
];

export default function ContactSection() {
  const toast = useToast();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Message received",
      description: "We'll follow up within one business day.",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
  }

  return (
    <Box
      id="contact"
      as="section"
      py={{ base: "60px", md: "100px" }}
      bg="white"
    >
      <Flex
        maxW="1200px"
        mx="auto"
        px={{ base: 4, md: 8 }}
        direction={{ base: "column", lg: "row" }}
        gap={{ base: 12, lg: 16 }}
        align="flex-start"
      >
        {/* Left: Contact Info */}
        <VStack align="flex-start" spacing={8} flex={1}>
          <Box>
            <Text
              fontSize="sm"
              fontWeight="700"
              color="brand.teal"
              letterSpacing="widest"
              textTransform="uppercase"
              mb={3}
            >
              Get in Touch
            </Text>
            <Heading
              fontSize={{ base: "28px", md: "36px" }}
              fontWeight="800"
              color="brand.textDark"
              lineHeight="1.2"
            >
              Start Your Path to Recovery
            </Heading>
            <Text
              fontSize="16px"
              color="brand.textDark"
              opacity={0.75}
              lineHeight="1.75"
              mt={4}
            >
              Whether you have questions about our services or you're ready to
              book, we'd love to hear from you. Expect a response within one
              business day.
            </Text>
          </Box>

          <VStack align="flex-start" spacing={5} w="full">
            {CONTACT_INFO.map((item) => (
              <HStack key={item.label} spacing={4} align="flex-start">
                <Box
                  w="44px"
                  h="44px"
                  borderRadius="12px"
                  bg="brand.misty"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexShrink={0}
                >
                  <Icon as={item.icon} color="brand.teal" boxSize={5} />
                </Box>
                <VStack align="flex-start" spacing={0}>
                  <Text
                    fontSize="12px"
                    fontWeight="700"
                    color="brand.slate"
                    textTransform="uppercase"
                    letterSpacing="wide"
                  >
                    {item.label}
                  </Text>
                  {item.href ? (
                    <Text
                      as="a"
                      href={item.href}
                      fontSize="15px"
                      fontWeight="500"
                      color="brand.textDark"
                      _hover={{ color: "brand.teal", textDecoration: "none" }}
                      transition="color 0.2s"
                    >
                      {item.value}
                    </Text>
                  ) : (
                    <Text
                      fontSize="15px"
                      fontWeight="500"
                      color="brand.textDark"
                    >
                      {item.value}
                    </Text>
                  )}
                </VStack>
              </HStack>
            ))}
          </VStack>
        </VStack>

        {/* Right: Form */}
        <Box
          flex={1}
          bg="white"
          border="1.5px solid"
          borderColor="gray.100"
          borderRadius="24px"
          p={{ base: 6, md: 10 }}
          boxShadow="0 4px 32px rgba(26,44,53,0.07)"
        >
          <Heading
            fontSize="22px"
            fontWeight="700"
            color="brand.textDark"
            mb={6}
          >
            Send Us a Message
          </Heading>
          <Box as="form" onSubmit={handleSubmit}>
            <VStack spacing={5}>
              <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={5} w="full">
                <FormControl isRequired>
                  <FormLabel
                    fontSize="sm"
                    fontWeight="600"
                    color="brand.textDark"
                  >
                    First Name
                  </FormLabel>
                  <Input
                    name="firstName"
                    placeholder="Jane"
                    size="md"
                    borderRadius="10px"
                    borderColor="gray.200"
                    _focus={{
                      borderColor: "brand.teal",
                      boxShadow: "0 0 0 1px #60A6A6",
                    }}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel
                    fontSize="sm"
                    fontWeight="600"
                    color="brand.textDark"
                  >
                    Last Name
                  </FormLabel>
                  <Input
                    name="lastName"
                    placeholder="Smith"
                    size="md"
                    borderRadius="10px"
                    borderColor="gray.200"
                    _focus={{
                      borderColor: "brand.teal",
                      boxShadow: "0 0 0 1px #60A6A6",
                    }}
                  />
                </FormControl>
              </SimpleGrid>

              <FormControl isRequired>
                <FormLabel
                  fontSize="sm"
                  fontWeight="600"
                  color="brand.textDark"
                >
                  Email Address
                </FormLabel>
                <Input
                  name="email"
                  type="email"
                  placeholder="jane@example.com"
                  borderRadius="10px"
                  borderColor="gray.200"
                  _focus={{
                    borderColor: "brand.teal",
                    boxShadow: "0 0 0 1px #60A6A6",
                  }}
                />
              </FormControl>

              <FormControl>
                <FormLabel
                  fontSize="sm"
                  fontWeight="600"
                  color="brand.textDark"
                >
                  Phone (optional)
                </FormLabel>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="(555) 000-0000"
                  borderRadius="10px"
                  borderColor="gray.200"
                  _focus={{
                    borderColor: "brand.teal",
                    boxShadow: "0 0 0 1px #60A6A6",
                  }}
                />
              </FormControl>

              <FormControl>
                <FormLabel
                  fontSize="sm"
                  fontWeight="600"
                  color="brand.textDark"
                >
                  I am interested in…
                </FormLabel>
                <Select
                  name="service"
                  borderRadius="10px"
                  borderColor="gray.200"
                  _focus={{
                    borderColor: "brand.teal",
                    boxShadow: "0 0 0 1px #60A6A6",
                  }}
                >
                  <option value="">Select a service</option>
                  <option value="assessment">
                    Neuropsychological Assessment
                  </option>
                  <option value="prevention">
                    Prevention &amp; Brain Wellness
                  </option>
                  <option value="treatment">
                    Treatment &amp; Rehabilitation
                  </option>
                  <option value="virtual">Virtual Care</option>
                  <option value="other">Other / Not Sure</option>
                </Select>
              </FormControl>

              <FormControl isRequired>
                <FormLabel
                  fontSize="sm"
                  fontWeight="600"
                  color="brand.textDark"
                >
                  Message
                </FormLabel>
                <Textarea
                  name="message"
                  placeholder="Tell us a bit about what brings you here…"
                  rows={4}
                  borderRadius="10px"
                  borderColor="gray.200"
                  resize="vertical"
                  _focus={{
                    borderColor: "brand.teal",
                    boxShadow: "0 0 0 1px #60A6A6",
                  }}
                />
              </FormControl>

              {submitted && (
                <Alert status="success" borderRadius="10px">
                  <AlertIcon />
                  <AlertDescription fontSize="sm">
                    Thanks! We'll be in touch within one business day.
                  </AlertDescription>
                </Alert>
              )}

              <Button
                type="submit"
                variant="cta"
                size="lg"
                w="full"
                rightIcon={<FiSend />}
                fontSize="md"
                isDisabled={submitted}
              >
                {submitted ? "Message Sent" : "Send Message"}
              </Button>
            </VStack>
          </Box>
        </Box>
      </Flex>

      {/* Map */}
      <Box maxW="1200px" mx="auto" px={{ base: 4, md: 8 }} mt={{ base: 14, md: 20 }}>
        <Box textAlign="center" mb={8}>
          <Text
            fontSize="sm"
            fontWeight="700"
            color="brand.teal"
            letterSpacing="widest"
            textTransform="uppercase"
            mb={3}
          >
            Our Location
          </Text>
          <Heading
            fontSize={{ base: "24px", md: "32px" }}
            fontWeight="800"
            color="brand.textDark"
            lineHeight="1.2"
          >
            Visit Us in Calgary
          </Heading>
          <Text
            fontSize="16px"
            color="brand.textDark"
            opacity={0.65}
            mt={3}
          >
            4520 16 Ave NW, Calgary, AB T3B 0N9
          </Text>
        </Box>

        <Box
          borderRadius="24px"
          overflow="hidden"
          boxShadow="0 4px 32px rgba(26,44,53,0.07)"
          border="1.5px solid"
          borderColor="gray.100"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507.0876439898702!2d-114.1626977231417!3d51.06993214256716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716ef854e22083%3A0x2b6402bbbc847b1c!2s4520%2016%20Ave%20NW%2C%20Calgary%2C%20AB%20T3B%200N9!5e0!3m2!1sen!2sca!4v1754454102077!5m2!1sen!2sca"
            width="100%"
            height="450"
            style={{ border: 0, display: "block" }}
            loading="lazy"
            allowFullScreen
            title="AK Neuropsych office location — 4520 16 Ave NW, Calgary, AB"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>
      </Box>
    </Box>
  );
}
