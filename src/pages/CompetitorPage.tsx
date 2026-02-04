import { useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { getCompetitor } from "@/config/competitors";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ComparisonSection from "@/components/ComparisonSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GuestReviewsSection from "@/components/GuestReviewsSection";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";

const CompetitorPage = () => {
  const { competitorSlug } = useParams<{ competitorSlug: string }>();
  const competitor = competitorSlug ? getCompetitor(competitorSlug) : undefined;

  useEffect(() => {
    if (competitor) {
      document.title = competitor.metaTitle;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", competitor.metaDescription);
      }

      // Update OG tags
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute("content", competitor.metaTitle);
      }
      
      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute("content", competitor.metaDescription);
      }
    }
  }, [competitor]);

  if (!competitor) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection competitor={competitor} />
        <ComparisonSection competitor={competitor} />
        <BenefitsSection />
        <TestimonialsSection />
        <GuestReviewsSection />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
};

export default CompetitorPage;
