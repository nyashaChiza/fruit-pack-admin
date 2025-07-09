// app/(admin)/layout.tsx
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 flex flex-col gap-6">
        <div className="text-2xl font-bold text-green-700">🍉 FruitPack Admin</div>

        <nav className="flex flex-col gap-3">
          <NavItem href="/app/pages/orders" label="📦 Orders" />
          <NavItem href="/app/pages/products" label="🍍 Products" />
          <NavItem href="/app/pages/categories" label="📂 Categories" />
          <NavItem href="/app/pages/drivers" label="🚗 Drivers" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  );
}

function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "text-gray-700 hover:text-green-700 hover:font-semibold transition-colors"
      )}
    >
      {label}
    </Link>
  );
}
