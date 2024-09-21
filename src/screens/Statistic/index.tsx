import {
  Container,
  Content,
  ContentRow,
  HeaderContainer,
  Title,
} from "./styles";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import React from "react";

export function Statistic() {
  return (
    <Container type="PRIMARY">
      <HeaderContainer>
        <Header showBackButton />
        <Highlight
          backgroundColor="GREEN_LIGHT"
          title="90,86%"
          subtitle="das refeições dentro da dieta"
          type="PRIMARY"
        />
      </HeaderContainer>
      <Content>
        <Title>Estatísticas gerais</Title>
        <Highlight
          backgroundColor="GREEN_LIGHT"
          title="90,86%"
          subtitle="das refeições dentro da dieta"
          type="PRIMARY"
        />
        <Highlight
          backgroundColor="GREEN_LIGHT"
          title="90,86%"
          subtitle="das refeições dentro da dieta"
          type="PRIMARY"
        />
        <ContentRow>
          <Highlight
            backgroundColor="GREEN_LIGHT"
            title="22"
            subtitle="refeições dentro da dieta"
            type="PRIMARY"
          />
          <Highlight
            backgroundColor="GREEN_LIGHT"
            title="209"
            subtitle="refeições dentro da dieta"
            type="PRIMARY"
          />
        </ContentRow>
      </Content>
    </Container>
  );
}
