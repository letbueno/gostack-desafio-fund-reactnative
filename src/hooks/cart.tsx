import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
  quantity: number;
}

interface CartContext {
  products: Product[];
  addToCart(item: Product): void;
  increment(id: string): void;
  decrement(id: string): void;
}

const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const storageProd = await AsyncStorage.getItem('products');

      if (storageProd) {
        setProducts([...JSON.parse(storageProd)]);
      }
    }

    loadProducts();
  }, []);

  const addToCart = useCallback(
    async product => {
      const newProducts = [...products];
      const findIndexP = newProducts.findIndex(item => item.id === product.id);

      if (findIndexP === -1) {
        newProducts.push({ ...product, quantity: 1 });
      } else {
        newProducts[findIndexP].quantity += 1;
      }
      setProducts(newProducts);
    },
    [products],
  );

  const increment = useCallback(
    async id => {
      const newProducts = [...products];
      const findIndexP = newProducts.findIndex(item => item.id === id);

      if (findIndexP === -1) {
        return;
      }

      newProducts[findIndexP].quantity += 1;

      await AsyncStorage.setItem('products', JSON.stringify(newProducts));

      setProducts(newProducts);
    },
    [products],
  );

  const decrement = useCallback(
    async id => {
      const newProducts = [...products];
      const findIndexP = newProducts.findIndex(item => item.id === id);

      if (findIndexP === -1) {
        return;
      }

      if (newProducts[findIndexP].quantity > 1) {
        newProducts[findIndexP].quantity -= 1;
      } else {
        newProducts.splice(findIndexP, 1);
      }

      await AsyncStorage.setItem('products', JSON.stringify(newProducts));
      setProducts(newProducts);
    },
    [products],
  );

  const value = React.useMemo(
    () => ({ addToCart, increment, decrement, products }),
    [products, addToCart, increment, decrement],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { CartProvider, useCart };
