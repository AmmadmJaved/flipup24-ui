// pages/protected.tsx
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ProtectedPage: React.FC = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login'); // Redirect to login if not logged in
    }
  }, [user, router]);

  if (!user) {
    return <div>Loading...</div>; // Display loading state while checking login status
  }

  return (
    <div>
      <h1>Protected Page</h1>
      <p>This page is only accessible to logged-in users.</p>
    </div>
  );
};

export default ProtectedPage;
