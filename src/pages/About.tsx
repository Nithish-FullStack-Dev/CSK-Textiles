import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, TrendingUp, Heart } from "lucide-react";

const About = () => {
  const offerings = [
    {
      title: "Premium Suiting",
      description: "Italian wool, merino blends, and executive fabrics for corporate professionals"
    },
    {
      title: "Fine Shirting",
      description: "Egyptian cotton, oxford weaves, and linen blends for everyday elegance"
    },
    {
      title: "Wedding & Groomwear",
      description: "Luxurious brocade, silk, and embroidered fabrics for your special day"
    },
    {
      title: "Custom Tailoring",
      description: "Expert guidance and recommendations for bespoke garments"
    }
  ];

  const timeline = [
    {
      year: "1998",
      title: "Foundation",
      description: "Chimanlal Suresh Kumar establishes CSK Textiles in Rikabgunj, Hyderabad"
    },
    {
      year: "2005",
      title: "Wedding Specialization",
      description: "Expanded into premium wedding and groomwear fabrics"
    },
    {
      year: "2015",
      title: "Executive Collection",
      description: "Launched dedicated executive suiting line for corporate professionals"
    },
    {
      year: "2023",
      title: "Trusted Legacy",
      description: "25+ years serving Hyderabad's discerning men with quality and expertise"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                Our Story
              </h1>
              <p className="text-lg text-muted-foreground">
                For over 25 years, CSK Textiles has been the cornerstone of premium men's fabrics in Hyderabad's historic Rikabgunj market.
              </p>
            </div>
          </div>
        </section>

        {/* Main Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground mb-6">
                  Founded in 1998 by Chimanlal Suresh Kumar, our journey began with a simple vision: to provide Hyderabad's men with access to the finest fabrics from around the world. What started as a modest textile shop in Patel Market has evolved into a trusted destination for executives, grooms, and anyone who values exceptional quality in their wardrobe.
                </p>
                <p className="text-muted-foreground mb-6">
                  Located in the heart of Rikabgunj, one of Hyderabad's most prestigious fabric markets, we've built our reputation on three pillars: uncompromising quality, expert knowledge, and personalized service. Every fabric in our collection is carefully curated, ensuring that whether you're selecting material for daily office wear or your wedding sherwani, you receive nothing but the best.
                </p>
                <p className="text-muted-foreground mb-6">
                  Over the decades, we've witnessed fashion evolve, trends come and go, but our commitment to quality has remained constant. We take pride in being not just fabric suppliers, but trusted advisors who understand the importance of looking your best, whether in the boardroom or on your wedding day.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
              Our Journey
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0 w-20 text-right">
                      <span className="text-2xl font-display font-bold text-primary">
                        {item.year}
                      </span>
                    </div>
                    <div className="flex-grow">
                      <Card className="border-border">
                        <CardContent className="p-6">
                          <h3 className="font-display font-semibold text-xl mb-2">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
              What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {offerings.map((offering, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-6">
                    <h3 className="font-display font-semibold text-xl mb-3 text-primary">
                      {offering.title}
                    </h3>
                    <p className="text-muted-foreground">{offering.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Award, title: "Quality First", desc: "Only premium fabrics" },
                { icon: Users, title: "Expert Guidance", desc: "Personalized advice" },
                { icon: TrendingUp, title: "Heritage", desc: "25+ years trusted" },
                { icon: Heart, title: "Customer Focus", desc: "Your satisfaction matters" }
              ].map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
