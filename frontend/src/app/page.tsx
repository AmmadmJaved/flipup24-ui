'use client'
import Layout from "@/components/pagelayout.tsx/page-layout";
import LandingPage from "./home/page";
import { AuthProvider } from '../context/AuthContext';


export default function Home() {
  return (
    <AuthProvider>
      <Layout>
        <LandingPage/>
      </Layout>
    </AuthProvider> 
  );
}
