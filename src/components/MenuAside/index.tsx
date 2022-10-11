import Link from "next/link";
import React, { useState, useRef } from "react";
import {
  BackgroundShadow,
  AsideMenuContainer,
  MenuContent,
  CloseMenuIcon,
  NavList,
  NavText,
  NavTextContrast,
} from "./styles";

import Image from "next/image";

interface IActivateMenu {
  handleMenuActive: () => void;
  isActive: boolean;
}

export function MenuAside({ handleMenuActive, isActive }: IActivateMenu) {
  // function ChangeColor() {
  //   if (window.scrollY > altura_nav_bar) {
  //     console.log("está maior!");
  //   } else {
  //     console.log("está zero!");
  //   }
  // }

  // window.onscroll = ChangeColor;

  /*
    another way to trigger the function

     React.useEffect(() => {
    window.addEventListener("scroll", changeNavbar);
  }, []);
  
  */

  return (
    <>
      <BackgroundShadow
        onClick={() => handleMenuActive()}
        isActive={isActive}
      />
      <AsideMenuContainer isActive={isActive}>
        <MenuContent>
          <CloseMenuIcon onClick={handleMenuActive} />
          <NavList>
            <ul>
              <li>
                <NavText>
                  <Image
                    src="/assets/company-icons/logo-luby-site-black.webp"
                    alt="luby logo"
                    height={36}
                    width={120}
                    loading="lazy"
                  />
                </NavText>
              </li>
              <li>
                <Link href="#scaleteam-section">
                  <NavText onClick={handleMenuActive}>
                    Scale yout tech team
                  </NavText>
                </Link>
              </li>
              <li>
                <Link href="#benefits-section">
                  <NavText onClick={handleMenuActive}>Benefits</NavText>
                </Link>
              </li>
              <li>
                <Link href="#pillars-section">
                  <NavText onClick={handleMenuActive}>The 3 Pillars</NavText>
                </Link>
              </li>
              <li>
                <Link href="#multiteams-section">
                  <NavText onClick={handleMenuActive}>
                    Multidisciplinary Teams
                  </NavText>
                </Link>
              </li>
              <li>
                <Link href="#techstacks-section">
                  <NavText onClick={handleMenuActive}>Stacks</NavText>
                </Link>
              </li>
              <li>
                <Link href="#testimonials-section">
                  <NavText onClick={handleMenuActive}>Testimonials</NavText>
                </Link>
              </li>
              <li>
                <Link href="#faq-section">
                  <NavText onClick={handleMenuActive}>FAQ</NavText>
                </Link>
              </li>
              <li>
                <Link href="#contact-section">
                  <NavTextContrast onClick={handleMenuActive}>
                    Contact Us
                  </NavTextContrast>
                </Link>
              </li>
            </ul>
          </NavList>
        </MenuContent>
      </AsideMenuContainer>
    </>
  );
}
