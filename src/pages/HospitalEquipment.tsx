import { useEffect } from 'react';
import ProductGrid from "@/components/ProductGrid";

const HospitalEquipment = () => {
  const title = "Hospital Equipment";
  const description = "State-of-the-art medical equipment and devices for hospitals and healthcare facilities.";
  
  useEffect(() => {
    document.title = `${title} | SORRSHA MEDIFARMA`;
    window.scrollTo(0, 0);
  }, [title]);

  const equipmentList = [
    {
      name: "Autoclave (Sterilizer)",
      image: "/Images/Hospital Equipment/Autoclave (Sterilizer).webp",
      features: [
        "Used for sterilizing medical instruments and laboratory equipment",
        "Essential for infection control in healthcare settings",
        "Commonly used in hospitals, dental clinics, and laboratories",
        "Uses steam under pressure to kill bacteria, viruses, and spores"
      ]
    },
    {
      name: "Defibrillator",
      image: "/Images/Hospital Equipment/Defibrillator.webp",
      features: [
        "Used to restore normal heart rhythm in cardiac arrest patients",
        "Essential in emergency rooms, ambulances, and public spaces",
        "Can be manual or automated (AED) for different medical settings",
        "Delivers therapeutic shock to the heart in life-threatening arrhythmias"
      ]
    },
    {
      name: "ECG Machine",
      image: "/Images/Hospital Equipment/ECG Machine.jpeg",
      features: [
        "Measures electrical activity of the heart",
        "Used to diagnose various heart conditions",
        "Common in cardiology departments and emergency rooms",
        "Helps detect arrhythmias, heart attacks, and other cardiac issues"
      ]
    },
    {
      name: "Hospital Beds",
      image: "/Images/Hospital Equipment/Hospital beds.jpg",
      features: [
        "Specialized beds designed for patient comfort and medical care",
        "Adjustable height and backrest for patient positioning",
        "Essential for patient recovery and nursing care",
        "Available in manual, semi-electric, and fully electric models"
      ]
    },
    {
      name: "Nebulizer",
      image: "/Images/Hospital Equipment/Nebulizer.jpeg",
      features: [
        "Converts liquid medication into a fine mist for inhalation",
        "Used to treat respiratory conditions like asthma and COPD",
        "Common in hospitals and home healthcare settings",
        "Provides quick relief for breathing difficulties"
      ]
    },
    {
      name: "Oxygen Concentrator",
      image: "/Images/Hospital Equipment/Oxygen Concentrator.webp",
      features: [
        "Provides supplemental oxygen to patients with breathing difficulties",
        "Used in hospitals, emergency care, and home healthcare",
        "Filters and concentrates oxygen from ambient air",
        "Essential for patients with chronic respiratory conditions"
      ]
    },
    {
      name: "Patient Monitor",
      image: "/Images/Hospital Equipment/Paitient Monitor.webp",
      features: [
        "Continuously tracks and displays patient vital signs",
        "Measures ECG, SpO2, blood pressure, and other parameters",
        "Essential in ICUs, operation theaters, and emergency rooms",
        "Alerts medical staff to critical changes in patient condition"
      ]
    },
    {
      name: "Suction Machine",
      image: "/Images/Hospital Equipment/Suction Machine.jpeg",
      features: [
        "Removes mucus and secretions from airways",
        "Used in surgical procedures and respiratory care",
        "Essential for patients with difficulty clearing their airways",
        "Available in portable and stationary models"
      ]
    },
    {
      name: "Surgical Lights",
      image: "/Images/Hospital Equipment/Surgical Lights.jpg",
      features: [
        "Provides bright, shadow-free illumination for surgical procedures",
        "Adjustable intensity and focus for precision work",
        "Essential in operating rooms and procedure areas",
        "Available in ceiling-mounted and mobile configurations"
      ]
    },
    {
      name: "Ultrasound Machine",
      image: "/Images/Hospital Equipment/Ultrasound Machine.webp",
      features: [
        "Uses high-frequency sound waves to create images of internal organs",
        "Used for diagnostic imaging and guided procedures",
        "Common in radiology, cardiology, and obstetrics departments",
        "Non-invasive and does not use ionizing radiation"
      ]
    },
    {
      name: "Ventilator",
      image: "/Images/Hospital Equipment/Ventiltor.webp",
      features: [
        "Provides mechanical ventilation to patients who cannot breathe on their own",
        "Essential in ICUs and emergency departments",
        "Used during surgery and for patients with respiratory failure",
        "Delivers precise oxygen-air mixture and breathing support"
      ]
    },
    {
      name: "Wheelchair & Patient Transfer Equipment",
      image: "/Images/Hospital Equipment/Wheelchair & Patient Transfer Equipment.webp",
      features: [
        "Facilitates safe patient movement and transfers",
        "Essential for patients with mobility limitations",
        "Available in manual and electric models",
        "Includes transfer boards, slide sheets, and patient lifts"
      ]
    },
    {
      name: "X-Ray Machine",
      image: "/Images/Hospital Equipment/X‑Ray Machine.webp",
      features: [
        "Produces images of internal body structures using X-rays",
        "Used for diagnosing fractures, infections, and other conditions",
        "Common in radiology departments and emergency rooms",
        "Available in fixed and portable configurations"
      ]
    },
    {
      name: "Infusion Pump",
      image: "/Images/Hospital Equipment/infusion-pump.jpg",
      features: [
        "Delivers fluids, medications, or nutrients intravenously",
        "Ensures precise and controlled delivery rates",
        "Used in hospitals, clinics, and home care settings",
        "Essential for chemotherapy, pain management, and hydration therapy"
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

export default HospitalEquipment;
