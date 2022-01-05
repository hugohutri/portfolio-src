import { FC } from "react";
import styled from "styled-components";
import AboutMe from "./components/AboutMe";
import Name from "./components/Name";
import ProfilePicture from "./components/ProfilePicture";
import SocialMedia from "./components/SocialMedia";
import "./styles.css";

const HomeContainer = styled.div``;

const Home: FC<{}> = () => {
  return (
    <HomeContainer>
      <Name />
      <ProfilePicture />
      <AboutMe />
      <SocialMedia />
    </HomeContainer>
  );
};

export default Home;