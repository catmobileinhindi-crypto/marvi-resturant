export interface MenuItem {
  id: string;
  name: string;
  category: 'burgers' | 'bbq' | 'pizza' | 'rolls' | 'sandwiches' | 'sides';
  categoryLabel: string;
  price: number;
  priceDisplay: string;
  description: string;
  image: string;
  badge?: string;
  rating?: number;
  prepTime?: string;
}

export interface Deal {
  id: string;
  code: string;
  title: string;
  badge: 'POPULAR' | 'BEST VALUE' | 'FAMILY DEAL';
  badgeColor: string;
  items: string[];
  price: number;
  originalPrice?: number;
  drink: string;
  serves?: string;
  image: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  details?: string;
}
