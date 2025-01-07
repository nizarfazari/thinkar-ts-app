// src/layouts/MainLayout.jsx
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <div className="bg-main">
            <Navbar />
            <main className="pt-[100px]">
                <Outlet />  {/* Render halaman di sini */}
            </main>
            <Footer />
        </div>
    );
}
