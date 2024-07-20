import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout, FcCallback } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";

const Navbar = () => (
  <Flex
    p="2"
    borderBottom="1px"
    borderColor="gray.100"
    justifyContent="space-between"
    alignItems="center"
  >
    <Box fontSize="3xl" color="blue.400" fontWeight="bold">
      <Link href="/" passHref>
        <a>
          <Box display="flex" gap="10px" alignItems="center">
            <img
              src="/logo.jpg"
              alt="Dream House Inc. Logo"
              width="50"
              height="50"
            />
            <span>Dream House Inc.</span>
          </Box>
        </a>
      </Link>
    </Box>
    <Box>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<FcMenu />}
          variant="outline"
          color="red.400"
        />
        <MenuList>
          <Link href="/" passHref>
            <MenuItem as="a" icon={<FcHome />}>
              Home
            </MenuItem>
          </Link>
          <Link href="/search" passHref>
            <MenuItem as="a" icon={<BsSearch />}>
              Search
            </MenuItem>
          </Link>
          <Link href="/search?purpose=for-sale" passHref>
            <MenuItem as="a" icon={<FcAbout />}>
              Buy Property
            </MenuItem>
          </Link>
          <Link href="/search?purpose=for-rent" passHref>
            <MenuItem as="a" icon={<FiKey />}>
              Rent Property
            </MenuItem>
          </Link>
          <Link href="/contact" passHref>
            <MenuItem as="a" icon={<FcCallback />}>
              Contact Us
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  </Flex>
);

export default Navbar;
