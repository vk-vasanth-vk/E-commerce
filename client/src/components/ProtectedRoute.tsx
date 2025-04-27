import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { setRedirectPath } from '@/utils/redirect';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    // Save the attempted path before redirecting
    setRedirectPath(location.pathname);
    return <Navigate to="/signup" replace />;
  }

  return children;
};

export default ProtectedRoute;
