import { useState } from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { FadeUp } from "./FadeIn";

const FAQ_ITEMS = [
  {
    q: "What is the difference between a neuropsychological assessment and a psychological assessment?",
    a: "A neuropsychological assessment includes both cognitive and psychological evaluation / testing. This type of assessment is recommended when a person has concerns regarding cognitive function (thinking abilities, such as attention, memory, and problem solving). This assessment is designed to determine not only diagnosis but also the root cause of cognitive concerns (e.g., issues related more to emotional/psychological factors or to neurological factors).\n\nPsychological assessment is recommended when a person has concerns regarding mental health. This assessment focuses only on psychological / emotional / personality evaluation.",
  },
  {
    q: "How long will my assessment take?",
    a: "Assessments vary in length to complete, in part, because different people work at different paces on the various tests. On average, a neuropsychological assessment takes 6 – 8 hours. On average, a psychological assessment takes 3 – 5 hours. The assessment can be completed over more than one day.",
  },
  {
    q: "May I take breaks?",
    a: "Absolutely. A lunch break is always scheduled but additional breaks can be taken as often as needed and when requested.",
  },
  {
    q: "Do I need to bring anything to the appointment?",
    a: "Yes. It is important to bring any required aids or items that you find helpful, such as glasses, reading glasses, hearing aids, an Obus Form (for seating comfort), etc. Also ensure to bring a list of your current medications. Some people may choose to complete the Intake Questionnaire ahead of time and bring this to the assessment appointment. Finally, you may choose to bring lunch / snacks, or money to purchase food at nearby stores.",
  },
  {
    q: "Is there anything I can do to prepare?",
    a: "There is no way to study for this type of testing and no preparation for the testing is required. The tests are not like school exams. However, you can prepare by being well rested (good sleep the night before) and alert.",
  },
  {
    q: "Can I get a copy of my tests?",
    a: "The actual tests can not be released. However, you will have access to the results and the report either directly during a follow-up feedback session or through requesting a copy of your report.",
  },
  {
    q: "What conditions can a neuropsychological assessment help diagnose or clarify?",
    a: "A neuropsychological assessment can help clarify concerns related to conditions such as ADHD, learning disabilities, concussion or traumatic brain injury, dementia or mild cognitive impairment, and the cognitive effects of mental health conditions like depression and anxiety.",
  },
  {
    q: "What should I expect during the testing session?",
    a: "You can expect a combination of clinical interview and structured testing tasks that assess memory, attention, language, problem-solving, and other cognitive skills. The session includes breaks as needed and is paced to reduce fatigue while collecting accurate results.",
  },
  {
    q: "Will I be diagnosed during the assessment?",
    a: "A diagnosis is not always immediate. Results are carefully integrated with your history, behavioural observations, and testing data. A diagnostic impression is typically provided as part of your final report and feedback session.",
  },
  {
    q: "Can I drive myself to and from the appointment?",
    a: "Yes, most individuals are able to drive themselves to and from the appointment. However, because the testing can be mentally tiring, some people prefer to arrange alternative transportation afterward.",
  },
  {
    q: "Do I need to stop taking my medication before testing?",
    a: "In most cases, you should continue taking your medications as prescribed unless specifically instructed otherwise by your referring physician or the neuropsychologist. If medication changes are needed for testing validity, you will be advised ahead of time.",
  },
  {
    q: "What happens after the assessment is completed?",
    a: "After testing, your results are scored, interpreted, and integrated into a comprehensive report. You will then attend a feedback session where findings are explained, questions are answered, and recommendations are provided for next steps or supports.",
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

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
  isLast,
  index,
}: AccordionItemProps) {
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
    <Box
      as="section"
      pos="relative"
      py={{ base: "60px", md: "100px" }}
      bg="white"
      overflowX={"hidden"}
      position={"relative"}
      _before={{
        content: '""',
        position: "absolute",
        top: { base: "-80px", md: "80px" },
        left: "-80px",
        width: "200px",
        height: "200px",
        bg: "brand.teal",
        borderRadius: "50%",
        opacity: 0.08,
      }}
      _after={{
        content: '""',
        position: "absolute",
        display: { base: "none", md: "inherit" },
        bottom: "80px",
        right: "-80px",
        width: "200px",
        height: "200px",
        bg: "brand.teal",
        borderRadius: "50%",
        opacity: 0.08,
      }}
    >
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
              fontWeight="600"
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
