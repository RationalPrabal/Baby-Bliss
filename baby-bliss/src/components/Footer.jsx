import { ReactNode } from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";
import Image from "next/image";
// import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

// import AppStoreBadge from "@/components/AppStoreBadge";
// import PlayStoreBadge from "@/components/PlayStoreBadge";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("rgb(217,243,244)", "rgb(217,243,244)")}
      color={useColorModeValue("black", "black")}
      w="100%"
      m="auto"
     
    >
      <Container as={Stack} maxW={"6xl"} py={10} >
        <SimpleGrid columns={{ base: 2, sm: 2, md: 5 }} spacing={8}>
          <Stack>
            <Heading as="h5" size="sm" mb="20px">
            CATEGORIES
            </Heading>
            <Link href={"#"} fontSize="13px">
             Clothing & Fashion
            </Link>
            <Link href={"#"} fontSize="13px">
              Toys
            </Link>
            <Link href={"#"} fontSize="13px">
            Birthday Party Supplies
            </Link>
            <Link href={"#"} fontSize="13px">
            Health & Safety
            </Link>
            <Link href={"#"} fontSize="13px">
            Baby Gear
            </Link>
            <Link href={"#"} fontSize="13px">
           Gifts
            </Link>
          </Stack>

          <Stack align={"flex-start"}>
            <Heading as="h5" size="sm" mb="20px">
            Baby-Bliss PARENTING
            </Heading>
            <Link href={"#"} fontSize="13px">
            Getting Pregnant
            </Link>
            <Link href={"#"} fontSize="13px">
            Pregnancy
            </Link>
            <Link href={"#"} fontSize="13px">
            Baby
            </Link>
            <Link href={"#"} fontSize="13px">
            Toddler
            </Link>
            <Link href={"#"} fontSize="13px">
             Big Kid
            </Link>
            <Link href={"#"} fontSize="13px">
            Preschooler
            </Link>
            <Link href={"#"} fontSize="13px">
             Growth Tracker
            </Link>
          </Stack>

          <Stack align={"flex-start"}>
            <Heading as="h5" size="sm" mb="20px">
            SHIPPING & POLICIES
            </Heading>
            <Link href={"#"} fontSize="13px">
             Payments
            </Link>
            <Link href={"#"} fontSize="13px">
            Shipping Policy
            </Link>
            <Link href={"#"} fontSize="13px">
            Return & Replacement Policy
            </Link>
            <Link href={"#"} fontSize="13px">
            Cancellation Policy
            </Link>
            <Link href={"#"} fontSize="13px">
            Next day & Same day delivery
            </Link>
          
          </Stack>

          <Stack align={"flex-start"}>
            <Heading as="h5" size="sm" mb="20px">
              Our Apps
            </Heading>
            <Link href={"#"} fontSize="13px">
            Baby-Bliss India: Shopping & Parenting
            </Link>
            <Link href={"#"} fontSize="13px">
            Baby-Bliss India: Shopping & Parenting iOS
            </Link>
            <Heading as="h5" size="sm">
            Learning & Education
            </Heading>
            <Link href={"#"} fontSize="13px">
            Intellikits
            </Link>
            <Link href={"#"} fontSize="13px">
            Intellitots
            </Link>
            <Heading as="h5" size="sm">
            SHOP INTERNATIONAL
            </Heading>
            <Link href={"#"} fontSize="13px">
            Baby-Bliss UAE
            </Link>
            <Link href={"#"} fontSize="13px">
            Baby-Bliss KSA (English)
            </Link>
          </Stack>

         
         <Stack>

           <Image src="https://cdn.fcglcdn.com/brainbees/images/intellitots-franchise-footer-banner.webp" alt="..." width={250} height={200}  /> 
         </Stack>
          
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text>
            Copyright © 2022 Baby-Bliss. All rights reserved.
          </Text>
         
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"#"}>
              {/* <FaTwitter /> */}
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              {/* <FaYoutube /> */}
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              {/* <FaInstagram /> */}
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default Footer;

