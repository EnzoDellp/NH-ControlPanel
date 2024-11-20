import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateAccount from "./pages/CreateAccount";
import ForgotPassword from "./pages/ForgotPassword";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Página de inicio con el formulario de login */}
        <Route path="/" element={<LoginPage />} />
        {/* Página de creación de cuenta */}
        <Route path="/create-account" element={<CreateAccount />} />
        {/* Página de recuperación de contraseña */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
