import {
  Container,
  Content,
  DateContent,
  DateLabel,
  DateTimeContent,
  HeaderContainer,
  InputDateContainer,
  InputLabel,
} from "./styles";
import { formatDate, formatTime } from "@utils/utils";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "@components/Button";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { SNACK_LIST } from "@storage/storageConfig";
import { SnackProps } from "@interfaces/interface";
import { snackCreate } from "@storage/snacksCreate";
import { snackGetAll } from "@storage/snacksGetAll";
import { useState } from "react";

export function CreateSnack() {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<Date>(new Date());
  const [time, setTime] = useState<Date>(new Date());
  const [isDiet, setIsDiet] = useState<boolean | null>(null);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [showTimePicker, setShowTimePicker] = useState<boolean>(false);

  const handleSaveNewSnack = async () => {
    try {
      const newSnack: SnackProps = {
        id: new Date().toISOString(),
        name,
        description,
        date: formatDate(date),
        time: formatTime(time),
        isDiet,
      };

      snackCreate(newSnack);
    } catch (e) {
      console.error("Error al guardar la entrada:", e);
    }
  };

  return (
    <Container>
      <HeaderContainer>
        <Header backTitle="Nova refeição" showBackButton />
      </HeaderContainer>
      <Content>
        <InputLabel>Nome</InputLabel>
        <Input />
        <InputLabel>Descrição</InputLabel>
        <Input multiline />
        <DateContent>
          <InputDateContainer>
            <InputLabel>Data</InputLabel>
            <DateTimeContent onPress={() => setShowDatePicker(true)}>
              <DateLabel>{formatDate(date)}</DateLabel>
            </DateTimeContent>
            {showDatePicker && (
              <DateTimePicker
                value={date}
                mode="date"
                display="default"
                onChange={(event, selectedDate) => {
                  setShowDatePicker(false);
                  if (selectedDate) {
                    setDate(selectedDate);
                  }
                }}
              />
            )}
          </InputDateContainer>

          <InputDateContainer>
            <InputLabel>Hora</InputLabel>
            <DateTimeContent onPress={() => setShowTimePicker(true)}>
              <DateLabel>{formatTime(time)}</DateLabel>
            </DateTimeContent>
            {showTimePicker && (
              <DateTimePicker
                value={time}
                mode="time"
                display="spinner"
                onChange={(event, selectedTime) => {
                  setShowTimePicker(false);
                  if (selectedTime) {
                    setTime(selectedTime);
                  }
                }}
              />
            )}
          </InputDateContainer>
        </DateContent>
        <InputLabel>Esta dentro de dieta?</InputLabel>
        <DateContent>
          <Button
            label="Si"
            type="SUCCESS"
            iconName="Circle"
            isShowIcon
            iconWeight="fill"
            color="#1B1D1E"
          />
          <Button
            label="No"
            type="CANCEL"
            iconName="Circle"
            isShowIcon
            color="#1B1D1E"
            iconWeight="fill"
          />
        </DateContent>
      </Content>

      <Button
        type="PRIMARY"
        label="Nova refeição"
        iconName="Plus"
        isShowIcon
        onPress={() => handleSaveNewSnack()}
      />
    </Container>
  );
}
