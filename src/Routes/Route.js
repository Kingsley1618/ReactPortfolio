import Login from "../screens/authentication/signnup/Login";
import Dashboard from "../main/Dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
import SignIn from "../screens/authentication/signin/signin";
function Routing() {
  return (
    <div className="Routes">
      <Routes>
        <Route path="/sign" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}
export default Routing;
