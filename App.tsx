import { ActivityIndicator, StatusBar } from "react-native";
import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito-sans";

import Home from "@screens/Home";
import { Loading } from "@components/Loading";
import { ThemeProvider } from "styled-components";
import theme from "./src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {!fontsLoaded ? <Home /> : <Loading />}
    </ThemeProvider>
  );
}
