import { Card, CardContent } from "./ui/card";
import { Award, Users, Scissors, Briefcase } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Since 1998",
    description:
      "25+ years of textile expertise in Hyderabad's premium fabric market",
  },
  {
    icon: Users,
    title: "Groomwear Experts",
    description: "Specialized in wedding sherwani and formal occasion fabrics",
  },
  {
    icon: Scissors,
    title: "Custom Tailoring",
    description: "Expert guidance for bespoke suits and traditional groomwear",
  },
  {
    icon: Briefcase,
    title: "Executive Fabrics",
    description: "Premium suiting for professionals who value quality",
  },
];

const AboutPreview = () => {
  return (
    <section className="py-16 md:py-20 h-screen bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col justify-center h-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center justify-center h-full">
          <div className="w-full">
            <div className="aspect-[5/4] rounded-xl overflow-hidden shadow-xl">
              <img
                src="/images/aboutPreview.jpg"
                alt="CSK Textiles Store"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full">
            <div className="mb-4 text-left">
              <h2 className="text-2xl md:text-4xl font-display text-primary mb-4">
                Why Choose CSK Textiles
              </h2>
              <p className="text-muted-foreground text-base md:text-lg max-w-lg">
                Trusted by Hyderabad's discerning men for over two decades
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card
                    key={index}
                    className="border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 shrink-0">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-foreground mb-1">
                            {feature.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
