import { createContext, ReactNode, useContext, useState } from 'react';

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type cartItem = {
  id: number;
  quantity: number;
};

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseItemQuantity: (id: number) => void;
  decreaseItemQuantity: (id: number) => void;
  removeItem: (id: number) => void;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItem, setCartItem] = useState<cartItem[]>([]);

  function getItemQuantity(id: number) {
    return cartItem.find((item) => item.id === id)?.quantity ?? 0;
  }

  return (
    <ShoppingCartContext.Provider value={{ getItemQuantity }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
