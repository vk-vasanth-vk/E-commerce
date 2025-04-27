import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routeConfig } from './routes/config';
import { MainLayout, SecondaryLayout, AuthLayout } from './layouts';
import ProtectedRoute from './components/ProtectedRoute';

const layouts = {
  main: MainLayout,
  secondary: SecondaryLayout,
  auth: AuthLayout
};

function App() {
  return (
    <Router>
      <Routes>
        {Object.values(routeConfig).flat().map(({ path, component: Component, layout, protected: isProtected }) => {
          const Layout = layouts[layout as keyof typeof layouts];
          
          return (
            <Route
              key={path}
              path={path}
              element={
                <Layout>
                  {isProtected ? (
                    <ProtectedRoute>
                      <Component />
                    </ProtectedRoute>
                  ) : (
                    <Component />
                  )}
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;