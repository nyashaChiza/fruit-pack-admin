// app/(admin)/category/page.tsx
import CategoryPage from "./CategoryPage";

export const metadata = {
  title: "Category | Admin Dashboard",
  description: "Manage and view all categories in the system",
};

export default function CategoryPageEntry() {
  return <CategoryPage />;
}
 