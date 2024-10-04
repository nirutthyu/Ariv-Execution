import { useState } from "react";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <>
      <div className="navBar">
        <button className="navButton">
          <i className="bi bi-house"></i>
          <span>Home</span>
        </button>

        {/* Services with Dropdown */}
        <div className="navButton" style={{ position: 'relative' }}>
          <button 
            className="servicesButton"
            onClick={toggleDropdown}>
            <i className="bi bi-pc-display-horizontal"></i>
            <span>Services</span>
            <i className="bi bi-chevron-down"></i>
          </button>
          {showDropdown && (
            <div className="dropdownMenu">
              <button className="navButton w-100" >IT Services</button>
              <button className="navButton w-100">Creative Services</button>
             
            </div>
          )}
        </div>

        <button className="navButton">
          <i className="bi bi-buildings"></i>
          <span>About us</span>
        </button>

        <button className="navButton">
          <i className="bi bi-telephone-outbound"></i>
          <span>Contact</span>
        </button>
      </div>

      {/* Optional CSS */}
      <style>{`
        .navBar {
          display: flex;
        }
        .navButton {
          position: relative;
          margin-right: 20px;
        }
        .servicesButton {
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .dropdownMenu {
          position: absolute;
          background-color: #fff;
          border: 1px solid #ddd;
          padding: 10px;
          top: 100%;
          left: 0;
          display: flex;
          flex-direction: column;
          z-index: 1000;
          box-shadow:5px 5px 10px;
          border-radius:5px;
        }
        .dropdownItem {
          background: none;
          border: none;
          padding: 5px;
          cursor: pointer;
          text-align: left;
          white-space: nowrap;
        }
      `}</style>

    </>
  );
}
