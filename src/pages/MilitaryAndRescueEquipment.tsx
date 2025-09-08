import { useEffect } from 'react';
import ProductGrid from "@/components/ProductGrid";
import { Shield, HeartPulse, AlertTriangle } from "lucide-react";

const MilitaryAndRescueEquipment = () => {
  const title = "Military & Rescue Equipment";
  const description = "Specialized medical equipment for military, tactical, and emergency response teams.";
  
  useEffect(() => {
    document.title = `${title} | SORRSHA MEDIFARMA`;
    window.scrollTo(0, 0);
  }, [title]);

  const militaryKits = [
    {
      name: "Combat Application Tourniquet (CAT)",
      image: "/Images/Military Medical Kits/CAT (Combat Application Tourniquet).jpg",
      features: [
        "One-handed application for self-aid",
        "Windlass system for effective pressure application",
        "Time strap to record application time",
        "Complies with TCCC guidelines"
      ]
    },
    {
      name: "Israeli Emergency Bandage",
      image: "/Images/Military Medical Kits/Israeli Emergency Bandage.webp",
      features: [
        "All-in-one pressure dressing and bandage",
        "Non-adherent sterile dressing",
        "Built-in pressure bar for direct pressure",
        "Self-adherent wrap with closure bar"
      ]
    },
    {
      name: "Hemostatic Gauze",
      image: "/Images/Military Medical Kits/Hemostatic Gauze.webp",
      features: [
        "Rapid blood clotting agent",
        "For severe, life-threatening bleeding",
        "Works in high-motion areas",
        "Sterile and ready to use"
      ]
    },
    {
      name: "Chest Seal",
      image: "/Images/Military Medical Kits/Chest Seal.webp",
      features: [
        "Occlusive dressing for chest wounds",
        "One-way valve allows air to escape",
        "Adheres to wet or hairy skin",
        "Compact and lightweight"
      ]
    },
    {
      name: "Nasopharyngeal Airway (NPA)",
      image: "/Images/Military Medical Kits/Nasopharyngeal Airway (NPA) with Lubricant.jpg",
      features: [
        "Maintains open airway in unconscious patients",
        "Lubricant included for easy insertion",
        "Multiple sizes available",
        "Single-use, sterile packaging"
      ]
    },
    {
      name: "Emergency Trauma Shears",
      image: "/Images/Military Medical Kits/Emergency Trauma Shears.webp",
      features: [
        "Cuts through tough materials (clothing, webbing, etc.)",
        "Blunt tip design for safety",
        "Stainless steel construction",
        "Comfortable ergonomic handles"
      ]
    },
    {
      name: "Burn Dressing",
      image: "/Images/Military Medical Kits/Burn Dressing.jpg",
      features: [
        "Sterile, non-adherent burn pad",
        "Cools and soothes burns",
        "Prevents infection and fluid loss",
        "Easy to apply and secure"
      ]
    },
    {
      name: "14-Gauge Decompression Needle",
      image: "/Images/Military Medical Kits/14‑Gauge Decompression Needle.jpeg",
      features: [
        "For tension pneumothorax treatment",
        "Safety catheter system",
        "Clear flashback chamber",
        "Includes catheter stabilization device"
      ]
    },
    {
      name: "Hypothermia Blanket (Mylar)",
      image: "/Images/Military Medical Kits/Hypothermia Blanket (Mylar).webp",
      features: [
        "Retains up to 90% of body heat",
        "Waterproof and windproof",
        "Compact and lightweight",
        "Reusable"
      ]
    },
    {
      name: "Compact MOLLE Pouch",
      image: "/Images/Military Medical Kits/Compact Molle Pouch.jpeg",
      features: [
        "MOLLE/PALS compatible",
        "Water-resistant material",
        "Multiple compartments for organization",
        "Durable construction for field use"
      ]
    }
  ];


  return (
    <ProductGrid 
      products={militaryKits}
      title={title}
      description={description}
    />
  );
};

export default MilitaryAndRescueEquipment;
