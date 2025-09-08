import { useEffect } from 'react';
import ProductGrid from "@/components/ProductGrid";

const SurgicalInstruments = () => {
  const title = "Surgical Instruments";
  const description = "Precision surgical instruments for medical professionals and healthcare facilities.";
  
  useEffect(() => {
    document.title = `${title} | SORRSHA MEDIFARMA`;
    window.scrollTo(0, 0);
  }, [title]);

  const instrumentsList = [
    {
      name: "Bone Saw",
      image: "/Images/Surgical Instruments/Bone Saw.webp",
      features: [
        "Precision cutting for bone procedures",
        "Ergonomic handle for better control",
        "Stainless steel construction",
        "Available in various sizes"
      ]
    },
    {
      name: "Curette",
      image: "/Images/Surgical Instruments/Curette.jpg",
      features: [
        "Used for scraping or debriding tissue",
        "Sharp edges for precise removal",
        "Available in various shapes and sizes",
        "Sterile and single-use options"
      ]
    },
    {
      name: "Electrosurgical Pencil",
      image: "/Images/Surgical Instruments/Electrosurgical Pencil.jpg",
      features: [
        "Precise cutting and coagulation",
        "Ergonomic design for comfort",
        "Smoke evacuation compatible",
        "Disposable and reusable options"
      ]
    },
    {
      name: "Hemostatic Forceps",
      image: "/Images/Surgical Instruments/Hemostatic Forceps.webp",
      features: [
        "Controls bleeding by clamping blood vessels",
        "Serrated jaws for secure grip",
        "Various tip configurations available",
        "Autoclavable and reusable"
      ]
    },
    {
      name: "Needle Holder",
      image: "/Images/Surgical Instruments/Needle Holder.jpeg",
      features: [
        "Holds suturing needles securely",
        "Locking mechanism for stability",
        "Tungsten carbide inserts for durability",
        "Various sizes for different procedures"
      ]
    },
    {
      name: "Surgical Probe",
      image: "/Images/Surgical Instruments/Probe.jpeg",
      features: [
        "Used for exploration and examination",
        "Blunt tip for safety",
        "Stainless steel construction",
        "Available in various lengths"
      ]
    },
    {
      name: "Retractors",
      image: "/Images/Surgical Instruments/Retractors.webp",
      features: [
        "Holds back tissues and organs",
        "Self-retaining or manual options",
        "Various shapes for different procedures",
        "Ergonomic handles for ease of use"
      ]
    },
    {
      name: "Scalpel Blades",
      image: "/Images/Surgical Instruments/Scalpel Blades.webp",
      features: [
        "Ultra-sharp precision cutting",
        "Sterile and single-use",
        "Various blade sizes available",
        "Compatible with standard handles"
      ]
    },
    {
      name: "Suction Tube",
      image: "/Images/Surgical Instruments/Suction Tube.png",
      features: [
        "Removes fluids from surgical sites",
        "Disposable and reusable options",
        "Various diameters available",
        "Clear material for visibility"
      ]
    },
    {
      name: "Surgical Scissors",
      image: "/Images/Surgical Instruments/Surgical Scissors.webp",
      features: [
        "Precision cutting of tissues",
        "Available in straight and curved",
        "Sharp, durable blades",
        "Ergonomic finger rings"
      ]
    },
    {
      name: "Surgical Sponge",
      image: "/Images/Surgical Instruments/Surgical Sponge.jpeg",
      features: [
        "Highly absorbent material",
        "Radiopaque for detection",
        "Sterile and individually wrapped",
        "Various sizes available"
      ]
    },
    {
      name: "Surgical Stapler",
      image: "/Images/Surgical Instruments/Surgical Stapler.jpeg",
      features: [
        "For rapid wound closure",
        "Disposable cartridges",
        "Ergonomic design",
        "Various staple sizes"
      ]
    },
    {
      name: "Trocar",
      image: "/Images/Surgical Instruments/Trocar.webp",
      features: [
        "Minimally invasive access",
        "Sharp obturator tip",
        "Valve system to prevent gas escape",
        "Various diameters available"
      ]
    },
    {
      name: "Tissue Forceps",
      image: "/Images/Surgical Instruments/issue Forceps.webp",
      features: [
        "Fine tips for delicate handling",
        "Teeth for secure grip",
        "Various lengths available",
        "Autoclavable and reusable"
      ]
    }
  ];

  return (
    <ProductGrid 
      products={instrumentsList}
      title={title}
      description={description}
    />
  );
};

export default SurgicalInstruments;
