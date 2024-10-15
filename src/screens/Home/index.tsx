import {
  AddNewItemContainer,
  Container,
  Content,
  NewItemContainer,
  SectionListContainer,
  SectionListHeader,
} from "./styles";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import React from "react";
import { ScheduleCard } from "@components/ScheduleCard";
import { SectionList } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DATA = [
  {
    title: "12.08.22",
    data: [
      {
        time: "20:00",
        food: "Pizza",
        isWithinDiet: true,
      },
      {
        time: "12:30",
        food: "Jabon",
        isWithinDiet: false,
      },
      {
        time: "09:30",
        food: "Pasta",
        isWithinDiet: true,
      },
    ],
  },
  {
    title: "11.08.22",
    data: [
      {
        time: "20:00",
        food: "Pizza",
        isWithinDiet: true,
      },
      {
        time: "12:30",
        food: "Jabon",
        isWithinDiet: false,
      },
      {
        time: "09:30",
        food: "Pasta",
        isWithinDiet: true,
      },
    ],
  },
  {
    title: "11.09.22",
    data: [
      {
        time: "20:00",
        food: "Pizza",
        isWithinDiet: true,
      },
      {
        time: "12:30",
        food: "Jabon",
        isWithinDiet: false,
      },
      {
        time: "09:30",
        food: "Pasta",
        isWithinDiet: true,
      },
    ],
  },
];

const Home = () => {
  const { navigate } = useNavigation();
  return (
    <Container>
      <Header />
      <Content>
        <Highlight
          backgroundColor="GREEN_LIGHT"
          title="90,86%"
          subtitle="das refeições dentro da dieta"
          showButtonIcon
          type="PRIMARY"
        />
      </Content>
      <AddNewItemContainer>
        <NewItemContainer>Refeições</NewItemContainer>
        <Button
          type="PRIMARY"
          label="Nova refeição"
          iconName="Plus"
          isShowIcon
          onPress={() => navigate("createSnack")}
        />
      </AddNewItemContainer>

      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => index + item.food}
        renderItem={({ item }) => {
          return (
            <ScheduleCard
              type={item.isWithinDiet ? "PRIMARY" : "SECONDARY"}
              time={item.time}
              title={item.food}
              weight="fill"
            />
          );
        }}
        renderSectionHeader={({ section: { title } }) => (
          <SectionListContainer>
            <SectionListHeader>{title}</SectionListHeader>
          </SectionListContainer>
        )}
        scrollEnabled={false}
      />
    </Container>
  );
};

export default Home;
