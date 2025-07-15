// app/(admin)/products/page.tsx
import SupplierPage from "./SuppliersPage";

export const metadata = {
  title: "Products | Admin Dashboard",
  description: "Manage and view all products in the system",
};

export default function SupplierPageEntry() {
  return <SupplierPage />;
}
 