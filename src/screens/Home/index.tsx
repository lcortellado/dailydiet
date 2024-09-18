import { Container, Content } from "./styles";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import React from "react";

const Home = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Highlight
          backgroundColor="GREEN_LIGHT"
          title="90,86%"
          subtitle="das refeições dentro da dieta"
          showButtonIcon
        />
      </Content>
    </Container>
  );
};

export default Home;
