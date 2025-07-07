"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import api from "@/lib/api";
import { getToken } from "@/lib/auth";

interface driver {
  id: number;
  vehicle_number: string;
  is_active: boolean;
  status: string;
  user_id: string;
  longitude: number | null;
  latitude: number | null;
  created: string;
}

export default function DriversIndex() {
  const [drivers, setDrivers] = useState<driver[]>([]);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const savedToken = getToken();
    if (savedToken) setToken(savedToken);
  }, []);

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        if (!token) return;
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const res = await api.get("/drivers/");
        setDrivers(res.data);
      } catch (err) {
        console.error("Failed to fetch drivers:", err);
      }
    };

    if (token) fetchDrivers();
  }, [token]);

  return (
    <div className="p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Drivers</h1>
        <Button disabled>Add New Driver</Button> {/* drivers are created via customer checkout */}
      </div>

      <Card>
        <CardContent className="overflow-x-auto p-4">
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">#</th>
                <th className="px-4 py-2 text-left">Vehicle Number</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">User</th>
                <th className="px-4 py-2 text-left">Latitude</th>
                <th className="px-4 py-2 text-left">Longitude</th>
                
              </tr>
            </thead>
            <tbody>
              {drivers.length > 0 ? (
                drivers.map((driver, index) => (
                  <tr key={driver.id} className="bdriver-b">
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{driver.vehicle_number}</td>
                    <td className="px-4 py-2">{driver.status}</td>
                    <td className="px-4 py-2">R {driver.user_id}</td>
                    <td className="px-4 py-2">{driver.latitude}</td>
                    <td className="px-4 py-2">{driver.longitude}</td>
                    <td className="px-4 py-2">
                      {new Date(driver.created).toLocaleDateString()}
                    </td>
                    
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="text-center py-4 text-gray-500">
                    No drivers found.
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
