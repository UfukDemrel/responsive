import {
  Flex,
  Button,
  HStack,
} from "@chakra-ui/react";
import Name from "./Name";
import "./Navbar.css";


export default function Navbar() {
  // const { colorMode, toggleColorMode } = useColorMode();
  // const { isOpen, onOpen, onClose } = useDisclosure();

  // const onButtonClick = () => {
  //   window.open(Shubham_Verma_Resume);
  // };

  return (
    <div id="navFix">
      <div className="header">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack w="42%">
            <Name />
          </HStack>

          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            {/* <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            /> */}
            <HStack spacing={8} alignItems={"center"}>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
                id="myDIV"
              >
                <Button className="btnRes background">
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>

                <Button className="btnRes background">
                  <a href="#About">
                    <b>New Releases</b>
                  </a>
                </Button>

                <Button className="btnRes background">
                  <a href="#Skills">
                    {" "}
                    <b>Skills</b>
                  </a>
                </Button>

                {/* <Button className="btnRes background">
                  <a href="#Projects">
                    <b>Projects</b>
                  </a>
                </Button>

                <Button className="btnRes background">
                  <a href="#Contact">
                    <b>Contact</b>
                  </a>
                </Button> */}
              </HStack>
            </HStack>
          </Flex>
        </Flex>
      </div>
    </div>
  );
}
