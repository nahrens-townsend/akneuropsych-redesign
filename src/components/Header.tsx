import {
  Box,
  Flex,
  HStack,
  Button,
  Text,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useRef, useEffect } from "react";
import { FiMenu, FiPhone, FiChevronDown } from "react-icons/fi";

type NavLink =
  | { label: string; to: string; dropdown?: never }
  | { label: string; to?: never; dropdown: { label: string; to: string }[] };

const NAV_LINKS: NavLink[] = [
  { label: "About", to: "/#about" },
  {
    label: "Services",
    dropdown: [
      { label: "Baseline Cognitive Screening", to: "/services" },
      {
        label: "Neuropsychological Evaluation",
        to: "/neuropsychological-evaluation",
      },
    ],
  },
  { label: "Conditions", to: "/#conditions" },
  { label: "Virtual Care", to: "/#virtual-care" },
  { label: "Contact", to: "/#contact" },
];

function NavDropdown({ label, items }: { label: string; items: { label: string; to: string }[] }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleOpen = () => {
    if (closeTimer.current !== null) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    onOpen();
  };

  const handleClose = () => {
    if (closeTimer.current !== null) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    onClose();
  };

  const handleCloseDelayed = () => {
    if (closeTimer.current !== null) {
      clearTimeout(closeTimer.current);
    }
    closeTimer.current = setTimeout(() => {
      handleClose();
      closeTimer.current = null;
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (closeTimer.current !== null) clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <Box onMouseEnter={handleOpen} onMouseLeave={handleCloseDelayed}>
      <Menu isOpen={isOpen} onOpen={handleOpen} onClose={handleClose} placement="bottom-start">
        <MenuButton
          as={Button}
          variant="link"
          fontSize="sm"
          fontWeight="500"
          color="brand.textDark"
          rightIcon={<FiChevronDown />}
          _hover={{ color: 'brand.teal', textDecoration: 'none' }}
          _active={{ color: 'brand.teal' }}
          cursor="pointer"
          background={'white'}
        >
          {label}
        </MenuButton>
        <MenuList
          minW="220px"
          shadow="md"
          borderColor="gray.100"
          background={'white'}
          onMouseEnter={handleOpen}
          onMouseLeave={handleCloseDelayed}
        >
          {items.map((item) => (
            <MenuItem
              key={item.to}
              as={RouterLink}
              to={item.to}
              fontSize="sm"
              fontWeight="500"
              color="brand.textDark"
              _hover={{ color: 'brand.teal', bg: 'gray.50' }}
              background={'white'}
              onClick={handleClose}
            >
              {item.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
}

export default function Header() {
  const { isOpen: isDrawerOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure();

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={1000}
      bg="white"
      boxShadow="0 1px 12px rgba(26,44,53,0.08)"
    >
      <Flex
        maxW="1200px"
        mx="auto"
        px={{ base: 4, md: 8 }}
        py={4}
        align="center"
        justify="space-between"
      >
        {/* Logo */}
        <Link as={RouterLink} to="/" _hover={{ textDecoration: "none" }}>
          <HStack spacing={2}>
            <Box
              w="36px"
              h="36px"
              borderRadius="8px"
              bg="brand.teal"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text color="white" fontWeight="800" fontSize="sm">
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
              <Text fontSize="xs" color="brand.slate" lineHeight="1">
                Dr. Kilgour
              </Text>
            </Box>
          </HStack>
        </Link>

        {/* Desktop Nav */}
        <HStack spacing={6} display={{ base: "none", md: "flex" }}>
          {NAV_LINKS.map((link) =>
            link.dropdown ? (
              <NavDropdown key={link.label} label={link.label} items={link.dropdown} />
            ) : (
              <Link
                as={RouterLink}
                key={link.to}
                to={link.to}
                fontSize="sm"
                fontWeight="500"
                color="brand.textDark"
                _hover={{ color: "brand.teal" }}
                transition="color 0.2s"
              >
                {link.label}
              </Link>
            ),
          )}
          <Link
            as={RouterLink}
            to="/meet-dr-kilgour"
            fontSize="sm"
            fontWeight="500"
            color="brand.textDark"
            _hover={{ color: "brand.teal" }}
            transition="color 0.2s"
          >
            Meet Dr. Kilgour
          </Link>
        </HStack>

        {/* CTA + Mobile Toggle */}
        <HStack spacing={3}>
          <Button
            as="a"
            href="tel:+15550100100"
            variant="cta"
            size="sm"
            leftIcon={<FiPhone />}
            display={{ base: "none", md: "inline-flex" }}
            px={5}
          >
            Call Us
          </Button>
          <IconButton
            aria-label="Open menu"
            icon={<FiMenu />}
            variant="ghost"
            color="brand.textDark"
            display={{ base: "flex", md: "none" }}
            onClick={onDrawerOpen}
          />
        </HStack>
      </Flex>

      {/* Mobile Drawer */}
      <Drawer isOpen={isDrawerOpen} placement="right" onClose={onDrawerClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            <HStack spacing={2}>
              <Box
                w="32px"
                h="32px"
                borderRadius="8px"
                bg="brand.teal"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text color="white" fontWeight="800" fontSize="xs">
                  AK
                </Text>
              </Box>
              <Text fontWeight="700" fontSize="sm" color="brand.textDark">
                AK Neuropsych
              </Text>
            </HStack>
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="stretch" pt={4}>
              {NAV_LINKS.map((link) =>
                link.dropdown ? (
                  <Box key={link.label}>
                    <Text
                      fontSize="md"
                      fontWeight="600"
                      color="brand.slate"
                      py={2}
                      borderBottomWidth="1px"
                      borderColor="gray.100"
                    >
                      {link.label}
                    </Text>
                    {link.dropdown.map((item) => (
                      <Link
                        as={RouterLink}
                        key={item.to}
                        to={item.to}
                        display="block"
                        fontSize="sm"
                        fontWeight="500"
                        color="brand.textDark"
                        pl={4}
                        py={2}
                        borderBottomWidth="1px"
                        borderColor="gray.100"
                        onClick={onDrawerClose}
                        _hover={{ color: "brand.teal" }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </Box>
                ) : (
                  <Link
                    as={RouterLink}
                    key={link.to}
                    to={link.to}
                    fontSize="md"
                    fontWeight="500"
                    color="brand.textDark"
                    py={2}
                    borderBottomWidth="1px"
                    borderColor="gray.100"
                    onClick={onDrawerClose}
                    _hover={{ color: "brand.teal" }}
                  >
                    {link.label}
                  </Link>
                ),
              )}
              <Link
                as={RouterLink}
                to="/meet-dr-kilgour"
                fontSize="md"
                fontWeight="500"
                color="brand.textDark"
                py={2}
                borderBottomWidth="1px"
                borderColor="gray.100"
                onClick={onDrawerClose}
                _hover={{ color: "brand.teal" }}
              >
                Meet Dr. Kilgour
              </Link>
              <Button
                as="a"
                href="tel:+15550100100"
                variant="cta"
                leftIcon={<FiPhone />}
                mt={4}
                w="full"
              >
                Call Us
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
