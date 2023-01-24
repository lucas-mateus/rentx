import React from "react";
import { StatusBar } from "react-native";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Container, Header, CarImageSlider } from "./styles";
export function CarDetails() {
  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <Header>
        <BackButton onPress={() => {}} />
      </Header>
      <CarImageSlider>
        <ImageSlider
          imagesUrl={[
            "https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png",
            "https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png",
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gratispng.com%2Fbaixar%2Fporsche.html&psig=AOvVaw3vRBrgkdegQq-VypDLHLr2&ust=1674684907320000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJCms8md4fwCFQAAAAAdAAAAABAJ",
          ]}
        />
      </CarImageSlider>
    </Container>
  );
}
