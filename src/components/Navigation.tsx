import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, Activity } from "lucide-react";
import MobileMenu from "./MobileMenu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu when navigating
  const handleNavigation = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Why Us", path: "/why-us" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Mobile menu button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <Menu className="block h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Logo - Centered on mobile */}
            <div className="flex-1 flex justify-center md:justify-start">
              <Link 
                to="/" 
                className="flex items-center space-x-2 md:space-x-3"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center">
                  <span className="text-xl font-bold text-blue-600">SORRSHA MEDIFARMA</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8 mr-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-1 py-2 text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.path) 
                      ? "text-primary border-b-2 border-primary" 
                      : "text-muted-foreground hover:border-b-2 hover:border-primary/50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                variant="hero" 
                onClick={() => handleNavigation('/contact')}
                className="whitespace-nowrap"
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile CTA Button - Visible when menu is closed */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleNavigation('/contact')}
                className="text-primary hover:bg-primary/10"
                aria-label="Contact us"
              >
                <Activity className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        navItems={navItems}
        isActive={isActive}
        onNavigate={(path) => handleNavigation(path)}
      />
    </>
  );
};

export default Navigation;