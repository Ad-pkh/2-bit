import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./LandingPage";
import { Login } from "./Login";
import Donate from "./pages/Donate";
import AddDonate from "./components/AddDonate";
import Signup from "./Signup";
import { OrganizationHome } from "./OrganizationHome";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/organization" element={<OrganizationHome />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/adddonate" element={<AddDonate />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
