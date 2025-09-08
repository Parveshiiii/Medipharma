import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, ScrollRestoration } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import WhyUsPage from "./pages/WhyUsPage";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";
import QualityStandards from "./pages/legal/QualityStandards";
import HospitalEquipment from "./pages/HospitalEquipment";
import MedicineFirstAid from "./pages/MedicineFirstAid";
import SurgicalInstruments from "./pages/SurgicalInstruments";
import MilitaryAndRescueEquipment from "./pages/MilitaryAndRescueEquipment";
import SeniorCitizenKits from "./pages/SeniorCitizenKits";
import Ayurveda from "./pages/Ayurveda";
import MobileLayout from "@/components/MobileLayout";
import GlobalStyles from "@/components/GlobalStyles";

const queryClient = new QueryClient();

// Layout wrapper for all pages
const PageLayout = ({ children }: { children: React.ReactNode }) => (
  <MobileLayout>
    {children}
  </MobileLayout>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        
        {/* Product Pages with MobileLayout */}
        <Route path="/hospital-equipment" element={
          <PageLayout>
            <HospitalEquipment />
          </PageLayout>
        } />
        <Route path="/medicine-first-aid" element={
          <PageLayout>
            <MedicineFirstAid />
          </PageLayout>
        } />
        <Route path="/surgical-instruments" element={
          <PageLayout>
            <SurgicalInstruments />
          </PageLayout>
        } />
        <Route path="/military-rescue-equipment" element={
          <PageLayout>
            <MilitaryAndRescueEquipment />
          </PageLayout>
        } />
        <Route path="/senior-citizen-kits" element={
          <PageLayout>
            <SeniorCitizenKits />
          </PageLayout>
        } />
        <Route path="/ayurveda" element={
          <PageLayout>
            <Ayurveda />
          </PageLayout>
        } />
        
        <Route path="/why-us" element={<WhyUsPage />} />
        <Route path="/contact" element={
          <PageLayout>
            <Contact />
          </PageLayout>
        } />
        <Route path="/privacy-policy" element={
          <PageLayout>
            <PrivacyPolicy />
          </PageLayout>
        } />
        <Route path="/terms-of-service" element={
          <PageLayout>
            <TermsOfService />
          </PageLayout>
        } />
        <Route path="/quality-standards" element={
          <PageLayout>
            <QualityStandards />
          </PageLayout>
        } />
        <Route path="*" element={
          <PageLayout>
            <NotFound />
          </PageLayout>
        } />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <GlobalStyles />
        <AnimatePresence mode="wait">
          <AnimatedRoutes />
        </AnimatePresence>
        <Toaster />
        <Sonner position="top-center" />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
