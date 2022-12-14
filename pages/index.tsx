import { HomeSection } from "@sections/HomeSection";
import { CompaniesSection } from "@sections/companies";
import { ScaleTechTeamSection } from "@sections/scaleTechTeam";
import { BenefitsSection } from "@sections/benefits";
import { ThePillars } from "@sections/thePillars";
import { MultiTeamsSection } from "@sections/multiTeams";
import { StacksSection } from "@sections/techStacks";
import { TestimonnialsSection } from "@sections/testimonials";
import { ContactUsSection } from "@sections/contactUs";
import { FaqSection } from "@sections/FAQ";
import Footer from "@components/Footer";

function Home() {
  return (
    <>
      <HomeSection />
      <CompaniesSection />
      <ScaleTechTeamSection />
      <BenefitsSection />
      <ThePillars />
      <MultiTeamsSection />
      <StacksSection />
      <TestimonnialsSection />
      <ContactUsSection />
      <FaqSection />
      <Footer />
    </>
  );
}

export default Home;
