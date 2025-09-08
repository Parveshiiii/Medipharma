import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Award, CheckCircle, Shield, Settings } from "lucide-react";
import { Link } from "react-router-dom";

export default function QualityStandards() {
  return (
    <div className="bg-background min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="legal-container"
      >
        <Button 
          asChild 
          variant="ghost" 
          className="mb-8 -ml-4 group transition-all duration-300 hover:bg-primary/10"
        >
          <Link to="/" className="flex items-center text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </Button>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Award className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Quality Standards
          </h1>
          <p className="text-muted-foreground text-lg">
            Last updated: September 4, 2024
          </p>
        </div>

        <div className="bg-card rounded-xl p-8 shadow-sm border border-border/50">
          <div className="legal-content">
        <div className="mb-10">
          <div className="flex items-start mb-6">
            <div className="bg-primary/10 p-3 rounded-lg mr-4 mt-1">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">Our Commitment to Quality</h2>
              <p className="text-muted-foreground">
                At Sorrsha Medipharma, we are committed to maintaining the highest standards of quality in all our products and services. Our quality management system ensures that every product meets stringent quality requirements.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-10 p-6 bg-muted/30 rounded-lg border-l-4 border-primary">
          <div className="flex items-start">
            <div className="bg-primary/10 p-3 rounded-lg mr-4 mt-1">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Certifications & Compliance</h2>
              <p className="text-muted-foreground mb-4">Our operations and products comply with the following standards and regulations:</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>ISO 13485:2016 - Medical Devices Quality Management System</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>CE Marking - Conformity with EU health, safety, and environmental standards</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>FDA 21 CFR Part 820 - Quality System Regulation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Good Manufacturing Practices (GMP)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <div className="flex items-start">
            <div className="bg-primary/10 p-3 rounded-lg mr-4 mt-1">
              <Settings className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Product Development & Testing</h2>
              <p className="text-muted-foreground mb-4">
                Every product undergoes rigorous testing and quality control procedures, including:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted/20 p-4 rounded-lg border border-border/50">
                  <h3 className="font-semibold text-foreground mb-2">Design & Validation</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Design verification</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Design validation</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-muted/20 p-4 rounded-lg border border-border/50">
                  <h3 className="font-semibold text-foreground mb-2">Testing</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Material testing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Performance testing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Sterility testing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2>4. Manufacturing Standards</h2>
        <p>
          Our manufacturing facilities maintain the highest standards of cleanliness, precision, and quality control. We implement:
        </p>
        <ul>
          <li>Strict environmental controls</li>
          <li>Comprehensive equipment maintenance</li>
          <li>Regular staff training and certification</li>
          <li>Detailed documentation and traceability</li>
        </ul>

        <h2>5. Continuous Improvement</h2>
        <p>
          We are committed to continuous improvement through:
        </p>
        <ul>
          <li>Regular quality audits</li>
          <li>Customer feedback analysis</li>
          <li>Process optimization</li>
          <li>Technology upgrades</li>
        </ul>

        <h2>6. Contact Us</h2>
        <p>
          For any quality-related inquiries, please contact our Quality Assurance team at quality@sorrshamed.com
        </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
