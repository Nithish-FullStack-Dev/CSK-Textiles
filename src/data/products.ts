export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  isNew?: boolean;
  description: string;
  fabric: string;
  colors: string[];
}

export const products: Product[] = [
  // Suiting
  {
    id: 'suit-01',
    name: 'Premium Italian Wool',
    category: 'suiting',
    price: 8500,
    image: '/placeholder.svg',
    isNew: true,
    description: 'Luxurious 100% wool suiting fabric from Italy',
    fabric: '100% Wool',
    colors: ['Navy', 'Charcoal', 'Black']
  },
  {
    id: 'suit-02',
    name: 'Classic Charcoal Blend',
    category: 'suiting',
    price: 6200,
    image: '/placeholder.svg',
    isNew: true,
    description: 'Versatile wool-poly blend for executive wear',
    fabric: '70% Wool 30% Polyester',
    colors: ['Charcoal', 'Grey']
  },
  {
    id: 'suit-03',
    name: 'Midnight Blue Merino',
    category: 'suiting',
    price: 9800,
    image: '/placeholder.svg',
    description: 'Super fine merino wool in deep blue',
    fabric: '100% Merino Wool',
    colors: ['Navy', 'Midnight Blue']
  },
  {
    id: 'suit-04',
    name: 'Summer Linen Blend',
    category: 'suiting',
    price: 5500,
    image: '/placeholder.svg',
    description: 'Breathable linen-cotton blend for warm weather',
    fabric: '55% Linen 45% Cotton',
    colors: ['Beige', 'Light Grey']
  },
  
  // Shirting
  {
    id: 'shirt-01',
    name: 'Egyptian Cotton White',
    category: 'shirting',
    price: 2200,
    image: '/placeholder.svg',
    isNew: true,
    description: 'Pure Egyptian cotton for crisp formal shirts',
    fabric: '100% Egyptian Cotton',
    colors: ['White', 'Ivory']
  },
  {
    id: 'shirt-02',
    name: 'Oxford Blue',
    category: 'shirting',
    price: 1800,
    image: '/placeholder.svg',
    isNew: true,
    description: 'Classic oxford weave in sky blue',
    fabric: '100% Cotton Oxford',
    colors: ['Sky Blue', 'White']
  },
  {
    id: 'shirt-03',
    name: 'Pinpoint Dress Shirt',
    category: 'shirting',
    price: 2500,
    image: '/placeholder.svg',
    description: 'Fine pinpoint cotton for formal occasions',
    fabric: '100% Cotton',
    colors: ['White', 'Light Blue', 'Pink']
  },
  {
    id: 'shirt-04',
    name: 'Linen Summer Blend',
    category: 'shirting',
    price: 1900,
    image: '/placeholder.svg',
    description: 'Cool linen-cotton for casual elegance',
    fabric: '60% Linen 40% Cotton',
    colors: ['White', 'Beige']
  },
  
  // Wedding & Sherwani
  {
    id: 'wedding-01',
    name: 'Golden Brocade',
    category: 'wedding-sherwani',
    price: 15000,
    image: '/placeholder.svg',
    isNew: true,
    description: 'Luxurious gold brocade for wedding sherwani',
    fabric: 'Silk Brocade',
    colors: ['Gold', 'Cream']
  },
  {
    id: 'wedding-02',
    name: 'Ivory Silk Sherwani',
    category: 'wedding-sherwani',
    price: 12500,
    image: '/placeholder.svg',
    isNew: true,
    description: 'Pure silk fabric with subtle embroidery',
    fabric: '100% Silk',
    colors: ['Ivory', 'Off-White']
  },
  {
    id: 'wedding-03',
    name: 'Maroon Velvet Groomwear',
    category: 'wedding-sherwani',
    price: 18000,
    image: '/placeholder.svg',
    description: 'Rich velvet fabric for royal look',
    fabric: 'Silk Velvet',
    colors: ['Maroon', 'Wine']
  },
  {
    id: 'wedding-04',
    name: 'Champagne Embroidered',
    category: 'wedding-sherwani',
    price: 16500,
    image: '/placeholder.svg',
    description: 'Elegant champagne with gold thread work',
    fabric: 'Silk Blend',
    colors: ['Champagne', 'Gold']
  }
];

export const getProductsByCategory = (category: string) => {
  return products.filter(p => p.category === category);
};

export const getNewArrivals = () => {
  return products.filter(p => p.isNew);
};
