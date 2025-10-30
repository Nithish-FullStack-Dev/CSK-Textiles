import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AboutPreview = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="CSK Textiles Store"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Heritage of Excellence in Rikabgunj
            </h2>
            <p className="text-muted-foreground mb-4">
              Since 1998, CSK Textiles has been synonymous with premium men's fabrics in Hyderabad's historic Rikabgunj market. What started as a vision by Chimanlal Suresh Kumar has grown into a trusted destination for executives and grooms seeking exceptional quality.
            </p>
            <p className="text-muted-foreground mb-6">
              Our expertise spans premium suiting for corporate professionals, fine shirting for daily elegance, and luxurious wedding fabrics for the most important day of your life. Every fabric tells a story of craftsmanship and tradition.
            </p>
            <Link to="/about">
              <Button variant="outline" className="group">
                Our Complete Story
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
