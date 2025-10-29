import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PricesSection from '@/components/PricesSection';
import DocumentsSection from '@/components/DocumentsSection';
import GuaranteesSection from '@/components/GuaranteesSection';
import FAQSection from '@/components/FAQSection';
import ReviewsSection from '@/components/ReviewsSection';
import ContactsSection from '@/components/ContactsSection';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <PricesSection />
      <DocumentsSection />
      <GuaranteesSection />
      <FAQSection />
      <ReviewsSection />
      <ContactsSection />
      <Footer />
    </div>
  );
}
