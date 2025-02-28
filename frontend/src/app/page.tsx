'use client'
import Layout from "@/components/pagelayout.tsx/page-layout";
import LandingPage from "./home/page";
import { AuthProvider } from '../context/AuthContext';
import CustomerPage from "./customer-request/customer-request";
import UsersPage from "./user/page";

export default function Home() {
  return (
      <Layout> 
        <LandingPage/>
        <CustomerPage/>
      </Layout>
  );
}
