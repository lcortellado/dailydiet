import { Container, Content } from "./styles";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import React from "react";
import { ScheduleCard } from "@components/ScheduleCard";

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
      <Button type="PRIMARY" label="Nova refeição" iconName="Plus" isShowIcon />
      <ScheduleCard type="SECONDARY" time="20:00" title="Holaa" weight="fill" />
    </Container>
  );
};

export default Home;
