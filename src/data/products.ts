import productMenSuit1 from '@/assets/suities/Men/19.jpg';
import productMenSuit2 from '@/assets/suities/Men/1225.jpg';
import productMenSuit3 from '@/assets/suities/Men/1581.jpg';
import productMenSuit4 from '@/assets/suities/Men/5672.jpg';
// import productMenSuit5 from '@/assets/suities/Men/5673.jpg';
import productMenSuit6 from '@/assets/suities/Men/5851.jpg';
import productMenSuit7 from '@/assets/suities/Men/9695.jpg';
import productMenSuit8 from '@/assets/suities/Men/21981.jpg';
import productMenSuit9 from '@/assets/suities/Men/63367.jpg'
import productMenSuit10 from '@/assets/suities/Men/311562.jpg'

import productShirt1 from '/images/shirts1.jpg';
import productShirt2 from '/images/shirts2.jpg';
import productShirt3 from '/images/shirts3.jpg';
import productShirt4 from '/images/shirts4.jpg';
import productShirt5 from '/images/shirts5.jpg';
import productWedding1 from '/images/wedding-dress.png';
import productWedding2 from '/images/wedding-dress2.jpg';
import productWedding3 from '/images/wedding-dress3.jpg';
import productWedding4 from '/images/wedding-dress4.jpg';

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string[];
  isNew?: boolean;
  description: string;
  longDescription?: string;
  fabric: string;
  colors: string[];
  tags?: string[];
  style?: string;
}

export const products: Product[] = [
  // Suiting
  {
    id: 'suit-01',
    name: 'Charcoal Wedding Suit',
    category: 'suiting',
    price: 8500,
    image: [productMenSuit1, productMenSuit4, productMenSuit9, productMenSuit6],
    isNew: true,
    description: 'Elegant charcoal suit styled for weddings and formal occasions',
    fabric: 'Premium Wool Blend',
    colors: ['Charcoal'],
    tags: ['Wedding', 'Formal'],
    style: '3-piece'
  },
  {
    id: 'suit-02',
    name: 'Beige Textured Formal Blazer Set',
    category: 'suiting',
    price: 9200,
    image: [productMenSuit2, productMenSuit7, productMenSuit6, productMenSuit10],
    isNew: true,
    description: 'Sophisticated beige textured blazer with modern tailoring',
    fabric: 'Wool Blend',
    colors: ['Beige'],
    tags: ['Formal', 'Premium'],
    style: '2-piece'
  },
  {
    id: 'suit-03',
    name: 'Navy Slim Fit Designer Suit',
    category: 'suiting',
    price: 7800,
    image: [productMenSuit3, productMenSuit2, productMenSuit6, productMenSuit7],
    description: 'Sharp navy suit with modern slim fit silhouette',
    fabric: 'Premium Wool',
    colors: ['Navy Blue'],
    tags: ['Formal', 'Trending'],
    style: '2-piece'
  },
  {
    id: 'suit-04',
    name: 'Classic Black Business Suit',
    category: 'suiting',
    price: 11500,
    image: [productMenSuit4, productMenSuit7, productMenSuit3, productMenSuit1],
    description: 'Timeless black suit for corporate and formal wear',
    fabric: '100% Wool',
    colors: ['Black'],
    tags: ['Formal', 'Office Wear'],
    style: '2-piece'
  },
  {
    id: 'suit-05',
    name: 'Wine Party Wear Designer Suit',
    category: 'suiting',
    price: 6500,
    image: [productMenSuit9, productMenSuit7, productMenSuit4, productMenSuit1],
    description: 'Stylish wine-colored suit perfect for parties and events',
    fabric: 'Wool Blend',
    colors: ['Wine', 'Maroon'],
    tags: ['Party Wear', 'Trending'],
    style: '2-piece'
  },
  {
    id: 'suit-06',
    name: 'Midnight Velvet Luxury Suit',
    category: 'suiting',
    price: 13000,
    image: [productMenSuit6, productMenSuit1, productMenSuit3, productMenSuit10],
    description: 'Premium velvet suit with a rich luxurious finish',
    fabric: 'Velvet',
    colors: ['Midnight Blue'],
    tags: ['Premium', 'Party Wear'],
    style: '2-piece'
  },
  {
    id: 'suit-07',
    name: 'Checkered Grey Executive Suit',
    category: 'suiting',
    price: 7200,
    image: [productMenSuit7, productMenSuit2, productMenSuit4, productMenSuit1],
    description: 'Professional grey check suit for modern executives',
    fabric: 'Wool Blend',
    colors: ['Grey Check'],
    tags: ['Formal', 'Office Wear'],
    style: '3-piece'
  },
  {
    id: 'suit-08',
    name: 'Burgundy Wedding Statement Suit',
    category: 'suiting',
    price: 8900,
    image: [productMenSuit8, productMenSuit1, productMenSuit9, productMenSuit2],
    description: 'Bold burgundy suit designed for weddings and celebrations',
    fabric: 'Wool Blend',
    colors: ['Burgundy'],
    tags: ['Wedding', 'Party Wear'],
    style: '2-piece'
  },

  // Shirting
  {
    id: 'shirt-01',
    name: 'Sky Blue Formal Cotton Shirt',
    category: 'shirting',
    price: 2200,
    image: [productShirt1, productShirt2, productShirt3, productShirt4],
    isNew: true,
    description: 'Elegant sky blue shirt perfect for office and formal wear',
    fabric: '100% Cotton',
    colors: ['Sky Blue'],
    tags: ['Formal', 'Office Wear']
  },
  {
    id: 'shirt-02',
    name: 'Classic White Premium Shirt',
    category: 'shirting',
    price: 1800,
    image: [productShirt2, productShirt1, productShirt3, productShirt4],
    isNew: true,
    description: 'Timeless white shirt with a crisp and clean finish',
    fabric: 'Egyptian Cotton',
    colors: ['White'],
    tags: ['Formal', 'Premium']
  },
  {
    id: 'shirt-03',
    name: 'Jet Black Slim Fit Shirt',
    category: 'shirting',
    price: 2500,
    image: [productShirt3, productShirt1, productShirt2, productShirt4],
    description: 'Sharp black shirt designed for evening and formal styling',
    fabric: 'Cotton Blend',
    colors: ['Black'],
    tags: ['Party Wear', 'Formal']
  },
  {
    id: 'shirt-04',
    name: 'Navy Textured Designer Shirt',
    category: 'shirting',
    price: 1900,
    image: [productShirt4, productShirt1, productShirt2, productShirt3],
    description: 'Modern navy shirt with subtle texture for smart casual looks',
    fabric: 'Cotton Blend',
    colors: ['Navy Blue'],
    tags: ['Trending', 'Smart Casual']
  },
  {
    id: 'shirt-05',
    name: 'Emerald Green Statement Shirt',
    category: 'shirting',
    price: 2600,
    image: [productShirt5, productShirt1, productShirt2, productShirt3],
    description: 'Bold designer shirt for standout party and evening wear',
    fabric: 'Premium Cotton Blend',
    colors: ['Emerald Green'],
    tags: ['Party Wear', 'Trending', 'Designer']
  },

  // Wedding & Sherwani
  {
    id: 'wedding-01',
    name: 'Royal Cream Sherwani Set',
    category: 'wedding-sherwani',
    price: 15000,
    image: [productWedding1, productWedding2],
    isNew: true,
    description: 'Elegant cream sherwani with traditional detailing',
    fabric: 'Silk Brocade',
    colors: ['Cream', 'Gold'],
    tags: ['Wedding', 'Festival', 'Premium']
  },
  {
    id: 'wedding-02',
    name: 'Navy Indo-Western Sherwani',
    category: 'wedding-sherwani',
    price: 12500,
    image: [productWedding2, productMenSuit3],
    isNew: true,
    description: 'Modern navy blue indo-western with structured fit',
    fabric: 'Silk Blend',
    colors: ['Navy Blue'],
    tags: ['Wedding', 'Reception']
  },
  {
    id: 'wedding-03',
    name: 'Ivory Embroidered Sherwani',
    category: 'wedding-sherwani',
    price: 18000,
    image: [productWedding3, productWedding4],
    description: 'Classic ivory sherwani with fine embroidery work',
    fabric: 'Silk Embroidery',
    colors: ['Ivory', 'Off White'],
    tags: ['Wedding', 'Premium']
  },
  {
    id: 'wedding-04',
    name: 'Blush Pink Designer Sherwani',
    category: 'wedding-sherwani',
    price: 16500,
    image: [productWedding4, productMenSuit1],
    description: 'Soft blush pink sherwani with modern royal finish',
    fabric: 'Silk Blend',
    colors: ['Blush Pink'],
    tags: ['Wedding', 'Trending']
  }
];

export const getProductsByCategory = (category: string) => {
  return products.filter(p => p.category === category);
};

export const getNewArrivals = () => {
  return products.filter(p => p.isNew);
};
