import { useState } from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { FadeUp } from "./FadeIn";

const FAQ_ITEMS = [
  {
    q: "What is a neuropsychological evaluation?",
    a: "A neuropsychological evaluation is a comprehensive, standardized assessment of brain-behavior relationships. It measures cognitive abilities such as memory, attention, language, processing speed, and executive function — providing a detailed picture of how your brain is working and where support may be beneficial.",
  },
  {
    q: "How long does the assessment process take?",
    a: "Most evaluations are completed across one or two sessions, typically ranging from four to eight hours of testing in total. The exact length depends on the referral question, your age, and the complexity of your concerns. We schedule sessions at a pace that is comfortable for you.",
  },
  {
    q: "Do you accept insurance?",
    a: "We are currently an out-of-network provider. We can provide a detailed superbill after your evaluation that you may submit to your insurance carrier for potential reimbursement. We recommend contacting your insurer in advance to understand your out-of-network benefits for neuropsychological testing.",
  },
  {
    q: "What age groups do you work with?",
    a: "We work with children, adolescents, and adults across the lifespan. Whether you are seeking answers for a child struggling in school, a young adult navigating a new diagnosis, or an older adult concerned about memory, we have the expertise to help.",
  },
  {
    q: "How long until I receive my results?",
    a: "You can typically expect a written report within two to three weeks of completing your evaluation. A feedback session is included to walk you through the findings, answer your questions, and discuss next steps — so you never receive a report without support in understanding it.",
  },
  {
    q: "Do I need a referral to schedule an evaluation?",
    a: "No referral is required to schedule directly with our practice. However, if your insurance requires one for reimbursement purposes, we recommend obtaining a referral from your primary care physician or specialist before your appointment.",
  },
];

const MotionDiv = motion.div;

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  isLast: boolean;
  index: number;
}

function AccordionItem({ question, answer, isOpen, onToggle, isLast, index }: AccordionItemProps) {
  const shouldReduce = useReducedMotion();
  const buttonId = `faq-btn-${index}`;
  const panelId = `faq-panel-${index}`;

  return (
    <Box borderBottom={isLast ? "none" : "1px solid"} borderColor="brand.misty">
      <Box
        as="button"
        type="button"
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        px={{ base: 5, md: 7 }}
        py={5}
        textAlign="left"
        bg={isOpen ? "brand.misty" : "white"}
        transition="background-color 0.2s ease"
        onClick={onToggle}
        _hover={{ bg: isOpen ? "brand.misty" : "#f7fbfc" }}
        cursor="pointer"
      >
        <Text
          fontWeight="600"
          fontSize={{ base: "15px", md: "16px" }}
          color="brand.textDark"
          pr={4}
          lineHeight="1.5"
        >
          {question}
        </Text>

        <MotionDiv
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={
            shouldReduce
              ? { duration: 0 }
              : { type: "spring", stiffness: 280, damping: 22 }
          }
          style={{ flexShrink: 0, display: "flex", alignItems: "center" }}
        >
          <FiChevronDown size={20} color="#193d50" />
        </MotionDiv>
      </Box>

      <AnimatePresence initial={false}>
        {isOpen && (
          <MotionDiv
            key="content"
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={
              shouldReduce
                ? { duration: 0 }
                : { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
            }
            style={{ overflow: "hidden" }}
          >
            <Box px={{ base: 5, md: 7 }} pb={6} pt={1} bg="brand.misty">
              <Text
                fontSize={{ base: "14px", md: "15px" }}
                color="brand.textDark"
                opacity={0.8}
                lineHeight="1.8"
              >
                {answer}
              </Text>
            </Box>
          </MotionDiv>
        )}
      </AnimatePresence>
    </Box>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <Box as="section" py={{ base: "60px", md: "100px" }} bg="white">
      <Box maxW="800px" mx="auto" px={{ base: 4, md: 8 }}>
        <FadeUp>
          <VStack spacing={3} mb={12} textAlign="center">
            <Text
              fontSize="sm"
              fontWeight="700"
              color="brand.teal"
              letterSpacing="widest"
              textTransform="uppercase"
            >
              Support
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: "28px", md: "36px" }}
              fontWeight="800"
              color="brand.textDark"
            >
              Frequently Asked Questions
            </Heading>
            <Text
              fontSize={{ base: "15px", md: "17px" }}
              color="brand.textDark"
              opacity={0.7}
              maxW="520px"
            >
              Answers to common questions about our evaluations, process, and
              what to expect.
            </Text>
          </VStack>
        </FadeUp>

        <FadeUp delay={0.1}>
          <Box
            borderRadius="xl"
            border="1px solid"
            borderColor="brand.misty"
            overflow="hidden"
            boxShadow="sm"
          >
            {FAQ_ITEMS.map((item, idx) => (
              <AccordionItem
                key={idx}
                index={idx}
                question={item.q}
                answer={item.a}
                isOpen={openIndex === idx}
                onToggle={() => handleToggle(idx)}
                isLast={idx === FAQ_ITEMS.length - 1}
              />
            ))}
          </Box>
        </FadeUp>
      </Box>
    </Box>
  );
}
