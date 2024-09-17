import {
  BackButton,
  BackButtonContainer,
  BackIcon,
  BackTitle,
  Container,
  Logo,
  LogoContainer,
  LogoProfile,
  Title,
} from "./styles";

import logoImg from "@assets/forkknife.png";
import logoProfileImg from "@assets/logo-profile.png";

type Props = {
  showBackButton?: boolean;
  backTitle?: string;
};

export function Header({ showBackButton = false, backTitle }: Props) {
  return (
    <>
      {showBackButton ? (
        <BackButtonContainer>
          <BackButton>
            <BackIcon />
          </BackButton>
          {BackTitle && <BackTitle>{backTitle}</BackTitle>}
        </BackButtonContainer>
      ) : (
        <Container>
          <LogoContainer>
            <Logo source={logoImg} />
            <Title>Daily {"\n"} Diet</Title>
          </LogoContainer>
          <LogoProfile source={logoProfileImg} />
        </Container>
      )}
    </>
  );
}
