import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/_textLogin.scss"; //debemos importar siempre el scss en App
import CreateAccount from "./pages/CreateAccount";
import ForgotPassword from "./pages/ForgotPassword";
import PanelMain from "./pages/PanelMain";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/panel" element={<PanelMain />} />
      </Routes>
    </Router>
  );
}

export default App;
