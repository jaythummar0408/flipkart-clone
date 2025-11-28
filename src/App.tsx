import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Address from "./pages/Address";
import OrderSummary from "./pages/OrderSummary";
import Payment from "./pages/Payment";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const BASE_PATH = "/best/premium/sale/deal";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Redirect root to base path */}
          <Route path="/" element={<Navigate to={`${BASE_PATH}/`} replace />} />

          <Route path={`${BASE_PATH}/`} element={<Home />} />
          <Route path={`${BASE_PATH}/product/:id`} element={<ProductDetail />} />
          <Route path={`${BASE_PATH}/address`} element={<Address />} />
          <Route path={`${BASE_PATH}/order-summary`} element={<OrderSummary />} />
          <Route path={`${BASE_PATH}/payment`} element={<Payment />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
