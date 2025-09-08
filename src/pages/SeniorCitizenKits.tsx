import { useEffect } from 'react';
import ProductGrid from "@/components/ProductGrid";

const SeniorCitizenKits = () => {
  const title = "Senior Citizen Supporting Kits";
  const description = "High-quality support equipment and devices to enhance the independence and safety of senior citizens.";
  
  useEffect(() => {
    document.title = `${title} | SORRSHA MEDIFARMA`;
    window.scrollTo(0, 0);
  }, [title]);

  const equipmentList = [
    {
      name: "Automatic Pill Dispenser with Alarm",
      image: "/Images/Senior Citizen Supporting Kits/Automatic Pill Dispenser with Alarm.jpg",
      features: [
        "Automatically dispenses medication at set times",
        "Loud alarm and visual alerts",
        "28-day medication capacity",
        "Lockable for safety"
      ]
    },
    {
      name: "GPS Medical Alert Pendant",
      image: "/Images/Senior Citizen Supporting Kits/GPS Medical Alert Pendant.webp",
      features: [
        "24/7 emergency response",
        "GPS location tracking",
        "Fall detection technology",
        "Waterproof design"
      ]
    },
    {
      name: "Lightweight Rollator Walker with Seat & Basket",
      image: "/Images/Senior Citizen Supporting Kits/Lightweight Rollator Walker with Seat & Basket.jpg",
      features: [
        "Lightweight aluminum frame",
        "Comfortable padded seat",
        "Under-seat storage basket",
        "Adjustable height handles"
      ]
    },
    {
      name: "Mobility Scooter (Compact, Foldable)",
      image: "/Images/Senior Citizen Supporting Kits/Mobility Scooter (Compact, Foldable).webp",
      features: [
        "Folds for easy transport",
        "Long battery life",
        "Weight capacity up to 250 lbs",
        "LED headlight for safety"
      ]
    },
    {
      name: "Chair Stand Assist Frame",
      image: "/Images/Senior Citizen Supporting Kits/Chair Stand Assist Frame.webp",
      features: [
        "Helps with sitting and standing",
        "Non-slip handles",
        "Fits most chairs",
        "Lightweight and portable"
      ]
    },
    {
      name: "Height-Adjustable Quad Walking Stick",
      image: "/Images/Senior Citizen Supporting Kits/Height‑Adjustable Quad Walking Stick.webp",
      features: [
        "Four-point base for stability",
        "Adjustable height",
        "Comfortable ergonomic handle",
        "Non-slip rubber tips"
      ]
    },
    {
      name: "Raised Toilet Seat with Armrests",
      image: "/Images/Senior Citizen Supporting Kits/Raised Toilet Seat with Armrests.jpg",
      features: [
        "Adds 4 inches of height",
        "Padded armrests for support",
        "Quick-release clamps",
        "Supports up to 300 lbs"
      ]
    },
    {
      name: "Shower Chair with Non-Slip Feet",
      image: "/Images/Senior Citizen Supporting Kits/Shower Chair with Non‑Slip Feet.jpg",
      features: [
        "Lightweight and durable",
        "Adjustable height",
        "Non-slip rubber feet",
        "Easy to clean"
      ]
    },
    {
      name: "Anti-Slip Memory Foam Bathroom Mat",
      image: "/Images/Senior Citizen Supporting Kits/Anti‑Slip Memory Foam Bathroom Mat.jpeg",
      features: [
        "Super absorbent memory foam",
        "Non-slip backing",
        "Quick-drying material",
        "Machine washable"
      ]
    },
    {
      name: "Adjustable Bed Rail with Storage Pouch",
      image: "/Images/Senior Citizen Supporting Kits/Adjustable Bed Rail with Storage Pouch.webp",
      features: [
        "Fits most beds",
        "Convenient storage pouch",
        "Easy to install",
        "Supports up to 300 lbs"
      ]
    },
    {
      name: "Reacher Grabber Tool",
      image: "/Images/Senior Citizen Supporting Kits/Reacher Grabber Tool.jpg",
      features: [
        "32-inch reach",
        "Lightweight aluminum",
        "Ergonomic handle",
        "Supports up to 5 lbs"
      ]
    },
    {
      name: "Large-Button, SOS-Enabled Mobile Phone",
      image: "/Images/Senior Citizen Supporting Kits/Large‑Button, SOS‑Enabled Mobile Phone.jpg",
      features: [
        "Extra-large buttons",
        "Emergency SOS button",
        "Loud speaker",
        "Long battery life"
      ]
    },
    {
      name: "Hearing Amplifier Device",
      image: "/Images/Senior Citizen Supporting Kits/Hearing Amplifier Device.jpeg",
      features: [
        "Digital sound processing",
        "Adjustable volume",
        "Comfortable in-ear design",
        "Rechargeable battery"
      ]
    }
  ];

  return (
    <ProductGrid 
      title={title}
      description={description}
      products={equipmentList}
    />
  );
};

export default SeniorCitizenKits;
