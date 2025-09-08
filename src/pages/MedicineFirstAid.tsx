import { useEffect } from 'react';
import ProductGrid from "@/components/ProductGrid";

const MedicineFirstAid = () => {
  const title = "Medicine & First Aid Equipment";
  const description = "High-quality medical supplies and first aid essentials for homes, workplaces, and emergency situations.";

  useEffect(() => {
    document.title = `${title} | SORRSHA MEDIFARMA`;
    window.scrollTo(0, 0);
  }, []);

  const equipmentList = [
    {
      name: "Adhesive Bandages (Assorted Sizes)",
      image: "/Images/Medicine & First Aid Equipment/Adhesive Bandages (Assorted Sizes).jpg",
      features: [
        "Waterproof and breathable material for comfortable wear",
        "Available in various sizes for different wound types",
        "Sterile packaging to prevent infection",
        "Latex-free options available"
      ]
    },
    {
      name: "Antibiotic Ointment",
      image: "/Images/Medicine & First Aid Equipment/Antibiotic Ointment.webp",
      features: [
        "Helps prevent infection in minor cuts and burns",
        "Promotes faster healing of wounds",
        "Soothes and protects the affected area",
        "Dermatologist-tested formula"
      ]
    },
    {
      name: "Antiseptic Wipes",
      image: "/Images/Medicine & First Aid Equipment/Antiseptic Wipes.jpg",
      features: [
        "Convenient single-use wipes for quick cleaning",
        "Kills 99.9% of germs and bacteria",
        "Alcohol-free formula is gentle on skin",
        "Individually wrapped for portability"
      ]
    },
    {
      name: "Burn Gel or Dressing",
      image: "/Images/Medicine & First Aid Equipment/Burn Gel or Dressing.webp",
      features: [
        "Provides instant cooling relief for burns",
        "Creates a protective barrier over the burn",
        "Helps prevent infection",
        "Non-stick and easy to apply"
      ]
    },
    {
      name: "CPR Face Shield",
      image: "/Images/Medicine & First Aid Equipment/CPR Face Shield.jpg",
      features: [
        "Creates a protective barrier during CPR",
        "One-way valve prevents backflow",
        "Compact and easy to carry",
        "Includes instructions for use"
      ]
    },
    {
      name: "Elastic (ACE) Bandage",
      image: "/Images/Medicine & First Aid Equipment/Elastic (ACE) Bandage.jpeg",
      features: [
        "Provides compression for sprains and strains",
        "Self-adhering and reusable",
        "Breathable material for comfort",
        "Available in various widths"
      ]
    },
    {
      name: "Hydrocortisone Cream",
      image: "/Images/Medicine & First Aid Equipment/Hydrocortisone Cream.webp",
      features: [
        "Relieves itching and inflammation",
        "Effective for rashes and insect bites",
        "Fast-acting formula",
        "Suitable for sensitive skin"
      ]
    },
    {
      name: "Instant Cold Pack",
      image: "/Images/Medicine & First Aid Equipment/Instant Cold Pack.jpg",
      features: [
        "No refrigeration needed - activates on demand",
        "Provides instant cold therapy",
        "Single-use and disposable",
        "Ideal for sports injuries"
      ]
    },
    {
      name: "First Aid Kit",
      image: "/Images/Medicine & First Aid Equipment/Medikitwebp",
      features: [
        "Comprehensive collection of first aid supplies",
        "Compact and portable design",
        "Ideal for home, car, or travel",
        "Includes essential medical items"
      ]
    },
    {
      name: "Pain Relief Tablets",
      image: "/Images/Medicine & First Aid Equipment/Pain Relief Tablets.webp",
      features: [
        "Fast-acting pain relief",
        "Reduces fever and inflammation",
        "Easy-to-swallow tablets",
        "Individually sealed for freshness"
      ]
    },
    {
      name: "Small Trauma Scissors",
      image: "/Images/Medicine & First Aid Equipment/Small Trauma Scissors.webp",
      features: [
        "Stainless steel construction",
        "Blunt tips for safety",
        "Ideal for cutting bandages and clothing",
        "Compact size for first aid kits"
      ]
    },
    {
      name: "Sterile Gauze Pads & Adhesive Tape",
      image: "/Images/Medicine & First Aid Equipment/Sterile Gauze Pads & Adhesive Tape.webp",
      features: [
        "Highly absorbent material",
        "Individually wrapped for sterility",
        "Non-stick surface",
        "Secures with included adhesive tape"
      ]
    },
    {
      name: "Digital Thermometer",
      image: "/Images/Medicine & First Aid Equipment/Thermometer (Digital).jpg",
      features: [
        "Fast and accurate readings",
        "Easy-to-read digital display",
        "Waterproof tip for easy cleaning",
        "Memory function for tracking"
      ]
    },
    {
      name: "Tweezers",
      image: "/Images/Medicine & First Aid Equipment/Tweezers.webp",
      features: [
        "Precision stainless steel tips",
        "Slant tip for better control",
        "Ideal for splinter and tick removal",
        "Easy to clean and sterilize"
      ]
    }
  ];

  return (
    <ProductGrid 
      products={equipmentList}
      title={title}
      description={description}
    />
  );
};

export default MedicineFirstAid;
