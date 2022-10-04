import { MainContent } from "@sections/Main";
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
import { Helmet } from "react-helmet";
import Script from "next/script";

function Home() {
  return (
    <>
      <MainContent />
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
