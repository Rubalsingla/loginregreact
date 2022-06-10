import { BrowserRouter , Routes,Route} from "react-router-dom";
import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import LoginReg from "./components/pages/auth/LoginReg";
import Register from "./components/pages/auth/Register";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<LoginReg />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
