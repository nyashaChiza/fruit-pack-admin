"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import api from "@/app/lib/api";
import { getToken } from "@/app/lib/auth";

interface driver {
  id: number;
  name: string;
  icon: string;
}

export default function CategoriesIndex() {
  const [categories, setCategories] = useState<driver[]>([]);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const savedToken = getToken();
    if (savedToken) setToken(savedToken);
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        if (!token) return;
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const res = await api.get("/categories/");
        setCategories(res.data);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    };

    if (token) fetchCategories();
  }, [token]);

  return (
    <div className="p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Categories</h1>
        <Button disabled>Add New Category</Button> {/* drivers are created via customer checkout */}
      </div>

      <Card>
        <CardContent className="overflow-x-auto p-4">
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">#</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Icon</th>
                <th className="px-4 py-2 text-left">Actions</th> 
              </tr>
            </thead>
            <tbody>
              {categories.length > 0 ? (
                drivers.map((category, index) => (
                  <tr key={category.id} className="bdriver-b">
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{category.name}</td>
                    <td className="px-4 py-2">{category.icon}</td>
                    <td className="px-4 py-2">
                      <Link href={`/categories/${category.id}/edit`}>
                        <Button variant="outline" size="sm">Edit</Button>
                      </Link> 
                    
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="text-center py-4 text-gray-500">
                    No categories found.
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
