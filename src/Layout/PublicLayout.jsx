import Footer from "../Component/Footer/Footer";
import Navbar  from "../Component/Navbar/Navbar";
import { Outlet } from 'react-router-dom'; 

function PublicLayout() {
  return (
    <div>
        <Navbar />
        <main className="">
        {/* The Outlet component from react-router-dom acts as a placeholder. */}
        {/* It renders the child route's element. */}
        <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default PublicLayout