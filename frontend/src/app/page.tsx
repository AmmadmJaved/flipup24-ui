'use client'
import Layout from "@/components/pagelayout.tsx/page-layout";
import LandingPage from "./home/page";
import { AuthProvider } from '../context/AuthContext';
import CustomerPage from "./customer-request/customer-request";

export default function Home() {
  return (
    <AuthProvider>
      <Layout>
        <LandingPage/>
        <CustomerPage/>
      </Layout>
    </AuthProvider> 
  );
}
