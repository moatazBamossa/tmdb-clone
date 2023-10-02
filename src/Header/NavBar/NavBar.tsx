import { useState } from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Input,
  useDisclosure,
} from "@nextui-org/react";
import { AcmeLogo } from "./Acmelogo";
import "./index.css";
import { SearchIcon } from "./SearchIcon";
import SignUp from "@/body/Sign/SignUp";

type NavbarPageProps = {
  dataSearch: string;
  handelData: (value: string) => void;
};
const NavbarPage = (props: NavbarPageProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Profile", "Deployments", "Help & Feedback", "Log Out"];
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log("first", localStorage.getItem("User"));
  return (
    <>
      <SignUp isOpen={isOpen} onClose={onClose} />
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        className="bg-gradient-to-r from-purple-500 to-blue-500"
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <AcmeLogo />
            <p className="font-bold text-inherit">ACME</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {menuItems.map((item, i) => (
            <NavbarItem key={i}>
              <Link className="navItem" href="#">
                {item}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            {localStorage.getItem("User") ? (
              <>{localStorage.getItem("User")}</>
            ) : (
              <Button
                as={Link}
                color="primary"
                href="#"
                variant="flat"
                onPress={onOpen}
              >
                Sign Up
              </Button>
            )}
          </NavbarItem>

          <Input
            size="md"
            radius="lg"
            style={{
              width: 200,
            }}
            placeholder="Type to search..."
            startContent={
              <SearchIcon className="text-black/50 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
            }
            value={props.dataSearch}
            onChange={(s) => props.handelData(s.target.value)}
          />
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                className="w-full"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
};
export default NavbarPage;
