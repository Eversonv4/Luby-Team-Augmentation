import react, { useState } from "react";
import Link from "next/link";
import {
  HeaderContainer,
  HeaderLayout,
  NavList,
  IconMenu,
  LogoLuby,
} from "./styles";

import { MenuAside } from "@components/MenuAside";

export function Header() {
  /* TODO Header Section */

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function OpenMenu() {
    setMenuIsOpen(!menuIsOpen);
  }

  return (
    <HeaderContainer>
      <HeaderLayout>
        <LogoLuby
          src="/assets/company-icons/logo-luby-site.webp"
          alt="logo luby"
          width={134}
          height={40}
        />

        <IconMenu onClick={OpenMenu} />

        <NavList>
          <ul>
            <li>
              <Link href="#scaleteam-section">Sale your tech team</Link>
            </li>
            <li>
              <Link href="#benefits-section">Benefits</Link>
            </li>
            <li>
              <Link href="#pillars-section">The 3 Pillars</Link>
            </li>
            <li>
              <Link href="#multiteams-section">Multidisciplinary Teams</Link>
            </li>
            <li>
              <Link href="#techstacks-section">Stacks</Link>
            </li>
            <li>
              <Link href="#testimonials-section">Testimonials</Link>
            </li>
            <li>
              <Link href="#faq-section">FAQ</Link>
            </li>
          </ul>
        </NavList>
      </HeaderLayout>

      <MenuAside handleMenuActive={OpenMenu} isActive={menuIsOpen} />
    </HeaderContainer>
  );
}
