import Image from "next/image";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";

export default function Home() {
  const activePage = "home";
  return (
    <Layout activePage={activePage}>
      <Hero />
    </Layout>
  );
}
