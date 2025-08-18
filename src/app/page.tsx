import Home from "./(full-width-pages)/(home)/index/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fruit-Pack",
  description: "Fruit-Pack Admin SignIn Page - Next.js Dashboard",
};

export default function HomePage() {
  return <Home/>;
}
