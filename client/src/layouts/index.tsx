import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import SecondaryNavbar from '@/components/SecondaryNavbar';
import Footer from '@/components/Footer';

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
  </div>
);

export const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Navbar />
    <Suspense fallback={<LoadingFallback />}>
      {children}
    </Suspense>
    <Footer />
  </>
);

export const SecondaryLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <SecondaryNavbar />
    <Suspense fallback={<LoadingFallback />}>
      {children}
    </Suspense>
  </>
);

export const AuthLayout = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<LoadingFallback />}>
    {children}
  </Suspense>
);