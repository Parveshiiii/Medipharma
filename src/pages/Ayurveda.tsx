import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

const Ayurveda = () => {
  const title = "Ayurvedic Products";
  const description = "Authentic Ayurvedic medicines and herbal products for holistic health and wellness, rooted in ancient Indian healing traditions.";
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = `${title} | SORRSHA MEDIFARMA`;
    window.scrollTo(0, 0);
  }, [title]);

  const ayurvedicProducts = [
    {
      name: "Amla Bhringraj Hair Oil",
      image: "/Images/Ayurveda/AMLA BHRINGRAJ HAIR OIL.jpg",
      features: [
        "Promotes hair growth and reduces hair fall",
        "Nourishes scalp and strengthens hair roots",
        "Prevents premature graying",
        "100% natural ingredients"
      ]
    },
    {
      name: "Hibiscus Hair Oil",
      image: "/Images/Ayurveda/HIBISCUS HAIRR OIL.png",
      features: [
        "Conditions and softens hair",
        "Reduces dandruff and scalp irritation",
        "Adds natural shine and luster",
        "Suitable for all hair types"
      ]
    },
    {
      name: "Rose Mary Hair Oil",
      image: "/Images/Ayurveda/ROSE MARRY HAIR OIL.png",
      features: [
        "Stimulates hair follicles for growth",
        "Prevents split ends and breakage",
        "Soothes dry and itchy scalp",
        "Natural fragrance"
      ]
    },
    {
      name: "Moisturizing Body Lotion",
      image: "/Images/Ayurveda/MOISTURISING BODY LOTION.jpg",
      features: [
        "Deeply hydrates and nourishes skin",
        "Leaves skin soft and supple",
        "Quick absorption, non-greasy formula",
        "With natural emollients"
      ]
    },
    {
      name: "Sunscreen Body Lotion",
      image: "/Images/Ayurveda/SUN SCREEN body lotion.jpg",
      features: [
        "Broad spectrum SPF protection",
        "Moisturizes while protecting from UV rays",
        "Lightweight and non-sticky",
        "Suitable for all skin types"
      ]
    },
    {
      name: "Almond Body Wash",
      image: "/Images/Ayurveda/almond bodywash.jpg",
      features: [
        "Gentle cleansing with almond extracts",
        "Nourishes and softens skin",
        "Pleasant natural fragrance",
        "Sulfate and paraben free"
      ]
    },
    {
      name: "Anti-Acne Cream",
      image: "/Images/Ayurveda/anti acne cream.png",
      features: [
        "Controls breakouts and prevents new ones",
        "Reduces inflammation and redness",
        "Non-comedogenic formula",
        "With natural antibacterial properties"
      ]
    },
    {
      name: "Anti-Acne Face Wash",
      image: "/Images/Ayurveda/anti acne.jpg",
      features: [
        "Deeply cleanses pores",
        "Controls excess oil production",
        "Soothes irritated skin",
        "With neem and turmeric extracts"
      ]
    },
    {
      name: "Charcoal Face Scrub",
      image: "/Images/Ayurveda/charcoalscrub.jpg",
      features: [
        "Deep pore cleansing with activated charcoal",
        "Removes blackheads and dead skin cells",
        "Purifies and detoxifies skin",
        "Leaves skin refreshed and bright"
      ]
    },
    {
      name: "Exfoliating Scrub",
      image: "/Images/Ayurveda/exfoliate scrun.jpg",
      features: [
        "Gentle exfoliation for all skin types",
        "Removes dead skin cells",
        "Improves skin texture",
        "Reveals radiant, glowing skin"
      ]
    },
    {
      name: "Floral Body Wash",
      image: "/Images/Ayurveda/floral bodywash.jpg",
      features: [
        "Enriched with natural floral extracts",
        "Gentle on skin, pH balanced",
        "Luxurious lather",
        "Refreshing floral fragrance"
      ]
    },
    {
      name: "Lavender Body Wash",
      image: "/Images/Ayurveda/lavender bodywash.jpg",
      features: [
        "Calming lavender essential oil",
        "Soothes and relaxes senses",
        "Moisturizing formula",
        "Perfect for evening showers"
      ]
    },
    {
      name: "Pigmentation Cream",
      image: "/Images/Ayurveda/pigmentation cream.png",
      features: [
        "Reduces dark spots and pigmentation",
        "Even skin tone",
        "With natural brightening agents",
        "Suitable for all skin types"
      ]
    },
    {
      name: "Red Wine Body Wash",
      image: "/Images/Ayurveda/redwine bodywash.jpg",
      features: [
        "Rich in antioxidants",
        "Detoxifies and rejuvenates skin",
        "Leaves skin feeling refreshed",
        "Luxurious lather"
      ]
    },
    {
      name: "Sugar Coffee Scrub",
      image: "/Images/Ayurveda/sugar cofee scrub.jpg",
      features: [
        "Exfoliates and softens skin",
        "Reduces appearance of cellulite",
        "With coffee and sugar crystals",
        "Leaves skin smooth and glowing"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Back Button */}
      <div className="w-full px-4 pt-4 sm:pt-6">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </Button>
      </div>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-emerald-50 py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              {title}
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
              {description}
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-base sm:text-md"
                onClick={() => navigate('/contact')}
              >
                Request a Quote
                <CheckCircle className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                className="text-black border-gray-400 hover:bg-gray-100 px-6 py-3 text-base sm:text-md"
                onClick={() => navigate('/contact')}
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="w-full px-4 sm:px-6 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {ayurvedicProducts.map((product, index) => (
              <div key={index} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 sm:h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300?text=Image+Not+Available';
                    }}
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{product.name}</h3>
                  <ul className="space-y-2 mb-4">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full mt-2"
                    onClick={() => {
                      // Scroll to top before navigating
                      window.scrollTo(0, 0);
                      navigate('/contact');
                    }}
                  >
                    Inquire Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body Vista Branding */}
      <section className="bg-gradient-to-r from-green-50 to-emerald-50 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Proudly Brought to You by Body Vista
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto mb-8 text-lg">
            At Body Vista, we are committed to providing authentic Ayurvedic products that combine ancient wisdom with modern quality standards. 
            Our products are carefully sourced, rigorously tested, and crafted to deliver the purest form of nature's healing power. Each product 
            in our range is made with the finest natural ingredients, following traditional Ayurvedic formulations while meeting international 
            quality standards.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center w-56">
              <CheckCircle className="h-10 w-10 text-green-500 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-1">100% Natural</h3>
              <p className="text-sm text-gray-600">Pure, herbal ingredients with no harmful chemicals or artificial additives</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center w-56">
              <CheckCircle className="h-10 w-10 text-green-500 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-1">AYUSH Certified</h3>
              <p className="text-sm text-gray-600">Authentic Ayurvedic formulations approved by government standards</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center w-56">
              <CheckCircle className="h-10 w-10 text-green-500 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-1">Cruelty Free</h3>
              <p className="text-sm text-gray-600">Never tested on animals, 100% vegan-friendly</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ayurveda;
