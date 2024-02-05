import { BackgroundImage, Button, Center, Paper } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import classes from "../assets/css/CardsCarousel.module.css";
import c2 from "../assets/images/c2.png";
import c1 from "../assets/images/c1.jpg";
import g4 from "../assets/images/g4.jpg";
import img1 from "../assets/images/slide-1.jpg";
import img2 from "../assets/images/slide-2.jpg";
import img3 from "../assets/images/slide-3.jpg";
import img4 from "../assets/images/slide-4.jpg";
import { Link } from "react-router-dom";

const images = [c1, g4, c2, img1, img2, img3, img4];

export function HeroCarousel() {
  const slides = images.map((image) => (
    <Carousel.Slide key={image}>
      <BackgroundImage src={image} radius="sm" h={500} className="filter">
        <Center p="md">
          <div className="p-3 bg-slate-50/60 mt-8 md:mt-36 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold flex justify-center items-center text-center">
              Welcome to TETFund Centre of Excellence in Urology and
              Nephrology(TCE-UN)
            </span>
            <p className="text-center mt-4">
              Institute of Urology and Nephrology, Usmanu Danfodio University,
              Sokoto, Nigeria
            </p>
            <Link to={"about/"}>
              <Button mt={20}>Read More</Button>
            </Link>
          </div>
        </Center>
      </BackgroundImage>
    </Carousel.Slide>
  ));

  return (
    <Paper>
      <Carousel
        withIndicators
        loop
        classNames={{
          root: classes.carousel,
          controls: classes.carouselControls,
          indicator: classes.carouselIndicator,
        }}
      >
        {slides}
      </Carousel>
    </Paper>
  );
}
