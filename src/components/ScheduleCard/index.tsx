import {
  Container,
  StatusContainer,
  Time,
  TimeContainer,
  Title,
  TitleContainer,
} from "./styles";

import { IconComponent } from "@components/IconComponent";
import { IconWeight } from "phosphor-react-native";
import { TypeStyleProps } from "@components/IconComponent/styles";

type Props = {
  type?: TypeStyleProps;
  time: string;
  title: string;
  weight?: IconWeight;
};

export function ScheduleCard({ type, time, title, weight }: Props) {
  return (
    <Container>
      <TimeContainer>
        <Time>{time}</Time>
      </TimeContainer>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <StatusContainer>
        <IconComponent iconName="Circle" type={type} iconWeight={weight} />
      </StatusContainer>
    </Container>
  );
}
