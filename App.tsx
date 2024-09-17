import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito-sans";

import { ActivityIndicator } from "react-native";
import Home from "@screens/Home";
import { ThemeProvider } from "styled-components";
import theme from "./src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });
  return;
  <ThemeProvider theme={theme}>
    {fontsLoaded ? <Home /> : <ActivityIndicator />}
  </ThemeProvider>;
}
