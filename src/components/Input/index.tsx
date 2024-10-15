import { Container } from "./styles";
import { TextInputProps } from "react-native";

type Props = {
  multiline?: boolean;
} & TextInputProps;

export function Input({ multiline = false, ...rest }: Props) {
  return <Container {...rest} cursorColor="#1B1D1E" multiline={multiline} />;
}
