import React from "react";
import logo from "./logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "@/Context/CartContext";
import Link from "next/link";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Input,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import Image from "next/image";
import { useRouter } from "next/router";
import { AuthContext } from "@/Context/AuthContext";
import { useContext } from "react";

const Navbaar = () => {
  const router = useRouter();
  const { isOpen, onToggle } = useDisclosure();
  const { getUserData, user, text, setText } = useContext(CartContext);

  const { userId, getUserId, LogoutUser, setAuth, isAuth } =
    useContext(AuthContext);
  const [cartlength, setCartLength] = React.useState(0);
  const toast = useToast();
  React.useEffect(() => {
    getUserId();
  }, []);

  React.useEffect(() => {
    if (userId) {
      getUserData(userId);
    }
  }, [userId]);

  React.useEffect(() => {
    if (user) {
      setCartLength(user?.cart?.length);
    } else {
      setCartLength(0);
    }
  }, [user, isAuth]);

  return (
    <Box position="fixed" left="0" right="0" top="0" zIndex="111">
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        bgColor={"yellow"}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          bgColor={"yellow"}
          justify={{ base: "center", md: "start" }}
        >
          <Link href="/">
            {" "}
            <Image
              src={logo}
              alt="..."
              borderRadius="100"
              width={50}
              height={50}
            />
          </Link>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <Input
              w="25%"
              type="text"
              onChange={(e) => {
                setText(e.target.value);
                router.push("/all");
              }}
              placeholder="Search Product"
            />
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Box display="flex">
            <Link href="/cart">
              {" "}
              <ShoppingCartIcon style={{ color: "red", fontSize: "40px" }} />
            </Link>
            <Text color="green">{cartlength}</Text>
          </Box>

          {!isAuth ? (
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"pink.400"}
              _hover={{
                bg: "pink.300",
              }}
              onClick={() => router.push("/registration")}
            >
              Sign In
            </Button>
          ) : user?.img.length !== 0 ? (
            <Popover>
              <PopoverTrigger>
                <Image
                  src={user?.img}
                  width={"40"}
                  height={"20"}
                  style={{ borderRadius: "100%" }}
                  alt="profile"
                />
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Hi,{user?.name}</PopoverHeader>
                <PopoverBody>
                  <Box display={"grid"}>
                    <Button
                      color={"green.300"}
                      onClick={() => router.push("/UserDetails")}
                    >
                      Go to Profile
                    </Button>
                    <Button
                      color={"red.300"}
                      onClick={() => {
                        LogoutUser();
                        getUserData(user?.id);
                        setAuth(false);
                        toast({
                          title: "Logged out Successfully",

                          status: "success",
                          duration: 4000,
                          isClosable: true,
                        });
                      }}
                    >
                      LogOut
                    </Button>
                  </Box>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          ) : (
            <Popover>
              <PopoverTrigger>
                <AccountCircleIcon />
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Hi,{user.name}</PopoverHeader>
                <PopoverBody>
                  <Box display={"grid"}>
                    <Button
                      color={"green.300"}
                      onClick={() => router.push("/UserDetails")}
                    >
                      Go to Profile
                    </Button>
                    <Button
                      color={"red.300"}
                      onClick={() => {
                        LogoutUser();
                        toast({
                          title: "Logged out Successfully",

                          status: "success",
                          duration: 4000,
                          isClosable: true,
                        });
                      }}
                    >
                      LogOut
                    </Button>
                  </Box>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          )}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4} mt="2">
      {Desktop_NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.link}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
                {/* //     <RouterLink href={navItem.link} > {navItem.label}</RouterLink> */}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {Mobile_NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, link }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={link}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const Mobile_NAV_ITEMS = [
  {
    label: "All Category",
    link: "/all",
  },
  {
    label: "Boy Fashion",
    link: "/boys",
  },
  {
    label: "Girl fashion",
    link: "girls",
  },
  {
    label: "Footwear",
    link: "/footwears",
  },
  {
    label: "Toys",
    link: "/toys",
  },

  {
    label: "Health",
    link: "/health",
  },
  {
    label: "Diapering",
    link: "/diapering",
  },
  {
    label: "Sign In",
    link: "/registration",
  },
];

const Desktop_NAV_ITEMS = [
  {
    label: "All Products",
    link: "/all",
  },
  {
    label: "Boys",
    link: "/boys",
  },
  {
    label: "Girls",
    link: "girls",
  },
  {
    label: "Footwear",
    link: "/footwears",
  },
  {
    label: "Toys",
    link: "/toys",
  },

  {
    label: "Health",
    link: "/health",
  },
  {
    label: "Diapering",
    link: "/diapering",
  },
];

export default Navbaar;
