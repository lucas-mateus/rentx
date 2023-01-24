import React from "react";
import {
  Container,
  ImagesWrapper,
  ImageIndex,
  CarWrapper,
  CarImage,
} from "./styles";

interface Props {
  imagesUrl: string[];
}
export function ImageSlider({ imagesUrl }: Props) {
  return (
    <Container>
      <ImagesWrapper>
        <ImageIndex active={true} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
      </ImagesWrapper>
      <CarWrapper>
        <CarImage source={{ uri: imagesUrl[0] }} resizeMode="contain" />
      </CarWrapper>
    </Container>
  );
}
