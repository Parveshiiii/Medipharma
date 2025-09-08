import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, AlertTriangle, Scale } from "lucide-react";
import { Link } from "react-router-dom";

export default function TermsOfService() {
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
            <FileText className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-muted-foreground text-lg">
            Last updated: September 4, 2024
          </p>
        </div>

        <div className="bg-card rounded-xl p-8 shadow-sm border border-border/50">
          <div className="legal-content">
        <h2>1. Introduction</h2>
        <p>
          These Terms of Service govern your use of the Sorrsha Medipharma website and services. By accessing or using our services, you agree to be bound by these terms.
        </p>

        <h2>2. Use of Services</h2>
        <p>You agree to use our services only for lawful purposes and in accordance with these Terms.</p>
        <p>You agree not to:</p>
        <ul>
          <li>Use our services in any way that violates any applicable law</li>
          <li>Engage in any conduct that restricts or inhibits anyone's use of our services</li>
          <li>Attempt to gain unauthorized access to any portion of our services</li>
          <li>Introduce any viruses or other malicious code</li>
        </ul>

        <h2>3. Intellectual Property</h2>
        <p>
          The Service and its original content, features, and functionality are and will remain the exclusive property of Sorrsha Medipharma and its licensors.
        </p>

        <h2>4. Limitation of Liability</h2>
        <p>
          In no event shall Sorrsha Medipharma be liable for any indirect, incidental, special, consequential or punitive damages resulting from your access to or use of, or inability to access or use, the services.
        </p>

        <h2>5. Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which Sorrsha Medipharma is established, without regard to its conflict of law provisions.
        </p>

        <h2>6. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. We will provide notice of any changes by updating the "Last updated" date.
        </p>

        <h2>7. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at legal@sorrshamed.com
        </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
