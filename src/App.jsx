import { Routes, Route, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Physics from "./components/Physics";
import Chemistry from "./components/Chemistry";
import Biology from "./components/Biology";
import Math from "./components/Math";
import Test from "./pages/TestForm";

function Layout() {
  return (
    <>
      <Topbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route index element={<Home />} />
          <Route element={<Physics />} path="physics" />
          <Route element={<Chemistry />} path="chemistry" />
          <Route element={<Biology />} path="biology" />
          <Route element={<Math />} path="math" />
          <Route element={<Test />} path="test" />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
