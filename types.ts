export interface User {
  id: string;
  name: string;
  whatsapp: string;
  address: string;
  cep: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface Restaurant {
  id: string;
  name: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: number;
  image: string;
  tags: string[];
  menu: MenuItem[];
}

export interface CartItem extends MenuItem {
  quantity: number;
  restaurantId: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'preparing' | 'delivering' | 'delivered';
  date: string;
  restaurantName: string;
}

export type Category = 'Todos' | 'Lanches' | 'Japonesa' | 'Pizza' | 'Saudável' | 'Sobremesa';