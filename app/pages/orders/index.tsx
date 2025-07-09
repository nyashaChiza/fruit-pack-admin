"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import api from "@/app/lib/api";
import { getToken } from "@/app/lib/auth";

interface Order {
  id: number;
  customer_name: string;
  driver: number | null;
  total: number;
  delivery_status: string;
  payment_status: string;
  created: string;
}

export default function OrdersIndex() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const savedToken = getToken();
    if (savedToken) setToken(savedToken);
  }, []);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        if (!token) return;
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const res = await api.get("/orders/");
        setOrders(res.data);
      } catch (err) {
        console.error("Failed to fetch orders:", err);
      }
    };

    if (token) fetchOrders();
  }, [token]);

  return (
    <div className="p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Orders</h1>
        <Button disabled>Add New Order</Button> {/* Orders are created via customer checkout */}
      </div>

      <Card>
        <CardContent className="overflow-x-auto p-4">
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">#</th>
                <th className="px-4 py-2 text-left">Customer</th>
                <th className="px-4 py-2 text-left">Driver</th>
                <th className="px-4 py-2 text-left">Total</th>
                <th className="px-4 py-2 text-left">Delivery</th>
                <th className="px-4 py-2 text-left">Payment</th>
                <th className="px-4 py-2 text-left">Created</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders.map((order, index) => (
                  <tr key={order.id} className="border-b">
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{order.customer_name}</td>
                    <td className="px-4 py-2">{order.driver_id}</td>
                    <td className="px-4 py-2">R {order.total.toFixed(2)}</td>
                    <td className="px-4 py-2">{order.delivery_status}</td>
                    <td className="px-4 py-2">{order.payment_status}</td>
                    <td className="px-4 py-2">
                      {new Date(order.created).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-2">
                      <div className="flex gap-2">
                        <Link href={`/admin/orders/${order.id}`}>
                          <Button size="sm" variant="outline">Details</Button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="text-center py-4 text-gray-500">
                    No orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
