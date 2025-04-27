import { lazy } from 'react';

// Lazy load components
const Home = lazy(() => import('@/components/Home'));
const Electronics = lazy(() => import('@/pages/categories/electronics'));
const Beauty = lazy(() => import('@/pages/categories/beauty'));
const Fashion = lazy(() => import('@/pages/categories/fashion'));
const Books = lazy(() => import('@/pages/categories/books'));
const Grocery = lazy(() => import('@/pages/categories/grocery'));
const Toys = lazy(() => import('@/pages/categories/toys'));
const HomeAppliances = lazy(() => import('@/pages/categories/home-appliances'));
const Sports = lazy(() => import('@/pages/categories/sports'));
const ProductDetails = lazy(() => import('@/pages/ProductDetails'));
const CartDetails = lazy(() => import('@/pages/CartDetails'));
const OrderDetails = lazy(() => import('@/pages/OrderDetails'));
const Checkout = lazy(() => import('@/pages/Checkout'));
const OrderConfirmation = lazy(() => import('@/pages/order-confirmation'));
const SignUp = lazy(() => import('@/pages/SignUp'));
const Login = lazy(() => import('@/pages/Login'));

export const routeConfig = {
  auth: [
    { path: '/signup', component: SignUp, layout: 'auth' },
    { path: '/login', component: Login, layout: 'auth' }
  ],
  checkout: [
    { 
      path: '/checkout', 
      component: Checkout, 
      layout: 'secondary',
      protected: true 
    },
    { 
      path: '/order-confirmation', 
      component: OrderConfirmation, 
      layout: 'secondary',
      protected: true 
    }
  ],
  categories: [
    { path: '/electronics', component: Electronics, layout: 'main' },
    { path: '/beauty', component: Beauty, layout: 'main' },
    { path: '/fashion', component: Fashion, layout: 'main' },
    { path: '/books', component: Books, layout: 'main' },
    { path: '/grocery', component: Grocery, layout: 'main' },
    { path: '/toys', component: Toys, layout: 'main' },
    { path: '/home-appliances', component: HomeAppliances, layout: 'main' },
    { path: '/sports', component: Sports, layout: 'main' }
  ],
  main: [
    { path: '/', component: Home, layout: 'main' },
    { path: '/product-details/:id', component: ProductDetails, layout: 'main' },
    { 
      path: '/cart-details', 
      component: CartDetails, 
      layout: 'main',
      protected: true 
    },
    { 
      path: '/orders', 
      component: OrderDetails, 
      layout: 'main',
      protected: true 
    }
  ]
};