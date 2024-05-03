import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/HomePage";
import Cards from "./pages/cards/CardsPage";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-row w-full">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cards" element={<Cards />} />
          {/* <Route path="/payments" element={<Payments />} />
        <Route path="/credit" element={<Credit />} />
        <Route path="/settings" element={<Settings />} />  */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
