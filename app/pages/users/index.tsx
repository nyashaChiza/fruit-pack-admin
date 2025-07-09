"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import api from "@/app/lib/api";
import { getToken } from "@/app/lib/auth";

interface driver {
  id: number;
  full_name: string;
  is_active: boolean;
  role: string;
  email: string;
  username: string;
}

export default function UsersIndex() {
  const [Users, setUsers] = useState<driver[]>([]);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const savedToken = getToken();
    if (savedToken) setToken(savedToken);
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        if (!token) return;
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const res = await api.get("/Users/");
        setUsers(res.data);
      } catch (err) {
        console.error("Failed to fetch Users:", err);
      }
    };

    if (token) fetchUsers();
  }, [token]);

  return (
    <div className="p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Users</h1>
        <Button disabled>Add New User</Button> {/* Users are created via customer checkout */}
      </div>

      <Card>
        <CardContent className="overflow-x-auto p-4">
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">#</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Username</th>
                <th className="px-4 py-2 text-left">Role</th>
                <th className="px-4 py-2 text-left">Is Active</th>
                <th className="px-4 py-2 text-left">Email</th>
                
              </tr>
            </thead>
            <tbody>
              {Users.length > 0 ? (
                Users.map((user, index) => (
                  <tr key={user.id} className="bdriver-b">
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{user.full_name}</td>
                    <td className="px-4 py-2">{user.username}</td>
                    <td className="px-4 py-2">R {user.role}</td>
                    <td className="px-4 py-2">{user.is_active}</td>
                    <td className="px-4 py-2">{user.email}</td>
                    
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="text-center py-4 text-gray-500">
                    No Users found.
                  </td>
                </tr>
              )}

></>

            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
