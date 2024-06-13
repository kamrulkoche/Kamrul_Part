import Image from "next/image";
import MoneyTransferHome from "./components/MoneyTransfer/MoneyTransferHome/MoneyTransferHome";
import Instructional from "./components/Instructional/Instructional";
import Footer from "./components/Footer/Footer";
// import MenuItems from "./components/NavBar/MenuItems/MenuItems";


export default function Home() {
  return (
    <>
      <div className="font-Outfit">

        <MoneyTransferHome></MoneyTransferHome>

        <Instructional />

        <Footer></Footer>

      </div>

    </>
  );
}
