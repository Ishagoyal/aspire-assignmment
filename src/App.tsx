import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/HomePage";
import Cards from "./pages/cards/CardsPage";
import Payments from "./pages/payments/PaymentsPage";
import Credit from "./pages/credit/CreditPage";
import Settings from "./pages/settings/SettingsPage";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/credit" element={<Credit />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
