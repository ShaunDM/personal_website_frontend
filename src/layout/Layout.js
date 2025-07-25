import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import Footer from "./Footer";
import Header from "./Header";
import loadMultipleFiles from "../util/loadMultipleFiles";

function Layout() {
  //index is causing rerender need to fix.
  const { pathname } = window.location;
  const [index, setIndex] = useState(0);
  const handleSelectIndex = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const assets = loadMultipleFiles(pathname);

  return (
    <Container fluid>
      <Row>
        <Header index={index} handleSelectIndex={handleSelectIndex} />
      </Row>
      <Row>
        <Outlet context={[assets, index, handleSelectIndex]} />
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
}

export default Layout;
