import { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Users, Activity, HeartPulse, Syringe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-medical.jpg";
import { useInView, motion } from 'framer-motion';

const Hero = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const productCategories = [
    { 
      name: 'Medical Equipment', 
      icon: <Activity className="w-4 h-4" />,
      color: 'from-blue-500 to-purple-500'
    },
    { 
      name: 'Emergency Kits', 
      icon: <HeartPulse className="w-4 h-4" />,
      color: 'from-red-500 to-pink-500'
    },
    { 
      name: 'Pharmaceuticals', 
      icon: <Syringe className="w-4 h-4" />,
      color: 'from-green-500 to-teal-500'
    },
    { 
      name: 'Senior Citizen Kits', 
      icon: <Users className="w-4 h-4" />,
      color: 'from-teal-500 to-cyan-500'
    },
    { 
      name: 'Combat Equipment', 
      icon: <Shield className="w-4 h-4" />,
      color: 'from-orange-500 to-amber-500'
    },
    { 
      name: 'Ayurveda', 
      icon: <Shield className="w-4 h-4" />,
      color: 'from-emerald-500 to-green-600'
    },
  ];

  const handleNavigation = (path: string, sectionId?: string) => {
    // If we're already on the target page, scroll to section
    if (window.location.pathname === path.split('#')[0] && sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    
    // If navigating to a new page, scroll to top first
    if (window.location.pathname !== path.split('#')[0]) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      
      // Slight delay to allow scroll to complete before navigation
      setTimeout(() => {
        navigate(path);
      }, 100);
    } else {
      navigate(path);
    }
  };

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={heroImage} 
          alt="Modern medical facility" 
          className="w-full h-full object-cover opacity-10 scale-110"
          style={{
            transform: isInView ? 'scale(1)' : 'scale(1.1)',
            transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-primary/5 opacity-30"></div>
      </div>
      
      <div className="container relative z-10 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div 
            className="space-y-8"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
              transitionDelay: '0.1s'
            }}
          >
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-balance">
                <span className="block text-primary">Advanced Medical</span>
                <span className="block text-accent mt-2">Solutions for Critical Care</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Trusted by hospitals and military units worldwide, Sorrsha Medipharma delivers 
                cutting-edge medical equipment and pharmaceuticals for life-saving care.
              </p>
            </div>

            <div 
              className="flex flex-wrap gap-4"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                transitionDelay: '0.3s'
              }}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <Button 
                  size="lg" 
                  className="group px-8 h-12 text-base bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-lg hover:shadow-primary/20"
                  onClick={() => handleNavigation('/products', 'featured-products')}
                >
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    className="inline-flex items-center"
                  >
                    Explore Products
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform" />
                  </motion.span>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-8 h-12 text-base border-2 border-primary/20 hover:border-primary/40 bg-background/50 backdrop-blur-sm hover:bg-background/70 transition-all duration-300"
                  onClick={() => handleNavigation('/contact')}
                >
                  Request Catalog
                </Button>
              </motion.div>
            </div>

            <div 
              className="flex flex-wrap items-center gap-6 pt-4 text-sm text-muted-foreground"
              style={{
                opacity: isInView ? 1 : 0,
                transition: 'opacity 0.8s ease-out',
                transitionDelay: '0.6s'
              }}
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span>ISO Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-yellow-500" />
                <span>Trusted by 1000+ Hospitals</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-500" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          <div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
              transitionDelay: '0.4s'
            }}
          >
            {productCategories.map((category, index) => (
              <div 
                key={category.name}
                onClick={() => navigate('/products')}
                className="group bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 cursor-pointer hover:bg-background/70 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.6s ease-out, transform 0.6s ease-out, background-color 0.3s ease, border-color 0.3s ease`,
                  transitionDelay: isInView ? `${0.2 + index * 0.1}s` : '0s'
                }}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Explore our range of {category.name.toLowerCase()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;