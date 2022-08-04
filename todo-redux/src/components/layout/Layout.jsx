import React from "react";
import styled from "styled-components";

import { Header } from "../header/Header";
import { Form } from "../form/Form";
import { List } from "../pages/List";

const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Form />
      <List />
    </LayoutContainer>
  );
};
export { Layout };

const LayoutContainer = styled.div`
  max-width: 1200px;
  min-width: 800px;
  height: 100vh;
  margin: auto;
`;
