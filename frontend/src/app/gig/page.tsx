'use client'
import Layout from "@/components/pagelayout.tsx/page-layout";
import GigCardGrid from "@/components/gig_card_grid/gig_card_grid";

export default function Home() {
  return (
    <Layout>
    <GigCardGrid/>
    </Layout>
  );
}
