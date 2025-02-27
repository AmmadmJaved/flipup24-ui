import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProtectedPage = (WrappedComponent: React.FC) => {
  return (props: any) => {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!user) {
        router.push("/login"); // Redirect to login if not authenticated
      }
    }, [user, router]);

    if (!user) {
      return <div>Loading...</div>; // Show loading while checking auth
    }

    return <WrappedComponent {...props} />;
  };
};

export default ProtectedPage;
