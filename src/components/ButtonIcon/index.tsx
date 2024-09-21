import { Container, Icon } from "./styles";

import { TouchableOpacityProps } from "react-native";
import { TypeStyleProps } from "@components/IconComponent/styles";
import { useNavigation } from "@react-navigation/native";

type Props = TouchableOpacityProps & {
  type: TypeStyleProps;
};

export function ButtonIcon({ type }: Props) {
  const navigation = useNavigation();
  return (
    <Container onPress={() => navigation.navigate("statistic")}>
      <Icon type={type} />
    </Container>
  );
}
