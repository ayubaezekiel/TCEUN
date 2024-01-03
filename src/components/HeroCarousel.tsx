import { BackgroundImage, Button, Center, Paper } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import classes from "../assets/css/CardsCarousel.module.css";
import img1 from "../assets/images/slide-1.jpg";
import img2 from "../assets/images/slide-2.jpg";
import img3 from "../assets/images/slide-3.jpg";
import img4 from "../assets/images/slide-4.jpg";

const images = [img1, img2, img3, img4];

export function HeroCarousel() {
  const slides = images.map((image) => (
    <Carousel.Slide key={image}>
      <BackgroundImage src={image} radius="sm" h={400} className="filter">
        <Center p="md">
          <div className="p-3 bg-slate-50/60 mt-8 md:mt-16 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold flex justify-center items-center text-center">
              Welcome to TETFund Centre of Excellence in Urology and
              Nephrology(TCE-UN)
            </span>
            <p className="text-center mt-4">
              Institute of Urology and Nephrology, Usmanu Danfodio University,
              Sokoto, Nigeria
            </p>

            <Button mt={20}>Read More</Button>
          </div>
        </Center>
      </BackgroundImage>
    </Carousel.Slide>
  ));

  return (
    <div>
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
    </div>
  );
}
