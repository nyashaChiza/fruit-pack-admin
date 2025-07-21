"use client";
import React from "react";
import Badge from "../ui/badge/Badge";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  BoxIconLine,
  GroupIcon
} from "@/icons";

type Props = {
  usersCount: number;
  ordersCount: number;
  productsCount: number;
  driversCount: number;
};

export const EcommerceMetrics = ({
  usersCount,
  ordersCount,
  productsCount,
  driversCount,
}: Props) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
      {/* Customers */}
      <MetricCard
        label="Customers"
        count={usersCount}
        icon={<GroupIcon className="text-gray-800 size-6 dark:text-white/90" />}
        badgeType="success"
        badgeValue="11.01%"
      />

      {/* Orders */}
      <MetricCard
        label="Orders"
        count={ordersCount}
        icon={<BoxIconLine className="text-gray-800 dark:text-white/90" />}
        badgeType="error"
        badgeValue="9.05%"
      />

      {/* Products */}
      <MetricCard
        label="Products"
        count={productsCount}
        icon={<BoxIconLine className="text-gray-800 dark:text-white/90" />}
        badgeType="error"
        badgeValue="9.05%"
      />

      {/* Drivers */}
      <MetricCard
        label="Drivers"
        count={driversCount}
        icon={<BoxIconLine className="text-gray-800 dark:text-white/90" />}
        badgeType="error"
        badgeValue="9.05%"
      />
    </div>
  );
};

type MetricCardProps = {
  label: string;
  count: number;
  icon: React.ReactNode;
  badgeType: "success" | "error";
  badgeValue: string;
};

const MetricCard = ({ label, count, badgeType, badgeValue }: MetricCardProps) => (
  <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
    <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
        <BoxIconLine className="text-gray-800 dark:text-white/90" />
    </div>

    <div className="flex items-end justify-between mt-5">
      <div>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {label}
        </span>
        <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
          {count.toLocaleString()}
        </h4>
      </div>

      <Badge color={badgeType}>
        {badgeType === "success" ? <ArrowUpIcon /> : <ArrowDownIcon />}
        {badgeValue}
      </Badge>
    </div>
  </div>
);
