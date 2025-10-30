import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="py-16 md:py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          Book Your Groom Styling Session
        </h2>
        <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
          Planning a wedding? Visit us for personalized fabric selection and expert styling advice for your special day.
        </p>
        <Link to="/contact">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
            <Calendar className="mr-2 h-5 w-5" />
            Schedule Visit
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTABanner;
