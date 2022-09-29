import react from "react";
import Link from "next/link";
import { HeaderContainer, HeaderLayout, LogoImg, NavList } from "./styles";

export function Header() {
  /* TODO Header Section */
  return (
    <HeaderContainer>
      <HeaderLayout>
        <LogoImg
          src="/assets/company-icons/logo-luby-site.webp"
          alt="logo luby"
        />
        <nav>
          <NavList>
            <li>
              <Link href="#ScaleTeam">Sale your tech team</Link>
            </li>
            <li>Benefits</li>
            <li>The 3 Pillars</li>
            <li>Multidisciplinary Teams</li>
            <li>Stacks</li>
            <li>Testimonials</li>
            <li>FAQ</li>
          </NavList>
        </nav>
      </HeaderLayout>
    </HeaderContainer>
  );
}
