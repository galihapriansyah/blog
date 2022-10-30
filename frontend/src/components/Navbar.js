import react, {useState} from "react";
import {Link} from "react-router-dom";
import IonIcon from "@reacticons/ionicons";

const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <>
      <nav className="sticky top-0 w-screen text-center bg-blue-500 flex items-center">
        <div className="container mx-auto px-4 py-2 flex justify-between">
          <h1 className="text-white font-bold text-2xl mr-auto">Codersid</h1>
          <button className="md:hidden flex" onClick={toggleOpen}>
            <IonIcon name="menu" size="medium" className="text-white m-auto" />
          </button>
        </div>
      </nav>
      
      
      <aside className={`bg-slate-700 text-slate-700 fixed top-0 w-screen h-screen z-50 ${isOpen ? "left-0":"left-[-100%]"}`}
      >
        <div className="bg-white p-4 w-full h-screen">
          <header className="flex justify-between items-center">
            <h1 className="font-bold text-2xl">
            Menu
            </h1>
            <button type="button" onClick={toggleOpen} className="flex p-1 text-3xl rounded-full bg-slate-200 hover:bg-red-400">
              <IonIcon name="close" className="h-8 w-8 m-auto active:scale-95" />
            </button>
          </header>
          <nav className="my-4">
            <Link to="/"
              className="flex items-center gap-1 px-3 py-2 rounded-lg font-medium text-slate-800 hover:bg-slate-200 focus:ring-2 focus:ring-blue-500"
              onClick={toggleOpen}
            >
              <IonIcon name="home-outline" className="w-5 h-5" />
              Home
            </Link>

            <Link to="tutorial"
              className="flex items-center gap-1 px-3 py-2 rounded-lg font-medium text-slate-800 hover:bg-slate-200 focus:ring-2 focus:ring-blue-500"
              onClick={toggleOpen}
            >
              <IonIcon name="document-text-outline" className="w-5 h-5" />
              Tutorial
            </Link>

            <Link to="lainnya"
              className="flex items-center gap-1 px-3 py-2 rounded-lg font-medium text-slate-800 hover:bg-slate-200 focus:ring-2 focus:ring-blue-500"
              onClick={toggleOpen}
            >
              Artikel Lainnya
            </Link>
            <hr className="my-4 border-slate-400" />
          </nav>
        </div>
      </aside>
    </>
  )
}

export default Navbar;