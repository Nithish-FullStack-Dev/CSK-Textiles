import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getProductsByCategory } from "@/data/products";
import shirtingHero from "@/assets/shirting-hero.jpg";

const CollectionShirting = () => {
  const products = getProductsByCategory('shirting');

  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section 
          className="py-20 bg-gradient-to-b from-muted to-background relative"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.95)), url(${shirtingHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                Fine Shirting Collection
              </h1>
              <p className="text-lg text-muted-foreground">
                Premium cotton, oxford, and linen blends for everyday elegance and formal occasions
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden border-border hover:shadow-lg transition-shadow">
                  <div className="aspect-square bg-muted relative">
                    {product.isNew && (
                      <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
                        New
                      </Badge>
                    )}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Fabric:</span>
                        <span className="font-medium">{product.fabric}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Colors:</span>
                        <span className="font-medium">{product.colors.join(', ')}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-2xl font-bold text-primary">
                        ₹{product.price.toLocaleString()}
                      </span>
                      <span className="text-xs text-muted-foreground">per meter</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-center mb-8">
                Perfect Shirts Start Here
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="font-display font-semibold text-lg mb-2">Fine Weaves</h3>
                  <p className="text-sm text-muted-foreground">
                    Egyptian cotton and premium oxford fabrics
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-display font-semibold text-lg mb-2">Versatile Options</h3>
                  <p className="text-sm text-muted-foreground">
                    From formal whites to casual linen blends
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-display font-semibold text-lg mb-2">Perfect Fit</h3>
                  <p className="text-sm text-muted-foreground">
                    Guidance for collar styles and cuff designs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CollectionShirting;
