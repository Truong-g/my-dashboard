import "primeflex/primeflex.min.css"
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
import "@/styles/App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "@/pages/admin/LoginPage";
import PrimeReact from "primereact/api";

PrimeReact.ripple = true;
function App() {

  return (
    <Routes>
      <Route path="/admin" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
