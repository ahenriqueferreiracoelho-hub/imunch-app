import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { StoreProvider } from './contexts/StoreContext';
import { Header } from './components/layout/Header';
import { CartSidebar } from './components/layout/CartSidebar';
import { Home } from './pages/Home';
import { RestaurantDetail } from './pages/RestaurantDetail';
import { Checkout } from './pages/Checkout';
import { Orders } from './pages/Orders';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <StoreProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-background font-sans text-text-main selection:bg-primary-100">
          <Header />
          <CartSidebar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/restaurant/:id" element={<RestaurantDetail />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </main>
        </div>
      </HashRouter>
    </StoreProvider>
  );
};

export default App;