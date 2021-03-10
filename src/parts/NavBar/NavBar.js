import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import Button from "react-bootstrap/Button";
import Logo from "../Logo/Logo";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
const NavBar = () => {
  const { t, i18n } = useTranslation();
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Navbar expand="md" fixed="top" className="p-2 navigation">
      <Navbar.Brand as={Link} to="/">
        <Logo />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <p>{t("BANNER")}</p>
        <Nav className="d-flex align-items-center ml-auto links">
          <Nav.Item>
            <Nav.Link as={Link} to="/">
              <Button
                variant="success"
                className="text-success text-uppercase font-weight-bold bg-transparent border border-0"
              >
                <i className="fas fa-comments pr-1"></i>Let's chat
              </Button>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <DropdownButton id="dropdown-basic-button" title="Valiuta">
              <Dropdown.Item as="button">currency1</Dropdown.Item>
              <Dropdown.Item as="button">currency2</Dropdown.Item>
              <Dropdown.Item as="button">currency3</Dropdown.Item>
            </DropdownButton>
          </Nav.Item>
          <Nav.Item>
            <DropdownButton id="dropdown-basic-button" title="Kalba">
              <Dropdown.Item
                as="button"
                onClick={() => handleLanguageChange("en")}
              >
                English
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                onClick={() => handleLanguageChange("fr")}
              >
                Français
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                onClick={() => handleLanguageChange("de")}
              >
                Deutsch
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                onClick={() => handleLanguageChange("es")}
              >
                Español
              </Dropdown.Item>
            </DropdownButton>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/search">
              <Button className="font-weight-bold bg-transparent border-0">
                <i className="fas fa-search" style={{ color: "black" }}></i>
              </Button>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
