{/*always visible components of the page*/}

import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {

  return (
    <div>

      <Navbar />
{/* Outlet tag renders current page*/}
      <main>
        <Outlet />
      </main>

      <Footer />

    </div>
  );
}

export default Layout;
