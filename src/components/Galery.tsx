import { Carousel } from "@mantine/carousel";
import c1 from "../assets/images/c1.jpg";
import c2 from "../assets/images/c2.png";
import g1 from "../assets/images/g1.jpg";
import g2 from "../assets/images/g2.jpg";
import g3 from "../assets/images/g3.jpg";
import g4 from "../assets/images/g4.jpg";
import g6 from "../assets/images/g6.jpg";
import g7 from "../assets/images/g7.jpg";
import g8 from "../assets/images/g8.jpg";
import gallery0 from "../assets/images/gallery-1.jpg";
import gallery1 from "../assets/images/gallery-2.jpg";
import gallery2 from "../assets/images/gallery-3.jpg";
import gallery3 from "../assets/images/gallery-4.jpg";
import gallery4 from "../assets/images/gallery-5.jpg";
import gallery5 from "../assets/images/gallery-6.jpg";
import gallery6 from "../assets/images/gallery-7.jpg";
import gallery82 from "../assets/images/gallery-9.jpg";
import gallery83 from "../assets/images/gallery-10.jpg";
import gallery85 from "../assets/images/gallery-11.jpg";
import gallery86 from "../assets/images/gallery-12.jpg";
import gallery87 from "../assets/images/gallery-13.jpg";
import gallery9 from "../assets/images/gallery-14.jpg";
import gallery88 from "../assets/images/gallery-15.jpg";
import gallery84 from "../assets/images/gallery-16.jpg";
import gallery10 from "../assets/images/gallery-17.jpg";
import gallery11 from "../assets/images/gallery-18.jpg";
import gallery90 from "../assets/images/gallery-19.jpg";
import gallery12 from "../assets/images/gallery-20.jpg";
import gallery14 from "../assets/images/gallery-21.jpg";
import gallery15 from "../assets/images/gallery-22.jpg";
import gallery16 from "../assets/images/gallery-23.jpg";
import gallery17 from "../assets/images/gallery-24.jpg";
import gallery77 from "../assets/images/gallery-25.jpg";
import gallery18 from "../assets/images/gallery-26.jpg";
import gallery78 from "../assets/images/gallery-27.jpg";
import gallery79 from "../assets/images/gallery-28.jpg";
import gallery19 from "../assets/images/gallery-29.jpg";
import gallery76 from "../assets/images/gallery-30.jpg";
import gallery74 from "../assets/images/gallery-31.jpg";
import gallery21 from "../assets/images/gallery-32.jpg";
import gallery22 from "../assets/images/gallery-33.jpg";
import gallery23 from "../assets/images/gallery-34.jpg";
import gallery24 from "../assets/images/gallery-35.jpg";
import gallery25 from "../assets/images/gallery-39.jpg";
import gallery26 from "../assets/images/gallery-40.jpg";

import partner1 from "../assets/images/partner-1.png";
import partner2 from "../assets/images/partner-2.png";
import partner3 from "../assets/images/partner-3.jpg";
import partner4 from "../assets/images/partner-4(1).png";
import { Image, em } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const IMAGES = [
  c1,
  g4,
  g6,
  g3,
  g1,
  g2,
  g7,
  c2,

  g8,
  gallery0,
  gallery23,
  gallery24,
  gallery25,
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery10,
  gallery76,
  gallery77,
  gallery74,
  gallery78,
  gallery79,
  gallery90,
  gallery11,
  gallery82,
  gallery83,
  gallery84,
  gallery85,
  gallery86,
  gallery87,
  gallery88,
  gallery12,

  gallery16,
  gallery18,
  gallery17,
  gallery14,
  gallery19,
  gallery26,
  gallery22,
  gallery6,
  gallery9,
  gallery15,
  gallery21,
];
const PARTNERS = [partner1, partner2, partner3, partner4];
export function Gallery() {
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

export function Partners() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-between my-4">
      {PARTNERS.map((p) => (
        <img key={p} src={p} />
      ))}
    </div>
  );
}
