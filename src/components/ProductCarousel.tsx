import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/data/products";

interface ProductCarouselProps {
  products: Product[];
  title?: string;
}

const ProductCarousel = ({ products, title = "New Arrivals" }: ProductCarouselProps) => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
            {title}
          </h2>
          <p className="text-muted-foreground">Fresh additions to our premium collection</p>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6" style={{ width: 'max-content' }}>
            {products.map((product) => (
              <Card key={product.id} className="w-[280px] md:w-[320px] flex-shrink-0 overflow-hidden border-border hover:shadow-lg transition-shadow">
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
                <CardContent className="p-5">
                  <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">{product.fabric}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-primary">₹{product.price.toLocaleString()}</span>
                    <span className="text-xs text-muted-foreground">{product.colors.length} colors</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
