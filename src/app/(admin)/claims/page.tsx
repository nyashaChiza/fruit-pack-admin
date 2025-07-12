// app/(admin)/claims/page.tsx
import ClaimsPage from "./ClaimsPage";

export const metadata = {
  title: "Claims | Admin Dashboard",
  description: "Manage and view all order claimss in the system",
};

export default function ClaimPageEntry() {
  return <ClaimsPage />;
}
 