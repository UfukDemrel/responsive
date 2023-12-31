
import React, {useState} from "react";
import {
  // Box,
  Flex,
  Button, 
  // Stack,
  HStack,
  // IconButton,
} from "@chakra-ui/react";
// import {
//   HamburgerIcon,
//   CloseIcon,
// } from "@chakra-ui/icons";
import Name from "./Name";
import "./Navbar.css";


export default function Navbar() {
  // const { colorMode, toggleColorMode } = useColorMode();
  // const { isOpen, onOpen, onClose } = useDisclosure();

  // const onButtonClick = () => {
  //   window.open(Shubham_Verma_Resume);
  // };

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMenuButtonOpen, setIsMenuButtonOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    setIsMenuButtonOpen(!isMenuButtonOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
    setIsMenuButtonOpen(false);
  };
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
                    <b>Ana sayfa</b>
                  </a>
                </Button>

                <Button className="btnRes background">
                  <a href="#About">
                    <b>Yeni Çıkanlar</b>
                  </a>
                </Button>

                <Button className="btnRes background">
                  <a href="#Skills">
                    {" "}
                    <b>Kitaplığım</b>
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

            <div className={`mobile ${isNavOpen ? 'nav-open' : ''}`}>
                <button className={`nav-button ${isMenuButtonOpen ? 'close-button' : ''}`} onClick={toggleNav}>
                <img src={isMenuButtonOpen ? 'close.png' : 'menu.jpg'} alt={isMenuButtonOpen ? 'Close' : 'Menu'}/>
                </button>

                <div className="fixed-top dineuron-menu">
                <img className="mobile-popup-img" src='w2.png' alt='alt'/>
                  <div className="flex-center p-5">
                    <ul className="nav flex-column">
                      <li className="nav-item delay-1"><a onClick={closeNav} className="nav-link" href="#Home">Ana sayfa</a></li>
                      <li className="nav-item delay-2"><a onClick={closeNav} className="nav-link" href="#About">Yeni Çıkanlar</a></li>
                      <li className="nav-item delay-3"><a onClick={closeNav} className="nav-link" href="#Skills">Kitaplığım</a></li>
                    </ul>
                  </div>
                  <div className="mobile-brand">
                    <img className="mobile-popup-brand" src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png" alt="alt"/>
                    <img className="mobile-popup-brand" src="cloud.png" alt="alt"/>
                    <img className="mobile-popup-brand" src="https://cdn-icons-png.flaticon.com/512/154/154874.png" alt="alt"/>
                    <img className="mobile-popup-brand" src="https://static-00.iconduck.com/assets.00/youtube-music-icon-512x512-tzy5jsl3.png" alt="alt"/>
                    <img className="mobile-popup-brand" src="https://cdn-icons-png.flaticon.com/512/732/732110.png" alt="alt"/>
                    <img className="mobile-popup-brand" src="https://img.freepik.com/free-icon/twitter_318-788985.jpg?w=2000" alt="alt"/>
                    <img className="mobile-popup-brand" src="https://seeklogo.com/images/I/instagram-new-2016-glyph-logo-84CB825424-seeklogo.com.png" alt="alt"/>
                  </div>
                </div>
            </div>
            
          </Flex>
        </Flex>
      </div>
    </div>
  );
}
