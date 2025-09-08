import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import BackButton from "./BackButton";

interface Product {
  name: string;
  image: string;
  features: string[];
}

interface ProductGridProps {
  products: Product[];
  title: string;
  description: string;
}

const ProductGrid = ({ products, title, description }: ProductGridProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Back Button */}
      <div className="w-full px-4 pt-4 sm:pt-6">
        <BackButton />
      </div>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-8 sm:py-12 md:py-16 px-4 sm:px-6">
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
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-base sm:text-md"
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
            {products.map((product, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
              >
                <CardHeader className="p-0 flex-shrink-0">
                  <div className="aspect-w-16 aspect-h-9 w-full">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 sm:h-56 object-cover"
                      loading={index < 3 ? 'eager' : 'lazy'}
                      width={400}
                      height={300}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300?text=Image+Not+Available';
                      }}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 flex-1 flex flex-col">
                  <CardTitle className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                    {product.name}
                  </CardTitle>
                  <ul className="space-y-2 mb-4 sm:mb-6 flex-1">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-auto">
                    <Button 
                      variant="outline" 
                      className="w-full text-xs sm:text-sm py-1.5 sm:py-2 h-auto" 
                      onClick={() => navigate('/contact')}
                    >
                      Enquire Now
                    </Button>
                    <Button 
                      variant="hero" 
                      className="w-full text-xs sm:text-sm py-1.5 sm:py-2 h-auto" 
                      onClick={() => navigate('/contact')}
                    >
                      Get Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductGrid;
