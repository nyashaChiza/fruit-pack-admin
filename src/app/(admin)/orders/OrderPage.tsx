"use client";

import React, { useEffect, useState } from "react";
import { api } from "@/lib/api";
import RecentOrders from "@/components/orders/OrdersTable";
import AssignOrderDriverModal from "@/components/orders/AssignOrderDriverModal";
import {UpdateOrderStatusModal} from "@/components/orders/UpdateOrderStatusModal";
type Order = {
  id: string | number;
  customer_name: string;
  delivery_status: string;
  payment_status: string;
  payment_method: string;
  total: string | number;
};
export default function OrderPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedOrderId, setSelectedOrderId] = useState<number | null>(null);
  const [showAssignDriverModal, setShowAssignDriverModal] = useState(false);
  const [showUpdateStatusModal, setShowUpdateStatusModal] = useState(false);

  const fetchOrders = () => {
    setLoading(true);
    api
      .get<Order[]>("/orders")
      .then(setOrders)
      .catch((err) => console.error("Fetch error", err))
      .finally(() => setLoading(false));
  };

  useEffect(fetchOrders, []);

  if (loading) return <p className="p-6 text-gray-500">Loading orders...</p>;

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex justify-between items-center mb-4">
      <h1 className="text-xl font-bold text-gray-800 dark:text-white/90">
        Orders
      </h1>
      </div>

      <RecentOrders
      orders={orders}
      onAssignDriver={(orderId) => {
        setSelectedOrderId(orderId);
        setShowAssignDriverModal(true);
      }}
      onUpdateStatus={(orderId) => {
        setSelectedOrderId(orderId);
        setShowUpdateStatusModal(true);
      }}
      />

      <AssignOrderDriverModal
      orderId={selectedOrderId!}
      isOpen={showAssignDriverModal}
      onClose={() => setShowAssignDriverModal(false)}
      onSuccess={fetchOrders} 
      />

      <UpdateOrderStatusModal
      orderId={selectedOrderId!}
      isOpen={showUpdateStatusModal}
      onClose={() => setShowUpdateStatusModal(false)}
      onSuccess={fetchOrders}
      />
    </div>
  );
}
