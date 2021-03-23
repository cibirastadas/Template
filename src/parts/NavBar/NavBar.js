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
import Hamburger from "../../assets/images/Hamburger.png";
import Layout from "../../components/Layout/Layout";
import Image from "react-bootstrap/Image";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
const NavBar = () => {
  const { t, i18n } = useTranslation();
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };
  const dropDownLanguage = [
    {
      id: 1,
      name: "English",
      language: "en",
    },
    {
      id: 2,
      name: "Français",
      language: "fr",
    },
    {
      id: 3,
      name: "Deutsch",
      language: "de",
    },
    {
      id: 4,
      name: "Español",
      language: "es",
    },
  ];
  const dropDownCurrency = [
    { id: 1, name: "currency1" },
    { id: 2, name: "currency2" },
    { id: 3, name: "currency3" },
  ];
  return (
    <Navbar expand="md" fixed="top" className="px-0 navigation ">
      <Layout>
        <Navbar.Brand as={Link} to="/">
          <Logo />
        </Navbar.Brand>
        <p>{t("BANNER")}</p>
        <Nav className="inner-nav d-flex align-items-center ml-auto links">
          <Navbar.Collapse id="basic-navbar-nav">
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
              <Dropdown id="dropdown-basic-button" title="Valiuta">
                <Dropdown.Toggle variant=" shadow-none" id="dropdown-basic">
                  Currency
                </Dropdown.Toggle>
                <DropdownMenu>
                  {dropDownCurrency.map((item) => {
                    return (
                      <Dropdown.Item key={item.id} as="button">
                        {item.name}
                      </Dropdown.Item>
                    );
                  })}
                </DropdownMenu>
              </Dropdown>
            </Nav.Item>
            <Nav.Item>
              <Dropdown>
                <Dropdown.Toggle variant=" shadow-none" id="dropdown-basic">
                  Language
                </Dropdown.Toggle>
                <DropdownMenu>
                  {dropDownLanguage.map((item) => {
                    return (
                      <Dropdown.Item
                        key={item.id}
                        as="button"
                        onClick={() => handleLanguageChange(item.language)}
                      >
                        {item.name}
                      </Dropdown.Item>
                    );
                  })}
                </DropdownMenu>
              </Dropdown>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/search">
                <Button className="font-weight-bold bg-transparent border-0">
                  <i className="fas fa-search" style={{ color: "black" }}></i>
                </Button>
              </Nav.Link>
            </Nav.Item>
          </Navbar.Collapse>
          <Nav.Item>
            <Image src={Hamburger} alt="Hamburger" className="hamburger" />
          </Nav.Item>
        </Nav>
      </Layout>
    </Navbar>
  );
};

export default NavBar;
