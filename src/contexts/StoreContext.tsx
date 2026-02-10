import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Product, products as defaultProducts } from "@/data/products";
import { Category, categories as defaultCategories } from "@/data/categories";
import { DeliveryZone, deliveryZones as defaultZones } from "@/data/deliveryZones";

export interface Order {
  id: string;
  items: { product: Product; quantity: number }[];
  customer: { firstName: string; lastName: string; phone: string };
  mode: "pickup" | "delivery";
  pickupDate?: string;
  pickupTime?: string;
  deliveryZone?: DeliveryZone;
  deliveryFee: number;
  subtotal: number;
  total: number;
  status: "pending" | "preparing" | "ready" | "completed";
  createdAt: string;
}

interface StoreContextType {
  products: Product[];
  categories: Category[];
  deliveryZones: DeliveryZone[];
  orders: Order[];
  isAdmin: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  addOrder: (order: Omit<Order, "id" | "status" | "createdAt">) => void;
  updateOrderStatus: (id: string, status: Order["status"]) => void;
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;
  addCategory: (category: Category) => void;
  updateCategory: (category: Category) => void;
  deleteCategory: (id: string) => void;
  addDeliveryZone: (zone: DeliveryZone) => void;
  updateDeliveryZone: (zone: DeliveryZone) => void;
  deleteDeliveryZone: (id: string) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

const load = <T,>(key: string, fallback: T): T => {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
};

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>(() => load("store_products", defaultProducts));
  const [categories, setCategories] = useState<Category[]>(() => load("store_categories", defaultCategories));
  const [deliveryZones, setDeliveryZones] = useState<DeliveryZone[]>(() => load("store_zones", defaultZones));
  const [orders, setOrders] = useState<Order[]>(() => load("store_orders", []));
  const [isAdmin, setIsAdmin] = useState(() => load("store_admin", false));

  useEffect(() => { localStorage.setItem("store_products", JSON.stringify(products)); }, [products]);
  useEffect(() => { localStorage.setItem("store_categories", JSON.stringify(categories)); }, [categories]);
  useEffect(() => { localStorage.setItem("store_zones", JSON.stringify(deliveryZones)); }, [deliveryZones]);
  useEffect(() => { localStorage.setItem("store_orders", JSON.stringify(orders)); }, [orders]);
  useEffect(() => { localStorage.setItem("store_admin", JSON.stringify(isAdmin)); }, [isAdmin]);

  const login = (email: string, password: string) => {
    if (email === "admin@gmail.com" && password === "admin123") {
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  const logout = () => setIsAdmin(false);

  const addOrder = (order: Omit<Order, "id" | "status" | "createdAt">) => {
    const newOrder: Order = {
      ...order,
      id: `ORD-${Date.now()}`,
      status: "pending",
      createdAt: new Date().toISOString(),
    };
    setOrders((prev) => [newOrder, ...prev]);
  };

  const updateOrderStatus = (id: string, status: Order["status"]) => {
    setOrders((prev) => prev.map((o) => (o.id === id ? { ...o, status } : o)));
  };

  const addProduct = (p: Product) => setProducts((prev) => [...prev, p]);
  const updateProduct = (p: Product) => setProducts((prev) => prev.map((x) => (x.id === p.id ? p : x)));
  const deleteProduct = (id: string) => setProducts((prev) => prev.filter((x) => x.id !== id));

  const addCategory = (c: Category) => setCategories((prev) => [...prev, c]);
  const updateCategory = (c: Category) => setCategories((prev) => prev.map((x) => (x.id === c.id ? c : x)));
  const deleteCategory = (id: string) => setCategories((prev) => prev.filter((x) => x.id !== id));

  const addDeliveryZone = (z: DeliveryZone) => setDeliveryZones((prev) => [...prev, z]);
  const updateDeliveryZone = (z: DeliveryZone) => setDeliveryZones((prev) => prev.map((x) => (x.id === z.id ? z : x)));
  const deleteDeliveryZone = (id: string) => setDeliveryZones((prev) => prev.filter((x) => x.id !== id));

  return (
    <StoreContext.Provider value={{
      products, categories, deliveryZones, orders, isAdmin,
      login, logout, addOrder, updateOrderStatus,
      addProduct, updateProduct, deleteProduct,
      addCategory, updateCategory, deleteCategory,
      addDeliveryZone, updateDeliveryZone, deleteDeliveryZone,
    }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
};
