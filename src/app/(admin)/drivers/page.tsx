// app/(admin)/drivers/page.tsx
import DriverPage from "./DriversPage";

export const metadata = {
  title: "Drivers | Admin Dashboard",
  description: "Manage and view all  druvers in the system",
};

export default function DriverPageEntry() {
  return <DriverPage />;
}
 