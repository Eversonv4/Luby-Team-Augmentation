import react from "react";
import { HeaderContainer, HeaderLayout, LogoImg, NavList } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderLayout>
        <LogoImg
          src="/assets/company-icons/logo-luby-site.webp"
          alt="logo luby"
        />
        <nav>
          <NavList>
            <li>Sale your tech team</li>
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
