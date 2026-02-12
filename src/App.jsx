import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";
import UserDetails from "./pages/UserDetails";
import About from "./pages/About";

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />

          <Route path="users" element={<Users />} />

          <Route path="add" element={<AddUser />} />

          <Route path="users/:id" element={<UserDetails />} />

          <Route path="about" element={<About />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
