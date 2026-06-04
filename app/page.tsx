import Image from "next/image";
import Navbar from "./components/Navbat";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div >
         <Navbar />
      <h2>สวัสดี เสื้อดำเด้าหน่อย</h2>
        <p>โดย ภัทณุภา แสงแก้ว</p>  
        <Footer />
    </div>
  );
}
