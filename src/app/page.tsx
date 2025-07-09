import SignInForm from "@/components/auth/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fruit-Pack",
  description: "Fruit-Pack Admin SignIn Page - Next.js Dashboard",
};

export default function SignIn() {
  return <SignInForm />;
}
