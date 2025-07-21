// app/(admin)/dashboard/page
"use client";

import { useEffect, useState } from "react";
import { EcommerceMetrics } from "@/components/ecommerce/EcommerceMetrics";
import RecentOrders from "@/components/ecommerce/RecentOrders";
import { api } from "@/lib/api";


type Product = {
  id: number ;
  name: string;
  unit: string;
  price: number;
  stock: number;
};

type Order = {
  id: string | number;
  customer_name: string;
  delivery_status: string;
  payment_status: string;
  payment_method: string;
  total: string | number;
};
type Driver = {
  id: number | string;
  vehicle_number: string;
  user_id: string;
  status: number;
  longitude: number;
  latitude: number;
};
type User = {
  id: number | string;
  name: string;
  email: string;
  role: string;
  status: string;
};

const fetchUsers = (): Promise<User[]> => api.get("/users");
const fetchProducts = (): Promise<Product[]> => api.get("/products");
const fetchOrders = (): Promise<Order[]> => api.get("/orders");
const fetchDrivers = (): Promise<Driver[]> => api.get("/drivers");

export default function Ecommerce() {
  const [users, setUsers] = useState<User[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        const [u, p, o, d] = await Promise.all([
          fetchUsers(),
          fetchProducts(),
          fetchOrders(),
          fetchDrivers(),
        ]);
        setUsers(u);
        setProducts(p);
        setOrders(o);
        setDrivers(d);
      } catch (err) {
        console.error("Failed to load dashboard data", err);
      } finally {
        setLoading(false);
      }
    };

    loadDashboardData();
  }, []);

  if (loading) return <p className="p-6 text-gray-500">Loading dashboard...</p>;

  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12">
        <EcommerceMetrics
          usersCount={users.length}
          productsCount={products.length}
          ordersCount={orders.length}
          driversCount={drivers.length}
        />
      </div>
      {/* <div className="col-span-12 xl:col-span-12">
        <MonthlySalesChart orders={orders} />
      </div> */}
      <div className="col-span-12 xl:col-span-12">
        <RecentOrders orders={orders.slice(0, 5)} />
      </div>
    </div>
  );
}
