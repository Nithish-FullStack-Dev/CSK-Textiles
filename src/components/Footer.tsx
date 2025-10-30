import { Link } from "react-router-dom";
import { MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div>
            <h3 className="text-xl font-display font-bold text-primary mb-4">
              CSK Textiles Hyderabad
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Premium men's fabrics and tailoring since 1998. Trusted by executives and grooms across Hyderabad for quality suiting, shirting, and wedding attire.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/collections/suiting" className="text-muted-foreground hover:text-primary transition-colors">
                  Suiting Collection
                </Link>
              </li>
              <li>
                <Link to="/collections/shirting" className="text-muted-foreground hover:text-primary transition-colors">
                  Shirting Collection
                </Link>
              </li>
              <li>
                <Link to="/collections/wedding-sherwani" className="text-muted-foreground hover:text-primary transition-colors">
                  Wedding & Sherwani
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Store Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Visit Us</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>21-1-821, Patel Market,<br />Rikabgunj, Hyderabad 500002</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+91 XXX XXX XXXX</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Mon - Sat: 10:00 AM - 8:00 PM<br />Sunday: Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Chimanlal Suresh Kumar Textiles Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
