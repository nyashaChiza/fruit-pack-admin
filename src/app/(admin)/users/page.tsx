// app/(admin)/products/page.tsx
import UserPage from "./UsersPage";

export const metadata = {
  title: "Users | Admin Dashboard",
  description: "Manage and view all products in the system",
};

export default function UserPageEntry() {
  return <UserPage />;
}
 