import { Carousel } from "@mantine/carousel";
import {
  BackgroundImage,
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Group,
  Paper,
  rem,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import {
  IconCalendarEvent,
  IconChevronLeft,
  IconChevronRight,
  IconClock,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

import classes from "../assets/css/CardsCarousel.module.css";

// Image imports
import c1 from "../assets/images/c1.jpg";
import c2 from "../assets/images/c2.png";
import g4 from "../assets/images/g4.jpg";
import img1 from "../assets/images/slide-1.jpg";
import img2 from "../assets/images/slide-2.jpg";
import img3 from "../assets/images/slide-3.jpg";
import img4 from "../assets/images/slide-4.jpg";

const images = [c1, g4, c2, img1, img2, img3, img4];

function HeroCarousel() {
  const theme = useMantineTheme();
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  const slides = images.map((image) => (
    <Carousel.Slide key={image}>
      <Box pos="relative" h={{ base: 400, sm: 500, md: 550 }}>
        <BackgroundImage
          src={image}
          h="100%"
          radius="md"
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            transition: "all 0.3s ease",
          }}
        />

        <Box
          className={classes.carouselContent}
          p="xl"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "2rem",
            zIndex: 2,
          }}
        >
          <Stack maw={600}>
            <Title
              order={1}
              className={classes.overlayTitle}
              c="white"
              fw={700}
              fz={{ base: "2rem", md: "2.5rem" }}
            >
              Welcome to TCE-UN
            </Title>
            <Text
              className={classes.overlayText}
              c="white"
              fz={{ base: "md", md: "lg" }}
              lh={1.6}
            >
              TETFund Centre of Excellence in Urology and Nephrology, Institute
              of Urology and Nephrology, Usmanu Danfodio University, Sokoto.
            </Text>
            <Button
              component={Link}
              to="/about"
              variant="gradient"
              gradient={{ from: "blue.7", to: "cyan.5" }}
              size="md"
              radius="xl"
              className={classes.overlayButton}
              px="xl"
              mt="md"
              fw={600}
            >
              Learn More
            </Button>
          </Stack>
        </Box>
      </Box>
    </Carousel.Slide>
  ));

  return (
    <Carousel
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      withIndicators
      loop
      slideSize="100%"
      slideGap="md"
      align="start"
      nextControlIcon={<IconChevronRight size={16} />}
      previousControlIcon={<IconChevronLeft size={16} />}
      controlsOffset="xs"
      controlSize={32}
      height={550}
      classNames={{
        root: classes.carousel,
        indicators: classes.carouselIndicators,
        indicator: classes.carouselIndicator,
        control: classes.carouselControl,
      }}
      styles={{
        indicators: {
          bottom: "1rem",
        },
        indicator: {
          width: 12,
          height: 4,
          transition: "width 250ms ease",
          backgroundColor: theme.white,
          "&[data-active]": {
            width: 40,
          },
        },
        control: {
          "&[data-inactive]": {
            opacity: 0,
            cursor: "default",
          },
        },
      }}
    >
      {slides}
    </Carousel>
  );
}

function AnnouncementCard() {
  const theme = useMantineTheme();

  return (
    <Paper
      withBorder
      radius="md"
      p="lg"
      className={classes.announcementCard}
      shadow="sm"
      h="100%"
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.white,
      }}
    >
      {/* Header - Improved styling */}
      <Group gap="xs" className={classes.announcementHeader} mb="md">
        <Box bg="blue.6" p={8} style={{ borderRadius: "50%" }}>
          <IconPhone size={rem(18)} color={theme.white} />
        </Box>
        <Title order={3} c="blue.7" fw={600}>
          Announcement
        </Title>
      </Group>

      {/* Content - Better spacing and hierarchy */}
      <div className={classes.announcementContent} style={{ flex: 1 }}>
        <Stack gap="lg">
          <Title order={4} fz="lg" lh={1.3}>
            Sokoto Alberta Monthly Kidney Transplant Seminar Series
          </Title>

          <Text size="sm" c="dimmed" fs="italic">
            Towards establishing a viable kidney transplant program.
          </Text>

          <Box py="xs">
            <Text size="sm">
              <Text span fw={600} c="dark">
                Distinguished Speaker:
              </Text>{" "}
              Philip F Halloran, MD, PhD, OC, FRSC
            </Text>
          </Box>

          <Divider variant="dashed" />

          {/* Event details with consistent styling */}
          <Stack gap="sm">
            <Group gap="md" align="center">
              <IconCalendarEvent
                size={rem(18)}
                stroke={1.5}
                color={theme.colors.blue[6]}
              />
              <Badge color="blue" variant="light" size="lg" radius="sm">
                April 25th, 2024
              </Badge>
            </Group>

            <Group gap="md" align="center">
              <IconClock
                size={rem(18)}
                stroke={1.5}
                color={theme.colors.red[6]}
              />
              <Text size="sm" fw={500} c="red.7">
                5:00 PM WAT (10:00 AM MDT)
              </Text>
            </Group>

            <Group gap="md" align="center">
              <IconMapPin
                size={rem(18)}
                stroke={1.5}
                color={theme.colors.gray[6]}
              />
              <Text size="sm" c="dimmed">
                IUN Conference Hall, UDUTH Sokoto
              </Text>
            </Group>
          </Stack>
        </Stack>
      </div>

      {/* Added CTA button */}
      <Button
        variant="light"
        color="blue"
        fullWidth
        mt="xl"
        radius="md"
        component={Link}
        to="/events"
      >
        View All Events
      </Button>
    </Paper>
  );
}

export function Hero() {
  return (
    <Box py="xl" style={{ backgroundColor: "#f8f9fa" }}>
      <Container size="xl">
        <Grid gutter={{ base: "lg", md: "xl" }}>
          <Grid.Col span={{ base: 12, md: 8 }}>
            <HeroCarousel />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <AnnouncementCard />
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
