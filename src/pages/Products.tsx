import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Globe, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import medicalEquipment from "@/assets/medical-equipment-1.jpg";
import surgicalInstruments from "@/assets/surgical-instruments.jpg";
import militaryKit from "@/assets/military-medical-kit.jpg";
import combatRescue from "@/assets/combat-rescue-equipment.jpg";
import medicineFirstAid from "@/assets/medicine-first-aid.jpg";
import seniorCareKit from "@/assets/senior-care-kit.jpg";
import ayurveda from "@/assets/Ayurveda.png";

const Products = () => {
  const [showCatalogPopup, setShowCatalogPopup] = useState(false);
  const navigate = useNavigate();

  const handleCatalogRequest = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowCatalogPopup(true);
    // Hide the popup after 5 seconds
    setTimeout(() => setShowCatalogPopup(false), 5000);
  };
  const productCategories = [
    {
      title: "Hospital Equipment",
      description: "Advanced medical devices and monitoring systems for comprehensive patient care in hospital environments.",
      image: medicalEquipment,
      products: [
        "Patient Monitoring Systems",
        "IV Infusion Systems", 
        "Ventilators & Respiratory Equipment",
        "Diagnostic Imaging Devices",
        "Cardiac Monitoring Equipment",
        "Surgical Tables & Equipment"
      ],
      certifications: ["FDA Approved", "CE Marked", "ISO 13485"]
    },
    {
      title: "Surgical Instruments",
      description: "Precision-engineered surgical tools and instruments meeting the highest standards of medical excellence.",
      image: surgicalInstruments,
      products: [
        "Surgical Instrument Sets",
        "Minimally Invasive Tools",
        "Electrosurgical Devices",
        "Disposable Surgical Supplies",
        "Sterilization Equipment",
        "Surgical Lighting Systems"
      ],
      certifications: ["FDA Approved", "ISO 13485", "Sterility Assured"]
    },
    {
      title: "Military Medical Kits",
      description: "Rugged, field-tested medical supplies designed specifically for military and emergency response operations.",
      image: militaryKit,
      products: [
        "Combat Medic Bags",
        "Trauma Response Kits",
        "Field Surgical Instruments",
        "Emergency Pharmaceuticals",
        "Portable Diagnostic Equipment",
        "Tactical Medical Supplies"
      ],
      certifications: ["Military Spec", "NATO Approved", "Combat Tested"]
    },
    {
      title: "Combat Operation & Rescue Equipment",
      description: "Specialized equipment designed for combat medics and rescue teams operating in high-risk environments.",
      image: combatRescue,
      products: [
        "Combat Tourniquets & Hemostats",
        "Tactical Evacuation Litters",
        "Field Decontamination Kits",
        "Combat Gauze & Bandages",
        "Tactical Medical Backpacks",
        "Emergency Airway Management Kits"
      ],
      certifications: ["TCCC Certified", "Military Grade", "Field Tested"]
    },
    {
      title: "Medicine & First Aid Equipment",
      description: "Comprehensive range of medical supplies and first aid equipment for emergency and clinical use.",
      image: medicineFirstAid,
      products: [
        "First Aid Kits (All Sizes)",
        "Emergency Medications",
        "Wound Care Supplies",
        "Burn Treatment Kits",
        "CPR & Resuscitation Equipment",
        "Emergency Splints & Braces"
      ],
      certifications: ["ISO 13485", "CE Marked", "FDA Cleared"]
    },
    {
      title: "Ayurvedic Medicines & Herbs",
      description: "Traditional Ayurvedic medicines, herbal supplements, and wellness products based on ancient healing practices.",
      image: ayurveda,
      products: [
        "Herbal Supplements",
        "Ayurvedic Oils & Massage Products",
        "Natural Wellness Teas",
        "Ayurvedic Skincare",
        "Digestive Health Products",
        "Stress Relief & Relaxation Formulas"
      ],
      certifications: ["AYUSH Certified", "GMP Certified", "100% Natural"]
    },
    {
      title: "Senior Citizen Supporting Kits",
      description: "Specialized medical equipment and assistive devices designed to support the health and mobility of seniors.",
      image: seniorCareKit,
      products: [
        "Mobility Aids (Walkers, Canes)",
        "Home Care Medical Equipment",
        "Daily Living Aids",
        "Monitoring Devices",
        "Therapeutic Support Products",
        "Emergency Alert Systems"
      ],
      certifications: ["Elderly Care Certified", "Medical Grade", "User Tested"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Medical Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive medical equipment and supplies designed for hospitals, 
              clinics, and military operations. Every product meets the highest 
              international quality standards.
            </p>
          </div>

          <div className="space-y-16">
            {productCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden shadow-elegant">
                <CardContent className="p-0">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <img 
                        src={category.image} 
                        alt={category.title}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    
                    <div className={`p-8 lg:p-12 space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-foreground">{category.title}</h2>
                        <p className="text-muted-foreground text-lg">{category.description}</p>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-foreground">Product Range:</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          {category.products.map((product, i) => (
                            <li key={i} className="flex items-start">
                              <ArrowRight className="h-4 w-4 text-primary mt-1 mr-2 flex-shrink-0" />
                              <span>{product}</span>
                            </li>
                          ))}
                        </ul>
                        
                        {category.title === 'Senior Citizen Supporting Kits' && (
                          <Button 
                            variant="outline" 
                            className="mt-6 border-primary text-primary hover:bg-primary/10"
                            onClick={() => navigate('/senior-citizen-kits')}
                          >
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        )}
                        {category.title === "Ayurvedic Medicines & Herbs" && (
                          <Button 
                            variant="outline" 
                            className="mt-6 border-primary text-primary hover:bg-primary/10 group"
                            onClick={() => navigate('/ayurveda')}
                          >
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        )}
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">Certifications & Standards:</h4>
                        <div className="flex flex-wrap gap-2">
                          {category.certifications.map((cert, idx) => (
                            <span key={idx} className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4">
                        <Button 
                          variant="hero" 
                          className="group"
                          onClick={handleCatalogRequest}
                        >
                          Request Catalog
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        {category.title === "Hospital Equipment" && (
                          <Button 
                            variant="outline" 
                            className="group"
                            onClick={() => navigate('/hospital-equipment')}
                          >
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        )}
                        {category.title === "Medicine & First Aid Equipment" && (
                          <Button 
                            variant="outline" 
                            className="group"
                            onClick={() => navigate('/medicine-first-aid')}
                          >
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        )}
                        {category.title === "Surgical Instruments" && (
                          <Button 
                            variant="outline" 
                            className="group"
                            onClick={() => navigate('/surgical-instruments')}
                          >
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        )}
                        {(category.title === "Military Medical Kits" || category.title === "Combat Operation & Rescue Equipment") && (
                          <Button 
                            variant="outline" 
                            className="group"
                            onClick={() => navigate('/military-rescue-equipment')}
                          >
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        )}
                        {category.title === "Senior Citizen Kits" && (
                          <Button 
                            variant="outline" 
                            className="group"
                            onClick={() => navigate('/senior-citizen-kits')}
                          >
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-20 bg-gradient-hero rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <Shield className="h-12 w-12 text-primary mx-auto" />
                <h3 className="text-xl font-bold text-foreground">Quality Assured</h3>
                <p className="text-muted-foreground">
                  All products undergo rigorous testing and quality control processes.
                </p>
              </div>
              <div className="space-y-4">
                <Zap className="h-12 w-12 text-accent mx-auto" />
                <h3 className="text-xl font-bold text-foreground">Fast Delivery</h3>
                <p className="text-muted-foreground">
                  Emergency supply chain with rapid deployment capabilities worldwide.
                </p>
              </div>
              <div className="space-y-4">
                <Globe className="h-12 w-12 text-primary mx-auto" />
                <h3 className="text-xl font-bold text-foreground">Global Support</h3>
                <p className="text-muted-foreground">
                  24/7 technical support and maintenance services across all regions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      
      {/* Catalog Popup */}
      {showCatalogPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
            <button 
              onClick={() => setShowCatalogPopup(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </button>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You for Your Interest!</h3>
            <p className="text-gray-600 mb-4">Our product catalogs will be available soon. Please check back later or contact our sales team for more information.</p>
            <Button 
              onClick={() => {
                setShowCatalogPopup(false);
                navigate('/contact');
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;