// app/(admin)/orders/page.tsx
import CategoryPage from "./OrderPage";

export const metadata = {
  title: "Orders | Admin Dashboard",
  description: "Manage and view all orders in the system",
};

export default function CategoryPageEntry() {
  return <CategoryPage />;
}
 