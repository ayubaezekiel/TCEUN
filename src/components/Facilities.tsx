import { Carousel } from "@mantine/carousel";
import c1 from "../assets/images/c1.jpg";
import c2 from "../assets/images/c2.png";
import features from "../assets/images/features.jpg";

import gallery6 from "../assets/images/gallery-7.jpg";

import gallery87 from "../assets/images/gallery-13.jpg";

import gallery74 from "../assets/images/gallery-31.jpg";

import gallery22 from "../assets/images/gallery-33.jpg";

import { Image, em } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const IMAGES = [c1, c2, features, gallery74, gallery87, gallery22, gallery6];

export function Facility() {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

  return (
    <Carousel
      height={400}
      slideSize={isMobile ? "100%" : "33.3333%"}
      slideGap="md"
      loop
      align="start"
      slidesToScroll={isMobile ? 1 : 3}
      mb={10}
    >
      {IMAGES.map((i) => (
        <Carousel.Slide>
          <Image h={500} w={500} src={i} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
