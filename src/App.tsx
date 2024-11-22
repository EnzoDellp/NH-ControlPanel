import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateAccount from "./pages/CreateAccount";
import ForgotPassword from "./pages/ForgotPassword";
import LoginPage from "./pages/LoginPage";
import PanelMain from "./pages/PanelMain";

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
