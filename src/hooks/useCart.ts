import { useState, useEffect } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCartItems(parsedCart);
      setCartItemsCount(parsedCart.reduce((acc: number, item: CartItem) => acc + item.quantity, 0));
    }
  }, []);

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      let newItems;

      if (existingItem) {
        newItems = prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        newItems = [...prevItems, { ...item, quantity: 1 }];
      }

      localStorage.setItem('cart', JSON.stringify(newItems));
      setCartItemsCount(newItems.reduce((acc, item) => acc + item.quantity, 0));
      return newItems;
    });
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prevItems) => {
      const newItems = prevItems.filter((item) => item.id !== itemId);
      localStorage.setItem('cart', JSON.stringify(newItems));
      setCartItemsCount(newItems.reduce((acc, item) => acc + item.quantity, 0));
      return newItems;
    });
  };

  const updateQuantity = (itemId: number, quantity: number) => {
    if (quantity < 1) return;

    setCartItems((prevItems) => {
      const newItems = prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      );
      localStorage.setItem('cart', JSON.stringify(newItems));
      setCartItemsCount(newItems.reduce((acc, item) => acc + item.quantity, 0));
      return newItems;
    });
  };

  const clearCart = () => {
    setCartItems([]);
    setCartItemsCount(0);
    localStorage.removeItem('cart');
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return {
    cartItems,
    cartItemsCount,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    total,
  };
}; 