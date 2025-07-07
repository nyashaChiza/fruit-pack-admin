import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function OrdersIndex() {
  return (
    <div className="p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Orders</h1>
        <Button>Add New Order</Button>
      </div>

      <Card>
        <CardContent className="overflow-x-auto p-4">
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">#</th>
                <th className="px-4 py-2 text-left">Customer</th>
                <th className="px-4 py-2 text-left">Total</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Created</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Placeholder row */}
              <tr>
                <td className="px-4 py-2">1</td>
                <td className="px-4 py-2">John Doe</td>
                <td className="px-4 py-2">R 150.00</td>
                <td className="px-4 py-2">Pending</td>
                <td className="px-4 py-2">2025-07-05</td>
                <td className="px-4 py-2">
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">Details</Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
