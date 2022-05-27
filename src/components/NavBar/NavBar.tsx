import React, { useState, useEffect, useCallback } from "react";
import Logo from "../../assets/icons/logo.png";
import "./navbar.css";

function NavBar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [transparent, setTransparent] = useState(true);
  const [active, setActive] = useState("");

  const handleScroll = useCallback(() => {
    const sectionList = document.querySelectorAll("section");
    let bottom: number;
    let top: number;
    sectionList.forEach((section) => {
      top = section.getBoundingClientRect().top;
      bottom = section.getBoundingClientRect().bottom;
      if (top <= 0 && bottom >= 0) {
        if (section.id === "home") {
          setActive("");
          setTransparent(true);
        } else {
          setTransparent(false);
          setActive(section.id);
        }
      }
    });
    const currentScrollPos = window.pageYOffset;

    setVisible(prevScrollPos > currentScrollPos);

    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos, setVisible, setPrevScrollPos, setActive, setTransparent]);

  const isOpen = (document.getElementById("nav-toggle") as HTMLInputElement)
    ?.checked;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    document.body.style.overflowY = isOpen ? "hidden" : "visible";

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, isOpen]);

  return (
    <header
      id="header-nav"
      style={{
        top: isOpen ? "0" : visible ? "0" : "-90px",
        backgroundColor: transparent ? "transparent" : "",
      }}
    >
      <a className={"logo"} href="#home">
        <img
          src={Logo}
          alt=""
          height="50px"
          width="auto"
          className="img-logo"
        />
      </a>
      <input
        type={"checkbox"}
        id={"nav-toggle"}
        className={"nav-toggle"}
      ></input>
      <nav style={{ backgroundColor: transparent ? "transparent" : "" }}>
        <ul>
          <li>
            <a className={`${active === "" ? "activeItem" : ""}`} href="#home">
              Home
            </a>
          </li>
          <li>
            <a
              className={`${active === "about" ? "activeItem" : ""}`}
              href="#about"
            >
              Nosotros
            </a>
          </li>
          <li>
            <a
              className={`${active === "carta" ? "activeItem" : ""}`}
              href="#carta"
            >
              Carta
            </a>
          </li>
          <li>
            <a
              className={`${active === "contact" ? "activeItem" : ""}`}
              href="#contact"
            >
              Contacto
            </a>
          </li>
        </ul>
      </nav>
      <label htmlFor={"nav-toggle"} className={"nav-toggle-label"}>
        <span></span>
      </label>
    </header>
  );
}

export default NavBar;
