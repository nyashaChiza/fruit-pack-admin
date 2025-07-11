// app/(admin)/orders/page.tsx
import OrderPage from "./OrderPage";

export const metadata = {
  title: "Orders | Admin Dashboard",
  description: "Manage and view all orders in the system",
};

export default function OrderPageEntry() {
  return <OrderPage />;
}
 