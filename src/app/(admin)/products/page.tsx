// app/(admin)/products/page.tsx
import ProductsPage from "./ProductsPage";

export const metadata = {
  title: "Products | Admin Dashboard",
  description: "Manage and view all products in the system",
};

export default function ProductsPageEntry() {
  return <ProductsPage />;
}
 