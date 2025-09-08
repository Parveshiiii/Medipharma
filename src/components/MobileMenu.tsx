import { X } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
const medicalLogo = "/favicon/logo.png";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: { name: string; path: string }[];
  isActive: (path: string) => boolean;
  onNavigate: (path: string) => void;
}

const MobileMenu = ({
  isOpen,
  onClose,
  navItems,
  isActive,
  onNavigate,
}: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-white">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <Link 
            to="/" 
            className="flex items-center space-x-2" 
            onClick={() => onClose()}
          >
            <img src={medicalLogo} alt="Sorrsha Medipharma Logo" className="h-8 w-8" />
            <span className="text-lg font-bold text-foreground">Sorrsha Medipharma</span>
          </Link>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close menu</span>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-2 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => onNavigate(item.path)}
              className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium flex items-center ${
                isActive(item.path)
                  ? 'bg-primary/10 text-primary font-semibold'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {item.name}
              {isActive(item.path) && (
                <span className="ml-auto w-2 h-2 rounded-full bg-primary"></span>
              )}
            </button>
          ))}
        </nav>

        {/* Footer with CTA Buttons */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="space-y-3">
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => onNavigate('/contact')}
            >
              Contact Sales
            </Button>
            <Button 
              variant="hero" 
              className="w-full"
              onClick={() => onNavigate('/contact')}
            >
              Get Free Quote
            </Button>
          </div>
          
          {/* Contact Info */}
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>Need help? Contact us at</p>
            <a 
              href="mailto:contact@sorrshamedipharma.com" 
              className="text-primary hover:underline"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = 'mailto:contact@sorrshamedipharma.com';
              }}
            >
              contact@sorrshamedipharma.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
