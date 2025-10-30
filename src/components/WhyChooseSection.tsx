import { Award, Users, Scissors, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Award,
    title: "Since 1998",
    description: "25+ years of textile expertise in Hyderabad's premium fabric market"
  },
  {
    icon: Users,
    title: "Groomwear Experts",
    description: "Specialized in wedding sherwani and formal occasion fabrics"
  },
  {
    icon: Scissors,
    title: "Custom Tailoring",
    description: "Expert guidance for bespoke suits and traditional groomwear"
  },
  {
    icon: Briefcase,
    title: "Executive Fabrics",
    description: "Premium suiting for professionals who value quality"
  }
];

const WhyChooseSection = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Why Choose CSK Textiles
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by Hyderabad's discerning men for over two decades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-border hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
