import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShieldCheck, Lock, Database, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
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
            <ShieldCheck className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-lg">
            Last updated: September 4, 2024
          </p>
        </div>

        <div className="legal-content bg-card rounded-xl p-8 shadow-sm border border-border/50">
        <h2>1. Introduction</h2>
        <p>
          Welcome to Sorrsha Medipharma. We respect your privacy and are committed to protecting your personal data.
        </p>

        <h2>2. Information We Collect</h2>
        <p>
          We may collect, use, store and transfer different kinds of personal data about you including:
        </p>
        <ul>
          <li>Identity Data (name, username, etc.)</li>
          <li>Contact Data (email, phone number, etc.)</li>
          <li>Technical Data (IP address, browser type, etc.)</li>
          <li>Usage Data (how you use our website)</li>
        </ul>

        <h2>3. How We Use Your Data</h2>
        <p>We will only use your personal data when the law allows us to, including:</p>
        <ul>
          <li>To provide and maintain our service</li>
          <li>To notify you about changes to our service</li>
          <li>To provide customer support</li>
          <li>To gather analysis or valuable information</li>
          <li>To monitor the usage of our service</li>
        </ul>

        <h2>4. Data Security</h2>
        <p>
          We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way.
        </p>

        <h2>5. Your Legal Rights</h2>
        <p>
          Under certain circumstances, you have rights under data protection laws in relation to your personal data including the right to request access, correction, erasure, restriction, transfer, or to withdraw consent.
        </p>

        <h2>6. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at privacy@sorrshamed.com
        </p>
        </div>
      </motion.div>
    </div>
  );
}
