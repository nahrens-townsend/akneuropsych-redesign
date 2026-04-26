import { useState, useEffect, useRef } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  Box,
  Flex,
  HStack,
  VStack,
  Text,
  Link,
  Icon,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useDisclosure,
} from "@chakra-ui/react";
import { FiChevronDown, FiMenu } from "react-icons/fi";

const SERVICES = [
  { label: "Baseline Cognitive Testing", to: "/services" },
  {
    label: "Neuropsychological Evaluation",
    to: "/neuropsychological-evaluation",
  },
  { label: "Psychological Assessment", to: "/psychological-assessments" },
];

const NAV_LINKS = [
  { label: "Meet Dr. Kilgour", to: "/meet-dr-kilgour" },
  { label: "FAQ", to: "/faq" },
  { label: "Resources", to: "/resources" },
];

// ─── Desktop nav link ──────────────────────────────────────────────────────
function NavLink({
  to,
  children,
  active,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      as={RouterLink}
      to={to}
      px={3}
      py={2}
      fontSize="sm"
      fontWeight="500"
      borderRadius="md"
      color={active ? "brand.teal" : "brand.textDark"}
      bg={active ? "brand.misty" : "transparent"}
      _hover={{ color: "brand.teal", bg: "gray.50", textDecoration: "none" }}
      transition="all 0.15s"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

// ─── Services hover dropdown ────────────────────────────────────────────────
function ServicesDropdown({ isAnyActive }: { isAnyActive: boolean }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 80);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen((v) => !v);
    } else if (e.key === "Escape") {
      setOpen(false);
      triggerRef.current?.focus();
    }
  };

  return (
    <Box
      position="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Trigger — real button for keyboard accessibility */}
      <Flex
        as="button"
        ref={triggerRef}
        align="center"
        gap={1}
        px={3}
        py={2}
        fontSize="sm"
        fontWeight="500"
        borderRadius="md"
        color={isAnyActive ? "brand.teal" : "brand.textDark"}
        bg={isAnyActive ? "brand.misty" : "transparent"}
        cursor="pointer"
        _hover={{ color: "brand.teal", bg: "gray.50" }}
        _focusVisible={{ outline: "2px solid", outlineColor: "brand.teal", outlineOffset: "2px" }}
        transition="all 0.15s"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={handleKeyDown}
        type="button"
      >
        Services
        <Icon
          as={FiChevronDown}
          boxSize="14px"
          transition="transform 0.2s"
          transform={open ? "rotate(180deg)" : "none"}
        />
      </Flex>

      {/* Dropdown panel */}
      <Box
        position="absolute"
        top="calc(100% + 6px)"
        left="50%"
        bg="white"
        border="1px solid"
        borderColor="gray.100"
        borderRadius="xl"
        boxShadow="0 8px 30px rgba(0,0,0,0.10)"
        py={2}
        minW="230px"
        zIndex={1100}
        opacity={open ? 1 : 0}
        visibility={open ? "visible" : "hidden"}
        transform={
          open
            ? "translateX(-50%) translateY(0)"
            : "translateX(-50%) translateY(-6px)"
        }
        transition="opacity 0.15s, transform 0.15s, visibility 0.15s"
        role="menu"
      >
        {SERVICES.map((s) => (
          <Link
            key={s.to}
            as={RouterLink}
            to={s.to}
            display="block"
            px={4}
            py="10px"
            fontSize="sm"
            fontWeight="500"
            color="brand.textDark"
            _hover={{
              bg: "brand.misty",
              color: "brand.teal",
              textDecoration: "none",
            }}
            _focusVisible={{ bg: "brand.misty", color: "brand.teal", outline: "none" }}
            transition="all 0.12s"
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            {s.label}
          </Link>
        ))}
      </Box>
    </Box>
  );
}

// ─── Logo ───────────────────────────────────────────────────────────────────
function Logo() {
  return (
    <Link as={RouterLink} to="/" _hover={{ textDecoration: "none" }}>
      <HStack spacing={3}>
        <Box
          w="36px"
          h="36px"
          borderRadius="8px"
          bg="brand.teal"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexShrink={0}
        >
          <Text color="white" fontWeight="800" fontSize="sm" letterSpacing="0">
            AK
          </Text>
        </Box>
        <Box>
          <Text
            fontWeight="700"
            fontSize="md"
            color="brand.textDark"
            lineHeight="1.1"
          >
            AK Neuropsych
          </Text>
          <Text fontSize="xs" color="gray.400" lineHeight="1">
            Dr. Kilgour
          </Text>
        </Box>
      </HStack>
    </Link>
  );
}

// ─── Main Navbar ─────────────────────────────────────────────────────────────
export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (to: string) => location.pathname === to;
  const isServiceActive = SERVICES.some((s) => isActive(s.to));

  return (
    <>
      <Box
        as="nav"
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={1000}
        bg="white"
        borderBottom="1px solid"
        borderColor={scrolled ? "transparent" : "gray.100"}
        boxShadow={scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none"}
        transition="box-shadow 0.3s, border-color 0.3s"
      >
        <Flex
          maxW="1200px"
          mx="auto"
          px={{ base: 4, md: 8 }}
          h="72px"
          align="center"
          justify="space-between"
        >
          <Logo />

          {/* Desktop links */}
          <HStack spacing={1} display={{ base: "none", lg: "flex" }}>
            <NavLink
              to="/meet-dr-kilgour"
              active={isActive("/meet-dr-kilgour")}
            >
              Meet Dr. Kilgour
            </NavLink>

            <ServicesDropdown isAnyActive={isServiceActive} />

            {NAV_LINKS.filter((l) => l.label !== "Meet Dr. Kilgour").map(
              (l) => (
                <NavLink key={l.to} to={l.to} active={isActive(l.to)}>
                  {l.label}
                </NavLink>
              ),
            )}

            {/* Contact CTA */}
            <Link
              as={RouterLink}
              to="/#contact"
              ml={3}
              px={5}
              py="9px"
              bg="brand.teal"
              color="white"
              fontWeight="600"
              fontSize="sm"
              borderRadius="md"
              _hover={{
                bg: "#3d8f8f",
                textDecoration: "none",
                transform: "translateY(-1px)",
                boxShadow: "md",
              }}
              transition="all 0.2s"
              display="inline-block"
            >
              Contact
            </Link>
          </HStack>

          {/* Mobile hamburger */}
          <IconButton
            display={{ base: "flex", lg: "none" }}
            aria-label="Open navigation"
            icon={<FiMenu />}
            variant="ghost"
            color="brand.textDark"
            fontSize="xl"
            onClick={onOpen}
          />
        </Flex>
      </Box>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton mt={1} />
          <DrawerBody pt={14} pb={8} px={6}>
            <Logo />
            <VStack align="stretch" spacing={1} mt={8}>
              <NavLink
                to="/meet-dr-kilgour"
                active={isActive("/meet-dr-kilgour")}
                onClick={onClose}
              >
                Meet Dr. Kilgour
              </NavLink>

              {/* Services accordion in mobile */}
              <Accordion allowToggle border="none">
                <AccordionItem border="none">
                  <AccordionButton
                    px={3}
                    py={2}
                    borderRadius="md"
                    fontSize="sm"
                    fontWeight="500"
                    color={isServiceActive ? "brand.teal" : "brand.textDark"}
                    bg={isServiceActive ? "brand.misty" : "transparent"}
                    _hover={{ bg: "gray.50", color: "brand.teal" }}
                    _expanded={{ color: "brand.teal" }}
                    transition="all 0.15s"
                  >
                    <Box flex="1" textAlign="left">
                      Services
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={1} pt={1} px={0}>
                    <VStack align="stretch" spacing={0} pl={3}>
                      {SERVICES.map((s) => (
                        <NavLink
                          key={s.to}
                          to={s.to}
                          active={isActive(s.to)}
                          onClick={onClose}
                        >
                          {s.label}
                        </NavLink>
                      ))}
                    </VStack>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>

              <NavLink to="/faq" active={isActive("/faq")} onClick={onClose}>
                FAQ
              </NavLink>
              <NavLink
                to="/resources"
                active={isActive("/resources")}
                onClick={onClose}
              >
                Resources
              </NavLink>

              <Box pt={2}>
                <Link
                  as={RouterLink}
                  to="/#contact"
                  display="block"
                  textAlign="center"
                  px={5}
                  py="10px"
                  bg="brand.teal"
                  color="white"
                  fontWeight="600"
                  fontSize="sm"
                  borderRadius="md"
                  _hover={{
                    bg: "#3d8f8f",
                    textDecoration: "none",
                  }}
                  onClick={onClose}
                >
                  Contact
                </Link>
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
