import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  // ✅ Define menu items here
  const menuItems = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Industries",
      link: "/industries",
      submenu: [
        { title: "Banking", link: "/industries/banking" },
        { title: "Retail", link: "/industries/retail" },
      ],
    },
    {
      title: "Services",
      link: "/services",
      submenu: [
        { title: "Analytics", link: "/services/analytics" },
        { title: "Automation", link: "/services/automation" },
      ],
    },
    {
      title: "Technology",
      link: "/technology",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const toggleSearch = () => setSearchOpen(!isSearchOpen);

  // Breadcrumbs
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <header id="myHeader" className="header">
      <div className="innerContainer">
        <div className="flexWrap">
          {/* Mobile Menu Toggle */}
          <div className="mobile_nav">
            <div id="burgurMenu" onClick={toggleMenu}>
              <span></span>
              <span></span>
            </div>
          </div>

          {/* Logo */}
          <div className="logo_wrapper">
            <Link to="/">
              <img src="/logo192.png" alt="Logo" style={{ height: "40px" }} />
            </Link>
          </div>

          {/* Navigation */}
          <nav className={`main-menu ${isMenuOpen ? "open" : ""}`}>
            <ul className="navigation">
              {menuItems.map((item, index) => {
                const isActive =
                  item.link !== "/" &&
                  location.pathname.startsWith(item.link);
                const isHome = item.link === "/" && location.pathname === "/";

                return (
                  <li
                    key={index}
                    className={`${item.submenu ? "has-submenu" : ""} ${
                      isActive || isHome ? "active" : ""
                    }`}
                  >
                    <Link to={item.link}>{item.title}</Link>
                    {item.submenu && (
                      <ul className="submenu">
                        {item.submenu.map((sub, i) => (
                          <li key={i}>
                            <Link to={sub.link}>{sub.title}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Search Section */}
          <div className="searchHolder">
            {isSearchOpen && (
              <div className="searchItems">
                <input
                  type="text"
                  placeholder="Search..."
                  className="searchInput"
                />
              </div>
            )}
          </div>
          <div
            className="searchIcon"
            onClick={toggleSearch}
            title="Search Button"
          >
            🔍
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      {pathnames.length > 0 && (
        <div className="breadCrumbBox">
          <div className="innerContainer">
            <ul className="breadCrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                const isLast = index === pathnames.length - 1;
                return (
                  <li key={index}>
                    {isLast ? (
                      name.charAt(0).toUpperCase() + name.slice(1)
                    ) : (
                      <Link to={routeTo}>
                        {name.charAt(0).toUpperCase() + name.slice(1)}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
