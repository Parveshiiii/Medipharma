import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";

const BackButton = ({ className = "" }: { className?: string }) => {
  const navigate = useNavigate();
  
  return (
    <Button 
      variant="ghost" 
      onClick={() => navigate(-1)}
      className={`flex items-center gap-2 mb-6 ${className}`}
    >
      <ArrowLeft className="h-4 w-4" />
      Back to Products
    </Button>
  );
};

export default BackButton;
