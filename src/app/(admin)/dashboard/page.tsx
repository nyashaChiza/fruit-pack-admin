// app/(admin)/dashboard/Ecommerce.tsx
"use client";

import { useEffect, useState } from "react";
import { EcommerceMetrics } from "@/components/ecommerce/EcommerceMetrics";
import MonthlySalesChart from "@/components/ecommerce/MonthlySalesChart";
import RecentOrders from "@/components/ecommerce/RecentOrders";
import { api } from "@/lib/api";

const fetchUsers = () => api.get("/users");
const fetchProducts = () => api.get("/products");
const fetchOrders = () => api.get("/orders");
const fetchDrivers = () => api.get("/drivers");

export default function Ecommerce() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [drivers, setDrivers] = useState([]);
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
      <div className="col-span-12 xl:col-span-12">
        <MonthlySalesChart orders={orders} />
      </div>
      <div className="col-span-12 xl:col-span-12">
        <RecentOrders orders={orders.slice(0, 5)} />
      </div>
    </div>
  );
}
