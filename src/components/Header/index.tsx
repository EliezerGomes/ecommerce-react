import "./index.css";
import { IoCartOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";

export function Header() {
  return (
    <div className="header-container">
      <div className="header-1">
        <h2 className="title-header">React Marketplace</h2>
      </div>

      <div className="search-component">
        <IoIosSearch className="search" />
        <input type="text" placeholder="Buscar..." />
      </div>

      <div className="header-option">
        <button>
          <IoCartOutline className="option" />
        </button>

        <button>
          <LuUser className="option" />
        </button>
      </div>
    </div>
  );
}
